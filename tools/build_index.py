#!/usr/bin/env python3
"""Write manifests/<version>.json (file hashes) and index/forms.json.

Usage: build_index.py VERSION PACKAGE_INFO_JSON
Run from the repository root after package/ and app/ are populated.
"""
import hashlib
import json
import os
import re
import sys


def sha256(path):
    h = hashlib.sha256()
    with open(path, "rb") as fh:
        for chunk in iter(lambda: fh.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def tree(root):
    out = {}
    for base, _, files in os.walk(root):
        for name in files:
            path = os.path.join(base, name)
            out[os.path.relpath(path, root).replace(os.sep, "/")] = {
                "sha256": sha256(path),
                "size": os.path.getsize(path),
            }
    return dict(sorted(out.items()))


def read_text(path):
    raw = open(path, "rb").read()
    if raw[:2] in (b"\xff\xfe", b"\xfe\xff"):
        return raw.decode("utf-16")
    try:
        return raw.decode("utf-8-sig")
    except UnicodeDecodeError:
        return raw.decode("latin-1")


def strip_comments(html):
    # Drop <!-- --> outside script bodies so commented-out <script src> tags
    # are not counted; a script body may itself contain "<!--".
    html = re.sub(r"(<script\b[^>]*>).*?(</script>)", r"\1\2", html, flags=re.I | re.S)
    return re.sub(r"<!--.*?-->", "", html, flags=re.S)


SRC_RE = re.compile(r"""<script\b[^>]*\bsrc\s*=\s*["']([^"']+)["']""", re.I)
CSS_RE = re.compile(r"""<link\b[^>]*\bhref\s*=\s*["']([^"']+\.css)["']""", re.I)
TITLE_RE = re.compile(r"<title>(.*?)</title>", re.I | re.S)
APPNAME_RE = re.compile(r"""APPLICATIONNAME\s*=\s*["']([^"']*)["']""", re.I)
VERSION_RE = re.compile(r"""<hta:application[^>]*\bVERSION\s*=\s*["']([^"']*)["']""", re.I | re.S)


def resolve(ref):
    return re.sub(r"^(\.\./)+", "", ref.replace("\\", "/"))


def forms_index(package_root, package_files):
    # The HTA host is Windows: path lookups are case-insensitive.
    present = {p.lower() for p in package_files}
    forms = {}
    for rel in package_files:
        if not (rel.startswith("forms/") and rel.lower().endswith(".hta")):
            continue
        raw = read_text(os.path.join(package_root, rel))
        text = strip_comments(raw)
        scripts = [resolve(s) for s in SRC_RE.findall(text)]
        styles = [resolve(s) for s in CSS_RE.findall(text)]
        title = TITLE_RE.search(raw)
        app = APPNAME_RE.search(raw)
        ver = VERSION_RE.search(raw)
        forms[rel] = {
            "sha256": package_files[rel]["sha256"],
            "title": title.group(1).strip() if title else None,
            "application_name": app.group(1) if app else None,
            "hta_version": ver.group(1) if ver else None,
            "scripts": scripts,
            "stylesheets": styles,
            "missing_dependencies": [
                d for d in scripts + styles if d.lower() not in present
            ],
            "inline_script_blocks": len(re.findall(r"<script\b(?![^>]*\bsrc=)", text, re.I)),
        }
    return forms


def main():
    version, info_path = sys.argv[1], sys.argv[2]
    info = json.load(open(info_path))
    package_files = tree("package")
    manifest = {
        "official_app_version": version,
        **info,
        "package": package_files,
        "app": tree("app"),
    }
    os.makedirs("manifests", exist_ok=True)
    os.makedirs("index", exist_ok=True)
    with open(f"manifests/{version}.json", "w") as fh:
        json.dump(manifest, fh, indent=2)
        fh.write("\n")
    with open("index/forms.json", "w") as fh:
        json.dump(
            {"official_app_version": version, "forms": forms_index("package", package_files)},
            fh,
            indent=2,
        )
        fh.write("\n")


if __name__ == "__main__":
    main()
