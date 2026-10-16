import gitCommands from "./src/assets/commandsData.js";

const DEFAULT_SITE_URL = "https://git-factory.netlify.app";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

/**
 * Static, crawlable copy of the command list. It lives inside #root so
 * crawlers and social scrapers that don't run JavaScript still see the real
 * content; React replaces it as soon as the app mounts.
 */
const renderStaticContent = () => {
  const byCategory = Map.groupBy(gitCommands, (command) => command.category);
  const sections = [...byCategory]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(
      ([category, commands]) => `<section>
<h2>${escapeHtml(category)}</h2>
${commands
  .map(
    (command) => `<article>
<h3>${escapeHtml(command.name)}</h3>
<p>${escapeHtml(command.description)}</p>${
      command.warning ? `\n<p>Caution: ${escapeHtml(command.warning)}</p>` : ""
    }
<pre><code>${escapeHtml(command.code)}</code></pre>
</article>`,
  )
  .join("\n")}
</section>`,
    )
    .join("\n");

  return `<main>
<h1>Git Commands Guide</h1>
<p>${gitCommands.length} Git commands with descriptions, examples and copy-ready code, grouped by category and difficulty.</p>
${sections}
</main>`;
};

/**
 * Single source of truth for everything that needs the site's absolute URL:
 * index.html placeholders, robots.txt and sitemap.xml.
 *
 * URL resolution: SITE_URL (CI/manual) > URL (set by Netlify builds) > default.
 */
export default function seoPlugin() {
  const siteUrl = (
    process.env.SITE_URL ||
    process.env.URL ||
    DEFAULT_SITE_URL
  ).replace(/\/+$/, "");

  return {
    name: "git-factory-seo",
    // "pre": placeholders must be resolved before Vite parses the URLs in <head>.
    transformIndexHtml: {
      order: "pre",
      handler: (html) =>
        html
          .replaceAll("%SITE_URL%", siteUrl)
          .replaceAll("%COMMAND_COUNT%", String(gitCommands.length))
          .replace(
            '<div id="root"></div>',
            `<div id="root">${renderStaticContent()}</div>`,
          ),
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${siteUrl}/og-image.png</image:loc>
      <image:title>Git Factory - Git commands guide</image:title>
    </image:image>
  </url>
</urlset>
`,
      });
    },
  };
}
