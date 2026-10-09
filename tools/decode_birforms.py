#!/usr/bin/env python3
"""Decode the HTA/JS/CSS tree embedded in an Offline eBIRForms BIRForms.exe.

BIRForms.exe stores its application files as PE resources of type 23
(RT_HTML). Resource 129 is a UTF-16 manifest of '|'-separated relative paths;
manifest entry i lives in resource 129 + i, XOR-encoded with 0xFF.

Usage: decode_birforms.py BIRForms.exe OUT_DIR
Requires: pip install pefile
"""
import json
import os
import sys

import pefile

RESOURCE_TYPE = 23
MANIFEST_ID = 129


def read_resources(exe_path):
    pe = pefile.PE(exe_path, fast_load=True)
    pe.parse_data_directories(
        [pefile.DIRECTORY_ENTRY["IMAGE_DIRECTORY_ENTRY_RESOURCE"]]
    )
    image = pe.get_memory_mapped_image()
    resources = {}
    for rtype in pe.DIRECTORY_ENTRY_RESOURCE.entries:
        if rtype.id != RESOURCE_TYPE:
            continue
        for name in rtype.directory.entries:
            data = name.directory.entries[0].data.struct
            resources[name.id] = image[data.OffsetToData : data.OffsetToData + data.Size]
    return resources


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    exe_path, out_dir = sys.argv[1], sys.argv[2]
    resources = read_resources(exe_path)
    manifest = (
        resources[MANIFEST_ID].decode("utf-16-le").lstrip("﻿").strip("\x00").split("|")
    )
    written, missing = [], []
    for index, entry in enumerate(manifest):
        rid = MANIFEST_ID + index
        rel = entry.replace("\\", "/").lstrip("/")
        if rid not in resources:
            missing.append({"resource_id": rid, "path": rel})
            continue
        # Entry 0 is the manifest itself; it is stored without XOR.
        data = resources[rid] if rid == MANIFEST_ID else bytes(b ^ 0xFF for b in resources[rid])
        dst = os.path.join(out_dir, rel)
        os.makedirs(os.path.dirname(dst) or out_dir, exist_ok=True)
        with open(dst, "wb") as fh:
            fh.write(data)
        written.append(rel)
    json.dump(
        {
            "resource_count": len(resources),
            "manifest_entries": len(manifest),
            "written": len(written),
            "missing": missing,
        },
        sys.stdout,
        indent=2,
    )
    print()


if __name__ == "__main__":
    main()
