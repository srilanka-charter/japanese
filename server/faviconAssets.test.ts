import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const publicDirectory = resolve(import.meta.dirname, "..", "client", "public");
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

describe("SriNowa favicon assets", () => {
  it("provides all referenced favicon and PWA icon variants", () => {
    const pngIcons = [
      "favicon-16x16.png",
      "favicon-32x32.png",
      "apple-touch-icon.png",
      "icon-192x192.png",
      "icon-512x512.png",
    ];

    pngIcons.forEach(name => {
      const iconPath = join(publicDirectory, name);
      expect(existsSync(iconPath), `${name} must exist`).toBe(true);
      const content = readFileSync(iconPath);
      expect(content.subarray(0, 8)).toEqual(pngSignature);
      expect(content.length).toBeGreaterThan(500);
    });

    const ico = readFileSync(join(publicDirectory, "favicon.ico"));
    expect(ico.subarray(0, 4)).toEqual(Buffer.from([0x00, 0x00, 0x01, 0x00]));
    expect(ico.length).toBeGreaterThan(1_000);
  });

  it("references the regenerated icon set in HTML and PWA metadata", () => {
    const html = readFileSync(join(publicDirectory, "..", "index.html"), "utf8");
    const manifest = readFileSync(join(publicDirectory, "manifest.json"), "utf8");

    expect(html).toContain('href="/favicon.ico"');
    expect(html).toContain('href="/apple-touch-icon.png"');
    expect(manifest).toContain('"src": "/icon-192x192.png"');
    expect(manifest).toContain('"src": "/icon-512x512.png"');
    expect(manifest).toContain('"url": "/pricing"');
    expect(manifest).not.toContain('"url": "/plan"');
  });
});
