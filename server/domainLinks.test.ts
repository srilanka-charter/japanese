import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const projectRoot = resolve(import.meta.dirname, "..");
const textFilePattern = /\.(?:ts|tsx|css|html|json|xml|txt|md)$/;

function collectClientTextFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      return ["node_modules", "dist", ".git", "coverage"].includes(entry.name)
        ? []
        : collectClientTextFiles(fullPath);
    }
    return entry.isFile() && textFilePattern.test(entry.name) ? [fullPath] : [];
  });
}

describe("SriNowa domain links", () => {
  it("uses only the four specified SriNowa destinations in the header language switcher", () => {
    const source = readFileSync(
      join(projectRoot, "client", "src", "components", "Header.tsx"),
      "utf8"
    );

    expect(source).toContain('{ label: "English", href: "https://srinowa.com/" }');
    expect(source).toContain('{ label: "French", href: "https://fr.srinowa.com/" }');
    expect(source).toContain('{ label: "German", href: "https://de.srinowa.com/" }');
    expect(source).toContain('{ label: "Spanish", href: "https://es.srinowa.com/" }');
    expect(source).not.toMatch(/label: "(?:Dutch|Korean|Russian|Malay|Swedish)"/);
    expect(source.match(/label: "(?:English|French|German|Spanish)"/g)).toHaveLength(4);
  });

  it("does not expose legacy-domain links to visitors or crawlers", () => {
    const files = collectClientTextFiles(join(projectRoot, "client"));
    const legacyDomain = ["srilanka", "charter.com"].join("-");
    const legacyFiles = files.filter(file =>
      readFileSync(file, "utf8").includes(legacyDomain)
    );

    expect(legacyFiles).toEqual([]);
  });

  it("uses ja.srinowa.com for canonical metadata, robots, and the sitemap", () => {
    const seoHook = readFileSync(join(projectRoot, "client", "src", "hooks", "useSEO.ts"), "utf8");
    const robots = readFileSync(join(projectRoot, "client", "public", "robots.txt"), "utf8");
    const sitemap = readFileSync(join(projectRoot, "client", "public", "sitemap.xml"), "utf8");

    expect(seoHook).toContain('const SITE_URL = "https://ja.srinowa.com"');
    expect(robots).toContain("Sitemap: https://ja.srinowa.com/sitemap.xml");
    expect(sitemap).toContain("<loc>https://ja.srinowa.com/</loc>");
  });
});
