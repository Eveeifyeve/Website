#!/usr/bin/env python3
import os
import re
import shutil
from pathlib import Path


def process_markdown_files(obsidian_root, dist_dir):
    """Process markdown files and move attachments to dist directory."""
    posts_dir = obsidian_root / "blogs"
    public_dir = dist_dir / "public"

    # Create output directories
    dist_dir.mkdir(exist_ok=True)
    public_dir.mkdir(exist_ok=True)

    for md_file in posts_dir.rglob("*.md"):
        content = md_file.read_text(encoding="utf-8")

        # Find all image links
        images = re.findall(r"\[\[([^]]*\.png)\]\]", content)

        # Process images and update links
        for image_path in images:
            src = obsidian_root / "Attachments" / image_path
            dst = public_dir / image_path

            print(image_path)

            # Create parent directories for images
            dst.parent.mkdir(exist_ok=True)

            # Copy image if exists
            if src.exists():
                shutil.copy2(str(src), str(dst))

                # Update link in content
                rel_path = dst.relative_to(dist_dir)
                content = content.replace(
                    f"[[{image_path}]]", f"![Image Description]({rel_path})"
                )

        # Write processed file to dist directory
        out_path = dist_dir / md_file.relative_to(posts_dir).with_suffix(".md")
        out_path.parent.mkdir(exist_ok=True)
        out_path.write_text(content, encoding="utf-8")


if __name__ == "__main__":
    import sys

    if len(sys.argv) != 3:
        print("Usage: python script.py <obsidian_root_directory> <dist_directory>")
        sys.exit(1)

    obsidian_root = Path(sys.argv[1]).resolve()
    dist_dir = Path(sys.argv[2]).resolve()

    if not obsidian_root.exists():
        print(f"Error: Obsidian root directory '{obsidian_root}' does not exist")
        sys.exit(1)

    process_markdown_files(obsidian_root, dist_dir)
    print("Processing complete!")
