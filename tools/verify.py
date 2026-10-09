#!/usr/bin/env python3
"""Check that package/ and app/ match manifests/<version>.json exactly.

Usage: verify.py [VERSION]   (default: the version in index/forms.json)
Run from the repository root. Exits 1 on any missing, extra or changed file.
"""
import hashlib
import json
import os
import sys


def sha256(path):
    h = hashlib.sha256()
    with open(path, "rb") as fh:
        for chunk in iter(lambda: fh.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def main():
    version = sys.argv[1] if len(sys.argv) > 1 else json.load(open("index/forms.json"))["official_app_version"]
    manifest = json.load(open(f"manifests/{version}.json"))
    problems = []
    for section in ("package", "app"):
        expected = manifest[section]
        found = set()
        for base, _, files in os.walk(section):
            for name in files:
                rel = os.path.relpath(os.path.join(base, name), section).replace(os.sep, "/")
                found.add(rel)
                if rel not in expected:
                    problems.append(f"extra    {section}/{rel}")
                elif sha256(os.path.join(section, rel)) != expected[rel]["sha256"]:
                    problems.append(f"changed  {section}/{rel}")
        problems += [f"missing  {section}/{rel}" for rel in sorted(set(expected) - found)]
    for p in problems:
        print(p)
    total = len(manifest["package"]) + len(manifest["app"])
    print(f"{version}: {total} files, {len(problems)} problems")
    sys.exit(1 if problems else 0)


if __name__ == "__main__":
    main()
