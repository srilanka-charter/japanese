from __future__ import annotations

import csv
import json
import re
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import urlparse


PROJECT_ROOT = Path(__file__).resolve().parents[1]
MAPPING_PATH = PROJECT_ROOT / "docs" / "hreflang-page-correspondence.csv"
OUTPUT_PATH = PROJECT_ROOT / "docs" / "hreflang-site-audit.json"
SITEMAPS = {
    "ja": "https://ja.srinowa.com/sitemap.xml",
    "en": "https://srinowa.com/sitemap.xml",
    "de": "https://de.srinowa.com/sitemap.xml",
    "fr": "https://fr.srinowa.com/sitemap.xml",
    "es": "https://es.srinowa.com/sitemap.xml",
}


def fetch_paths(sitemap_url: str) -> list[str]:
    request = Request(sitemap_url, headers={"User-Agent": "SriNowa-hreflang-audit/1.0"})
    with urlopen(request, timeout=20) as response:
        xml = response.read().decode("utf-8")
    return [urlparse(url).path or "/" for url in re.findall(r"<loc>([^<]+)</loc>", xml)]


def mapped_paths() -> dict[str, set[str]]:
    paths = {language: set() for language in SITEMAPS}
    with MAPPING_PATH.open(encoding="utf-8", newline="") as mapping_file:
        for row in csv.DictReader(mapping_file):
            for language in SITEMAPS:
                value = row[f"{language}_path"].strip()
                if value:
                    paths[language].add(value)
    return paths


def main() -> None:
    live_paths = {language: set(fetch_paths(url)) for language, url in SITEMAPS.items()}
    table_paths = mapped_paths()
    audit = {
        language: {
            "sitemap_url": SITEMAPS[language],
            "live_url_count": len(live_paths[language]),
            "mapped_url_count": len(table_paths[language]),
            "missing_from_table": sorted(live_paths[language] - table_paths[language]),
            "not_in_live_sitemap": sorted(table_paths[language] - live_paths[language]),
        }
        for language in SITEMAPS
    }
    OUTPUT_PATH.write_text(json.dumps(audit, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(audit, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
