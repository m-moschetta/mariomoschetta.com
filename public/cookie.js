/* ============================================================
   Cookie consent — banner + gating degli embed di terze parti.
   Gli iframe con class "mm-embed" + data-src si caricano solo
   dopo il consenso ("all"). Scelta salvata in localStorage.
   ============================================================ */
(function () {
  "use strict";
  var KEY = "mm-consent"; // "all" | "necessary"
  var EN = (function () { try { return localStorage.getItem("mm-lang") === "en"; } catch (e) { return false; } })();
  var T = EN ? {
    txt: 'I use technical cookies and, for embedded content (Spotify, YouTube), third-party cookies. ',
    link: "Privacy & cookies", only: "Necessary only", accept: "Accept",
    phText: "Third-party content (cookies).", phBtn: "Enable & load"
  } : {
    txt: 'Uso cookie tecnici e, per i contenuti incorporati (Spotify, YouTube), cookie di terze parti. ',
    link: "Privacy & cookie", only: "Solo necessari", accept: "Accetta",
    phText: "Contenuto di terze parti (cookie).", phBtn: "Abilita e carica"
  };

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function gateEmbeds() {
    var consent = get();
    document.querySelectorAll("iframe.mm-embed[data-src]").forEach(function (f) {
      var existing = f.parentNode.querySelector(".mm-embed-ph");
      if (consent === "all") {
        if (f.getAttribute("src") !== f.getAttribute("data-src")) f.setAttribute("src", f.getAttribute("data-src"));
        f.style.display = "";
        if (existing) existing.remove();
      } else {
        f.setAttribute("src", "about:blank");
        f.style.display = "none";
        if (!existing) {
          var ph = document.createElement("div");
          ph.className = "mm-embed-ph";
          ph.innerHTML = '<p>' + T.phText + '</p><button type="button" class="mm-btn mm-btn--primary mm-btn--sm">' + T.phBtn + '</button>';
          ph.querySelector("button").addEventListener("click", function () { set("all"); hideBanner(); gateEmbeds(); });
          f.parentNode.insertBefore(ph, f);
        }
      }
    });
  }

  function hideBanner() { var b = document.getElementById("cookie-banner"); if (b) b.classList.remove("is-visible"); }
  function showBanner() { var b = document.getElementById("cookie-banner"); if (b) b.classList.add("is-visible"); }

  function buildBanner() {
    if (document.getElementById("cookie-banner")) return;
    var b = document.createElement("div");
    b.id = "cookie-banner";
    b.className = "cookie-banner";
    b.setAttribute("role", "dialog");
    b.setAttribute("aria-label", "Cookie");
    b.innerHTML =
      '<p class="cookie-banner__txt">' + T.txt + '<a href="privacy.html">' + T.link + '</a>.</p>' +
      '<div class="cookie-banner__btns">' +
      '<button type="button" class="mm-btn mm-btn--secondary mm-btn--on-ink mm-btn--sm" data-c="necessary">' + T.only + '</button>' +
      '<button type="button" class="mm-btn mm-btn--primary mm-btn--sm" data-c="all">' + T.accept + '</button>' +
      '</div>';
    document.body.appendChild(b);
    b.querySelectorAll("button[data-c]").forEach(function (btn) {
      btn.addEventListener("click", function () { set(btn.getAttribute("data-c")); hideBanner(); gateEmbeds(); });
    });
  }

  // pages.js chiama questo dopo ogni render client-side
  window.MM_gateEmbeds = gateEmbeds;

  function init() {
    buildBanner();
    if (!get()) showBanner();
    gateEmbeds();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
