// ───────────────────────────────────────────────────────────────
//  ECL SITE RENDERER
//  Renders ONE page's body content into #ecl-app. Which page is
//  chosen by the host WordPress page via a data attribute:
//      <div id="ecl-app" data-page="people"></div>
//  York's own theme menu provides the navigation and page chrome,
//  so this widget deliberately renders NO nav, header, or footer.
//
//  (The ?ecl-page=… query param is only a convenience for local
//  preview/links; live pages use the data-page attribute.)
//  You normally won't edit this file; edit content.js instead.
// ───────────────────────────────────────────────────────────────

import { site } from "./content.js";

const root = document.getElementById("ecl-app");

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function resolvePageId() {
  const fromAttr = root.dataset.page;
  const fromQuery = new URLSearchParams(location.search).get("ecl-page");
  const id = (fromAttr || fromQuery || "home").trim();
  return site.pages[id] ? id : "home";
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
  const page = site.pages[resolvePageId()];
  const headline = page.headline
    ? `<h1 class="ecl-headline">${esc(page.headline)}</h1>`
    : "";

  root.innerHTML = `
    <div class="ecl-body">
      ${headline}
      <div class="ecl-prose">${renderProse(page)}</div>
      ${renderCards(page)}
    </div>
  `;
}

render();
