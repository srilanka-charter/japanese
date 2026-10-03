import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const projectRoot = resolve(import.meta.dirname, "..");
const textFilePattern = /\.(?:ts|tsx|css|html|json|xml|txt|md)$/;

function collectTextFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      return ["node_modules", "dist", ".git", "coverage"].includes(entry.name)
        ? []
        : collectTextFiles(fullPath);
    }
    return entry.isFile() && textFilePattern.test(entry.name) ? [fullPath] : [];
  });
}

describe("SriNowa rebrand", () => {
  it("removes the legacy display brands from client and mailer content", () => {
    const files = [
      ...collectTextFiles(join(projectRoot, "client")),
      join(projectRoot, "server", "mailer.ts"),
    ];

    const legacyMatches = files.flatMap(file => {
      const content = readFileSync(file, "utf8");
      return /SLTCS|スリランカタクシーチャーターサービス/.test(content) ? [file] : [];
    });

    expect(legacyMatches).toEqual([]);
  });

  it("uses SriNowa in shared SEO defaults and homepage structured data", () => {
    const seoHook = readFileSync(join(projectRoot, "client", "src", "hooks", "useSEO.ts"), "utf8");
    const homePage = readFileSync(join(projectRoot, "client", "src", "pages", "Home.tsx"), "utf8");

    expect(seoHook).toContain("スリランカタクシーチャーターならSriNowa");
    expect(homePage).toContain('"name": "スリノワ（SriNowa）"');
    expect(homePage).toContain("スリランカタクシーチャーターならSriNowa");
  });
});
