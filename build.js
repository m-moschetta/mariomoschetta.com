/* ============================================================
   Pre-rendering SEO per le pagine profonde.
   Inietta l'HTML statico (IT, canonico) dentro <div id="app"> di
   ogni pagina, così crawler e no-JS vedono il contenuto.
   pages.js continua a girare nel browser per toggle EN / menu /
   filtri / newsletter (re-render idempotente in IT).
   Eseguito da Vercel (buildCommand) e in locale prima del deploy.
   ============================================================ */
const fs = require("fs");
const path = require("path");
const PUB = path.join(__dirname, "public");

// 1) carica links.js -> window.MM_LINKS
const linksSrc = fs.readFileSync(path.join(PUB, "links.js"), "utf8");
const win = {};
new Function("window", linksSrc)(win);
global.window = win; // così pages.js (in Node) vede window.MM_LINKS
const L = win.MM_LINKS || {};

// 2) carica il renderer puro da pages.js
const { buildAppHTML } = require(path.join(PUB, "pages.js"));

// 3) riempi i data-link href="#" con gli URL reali (per crawler / no-JS)
function fillLinks(html) {
  return html.replace(/data-link="([a-zA-Z]+)" href="#"/g, function (m, key) {
    const url = key === "whatsapp" ? L.whatsapp : L[key];
    if (!url) return m;
    const ext = /^https?:/i.test(url) ? ' target="_blank" rel="noopener"' : "";
    return 'data-link="' + key + '" href="' + url + '"' + ext;
  });
}

const PAGES = ["storia", "progetti", "aziende", "formazione", "note"];
let ok = 0;
for (const p of PAGES) {
  try {
    const file = path.join(PUB, p + ".html");
    let html = fs.readFileSync(file, "utf8");
    const body = fillLinks(buildAppHTML(p, "it"));
    const re = /(<div id="app">)[\s\S]*?(<\/div>\s*<script src="https:\/\/unpkg\.com\/lucide)/;
    if (!re.test(html)) { console.error("  ! marker non trovato in", p); continue; }
    html = html.replace(re, "$1" + body + "$2");
    fs.writeFileSync(file, html);
    ok++;
    console.log("  ✓ pre-rendered", p + ".html");
  } catch (e) {
    console.error("  ! errore su", p, "-", e.message);
  }
}
console.log("SSR: " + ok + "/" + PAGES.length + " pagine pre-renderizzate");
