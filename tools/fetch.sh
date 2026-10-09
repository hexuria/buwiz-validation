#!/usr/bin/env bash
# Download an Offline eBIRForms release from BIR, unpack it, and refresh
# package/, app/, manifests/<version>.json and index/forms.json.
#
# Usage:
#   tools/fetch.sh                 # latest release advertised on bir.gov.ph/ebirforms
#   tools/fetch.sh 7.9.6.1         # a specific release still hosted on bir-cdn
#   tools/fetch.sh 7.9.6.2.1 path/to/Offline_eBIRForms_Package_v7.9.6.2.1.zip
#
# Requires: curl, unzip, innoextract, python3 with pefile. No Wine/Windows.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CDN="https://bir-cdn.bir.gov.ph/BIR/pdf"
# bir.gov.ph/ebirforms is a client-rendered page; its content comes from
# this CMS dataset (page "ebirforms", list-cards dataset code 3380).
CMS="https://bir-cms-ws.bir.gov.ph/api/pub/templates/3380/datasets?per_page=3000"

for tool in curl unzip innoextract python3; do
  command -v "$tool" >/dev/null || { echo "missing: $tool" >&2; exit 1; }
done
python3 -c 'import pefile' 2>/dev/null || { echo "missing: python3 pefile (pip install pefile)" >&2; exit 1; }

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

VERSION="${1:-}"
ZIP="${2:-}"
PUBLISHED_SHA=""

if [ -z "$VERSION" ]; then
  curl -fsSL -H 'client-website-id: 2' "$CMS" -o "$WORK/cms.json"
  read -r URL PUBLISHED_SHA < <(python3 - "$WORK/cms.json" <<'EOF'
import re, sys
s = open(sys.argv[1]).read().replace('\\/', '/')
m = re.search(r'Hash Code:\s*([0-9a-f]{64})\)\\?"\s*href=\\?"(https://[^"\\]+Offline_eBIRForms_Package_v[^"\\]+\.zip)', s)
if not m:
    sys.exit("could not find package link on the BIR CMS page")
print(m.group(2), m.group(1))
EOF
)
  VERSION="$(sed -E 's/.*_v([0-9.]+)(_setup)?\.zip/\1/' <<<"$URL")"
fi

if [ -z "$ZIP" ]; then
  ZIP="$WORK/package.zip"
  for name in "Offline_eBIRForms_Package_v${VERSION}.zip" "Offline_eBIRForms_Package_v${VERSION}_setup.zip"; do
    if curl -fsSL "$CDN/$name" -o "$ZIP" 2>/dev/null; then URL="$CDN/$name"; break; fi
  done
  [ -s "$ZIP" ] || { echo "no package found for $VERSION on $CDN" >&2; exit 1; }
fi
URL="${URL:-local:$ZIP}"

echo "version: $VERSION"
unzip -q -o "$ZIP" -d "$WORK/zip"
SETUP="$(find "$WORK/zip" -iname '*.exe' | head -n1)"
SETUP_SHA="$(sha256sum "$SETUP" | cut -c1-64)"
if [ -n "$PUBLISHED_SHA" ] && [ "$PUBLISHED_SHA" != "$SETUP_SHA" ]; then
  echo "installer sha256 $SETUP_SHA does not match BIR published $PUBLISHED_SHA" >&2
  exit 1
fi

innoextract -s -d "$WORK/inno" "$SETUP" >/dev/null
APP="$WORK/inno/app"

rm -rf "$ROOT/package" "$ROOT/app"
python3 "$ROOT/tools/decode_birforms.py" "$APP/BIRForms.exe" "$ROOT/package" > "$WORK/decode.json"

# Installed files, minus the packed app (decoded above) and bundled WinSCP.
mkdir -p "$ROOT/app"
(cd "$APP" && find . -type f \
   ! -name BIRForms.exe ! -name 'WinSCP*' -print0) |
  while IFS= read -r -d '' f; do
    mkdir -p "$ROOT/app/$(dirname "$f")"
    cp "$APP/$f" "$ROOT/app/$f"
  done

python3 - "$WORK/info.json" "$URL" "$(sha256sum "$ZIP" | cut -c1-64)" "$SETUP_SHA" \
  "$PUBLISHED_SHA" "$APP/BIRForms.exe" "$WORK/decode.json" <<'EOF'
import hashlib, json, os, sys
out, url, zip_sha, setup_sha, published, exe, decode = sys.argv[1:]
exe_sha = hashlib.sha256(open(exe, 'rb').read()).hexdigest()
json.dump({
    "source_url": url,
    "zip_sha256": zip_sha,
    "installer_sha256": setup_sha,
    "bir_published_installer_sha256": published or None,
    "birforms_exe_sha256": exe_sha,
    "birforms_exe_size": os.path.getsize(exe),
    "decode": json.load(open(decode)),
}, open(out, 'w'), indent=2)
EOF

(cd "$ROOT" && python3 tools/build_index.py "$VERSION" "$WORK/info.json")
echo "done: package/ app/ manifests/$VERSION.json index/forms.json"
