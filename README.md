# buwiz-validation

[![Verify](https://github.com/hexuria/buwiz-validation/actions/workflows/verify.yml/badge.svg)](https://github.com/hexuria/buwiz-validation/actions/workflows/verify.yml)
[![BIR release watch](https://github.com/hexuria/buwiz-validation/actions/workflows/bir-release-watch.yml/badge.svg)](https://github.com/hexuria/buwiz-validation/actions/workflows/bir-release-watch.yml)

A versioned, byte-exact copy of the Bureau of Internal Revenue (BIR) **Offline
eBIRForms** application. It contains every form HTA with its JavaScript,
VBScript, stylesheets, reference XML and help pages, extracted from the
packages BIR publishes at <https://www.bir.gov.ph/ebirforms>.

This repository is the reference for
[buwiz-forms](https://github.com/hexuria/buwiz-forms) and
[buwiz-forms-html](https://github.com/hexuria/buwiz-forms-html). Use it to map
every field, validation rule, calculation and XML key to BIR's official
behaviour without a Windows machine.

> [!NOTE]
> The files under `package/` and `app/` are BIR's, exactly as shipped. Nothing
> is patched. A SHA-256 manifest pins every file, and CI checks every commit
> against it. This project is not affiliated with or endorsed by the BIR.

## Contents

- [Quick start](#quick-start)
- [Repository layout](#repository-layout)
- [Releases](#releases)
- [Automated release watch](#automated-release-watch)
- [Adding a release manually](#adding-a-release-manually)
- [How extraction works](#how-extraction-works)
- [Browser preview](#browser-preview)
- [Known issues in the official package](#known-issues-in-the-official-package)
- [Where the validation logic lives](#where-the-validation-logic-lives)

## Quick start

**Browse the forms.** Open the
[browser preview](https://hexuria.github.io/buwiz-validation/preview/), or
read the sources in [`package/forms/`](package/forms).

**See what BIR changed between two releases:**

```sh
git clone https://github.com/hexuria/buwiz-validation.git
cd buwiz-validation
git diff --stat v7.9.6.0 v7.9.6.2.1
git diff v7.9.6.0 v7.9.6.1 -- package/js/string-util.js
```

Every HTA is UTF-8 (most have a BOM), so `git diff` shows them as text. Each
release also has a written summary in [`reports/`](reports).

## Repository layout

| Path | Contents |
|---|---|
| `package/` | The application tree embedded in `BIRForms.exe`, which eBIRForms extracts to `%TEMP%\{GUID}\` at runtime: the `BIRForms.hta` shell, `forms/*.hta`, `js/`, `jq/`, `css/`, `xml/`, `helpfile/` and `img/`. |
| `app/` | Files the installer places in `C:\eBIRForms\`: reference XML, `chkt.exe` (TIN check digit), `Encrypt.exe`, `cFTPSend.exe` and `ebfSFTP.exe` (submission), and the release notes. `BIRForms.exe` itself (about 56 MB, decoded into `package/`) and the bundled third-party WinSCP are omitted. Their hashes are in the manifest. |
| `manifests/<version>.json` | Provenance for one release: source URL, the SHA-256 of the zip, the installer and `BIRForms.exe`, and the SHA-256 and size of every file in `package/` and `app/`. |
| `index/forms.json` | For each form: title, `APPLICATIONNAME`, the scripts and stylesheets it loads (in order), and any references the official package does not ship. |
| `reports/<version>.md` | What changed relative to the previous release, in the format filed to buwiz-forms. |
| `tools/` | Extraction, verification and reporting scripts. |
| `preview/` | The browser preview. This is project code, not BIR's. |
| `.github/workflows/` | CI: the daily release watch and per-commit verification. |

## Releases

Each BIR release is a commit tagged `v<version>`. The current release is on
`main`.

| Tag | `BIRForms.exe` SHA-256 | Changes |
|---|---|---|
| `v7.9.6.0` | `de8ef0815509d65189e6794e1f8135a5ecf5f2800005d1fc5c87043efd96dbca` | Baseline pinned by buwiz-forms `rules/`. |
| `v7.9.6.1` | `a43a4599f95158e6ba0e7a1c4b88c4e2cf215ac86e53c24259cc69d1b664829c` | Form 0605 adds ATCs MC350/MC351 and tax type MA. Fixes to 1601FQ, 1603Q, 1702Q and 1801. Dummy TIN prefixes now fail in `js/string-util.js`. [Report](reports/7.9.6.1.md) |
| `v7.9.6.2` | `de959c33d8103091e1305b2f2499eaeb775560774bea53c85bd54650976071db` | 1702Qv2018C: Schedule 1 items 10A/10B tax rates and Schedule 3 item 6 computation. [Report](reports/7.9.6.2.md) |
| `v7.9.6.2.1` | `b02be415704875d890e9d8b197ab46cf2d1554de5d0ed1b9a4887c312297346e` | No new release notes. `js/tax-rate-helper.js` sets 1702Q Schedule 1 `txtTax10A` to `0.00`, and the leftover `BIR-Form1702Qv2018C_.hta` is removed. [Report](reports/7.9.6.2.1.md) |

`v7.9.6.2` was added after `v7.9.6.2.1` had been published. It sits on a commit
branched from `v7.9.6.1`, so the published history was not rewritten. Its
manifest and report are on `main` like every other release's.

## Automated release watch

[`bir-release-watch.yml`](.github/workflows/bir-release-watch.yml) runs every
day at 08:23 Asia/Manila. It can also be started from the Actions tab with
**Run workflow**, optionally for a specific version still hosted on bir-cdn.

1. **Check.** `tools/fetch.sh --latest` reads the current package link and
   BIR's published installer hash. If that version is already tagged with the
   same hash, the run ends.
2. **Extract and verify.** `tools/fetch.sh` downloads and extracts the
   release. Then `tools/verify.py` requires every file to match the new
   manifest byte for byte.
3. **Record.** The release is committed and tagged `v<version>`. If BIR
   re-uploads an existing version with different contents, the tag is
   `v<version>-r<YYYYMMDD>`.
4. **Report.** `tools/release_report.py` writes `reports/<version>.md`. The
   report contains:
   - BIR's release notes;
   - each changed form, with the field IDs and functions touched;
   - diffs of shared code and reference data, and which forms load each file;
   - the buwiz-forms rule packages whose pinned sources changed.
5. **File an issue** in hexuria/buwiz-forms, labelled `ebirforms-release`.
   Each release gets one issue; reruns do not create duplicates.

If the check itself fails, for example because BIR changes its website, the
workflow opens a **BIR release watch is failing** issue in this repository.

[`verify.yml`](.github/workflows/verify.yml) runs on every push and pull
request. The tree must match its manifest, and regenerating `index/forms.json`
must produce no diff.

### Setup and maintenance

The workflow needs one repository secret to file issues in buwiz-forms.
Without it, issues are filed in this repository and the run logs a warning.

| Secret | Value |
|---|---|
| `BUWIZ_FORMS_ISSUE_TOKEN` | A [fine-grained personal access token](https://github.com/settings/personal-access-tokens/new) with access to **hexuria/buwiz-forms** only and the **Issues: Read and write** permission. |

To create or rotate the token:

1. Go to **Settings → Developer settings → Personal access tokens →
   Fine-grained tokens**, then create a token or regenerate the existing one.
2. Open **Settings → Secrets and variables → Actions** in this repository and
   set `BUWIZ_FORMS_ISSUE_TOKEN` to the new value.
3. Note the expiry date. An expired token does not stop the watch, but issues
   go to this repository instead of buwiz-forms until the token is replaced.

## Adding a release manually

The automated watch covers new releases. To add one by hand, for example an
older release still on bir-cdn, use Linux or macOS. No Windows or Wine is
needed.

**Requirements:** `curl`, `unzip`, `innoextract` and Python 3 with
[`pefile`](https://pypi.org/project/pefile/).

```sh
pip install pefile
tools/fetch.sh                  # the latest release listed on bir.gov.ph/ebirforms
tools/fetch.sh 7.9.6.1          # a specific release still on bir-cdn
tools/fetch.sh 7.9.6.1 pkg.zip  # a package zip you already downloaded

python3 tools/verify.py         # every file must match the new manifest
git add -A package app manifests index
git commit -m "BIR eBIRForms <version>"
git tag v<version>

python3 tools/release_report.py v<previous> v<version> \
  --rules ../buwiz-forms/rules/forms > reports/<version>.md
git add reports && git commit -m "Report: what changed in BIR eBIRForms <version>"
git push origin main v<version>
```

## How extraction works

1. **Locate the release.** bir.gov.ph/ebirforms is rendered in the browser,
   so `fetch.sh` reads the same content from the BIR CMS API
   (`bir-cms-ws.bir.gov.ph/api/pub/templates/3380/datasets`). The API gives
   the package link and BIR's published SHA-256. That hash covers the
   installer `.exe` inside the zip, not the zip itself. Extraction stops if
   the hashes differ.
2. **Unpack the installer.** The installer is Inno Setup 5.5.7. `innoextract`
   produces the `C:\eBIRForms\` tree.
3. **Decode the application.** `BIRForms.exe` stores the application as PE
   resources of type 23. Resource 129 is a UTF-16, `|`-separated list of
   paths, and path *i* is stored in resource 129 + *i*, XOR 0xFF.
   [`tools/decode_birforms.py`](tools/decode_birforms.py) implements this. It
   is a port of buwiz-forms `rules/tools/audit-ebir-package-resources.ps1`,
   and for 7.9.6.0 and 7.9.6.1 its output reproduces the hashes pinned in
   buwiz-forms.
4. **Index.** [`tools/build_index.py`](tools/build_index.py) writes
   `manifests/<version>.json` and `index/forms.json`.

The output is deterministic. Extracting the same release again, even from a
separate download, produces identical files and hashes. The decoder reports
seven path-list entries without a resource: six empty `IAF_*/.gitkeep`
placeholders and one blank trailing entry. Nothing is lost.

## Browser preview

<https://hexuria.github.io/buwiz-validation/preview/> renders each official
HTA in a modern browser. **Check all forms** loads all 84 forms and reports
script errors and missing files.

To run it locally, serve the repository root over HTTP. Opening the files
directly with `file://` does not work.

```sh
python3 -m http.server 8000   # then open http://localhost:8000/preview/
```

The viewer loads each HTA unmodified. [`preview/ie-shim.js`](preview/ie-shim.js)
supplies the Internet Explorer behaviour the forms depend on:

- **`ActiveXObject`:** `Microsoft.XMLDOM` loads the reference XML.
  `Scripting.FileSystemObject` and `WScript.Shell` are stubs.
- **Case-insensitive file paths**, as on Windows.
- **IE7-mode `getElementById`**, which ignores case and also matches the
  `name` attribute.

Saving, the TIN check digit (`chkt.exe`), encryption and submission require
Windows, so they do nothing in the preview. Layout, reference-data dropdowns
and JavaScript validation run normally.

## Known issues in the official package

All of these are present in BIR's package exactly as shipped (7.9.6.2.1).
They are not caused by extraction.

- **Unshipped scripts.** 18 forms reference scripts that no release from
  7.9.6.0 to 7.9.6.2.1 includes: `js/lib/2200C.js`, `js/gserializer.js`, and
  the 1601EQ formatter scripts. `index/forms.json` lists them per form under
  `missing_dependencies`. 1601EQ also loads `js/json3.min.js`, which BIR ships
  at `js/lib/json3.min.js`.
- **Misnamed image.** `BIR-Form1707Av2021.hta` requests
  `img/for_printing/BIR Form 1707Av2021_1.png`, but the package contains
  `BIR Form 1707A_1.png`.
- **Malformed XML.** `xml/taxRate.xml` has a comment before its `<?xml ?>`
  declaration. Standard XML parsers reject that, so the forms that use
  `js/tax-rate-helper.js` report a parse error.
- **Script errors.** `BIR-Form1702RTv2018.hta` and `BIR-Form1702RTv2018C.hta`
  overflow the call stack in their compute functions on load. Both still
  render.

## Where the validation logic lives

For a form `X`, the official validation is spread across these files.
`index/forms.json` lists the exact load order for each form.

| Location | Contents |
|---|---|
| `package/forms/BIR-FormX.hta` | Inline scripts with the form's `validate()`, compute functions, `onblur`/`onkeypress` handlers, `maxlength` attributes and the save/XML field map. |
| `package/js/string-util.js`, `string-util2014.js` | Shared formatting, TIN, date and amount helpers (`getTinChkCode`, `validateDate`, …). |
| `package/js/eBIRTools.vbs` | VBScript bridge to `app/chkt.exe` (`ValidateTinWChkDgt`), `app/Encrypt.exe` and file I/O. |
| `package/js/lib/*.js`, `tax-rate-helper.js`, `bir-formatter.js` | Libraries shared by a family of forms, used where a form loads them. |
| `app/xml/*.xml`, `package/xml/` | Reference data: ATC, RDO, treaty, country, tax type and tax rate. |
| `package/BIRForms.hta` | The application shell: taxpayer profile, TIN and dummy-TIN rules (`checkValidDummy`), the form list, and open, save and submit. |
