/* ============================================================
   REVEAL — i contenuti si "posano" in vista mentre scrolli.
   Salita di 12px + fade, easing della firma del sito (--ease-emph),
   durata --dur-reveal, stagger 60ms per gruppo. Una volta sola.

   Progressive enhancement: lo stato nascosto vive sotto
   `html.has-reveal`, classe aggiunta da JS — se il JS non gira,
   i contenuti restano visibili. Rispetta prefers-reduced-motion.

   API globale: window.MM_reveal.scan(root)  → usata da pages.js
   dopo aver iniettato le pagine dinamiche.
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reduced motion o niente IntersectionObserver: no-op, tutto visibile.
  if (reduce || !("IntersectionObserver" in window)) {
    window.MM_reveal = { scan: function () {} };
    return;
  }

  // Blocchi da rivelare. I contenuti dentro .stack sono esclusi a runtime
  // (hanno già il loro movimento, lo scroll-stack).
  var SEL = [
    ".eyebrow-row", ".mm-eyebrow",
    ".h-lead", ".sec-h", ".pagehead__h", ".pagehead__lead",
    ".projlead", ".proofline", ".lead-p", ".divulgo__h",
    ".mm-card", ".media-card", ".beat", ".cv__row", ".forwho__col",
    ".projitem", ".noteitem", ".formato", ".tema", ".newsletter",
    ".valori__item", ".case", ".step-c", ".pillar",
    ".channels-row > *", ".logos > *"
  ].join(",");

  root.classList.add("has-reveal");

  var io = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      if (e.isIntersecting) {
        e.target.classList.add("is-revealed");
        io.unobserve(e.target);
      }
    }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });

  function scan(rootEl) {
    rootEl = rootEl || document;
    var nodes = rootEl.querySelectorAll(SEL);
    var groups = [];      // [{parent, items:[]}]
    var byParent = new Map();

    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.__mmReveal) continue;                       // già processato
      if (el.closest(".stack")) continue;                // gestito dallo scroll-stack
      if (el.parentElement && el.parentElement.closest(SEL)) continue; // evita reveal annidati
      el.__mmReveal = true;
      var p = el.parentNode;
      var g = byParent.get(p);
      if (!g) { g = { parent: p, items: [] }; byParent.set(p, g); groups.push(g); }
      g.items.push(el);
    }

    for (var k = 0; k < groups.length; k++) {
      var items = groups[k].items;
      for (var j = 0; j < items.length; j++) {
        var node = items[j];
        var delay = Math.min(j, 6) * 60;                 // stagger 60ms, cap 360ms
        node.style.setProperty("--reveal-delay", delay + "ms");
        node.classList.add("reveal");                    // sincrono → nessun flash
        io.observe(node);
      }
    }
  }

  window.MM_reveal = { scan: scan };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { scan(document); });
  } else {
    scan(document);
  }
})();
