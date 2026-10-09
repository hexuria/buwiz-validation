# buwiz-validation

Official source for BIR Offline eBIRForms: every form HTA, its JavaScript,
VBScript, CSS, reference XML and help pages. It comes straight from the packages
BIR publishes at <https://www.bir.gov.ph/ebirforms> and is tracked one commit
per release.

It is the reference material for mapping every field, validation rule,
calculation and XML key in
[buwiz-forms](https://github.com/hexuria/buwiz-forms) and
[buwiz-forms-html](https://github.com/hexuria/buwiz-forms-html) to the official
behaviour, so nobody has to boot a Windows VM to read the official forms again.

The contents are BIR's, unmodified. Nothing here is patched.

## Layout

| Path | What it is |
|---|---|
| `package/` | The application tree embedded in `BIRForms.exe` (what eBIRForms extracts to `%TEMP%\{GUID}\` at runtime): `BIRForms.hta` shell, `forms/*.hta`, `js/`, `jq/`, `css/`, `xml/`, `helpfile/`, `img/` |
| `app/` | Files the installer puts in `C:\eBIRForms\`: reference XML (`atcCodes`, `rdo`, `treatyCodes`, …), `chkt.exe` (TIN check digit), `Encrypt.exe`, `cFTPSend.exe` / `ebfSFTP.exe` (submission transport), release notes. `BIRForms.exe` itself (≈56 MB, decoded into `package/`) and bundled third-party WinSCP are left out; their hashes are in the manifest. |
| `manifests/<version>.json` | Download URL, zip / installer / `BIRForms.exe` SHA-256, and the SHA-256 + size of every file in `package/` and `app/` |
| `index/forms.json` | For each form HTA: title, `APPLICATIONNAME`, scripts and stylesheets it loads (in order), and any it references that the official package does not ship |
| `tools/` | The extraction pipeline (below) |

## Releases

Each release is one commit, tagged `v<version>`:

| Tag | `BIRForms.exe` SHA-256 | Notes |
|---|---|---|
| `v7.9.6.0` | `de8ef0815509d65189e6794e1f8135a5ecf5f2800005d1fc5c87043efd96dbca` | baseline pinned by buwiz-forms `rules/` |
| `v7.9.6.1` | `a43a4599f95158e6ba0e7a1c4b88c4e2cf215ac86e53c24259cc69d1b664829c` | 0605 MC350/MC351/MA; 1601FQ, 1603Q, 1702Q, 1801 fixes; dummy TIN prefixes force-fail in `js/string-util.js` |
| `v7.9.6.2.1` | `b02be415704875d890e9d8b197ab46cf2d1554de5d0ed1b9a4887c312297346e` | 1702Qv2018C Schedule 1 item 10A/10B rates, Schedule 3 item 6 |

See exactly what BIR changed between two releases:

```sh
git diff --stat v7.9.6.0 v7.9.6.2.1
git diff v7.9.6.0 v7.9.6.2.1 -- package/js/string-util.js
```

Some HTAs are UTF-16; `git diff` shows them as binary unless you add
`*.hta diff=utf16` with `git config diff.utf16.textconv "iconv -f utf-16 -t utf-8"`.

## Adding a new BIR release

Runs on Linux or macOS, with no Wine or Windows needed:

```sh
# deps: curl unzip innoextract python3 + pip install pefile
tools/fetch.sh                # latest release linked from bir.gov.ph/ebirforms
tools/fetch.sh 7.9.6.1        # a specific release still on bir-cdn
git add -A && git commit -m "BIR eBIRForms <version>" && git tag v<version>
```

What `fetch.sh` does:

1. **Finds the release.** bir.gov.ph/ebirforms is a client-rendered page, so
   the script reads its content from the BIR CMS API
   (`bir-cms-ws.bir.gov.ph/api/pub/templates/3380/datasets`). That gives the
   current package link and BIR's published hash. The published hash is for
   the installer `.exe` inside the zip, not for the zip itself, and the
   script fails if they don't match.
2. **Unpacks the installer.** The installer is Inno Setup 5.5.7, and
   `innoextract` produces the `C:\eBIRForms` tree.
3. **Decodes the forms.** `BIRForms.exe` keeps the application as PE
   resources of type 23. Resource 129 is a UTF-16, `|`-separated path list;
   path *i* is stored in resource 129 + *i*, XOR 0xFF
   (`tools/decode_birforms.py`). The decoder ports buwiz-forms
   `rules/tools/audit-ebir-package-resources.ps1`. Its output for 7.9.6.0 and
   7.9.6.1 reproduces the `BIRForms.exe` and HTA hashes already pinned in
   buwiz-forms.
4. **Writes the indexes.** It regenerates `manifests/<version>.json` and
   `index/forms.json`.

The decoder reports 7 path-list entries with no resource. They are empty
`IAF_*/.gitkeep` placeholders and one blank trailing entry, so nothing is
lost.

## Where the validation lives

For a form `X`, official validation is spread over:

- `package/forms/BIR-FormX.hta`: inline `<script>` blocks hold the per-form
  `validate()`, compute functions, `onblur`/`onkeypress` handlers, `maxlength`
  attributes and the save/XML field map.
- `package/js/string-util.js` and `string-util2014.js`: shared formatting,
  TIN, date and amount helpers (`getTinChkCode`, `validateDate`, …).
- `package/js/eBIRTools.vbs`: the VBScript bridge to `app/chkt.exe`
  (`ValidateTinWChkDgt`), `app/Encrypt.exe` and file I/O.
- `package/js/lib/*.js`, `tax-rate-helper.js`, `bir-formatter.js`:
  form-family libraries, where a form loads them.
- `app/xml/*.xml` and `package/xml/`: reference data (ATC, RDO, treaty,
  country, tax type, tax rate).
- `package/BIRForms.hta`: the shell, covering the taxpayer profile (TIN /
  dummy-TIN rules, `checkValidDummy`), the form list, and
  open/save/submit.

`index/forms.json` lists the exact load order for each form.
