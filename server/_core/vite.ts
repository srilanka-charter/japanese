import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";
import { injectSsrPage, renderSsrPage } from "../../client/src/ssr";
import { getCanonicalRedirect, isKnownSiteRoute, normalizeSeoPath } from "./seoRoutes";

function sendSeoAwarePage(req: express.Request, res: express.Response, template: string) {
  const pathname = normalizeSeoPath(new URL(req.originalUrl, "http://localhost").pathname);
  const redirectTarget = getCanonicalRedirect(pathname);

  if (redirectTarget) {
    res.redirect(301, redirectTarget);
    return;
  }

  const isNotFound = !isKnownSiteRoute(pathname);
  const { appHtml, seoHead } = renderSsrPage(pathname, isNotFound);
  res.status(isNotFound ? 404 : 200)
    .set({ "Content-Type": "text/html; charset=UTF-8" })
    .end(injectSsrPage(template, appHtml, seoHead));
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      sendSeoAwarePage(req, res, page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // index.htmlは必ず下のSEO対応フォールバックでSSRするため、静的配信では直接返さない。
  app.use(express.static(distPath, { index: false }));

  // 既知のSPAルートだけをHTMLとして返し、未知のURLはHTTP 404にする。
  app.use("*", async (req, res, next) => {
    try {
      const template = await fs.promises.readFile(path.resolve(distPath, "index.html"), "utf-8");
      sendSeoAwarePage(req, res, template);
    } catch (error) {
      next(error);
    }
  });
}
