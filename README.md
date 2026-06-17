# Emergent Commerce Lab — site

A "paste-once" website. The only thing that ever goes into WordPress is
[`loader.html`](loader.html), pasted a single time. Everything else lives
here and is published by running `git push`.

## Files

| File | What it is | How often you touch it |
|------|------------|------------------------|
| `content.js`  | All the words/content of the site | **Often** — this is your main edit target |
| `styles.css`  | All the design | Occasionally |
| `app.js`      | Renders content into the page | Rarely |
| `loader.html` | The snippet pasted into WordPress | **Once, ever** |
| `preview.html`| Local-only preview (not used live) | Never paste this |

## One-time setup

1. Create a **public** GitHub repo named `ecl-site` under account `henryk42`.
2. Push these files to it (`main` branch).
3. In WordPress: create a page, add a **Custom HTML block**, paste the
   contents of `loader.html`, and publish. (If Custom HTML is unavailable,
   paste it into the **Code Snippets** plugin as an HTML/PHP snippet instead.)

That's the last time you paste anything.

## Day-to-day workflow

1. Tell Claude Code what to change, or edit `content.js` yourself.
2. `git add -A && git commit -m "update" && git push`
3. Refresh the WordPress page. (The jsDelivr CDN caches ~ up to 12h; to see
   changes instantly, append a version to the loader URLs, e.g.
   `@main` → a tagged release, or purge via
   `https://purge.jsdelivr.net/gh/henryk42/ecl-site@main/app.js`.)

## Local preview (before pushing)

Open `preview.html` through a local web server (needed because `app.js`
uses ES module imports, which don't work from `file://`). Claude Code can
start one for you.
