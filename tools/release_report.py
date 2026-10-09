#!/usr/bin/env python3
"""Describe what BIR changed between two releases, for a buwiz-forms issue.

Usage:
  release_report.py OLD_REF NEW_REF [--rules PATH] [--repo OWNER/NAME] [--limit N]

OLD_REF/NEW_REF are git refs of this repository (normally tags v<version>).
--rules points at a buwiz-forms checkout's rules/forms; every manifest.json
there pins the SHA-256 of the official files a rule package was built from,
so the report can name the packages a release makes stale.
Writes Markdown to stdout, cut to --limit characters (GitHub issue bodies
stop at 65536).
"""
import argparse
import glob
import json
import re
import subprocess
from collections import defaultdict

ID_RE = re.compile(
    r"""(?:\bid\s*=\s*["']|getElementById\(\s*["']|\$_Id\(\s*["']|\bname\s*=\s*["'])([A-Za-z0-9_:.\-]+)""",
    re.I)
FUNC_RE = re.compile(r"\bfunction\s+([A-Za-z_$][\w$]*)\s*\(")
TEXT_EXT = (".hta", ".html", ".htm", ".js", ".vbs", ".css", ".xml", ".txt", ".ini", ".config", ".cs")


def git(*args):
    return subprocess.run(["git", *args], check=True, capture_output=True).stdout


def at(ref, path):
    return git("show", f"{ref}:{path}")


def manifest(ref):
    version = json.loads(at(ref, "index/forms.json"))["official_app_version"]
    return version, json.loads(at(ref, f"manifests/{version}.json"))


def changes(old, new):
    """{path: (status, added, removed)} for package/ and app/; binary counts are None."""
    out = {}
    for line in git("diff", "--no-renames", "--name-status", old, new, "--", "package", "app").decode().splitlines():
        status, path = line.split("\t", 1)
        out[path] = [status, None, None]
    for line in git("diff", "--no-renames", "--numstat", old, new, "--", "package", "app").decode().splitlines():
        a, r, path = line.split("\t", 2)
        if path in out and a != "-":
            out[path][1:] = [int(a), int(r)]
    return out


def diff_lines(old, new, path):
    text = git("diff", "--no-renames", "-U0", old, new, "--", path).decode("utf-8", "replace")
    plus, minus = [], []
    for line in text.splitlines():
        if line.startswith("+") and not line.startswith("+++"):
            plus.append(line[1:])
        elif line.startswith("-") and not line.startswith("---"):
            minus.append(line[1:])
    return plus, minus


def touched(plus, minus, rx):
    a = {m for line in plus for m in rx.findall(line)}
    r = {m for line in minus for m in rx.findall(line)}
    return sorted(a | r), sorted(a - r), sorted(r - a)


def short(items, n):
    items = list(items)
    s = ", ".join(f"`{i}`" for i in items[:n])
    return s + (f" … and {len(items) - n} more" if len(items) > n else "") if items else "–"


def category(path):
    rel = path.split("/", 1)[1]
    if path.startswith("app/"):
        return "Installed files (`C:\\eBIRForms`)"
    top = rel.split("/", 1)[0] if "/" in rel else ""
    return {
        "forms": "Forms", "helpfile": "Help pages", "js": "JavaScript / VBScript", "jq": "JavaScript / VBScript",
        "css": "Stylesheets", "xml": "Reference XML", "img": "Images",
    }.get(top, "Shell and other")


def pinned_sources(rules_dir):
    """{rule package: [(repo path, pinned sha256, asset_id)]} from buwiz-forms manifests."""
    out = defaultdict(list)
    for mpath in sorted(glob.glob(f"{rules_dir}/*/manifest.json")):
        pkg = mpath.split("/")[-2]
        stack = [json.load(open(mpath))]
        while stack:
            o = stack.pop()
            if isinstance(o, dict):
                p, sha = o.get("path"), o.get("sha256")
                if isinstance(p, str) and isinstance(sha, str):
                    repo = to_repo_path(p)
                    if repo:
                        out[pkg].append((repo, sha.lower(), o.get("asset_id", "")))
                stack.extend(o.values())
            elif isinstance(o, list):
                stack.extend(o)
    return out


