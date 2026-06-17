// ───────────────────────────────────────────────────────────────
//  ECL SITE RENDERER
//  Loads content from content.js and renders it into #ecl-app.
//  Uses hash routing (#/research, #/people, ...) so the whole site
//  lives on ONE WordPress page — you only ever paste the loader once.
//  You normally won't need to edit this file; edit content.js instead.
// ───────────────────────────────────────────────────────────────

import { site } from "./content.js";

const root = document.getElementById("ecl-app");

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function currentPageId() {
  const id = (location.hash || "").replace(/^#\/?/, "").trim();
  return site.pages[id] ? id : "home";
}

function renderNav(activeId) {
  return site.nav.map((item) => {
    const cls = item.id === activeId ? ' class="active"' : "";
    return `<a href="#/${esc(item.id)}"${cls}>${esc(item.label)}</a>`;
  }).join("");
}

function renderProse(page) {
  return (page.paragraphs || []).map((p) => `<p>${esc(p)}</p>`).join("");
}

function renderCards(page) {
  if (!page.themes || !page.themes.length) return "";
  const cards = page.themes.map((t) => `
    <div class="ecl-card">
      <h3>${esc(t.title)}</h3>
      <p>${esc(t.body)}</p>
    </div>`).join("");
  return `<div class="ecl-cards">${cards}</div>`;
}

function render() {
  const activeId = currentPageId();
  const page = site.pages[activeId];

  root.innerHTML = `
    <header class="ecl-header">
      <div class="ecl-bar">
        <a class="ecl-brand" href="#/home" style="text-decoration:none">
          <span class="name">${esc(site.name)}</span>
          <span class="affil">${esc(site.affiliation)}</span>
        </a>
        <nav class="ecl-nav">${renderNav(activeId)}</nav>
      </div>
    </header>

    <main class="ecl-main">
      <h1 class="ecl-headline">${esc(page.headline)}</h1>
      <div class="ecl-prose">${renderProse(page)}</div>
      ${renderCards(page)}
    </main>

    <footer class="ecl-footer">
      <div class="inner">${esc(site.footer.text)}</div>
    </footer>
  `;
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
render();
