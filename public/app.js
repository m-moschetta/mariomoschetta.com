/* ============================================================
   Mario Moschetta — site behaviour
   - Centralised outbound LINKS (single source of truth)
   - IT/EN toggle (persisted)
   - Lucide icons, podcast open, smooth in-page scroll
   ============================================================ */
(function () {
  "use strict";

  // Link esterni dalla sorgente condivisa (links.js)
  var LINKS = window.MM_LINKS || {};
  var SPOTIFY_SHOW_ID = LINKS.SPOTIFY_SHOW_ID || "";

  // ─────────────────────────────────────────────────────────
  // BILINGUAL COPY (mirrors the design handoff)
  // ─────────────────────────────────────────────────────────
  var COPY = {
    it: {
      nav: { storia: "Storia", progetti: "Progetti", aziende: "Aziende", formazione: "Formazione", note: "Note" },
      cta: "Scrivimi",
      soglia: { statementPre: "Accorcio la distanza tra ciò che immaginiamo e ", statementEm: "ciò che usiamo.", olivetti: "«Un sogno sembra un sogno fino a quando non si comincia a lavorarci.»", by: "Adriano Olivetti", cue: "Continua" },
      apertura: {
        eyebrow: "Chi sono",
        h: "Vedo l'orizzonte prima che diventi strada.",
        p: "Vedo dove sta andando il mondo un po' prima degli altri. La parte che mi interessa, però, è quella dopo: fare in modo che le cose nuove arrivino davvero alle persone.",
        photo: "Foto: Mario al lavoro, Milano"
      },
      percorso: {
        eyebrow: "Il percorso",
        beats: [
          { h: "Primo: capire come funzionano le persone.", body: "Ho studiato marketing perché volevo capire una cosa sola: perché le persone scelgono ciò che scelgono. Se avessi voluto solo costruire, <b>avrei fatto ingegneria</b>." },
          { h: "Poi ho costruito.", body: "Nel 2021 ho co-fondato Fyblo, una fintech che portava gli strumenti finanziari sulla blockchain. Un'idea che in pochi, allora, pensavano avesse senso. L'abbiamo costruita davvero — piattaforma DLT, un wallet proprietario conforme a eIDAS, le prime tokenizzazioni — e a crederci sono stati investitori come <b>CDP Venture Capital, Zest, Credem e Nexi</b>, fino alla call DLT del Milano Hub di Banca d'Italia. Nel 2025 tecnologia e asset sono passati ad Add Value." },
          { h: "Soprattutto, ho imparato a portare le cose a un mercato più ampio.", body: "In Pathway ho fatto crescere un prodotto edtech fino a <b>migliaia di persone</b>, con partner come Mondadori e il British Council. Perché un'idea, per contare, deve arrivare a chi la userà." },
          { h: "Oggi.", body: "Con <b>Thinking</b> costruisco software per chi ha qualcosa di nuovo da portare nel mondo, e con <b>Fatturai</b> lo faccio per me. Il prossimo passo è uno solo: costruire e scalare qualcosa di <b>intero</b>." }
        ],
        link: "Il percorso, per intero"
      },
      cosa: {
        eyebrow: "Cosa faccio oggi",
        h: "Tre verbi. Una persona sola dietro.",
        pillars: [
          { ic: "code-xml", t: "Costruisco", d: "Software, app e SaaS per chi ha un'idea nuova da portare sul mercato.", link: "Thinking", linkKey: "thinking" },
          { ic: "graduation-cap", t: "Insegno", d: "Porto le tecnologie che stanno cambiando il lavoro — l'AI in testa — a professionisti e aziende. Al Talent Garden e oltre.", link: "La formazione", href: "#cosa" },
          { ic: "radio", t: "Divulgo", d: "Racconto la tecnologia a una community di oltre 20.000 persone. Ogni giorno, con parole semplici.", link: "I canali", href: "#racconto" }
        ]
      },
      progetti: {
        eyebrow: "Le cose che ho costruito",
        lead: "Ogni progetto qui è partito da un'intuizione che sembrava in anticipo. Oggi è qualcosa che esiste, e che qualcuno usa.",
        names: [
          { t: "Fyblo", meta: "Fintech · 2021—2025", linkKey: "fyblo" },
          { t: "Pathway", meta: "Growth · edtech", linkKey: "pathway" },
          { t: "Fatturai", meta: "SaaS · live", linkKey: "fatturai" },
          { t: "Lavori su misura", meta: "con Thinking", linkKey: "thinking" }
        ],
        link: "Apri i progetti"
      },
      racconto: {
        eyebrow: "Racconto",
        lead: "Racconto la tecnologia mentre la attraverso. Niente hype: solo come funziona davvero ciò che ci ritroveremo tra le mani.",
        podK: "Podcast · settimanale", podT: "Thinking Forward",
        podSub: "Il podcast che conduco con Giancarlo. Spotify + YouTube.",
        podLink: "Ascolta l'ultima puntata",
        proof: "Oltre 20.000 persone · 7M+ visualizzazioni",
        channelsH: "Dove mi trovi"
      },
      contatto: { h: "Se quello che faccio ti somiglia, scrivimi.", p: "Due righe, senza impegno. Ti rispondo io.", sub: "WhatsApp o email, come preferisci.", call: "Prenota una call" },
      footer: {
        tagline: "Accorcio la distanza tra ciò che immaginiamo e ciò che usiamo.",
        projects: "Progetti", channelsCol: "Canali", more: "Altro",
        links: { storia: "Storia", note: "Note", formazione: "Formazione" },
        rights: "© 2026 Mario Moschetta · Milano", built: "Costruito a Milano ⚡"
      }
    },
    en: {
      nav: { storia: "Story", progetti: "Projects", aziende: "Work", formazione: "Teaching", note: "Notes" },
      cta: "Message me",
      soglia: { statementPre: "I close the gap between what we imagine and ", statementEm: "what we actually use.", olivetti: "“A dream looks like a dream until you start working on it.”", by: "Adriano Olivetti", cue: "Scroll" },
      apertura: {
        eyebrow: "About",
        h: "I see the horizon before it becomes a road.",
        p: "I tend to see where the world is heading a little before others do. But the part I care about is what comes next: making sure the new things actually reach people.",
        photo: "Photo: Mario at work, Milan"
      },
      percorso: {
        eyebrow: "The path",
        beats: [
          { h: "First: understanding how people work.", body: "I studied marketing because I wanted to understand one thing: why people choose what they choose. If I'd only wanted to build, <b>I'd have studied engineering</b>." },
          { h: "Then I built.", body: "In 2021 I co-founded Fyblo, a fintech bringing financial instruments onto the blockchain. An idea few thought made sense back then. We actually built it — a DLT platform, a proprietary eIDAS-aligned wallet, the first tokenizations — and the believers were investors like <b>CDP Venture Capital, Zest, Credem and Nexi</b>, all the way to the DLT call of the Bank of Italy's Milano Hub. In 2025 the technology and assets passed to Add Value." },
          { h: "Above all, I learned to take things to a wider market.", body: "At Pathway I grew an edtech product to <b>thousands of people</b>, with partners like Mondadori and the British Council. Because an idea, to matter, has to reach the people who'll use it." },
          { h: "Today.", body: "With <b>Thinking</b> I build software for people who have something new to bring into the world, and with <b>Fatturai</b> I do it for myself. The next step is just one: to build and scale something <b>whole</b>." }
        ],
        link: "The path, in full"
      },
      cosa: {
        eyebrow: "What I do",
        h: "Three verbs. One person behind them.",
        pillars: [
          { ic: "code-xml", t: "I build", d: "Software, apps and SaaS for people with a new idea to bring to market.", link: "Thinking", linkKey: "thinking" },
          { ic: "graduation-cap", t: "I teach", d: "I bring the technologies reshaping work — AI first — to professionals and companies. At Talent Garden and beyond.", link: "Teaching", href: "#cosa" },
          { ic: "radio", t: "I share", d: "I explain technology to a community of 20,000+ people. Every day, in plain words.", link: "The channels", href: "#racconto" }
        ]
      },
      progetti: {
        eyebrow: "What I've built",
        lead: "Every project here started from a hunch that looked early. Today it's something that exists, and that someone uses.",
        names: [
          { t: "Fyblo", meta: "Fintech · 2021—2025", linkKey: "fyblo" },
          { t: "Pathway", meta: "Growth · edtech", linkKey: "pathway" },
          { t: "Fatturai", meta: "SaaS · live", linkKey: "fatturai" },
          { t: "Custom work", meta: "with Thinking", linkKey: "thinking" }
        ],
        link: "Open the projects"
      },
      racconto: {
        eyebrow: "I tell stories",
        lead: "I explain technology as I move through it. No hype: just how the things we'll soon hold in our hands actually work.",
        podK: "Podcast · weekly", podT: "Thinking Forward",
        podSub: "The podcast I host with Giancarlo. Spotify + YouTube.",
        podLink: "Listen to the latest episode",
        proof: "20,000+ people · 7M+ views",
        channelsH: "Where to find me"
      },
      contatto: { h: "If what I do resonates, write to me.", p: "Two lines, no strings. You'll hear back from me.", sub: "WhatsApp or email, whichever you prefer.", call: "Book a call" },
      footer: {
        tagline: "I close the gap between what we imagine and what we actually use.",
        projects: "Projects", channelsCol: "Channels", more: "More",
        links: { storia: "Story", note: "Notes", formazione: "Teaching" },
        rights: "© 2026 Mario Moschetta · Milan", built: "Built in Milan ⚡"
      }
    }
  };

  // ── helpers ──────────────────────────────────────────────
  function get(obj, path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
  }
  function applyLinks(root) {
    (root || document).querySelectorAll("[data-link]").forEach(function (el) {
      var key = el.getAttribute("data-link");
      var url = key === "whatsapp" ? (LINKS.whatsappActive || LINKS.whatsapp) : LINKS[key];
      if (!url) return;
      el.setAttribute("href", url);
      // i link esterni si aprono in una nuova scheda
      if (/^https?:/i.test(url)) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      } else {
        el.removeAttribute("target");
        el.removeAttribute("rel");
      }
    });
  }

  // ── list builders (rebuilt on language change) ───────────
  function buildRoad(t) {
    return t.percorso.beats.map(function (b) {
      return '<div class="beat"><span class="beat__node"></span>' +
        '<h3 class="beat__h">' + b.h + '</h3>' +
        '<p class="beat__body">' + b.body + '</p></div>';
    }).join("");
  }
  function buildPillars(t) {
    return t.cosa.pillars.map(function (p) {
      var attr = p.linkKey ? ' data-link="' + p.linkKey + '"' : "";
      var href = p.href || "#";
      return '<div class="mm-card mm-card--interactive pillar">' +
        '<span class="pillar__ic"><i data-lucide="' + p.ic + '"></i></span>' +
        '<h3>' + p.t + '</h3><p>' + p.d + '</p>' +
        '<a class="mm-outlink"' + attr + ' href="' + href + '">' + p.link +
        ' <i data-lucide="arrow-up-right" aria-hidden="true"></i></a></div>';
    }).join("");
  }
  function buildProjlist(t) {
    return t.progetti.names.map(function (n) {
      var attr = n.linkKey ? ' data-link="' + n.linkKey + '"' : "";
      return '<li class="projitem"><a' + attr + ' href="#" class="projitem__link">' +
        '<span class="projitem__name">' + n.t + '</span>' +
        '<span class="projitem__meta">' + n.meta + '</span>' +
        '<i data-lucide="arrow-up-right"></i></a></li>';
    }).join("");
  }

  // ── apply a language ─────────────────────────────────────
  function setLang(lang) {
    var t = COPY[lang] || COPY.it;
    document.documentElement.lang = lang;

    // simple text nodes
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = get(t, el.getAttribute("data-i18n"));
      if (val == null && el.getAttribute("data-i18n") === "cta") val = t.cta;
      if (val != null) el.textContent = val;
    });
    // aria labels (portrait)
    document.querySelectorAll("[data-i18n-label]").forEach(function (el) {
      var val = get(t, el.getAttribute("data-i18n-label"));
      if (val != null) el.setAttribute("aria-label", val);
    });

    // rebuilt lists
    var road = document.getElementById("road");
    var pillars = document.getElementById("pillars");
    var projlist = document.getElementById("projlist");
    if (road) road.innerHTML = buildRoad(t);
    if (pillars) pillars.innerHTML = buildPillars(t);
    if (projlist) projlist.innerHTML = buildProjlist(t);

    // whatsapp text per language
    LINKS.whatsappActive = lang === "en" ? LINKS.whatsappEn : LINKS.whatsapp;
    document.querySelectorAll('[data-link="whatsapp"]').forEach(function (el) {
      el.setAttribute("href", LINKS.whatsappActive);
    });

    // toggle button state
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });

    applyLinks(document);
    if (window.lucide) window.lucide.createIcons();
    try { localStorage.setItem("mm-lang", lang); } catch (e) {}
  }

  // ── podcast: optional inline Spotify embed, else open link ─
  function wirePodcast() {
    var btn = document.querySelector(".playbtn");
    var embed = document.getElementById("podcast-embed");
    if (!btn) return;
    if (SPOTIFY_SHOW_ID && embed) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        if (!embed.hasChildNodes()) {
          var f = document.createElement("iframe");
          f.src = "https://open.spotify.com/embed/show/" + SPOTIFY_SHOW_ID + "?theme=0";
          f.width = "100%"; f.height = "232"; f.frameBorder = "0";
          f.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
          f.loading = "lazy"; f.style.borderRadius = "12px"; f.style.marginTop = "16px";
          embed.appendChild(f);
        }
        embed.hidden = !embed.hidden;
      });
    }
    // otherwise the anchor's data-link="spotify" href handles it natively
  }

  // ── smooth scroll for in-page anchors ────────────────────
  function wireSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", id);
      });
    });
  }

  // ── mobile menu ──────────────────────────────────────────
  function wireMobileMenu() {
    var burger = document.getElementById("nav-burger");
    var menu = document.getElementById("navmenu");
    var close = document.getElementById("nav-close");
    if (!burger || !menu) return;
    function open() {
      menu.classList.add("is-open"); menu.setAttribute("aria-hidden", "false");
      burger.setAttribute("aria-expanded", "true"); document.body.classList.add("menu-open");
    }
    function shut() {
      menu.classList.remove("is-open"); menu.setAttribute("aria-hidden", "true");
      burger.setAttribute("aria-expanded", "false"); document.body.classList.remove("menu-open");
    }
    burger.addEventListener("click", open);
    if (close) close.addEventListener("click", shut);
    menu.querySelectorAll("a, .lang button").forEach(function (el) { el.addEventListener("click", shut); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") shut(); });
  }

  // ── boot ─────────────────────────────────────────────────
  function boot() {
    var saved = "it";
    try { saved = localStorage.getItem("mm-lang") === "en" ? "en" : "it"; } catch (e) {}
    applyLinks(document);
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
    wirePodcast();
    wireSmoothScroll();
    wireMobileMenu();
    if (window.lucide) window.lucide.createIcons();
    if (saved !== "it") setLang(saved); // IT is the static baseline
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }
})();