def to_repo_path(p):
    p = p.replace("\\", "/")
    m = re.search(r"\}/(.+)$", p) or re.search(r"runtime-extraction/(.+)$", p)
    if m:
        return "package/" + m.group(1)
    m = re.match(r"(?i)c:/ebirforms/(.+)$", p)
    if m:
        return "BIRForms.exe" if m.group(1).lower() == "birforms.exe" else "app/" + m.group(1)
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("old")
    ap.add_argument("new")
    ap.add_argument("--rules")
    ap.add_argument("--repo", default="hexuria/buwiz-validation")
    ap.add_argument("--limit", type=int, default=0)
    a = ap.parse_args()

    old_v, old_m = manifest(a.old)
    new_v, new_m = manifest(a.new)
    forms_new = json.loads(at(a.new, "index/forms.json"))["forms"]
    forms_old = json.loads(at(a.old, "index/forms.json"))["forms"]
    ch = changes(a.old, a.new)
    url = f"https://github.com/{a.repo}"
    compare = f"{url}/compare/{a.old}...{a.new}"
    out = []
    w = out.append

    w(f"BIR published Offline eBIRForms **{new_v}**. Compared with **{old_v}**, "
      f"{len(ch)} files changed in the official package.\n")
    w("| | " + old_v + " | " + new_v + " |\n|---|---|---|")
    w(f"| `BIRForms.exe` SHA-256 | `{old_m['birforms_exe_sha256']}` | `{new_m['birforms_exe_sha256']}` |")
    w(f"| Installer SHA-256 | `{old_m['installer_sha256']}` | `{new_m['installer_sha256']}` |")
    w(f"| Source | {old_m['source_url']} | {new_m['source_url']} |")
    pub = new_m.get("bir_published_installer_sha256")
    w("")
    w(f"- Installer hash {'matches the hash BIR published' if pub == new_m['installer_sha256'] else 'was not published by BIR (fetched by version)' if not pub else '**does not match** BIR’s published hash'}.")
    w(f"- Full diff: {compare}")
    w(f"- Browse the forms: https://{a.repo.split('/')[0]}.github.io/{a.repo.split('/')[1]}/preview/\n")

    # BIR's own release notes.
    notes = [p for p in ch if re.search(r"(?i)release notes", p)]
    if notes:
        w("## BIR release notes\n")
        for p in notes:
            if ch[p][0] != "M":
                w(f"- `{p}` {({'A': 'added', 'D': 'removed'})[ch[p][0][0]]}\n")
                continue
            plus, _ = diff_lines(a.old, a.new, p)
            body = "\n".join(l.rstrip() for l in plus if l.strip())
            if body:
                w(f"New lines in `{p}`:\n\n```text\n{body[:4000]}\n```\n")

    # Summary by category.
    by_cat = defaultdict(lambda: {"A": 0, "M": 0, "D": 0})
    for p, (st, _, _) in ch.items():
        by_cat[category(p)][st[0]] += 1
    w("## Summary\n\n| Area | Added | Changed | Removed |\n|---|---|---|---|")
    for cat in sorted(by_cat):
        c = by_cat[cat]
        w(f"| {cat} | {c['A']} | {c['M']} | {c['D']} |")
    w("")

    # Which forms load each changed shared script/stylesheet.
    loaders = defaultdict(list)
    for f, info in forms_new.items():
        for dep in info["scripts"] + info["stylesheets"]:
            loaders["package/" + dep.lower()].append(f.split("/")[-1])
    loaders["package/birforms.hta"] = ["every form (shell: profile, form list, open/save/submit)"]

    # Forms.
    form_paths = sorted(p for p in ch if p.startswith("package/forms/"))
    if form_paths:
        w("## Forms\n")
        w("| Form | Title | Status | Lines +/− | Field IDs added / removed | Functions changed |")
        w("|---|---|---|---|---|---|")
        details = []
        for p in form_paths:
            st, add, rem = ch[p]
            rel = p[len("package/"):]
            info = forms_new.get(rel) or forms_old.get(rel) or {}
            name = rel.split("/")[-1]
            status = {"A": "new", "D": "removed", "M": "changed"}[st[0]]
            if st[0] == "M":
                plus, minus = diff_lines(a.old, a.new, p)
                _, ids_add, ids_rem = touched(plus, minus, ID_RE)
                funcs, _, _ = touched(plus, minus, FUNC_RE)
                ids = (f"+{len(ids_add)} / −{len(ids_rem)}" if ids_add or ids_rem else "–")
                w(f"| [`{name}`]({url}/blob/{a.new}/{p}) | {info.get('title') or ''} | {status} | +{add}/−{rem} | {ids} | {short(funcs, 6)} |")
                old_deps = forms_old.get(rel, {}).get("scripts", [])
                new_deps = info.get("scripts", [])
                lines = []
                if ids_add:
                    lines.append(f"- IDs added: {short(ids_add, 40)}")
                if ids_rem:
                    lines.append(f"- IDs removed: {short(ids_rem, 40)}")
                if funcs:
                    lines.append(f"- Functions in changed lines: {short(funcs, 40)}")
                if old_deps != new_deps:
                    gained = [d for d in new_deps if d not in old_deps]
                    lost = [d for d in old_deps if d not in new_deps]
                    lines.append("- Scripts now loaded: " + short(gained, 20) + "; no longer loaded: " + short(lost, 20)
                                 if gained or lost else "- Script load order changed")
                if lines:
                    details.append(f"**`{name}`**\n\n" + "\n".join(lines))
            else:
                w(f"| `{name}` | {info.get('title') or ''} | {status} | {'' if add is None else f'+{add}/−{rem}'} | | |")
        w("")
        if details:
            w("<details><summary>Per-form detail</summary>\n\n" + "\n\n".join(details) + "\n\n</details>\n")

    # Shared code and data.
    shared = sorted(p for p in ch if not p.startswith(("package/forms/", "package/img/", "package/helpfile/"))
                    and p not in notes)
    if shared:
        w("## Shared code, data and shell\n")
        for p in shared:
            st, add, rem = ch[p]
            status = {"A": "added", "D": "removed", "M": "changed"}[st[0]]
            counts = "" if add is None else f" (+{add}/−{rem})"
            users = loaders.get(p.lower())
            w(f"### `{p}` — {status}{counts}\n")
            if users:
                w(f"Loaded by: {short(sorted(set(users)), 30)}\n")
            if st[0] == "M" and add is not None and p.lower().endswith(TEXT_EXT):
                diff = git("diff", "--no-renames", "-U2", a.old, a.new, "--", p).decode("utf-8", "replace")
                body = "\n".join(diff.splitlines()[4:])
                if len(body) > 6000:
                    body = body[:6000] + "\n… (truncated, see the full diff)"
                w(f"<details><summary>Diff</summary>\n\n```diff\n{body}\n```\n\n</details>\n")

    # Other assets.
    other = sorted(p for p in ch if p.startswith(("package/img/", "package/helpfile/")))
    if other:
        w("## Help pages and images\n")
        for p in other:
            st = ch[p][0]
            w(f"- `{p}` {({'A': 'added', 'D': 'removed', 'M': 'changed'})[st[0]]}")
        w("")

    # buwiz-forms rule packages.
    if a.rules:
        pins = pinned_sources(a.rules)
        new_hash = {f"package/{k}".lower(): v["sha256"] for k, v in new_m["package"].items()}
        new_hash.update({f"app/{k}".lower(): v["sha256"] for k, v in new_m["app"].items()})
        new_hash["birforms.exe"] = new_m["birforms_exe_sha256"]
        old_hash = {f"package/{k}".lower(): v["sha256"] for k, v in old_m["package"].items()}
        old_hash.update({f"app/{k}".lower(): v["sha256"] for k, v in old_m["app"].items()})
        old_hash["birforms.exe"] = old_m["birforms_exe_sha256"]
        changed_now = {p.lower() for p in ch}

        stale_now, stale_before, indirect, exe_pins = defaultdict(list), defaultdict(list), defaultdict(list), set()
        for pkg, srcs in pins.items():
            pinned_paths = {r.lower() for r, _, _ in srcs}
            for repo, sha, _ in srcs:
                key = repo.lower()
                if key == "birforms.exe":
                    if sha != new_hash[key]:
                        exe_pins.add(pkg)
                    continue
                now = new_hash.get(key)
                if now == sha:
                    continue
                if key in changed_now and old_hash.get(key) == sha:
                    stale_now[pkg].append(repo + (" (removed)" if now is None else ""))
                elif now is not None or key in old_hash:
                    stale_before[pkg].append(repo)
            # A pinned form whose shared scripts changed, where the script itself is not pinned.
            for repo, _, _ in srcs:
                rel = repo[len("package/"):] if repo.startswith("package/") else None
                info = forms_new.get(rel) if rel else None
                if not info:
                    continue
                for dep in info["scripts"] + info["stylesheets"]:
                    k = "package/" + dep.lower()
                    if k in changed_now and k not in pinned_paths:
                        indirect[pkg].append("package/" + dep)

        w("\n## buwiz-forms rule packages\n")
        w("Each `rules/forms/*/manifest.json` pins the official files it was built from. "
          "Per `rules/UPDATING.md`, a changed source needs a **new** snapshot; old snapshots stay as they are.\n")
        if stale_now:
            w("**Pinned sources changed in this release**\n\n| Rule package | Files |\n|---|---|")
            for pkg in sorted(stale_now):
                w(f"| `{pkg}` | {short(sorted(set(stale_now[pkg])), 10)} |")
            w("")
        if indirect:
            w("**Shared files changed that a pinned form loads, but the package does not pin**\n\n| Rule package | Files |\n|---|---|")
            for pkg in sorted(indirect):
                w(f"| `{pkg}` | {short(sorted(set(indirect[pkg])), 10)} |")
            w("")
        if not stale_now and not indirect:
            w("No pinned source of any rule package changed in this release.\n")
        if exe_pins:
            w(f"{len(exe_pins)} of {len(pins)} rule packages pin a `BIRForms.exe` other than {new_v}'s "
              f"(`{new_m['birforms_exe_sha256'][:12]}…`).\n")
        if stale_before:
            w(f"<details><summary>Already out of date before {new_v} ({len(stale_before)} packages)</summary>\n")
            for pkg in sorted(stale_before):
                w(f"- `{pkg}`: {short(sorted(set(stale_before[pkg])), 8)}")
            w("\n</details>\n")

    w("## Checklist\n")
    w("- [ ] Review the BIR release notes and the diff above")
    w("- [ ] Add new snapshots for the affected rule packages (`rules/UPDATING.md`); keep the old ones")
    w("- [ ] Re-observe changed branches with a dummy profile (Save, reopen, Validate, Final Copy)")
    w("- [ ] Update fixtures, then run `npm run rules:check`")
    w(f"- [ ] Update `changelog-ebirforms.md` for {new_v}\n")
    w(f"_Generated by `tools/release_report.py {a.old} {a.new}` in {a.repo}._")

    text = "\n".join(out)
    if a.limit and len(text) > a.limit:
        cut = text[: a.limit - 300]
        cut = cut[: cut.rfind("\n")]
        if cut.count("```") % 2:
            cut += "\n```"
        if cut.count("<details>") > cut.count("</details>"):
            cut += "\n\n</details>"
        text = cut + f"\n\n**Truncated.** Full report: {url}/blob/main/reports/{new_v}.md"
    print(text)


if __name__ == "__main__":
    main()
