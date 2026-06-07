/* ============================================================
   Mario Moschetta — pagine profonde (storia/progetti/aziende/
   formazione/note). Render statico vanilla, niente React/Babel.
   Una sola entry: <body data-page="..."> + #app. Copy bilingue.
   ============================================================ */
(function (root) {
  "use strict";
  var L = (root && root.MM_LINKS) || {};

  // ---- copy bilingue (mirror del design handoff) ----
  var PAGECOPY = {
    it: {
      nav: { storia: "Storia", progetti: "Progetti", aziende: "Aziende", formazione: "Formazione", note: "Note" },
      cta: "Scrivimi", ctaCall: "Prenota una call",
      whatsapp: L.whatsapp,
      footer: {
        tagline: "Accorcio la distanza tra ciò che immaginiamo e ciò che usiamo.",
        projects: "Progetti", channelsCol: "Canali", more: "Altro",
        links: { storia: "Storia", note: "Note", formazione: "Formazione" },
        rights: "© 2026 Mario Moschetta · Milano", built: "Costruito a Milano ⚡"
      },
      storia: {
        eyebrow: "Storia", pathLabel: "il percorso", provenance: "Dove sono passato",
        h: "Come fare impresa non lo insegna nessuno.",
        lead: "Io lo sto imparando un pezzo alla volta. Marketing, growth, prodotto, una fintech regolamentata: non mestieri diversi, ma i pezzi di una cosa sola — fare impresa. Il prossimo passo non è toccarne un altro: è costruire e scalare qualcosa di intero.",
        photo: "Mario, Milano",
        beats: [
          { yr: "Bocconi", t: "Prima, capire.", d: "Economia, con una tesi sull'AI applicata al marketing. Volevo capire una cosa sola: perché le persone scelgono ciò che scelgono. Se avessi voluto solo costruire, avrei fatto ingegneria." },
          { yr: "2014—2021", t: "L'occhio sul mercato.", d: "Consulenza e multinazionali, poi le startup: PwC sull'esperienza utente, Reckitt, Webidoo, Growth Tribe. Anni passati a guardare da vicino cosa il mercato vuole, e perché." },
          { yr: "2021—2025", t: "Fyblo. Costruire sul serio.", d: "Co-fondatore di una fintech che portava gli strumenti finanziari sulla blockchain — un'idea che in pochi, allora, pensavano avesse senso. L'abbiamo costruita davvero: piattaforma DLT, un wallet proprietario conforme a eIDAS, le prime tokenizzazioni. A crederci sono stati investitori come CDP Venture Capital, Zest, Credem e Nexi, fino alla call DLT del Milano Hub di Banca d'Italia. Nel 2025 tecnologia e asset sono passati ad Add Value." },
          { yr: "Pathway", t: "Portare a mercato.", d: "Head of Growth di un prodotto edtech, cresciuto fino a migliaia di persone su B2C e B2B, con partner come Mondadori (PLAI) e il British Council. Perché un'idea, per contare, deve arrivare a chi la userà." },
          { yr: "Talent Garden", t: "Insegnare.", d: "Istruttore: porto AI, blockchain e cloud a professionisti e aziende. Spiegare il complesso in modo semplice è diventato un mestiere, non un hobby." },
          { yr: "Oggi", t: "Thinking, Fatturai, e il racconto.", d: "Con Thinking costruisco software per chi ha qualcosa di nuovo da portare nel mondo; con Fatturai lo faccio per me. E ogni giorno racconto la tecnologia a una community di oltre 20.000 persone." }
        ],
        valoriEyebrow: "In cosa credo",
        valoriH: "La tecnologia conta quando arriva alle persone.",
        valori: [
          { t: "Istruzione accessibile", d: "Sono equity partner in EdTech e attivo con Vision APS. La tecnologia nuova deve arrivare a chi non è del mestiere, prima e meglio." },
          { t: "Costruire in pubblico", d: "Mostro il processo, non solo il risultato. Si impara di più da come una cosa è fatta che da quanto è lucida." },
          { t: "Anticipare, non inseguire", d: "Mi interessa il terreno che gli altri non vedono ancora. Non per arrivarci primo: per renderlo accessibile." }
        ]
      },
      progetti: {
        eyebrow: "Progetti", h: "Le cose che ho costruito.", sourcesLabel: "Fonti",
        lead: "Ogni progetto è partito da un'intuizione che sembrava in anticipo. Oggi esiste, ed è usato da qualcuno.",
        cases: [
          { t: "Fyblo", meta: "Fintech regolamentata · 2021—2025 · Co-founder", d: "Una fintech per portare gli strumenti finanziari sulla blockchain, quando in pochi pensavano avesse senso. Abbiamo costruito la piattaforma DLT, un wallet proprietario per custodire asset digitali in Europa e le prime tokenizzazioni di strumenti partecipativi. A crederci sono stati investitori come CDP Venture Capital, Zest, Credem e Nexi, fino alla call DLT del Milano Hub di Banca d'Italia. Nel 2025 tecnologia e asset sono passati ad Add Value.", tags: ["tokenizzazione", "wallet proprietario", "DLT", "fintech regolamentata"], proof: "Investitori: CDP Venture Capital · Zest · Credem · Nexi", link: "Fyblo", linkKey: "fyblo", sources: [{ l: "Annuncio Zest VC", u: "https://www.instagram.com/p/DUA1b35iGkS/" }, { l: "Crunchbase", u: "https://www.crunchbase.com/organization/fyblo" }, { l: "AziendaBanca", u: "https://www.aziendabanca.it/notizie/fintech-insurtech/re-token" }] },
          { t: "Pathway", meta: "Edtech · Head of Growth · Mondadori PLAI 2024", d: "In Pathway ho fatto crescere Way2IELTS — una academy AI per la preparazione alla certificazione d'inglese — fino a migliaia di persone, su B2C e B2B. Selezionata nell'acceleratore Mondadori PLAI e in partnership con il British Council. La prova che so portare a mercato, non solo a compimento.", tags: ["growth", "B2C + B2B", "AI academy"], proof: "Migliaia di utenti · Mondadori PLAI · British Council", link: "Pathway", linkKey: "pathway", sources: [{ l: "Mondadori PLAI", u: "https://www.mondadorigroup.com/media-room/news-and-press-releases/2024/11-startups-for-plais-first-acceleration-round" }, { l: "Primaonline", u: "https://www.primaonline.it/2025/02/06/432642/mondadori-accelera-sullai-e-lancia-le-start-up-di-plai/" }, { l: "Way2IELTS", u: "https://www.way2ielts.com/" }] },
          { t: "Fatturai", meta: "SaaS · live", d: "Un SaaS di fatturazione con integrazione SDI, oggi vivo e con utenti reali. È dove costruisco per me ciò che costruisco per gli altri: prodotto, non slide.", tags: ["SaaS", "SDI", "AI"], proof: "Live · utenti reali", link: "Fatturai", linkKey: "fatturai" },
          { t: "Lavori su misura", meta: "con Thinking S.R.L.", d: "App native, piattaforme e MVP per startup e PMI che hanno un'idea nuova da portare sul mercato. AI per andare veloce, developer esperti che supervisionano ogni progetto.", tags: ["app native", "piattaforme", "MVP"], proof: "Lo spoke commerciale: si costruisce con Thinking", link: "Thinking", linkKey: "thinking" }
        ]
      },
      aziende: {
        eyebrow: "Lavoriamo insieme",
        h: "Hai un'idea nuova. Vuoi vederla funzionare — non tra un anno.",
        lead: "La costruiamo insieme: porto l'occhio sul mercato di chi viene dal marketing, la capacità di anticipare dove va la tecnologia e l'esperienza di chi una fintech regolamentata l'ha costruita davvero.",
        stepEyebrow: "Come lavoro",
        steps: [
          { n: "01", t: "Partiamo dal mercato.", d: "Non da cosa è tecnicamente possibile, ma da cosa il mercato vorrà e perché lo sceglierà. È il pezzo che cambia tutto il resto." },
          { n: "02", t: "Prototipiamo veloce.", d: "L'AI accorcia i tempi: in poche settimane vedi qualcosa di vero, non una presentazione. Si corregge la rotta presto, quando costa poco." },
          { n: "03", t: "Costruiamo sul sicuro.", d: "Developer esperti supervisionano ogni progetto. La visione non resta una slide: diventa un prodotto affidabile, in domini anche difficili e regolamentati." },
          { n: "04", t: "Portiamo a mercato.", d: "Un prodotto conta quando qualcuno lo usa. Penso alla distribuzione fin dal primo giorno, non come un dopo." }
        ],
        forEyebrow: "Per chi",
        forYes: { t: "Fa per te se", items: ["hai un'idea nuova e vuoi vederla nel mondo reale", "preferisci un prodotto usato a un progetto perfetto nel cassetto", "vuoi qualcuno che capisca mercato e codice, non solo uno dei due"] },
        forNo: { t: "Non fa per te se", items: ["cerchi il preventivo più basso a parità di brief", "vuoi solo \"eseguire\" senza mettere in discussione l'idea", "il tempo non conta e va bene aspettare un anno"] },
        pricingNote: "Niente listino. Mi scrivi cosa hai in mente, ti dico onestamente se è fattibile, come, e cosa serve.",
        thinking: { t: "Il software si costruisce con Thinking.", d: "Thinking S.R.L. è lo studio AI-native dove prendono forma i progetti. Qui sono io; lì c'è la squadra.", link: "Vai a Thinking" },
        training: { t: "Cerchi formazione, non sviluppo?", d: "Porto AI, blockchain e cloud a team e aziende. È un percorso a parte.", link: "La formazione" },
        ctaH: "Hai un'idea? Vediamo se possiamo costruirla.",
        ctaP: "Scrivimi due righe su WhatsApp, zero impegno. Ti rispondo io."
      },
      formazione: {
        eyebrow: "Formazione",
        h: "Insegno la tecnologia che sta cambiando il lavoro.",
        lead: "Al Talent Garden e oltre: porto l'AI, la blockchain e il cloud a professionisti e aziende — incluso il reskilling in ambito bancario. Spiego il complesso in modo semplice, con esempi, senza hype.",
        temiEyebrow: "I temi",
        temi: [
          { ic: "brain-circuit", t: "Intelligenza artificiale", d: "Cosa è davvero utile oggi, cosa cambia nel lavoro, come si usa senza farsi usare." },
          { ic: "link", t: "Blockchain & Web3", d: "Tokenizzazione, wallet, eIDAS: la parte concreta, da chi l'ha costruita in una fintech regolamentata." },
          { ic: "cloud", t: "Cloud & dati", d: "Come si mette in piedi qualcosa che regge, scala e non costa una fortuna." },
          { ic: "cpu", t: "IoT & tecnologie abilitanti", d: "Le tecnologie che cambieranno i prossimi anni, spiegate prima che diventino mainstream." }
        ],
        formatiEyebrow: "I formati",
        formati: [
          { t: "Talk & keynote", d: "Interventi a eventi e conferenze su dove sta andando la tecnologia." },
          { t: "Workshop", d: "Sessioni pratiche, mani sulla tastiera, per team che vogliono capire facendo." },
          { t: "Corsi aziendali", d: "Percorsi di reskilling su misura, anche per il settore bancario." }
        ],
        proofEyebrow: "E ogni giorno, divulgo",
        proofH: "Racconto la tecnologia a oltre 20.000 persone.",
        proofP: "Su TikTok spiego come funziona ciò che usiamo ogni giorno. Oltre 7 milioni di visualizzazioni complessive, e contando — la prova che so rendere semplice il complesso.",
        statCap: "visualizzazioni totali · 21k follower",
        ctaH: "Cerchi qualcuno che la spieghi davvero?",
        ctaP: "Scrivimi: parliamo di cosa serve al tuo team o al tuo evento."
      },
      note: {
        eyebrow: "Note", h: "Appunti, mentre costruisco.",
        lead: "Scrivo quando ho qualcosa da dire — non per calendario. Articoli più lunghi e pensieri brevi, sotto lo stesso tetto.",
        soonNote: "I primi pezzi arrivano presto. Intanto, ecco di cosa scriverò.",
        filters: ["Tutto", "Articoli", "Pensieri"], articleWord: "Articolo",
        posts: [
          { kind: "Pensiero", t: "Perché \"usato\" batte \"innovativo\".", d: "Una cosa nuova conta quando smette di essere immaginata e qualcuno inizia a usarla. Tutto il resto è marketing.", read: "2 min" },
          { kind: "Articolo", t: "Cosa ho imparato costruendo un wallet conforme a eIDAS.", d: "La parte difficile non era la crittografia. Era tenere insieme regolamentazione, esperienza utente e tempi reali.", read: "8 min" },
          { kind: "Pensiero", t: "L'AI non accorcia il lavoro. Sposta dove serve attenzione.", d: "Il prototipo è gratis. La parte che conta — capire cosa costruire — è diventata più importante, non meno.", read: "3 min" },
          { kind: "Articolo", t: "Portare a mercato: il pezzo che nessuno insegna.", d: "Costruire un prodotto e farlo usare sono due mestieri diversi. Il secondo è quello che ho imparato in Pathway.", read: "6 min" },
          { kind: "Pensiero", t: "Vedere prima non serve a niente, da solo.", d: "Il dono è arrivare un po' prima. Il lavoro è accorciare la distanza perché ci arrivino anche gli altri.", read: "2 min" }
        ],
        newsletterH: "Una nota quando pubblico.",
        newsletterP: "Niente spam, niente calendario. Solo quando ho scritto qualcosa che vale.",
        newsletterPlaceholder: "tu@esempio.it", newsletterBtn: "Iscrivimi",
        newsletterHint: "Ti scrivo solo io, e solo quando pubblico.",
        newsletterThanks: "Grazie! Ti scrivo quando pubblico."
      }
    },
    en: {
      nav: { storia: "Story", progetti: "Projects", aziende: "Work", formazione: "Teaching", note: "Notes" },
      cta: "Message me", ctaCall: "Book a call",
      whatsapp: L.whatsappEn,
      footer: {
        tagline: "I close the gap between what we imagine and what we actually use.",
        projects: "Projects", channelsCol: "Channels", more: "More",
        links: { storia: "Story", note: "Notes", formazione: "Teaching" },
        rights: "© 2026 Mario Moschetta · Milan", built: "Built in Milan ⚡"
      },
      storia: {
        eyebrow: "Story", pathLabel: "the path", provenance: "Where I've been",
        h: "Nobody teaches you how to build a company.",
        lead: "I'm learning it one piece at a time. Marketing, growth, product, a regulated fintech: not separate crafts, but the pieces of one thing — building a company. The next step isn't touching another piece: it's building and scaling something whole.",
        photo: "Mario, Milan",
        beats: [
          { yr: "Bocconi", t: "First, understand.", d: "Economics, with a thesis on AI applied to marketing. I wanted to understand one thing: why people choose what they choose. If I'd only wanted to build, I'd have studied engineering." },
          { yr: "2014—2021", t: "An eye on the market.", d: "Consulting and corporates, then startups: PwC on user experience, Reckitt, Webidoo, Growth Tribe. Years spent watching closely what the market wants, and why." },
          { yr: "2021—2025", t: "Fyblo. Building for real.", d: "Co-founder of a fintech bringing financial instruments onto the blockchain — an idea few thought made sense back then. We actually built it: a DLT platform, a proprietary eIDAS-aligned wallet, the first tokenizations. The believers were investors like CDP Venture Capital, Zest, Credem and Nexi, all the way to the DLT call of the Bank of Italy's Milano Hub. In 2025 the technology and assets passed to Add Value." },
          { yr: "Pathway", t: "Taking things to market.", d: "Head of Growth of an edtech product, grown to thousands of people across B2C and B2B, with partners like Mondadori (PLAI) and the British Council. Because an idea, to matter, has to reach the people who'll use it." },
          { yr: "Talent Garden", t: "Teaching.", d: "Instructor: I bring AI, blockchain and cloud to professionals and companies. Explaining the complex simply became a craft, not a hobby." },
          { yr: "Today", t: "Thinking, Fatturai, and the storytelling.", d: "With Thinking I build software for people who have something new to bring into the world; with Fatturai I do it for myself. And every day I explain technology to a community of 20,000+ people." }
        ],
        valoriEyebrow: "What I believe",
        valoriH: "Technology matters when it reaches people.",
        valori: [
          { t: "Accessible education", d: "I'm an equity partner in EdTech and active with Vision APS. New technology should reach those outside the field — sooner, and better." },
          { t: "Building in public", d: "I show the process, not just the result. You learn more from how a thing is made than from how polished it looks." },
          { t: "Anticipate, don't chase", d: "I care about the ground others can't see yet. Not to get there first — to make it accessible." }
        ]
      },
      progetti: {
        eyebrow: "Projects", h: "What I've built.", sourcesLabel: "Sources",
        lead: "Every project started from a hunch that looked early. Today it exists, and someone uses it.",
        cases: [
          { t: "Fyblo", meta: "Regulated fintech · 2021—2025 · Co-founder", d: "A fintech bringing financial instruments onto the blockchain, when few thought it made sense. We built the DLT platform, a proprietary wallet to custody digital assets in Europe, and the first tokenizations of participatory instruments. The believers were investors like CDP Venture Capital, Zest, Credem and Nexi, all the way to the DLT call of the Bank of Italy's Milano Hub. In 2025 the technology and assets passed to Add Value.", tags: ["tokenization", "proprietary wallet", "DLT", "regulated fintech"], proof: "Investors: CDP Venture Capital · Zest · Credem · Nexi", link: "Fyblo", linkKey: "fyblo", sources: [{ l: "Zest VC announcement", u: "https://www.instagram.com/p/DUA1b35iGkS/" }, { l: "Crunchbase", u: "https://www.crunchbase.com/organization/fyblo" }, { l: "AziendaBanca", u: "https://www.aziendabanca.it/notizie/fintech-insurtech/re-token" }] },
          { t: "Pathway", meta: "Edtech · Head of Growth · Mondadori PLAI 2024", d: "At Pathway I grew Way2IELTS — an AI academy for English certification prep — to thousands of people, across B2C and B2B. Selected into the Mondadori PLAI accelerator and partnered with the British Council. Proof that I take things to market, not just to completion.", tags: ["growth", "B2C + B2B", "AI academy"], proof: "Thousands of users · Mondadori PLAI · British Council", link: "Pathway", linkKey: "pathway", sources: [{ l: "Mondadori PLAI", u: "https://www.mondadorigroup.com/media-room/news-and-press-releases/2024/11-startups-for-plais-first-acceleration-round" }, { l: "Primaonline", u: "https://www.primaonline.it/2025/02/06/432642/mondadori-accelera-sullai-e-lancia-le-start-up-di-plai/" }, { l: "Way2IELTS", u: "https://www.way2ielts.com/" }] },
          { t: "Fatturai", meta: "SaaS · live", d: "An invoicing SaaS with SDI integration, live today with real users. It's where I build for myself what I build for others: product, not slides.", tags: ["SaaS", "SDI", "AI"], proof: "Live · real users", link: "Fatturai", linkKey: "fatturai" },
          { t: "Custom work", meta: "with Thinking S.R.L.", d: "Native apps, platforms and MVPs for startups and SMEs with a new idea to bring to market. AI to move fast, experienced developers supervising every project.", tags: ["native apps", "platforms", "MVP"], proof: "The commercial spoke: built with Thinking", link: "Thinking", linkKey: "thinking" }
        ]
      },
      aziende: {
        eyebrow: "Let's work together",
        h: "You have a new idea. You want to see it work — not in a year.",
        lead: "We build it together: I bring a marketer's eye for the market, a feel for where technology is heading, and the experience of someone who actually built a regulated fintech.",
        stepEyebrow: "How I work",
        steps: [
          { n: "01", t: "We start from the market.", d: "Not from what's technically possible, but from what the market will want and why it'll choose it. That's the piece that changes everything else." },
          { n: "02", t: "We prototype fast.", d: "AI shortens the timeline: in a few weeks you see something real, not a deck. We correct course early, when it's cheap." },
          { n: "03", t: "We build on solid ground.", d: "Experienced developers supervise every project. The vision doesn't stay a slide: it becomes a reliable product, even in hard, regulated domains." },
          { n: "04", t: "We take it to market.", d: "A product matters when someone uses it. I think about distribution from day one, not as an afterthought." }
        ],
        forEyebrow: "Who it's for",
        forYes: { t: "It's for you if", items: ["you have a new idea and want to see it in the real world", "you'd rather have a product people use than a perfect one in a drawer", "you want someone who understands market and code, not just one of the two"] },
        forNo: { t: "It's not for you if", items: ["you're after the lowest quote for the same brief", "you just want execution, no questioning of the idea", "time doesn't matter and waiting a year is fine"] },
        pricingNote: "No price list. Tell me what you have in mind; I'll tell you honestly if it's doable, how, and what it takes.",
        thinking: { t: "Software gets built with Thinking.", d: "Thinking S.R.L. is the AI-native studio where projects take shape. Here it's me; there it's the team.", link: "Go to Thinking" },
        training: { t: "Looking for teaching, not development?", d: "I bring AI, blockchain and cloud to teams and companies. That's a separate track.", link: "Teaching" },
        ctaH: "Got an idea? Let's see if we can build it.",
        ctaP: "Drop me two lines on WhatsApp, no strings. You'll hear back from me."
      },
      formazione: {
        eyebrow: "Teaching",
        h: "I teach the technology that's changing work.",
        lead: "At Talent Garden and beyond: I bring AI, blockchain and cloud to professionals and companies — including reskilling in banking. I explain the complex simply, with examples, no hype.",
        temiEyebrow: "The topics",
        temi: [
          { ic: "brain-circuit", t: "Artificial intelligence", d: "What's actually useful today, what changes at work, how to use it without being used by it." },
          { ic: "link", t: "Blockchain & Web3", d: "Tokenization, wallets, eIDAS: the concrete part, from someone who built it in a regulated fintech." },
          { ic: "cloud", t: "Cloud & data", d: "How to stand up something that holds, scales and doesn't cost a fortune." },
          { ic: "cpu", t: "IoT & enabling tech", d: "The technologies that will shape the coming years, explained before they go mainstream." }
        ],
        formatiEyebrow: "The formats",
        formati: [
          { t: "Talks & keynotes", d: "Sessions at events and conferences on where technology is heading." },
          { t: "Workshops", d: "Hands-on sessions, fingers on the keyboard, for teams that learn by doing." },
          { t: "Corporate courses", d: "Tailored reskilling tracks, including for the banking sector." }
        ],
        proofEyebrow: "And every day, I share",
        proofH: "I explain technology to 20,000+ people.",
        proofP: "On TikTok I break down how the things we use every day actually work. 7M+ total views and counting — proof that I can make the complex simple.",
        statCap: "total views · 21k followers",
        ctaH: "Looking for someone who actually explains it?",
        ctaP: "Write to me: let's talk about what your team or event needs."
      },
      note: {
        eyebrow: "Notes", h: "Notes, while I build.",
        lead: "I write when I have something to say — not on a schedule. Longer articles and short thoughts, under one roof.",
        soonNote: "The first pieces are coming soon. Meanwhile, here's what I'll write about.",
        filters: ["All", "Articles", "Thoughts"], articleWord: "Article",
        posts: [
          { kind: "Thought", t: "Why \"used\" beats \"innovative\".", d: "A new thing matters when it stops being imagined and someone starts using it. Everything else is marketing.", read: "2 min" },
          { kind: "Article", t: "What I learned building an eIDAS-compliant wallet.", d: "The hard part wasn't the cryptography. It was holding regulation, user experience and real timelines together.", read: "8 min" },
          { kind: "Thought", t: "AI doesn't shorten the work. It moves where attention is needed.", d: "The prototype is free. The part that matters — figuring out what to build — got more important, not less.", read: "3 min" },
          { kind: "Article", t: "Going to market: the part nobody teaches.", d: "Building a product and getting it used are two different crafts. The second is the one I learned at Pathway.", read: "6 min" },
          { kind: "Thought", t: "Seeing early is useless on its own.", d: "The gift is arriving a little early. The work is closing the distance so others get there too.", read: "2 min" }
        ],
        newsletterH: "A note when I publish.",
        newsletterP: "No spam, no calendar. Only when I've written something worth it.",
        newsletterPlaceholder: "you@example.com", newsletterBtn: "Subscribe",
        newsletterHint: "Only me writing, and only when I publish.",
        newsletterThanks: "Thanks! I'll write when I publish."
      }
    }
  };

  // ---- helpers ----
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  var SPARK = '<svg viewBox="0 0 64 64" aria-hidden="true" style="width:.95em;height:.95em;display:inline-block;vertical-align:-0.08em"><path d="M37.5 6 L18 35.2 H30.2 L26 58 L47 27.5 H34.4 L37.5 6 Z" fill="currentColor"/></svg>';
  function eyebrow(text, onInk) {
    return '<span class="mm-eyebrow' + (onInk ? ' mm-eyebrow--on-ink' : '') +
      '"><span style="color:var(--volt-500);display:inline-flex">' + SPARK + '</span>' + esc(text) + '</span>';
  }
  function logo(onInk) {
    return '<a class="mm-logo' + (onInk ? ' mm-logo--on-ink' : '') + '" href="index.html" style="font-size:1.32rem" aria-label="Mario Moschetta">' +
      '<svg class="mm-logo__spark" viewBox="0 0 64 64" aria-hidden="true"><path d="M37.5 6 L18 35.2 H30.2 L26 58 L47 27.5 H34.4 L37.5 6 Z" fill="var(--volt-500)"/></svg>' +
      '<span>Mario&nbsp;<span class="mm-logo__sur">Moschetta</span></span></a>';
  }
  function outlink(text, attrs, icon) {
    return '<a class="mm-outlink" ' + attrs + '>' + esc(text) +
      ' <i data-lucide="' + (icon || "arrow-up-right") + '" aria-hidden="true"></i></a>';
  }
  function ctaBtn(t, big) {
    return '<a class="mm-btn mm-btn--primary mm-btn--' + (big ? 'lg' : 'sm') + '" href="' + t.whatsapp +
      '" target="_blank" rel="noopener"><i data-lucide="message-circle" aria-hidden="true"></i>' + esc(t.cta) + '</a>';
  }
  function ctaAlt(t) {
    return '<div class="cta-alt"><a data-link="email" href="#">Email</a>' +
      '<span aria-hidden="true">·</span><a data-link="call" href="#">' + esc(t.ctaCall) + '</a></div>';
  }

  // ---- chrome ----
  function subnav(t, page, lang) {
    var items = ["storia", "progetti", "aziende", "formazione", "note"];
    var links = items.map(function (k) {
      return '<a class="subnav__link' + (page === k ? ' is-active' : '') + '" href="' + k + '.html">' + esc(t.nav[k]) + '</a>';
    }).join("");
    return '<nav class="subnav"><div class="wrap subnav__inner">' + logo(false) +
      '<div class="subnav__links">' + links + '</div>' +
      '<div class="subnav__right"><span class="lang lang--light">' +
      '<button data-lang="it" aria-pressed="' + (lang === "it") + '">IT</button><span>/</span>' +
      '<button data-lang="en" aria-pressed="' + (lang === "en") + '">EN</button></span>' +
      ctaBtn(t, false) +
      '<button class="burger" id="nav-burger" aria-label="Menu" aria-expanded="false"><i data-lucide="menu"></i></button>' +
      '</div></div></nav>';
  }
  function navmenu(t, lang) {
    var items = ["storia", "progetti", "aziende", "formazione", "note"];
    var links = items.map(function (k) { return '<a href="' + k + '.html">' + esc(t.nav[k]) + '</a>'; }).join("");
    return '<div class="navmenu" id="navmenu" aria-hidden="true">' +
      '<div class="navmenu__top wrap">' + logo(true) +
      '<button class="navmenu__close" id="nav-close" aria-label="Chiudi"><i data-lucide="x"></i></button></div>' +
      '<nav class="navmenu__links wrap">' + links + '</nav>' +
      '<div class="navmenu__foot wrap"><span class="lang">' +
      '<button data-lang="it" aria-pressed="' + (lang === "it") + '">IT</button><span>/</span>' +
      '<button data-lang="en" aria-pressed="' + (lang === "en") + '">EN</button></span>' +
      ctaBtn(t, false) + '</div></div>';
  }
  function footer(t) {
    var f = t.footer;
    return '<footer class="footer"><div class="wrap"><div class="footer__top">' +
      '<div style="max-width:30ch">' + logo(true) +
      '<p style="margin-top:14px;font-size:var(--fs-sm);color:var(--ink-300);line-height:1.5">' + esc(f.tagline) + '</p></div>' +
      '<div class="footer__col"><h4>' + esc(f.projects) + '</h4>' +
      '<a data-link="thinking" href="#">Thinking S.R.L. ↗</a><a data-link="fatturai" href="#">Fatturai ↗</a></div>' +
      '<div class="footer__col"><h4>' + esc(f.channelsCol) + '</h4>' +
      '<a data-link="spotify" href="#">Spotify</a><a data-link="youtube" href="#">YouTube</a>' +
      '<a data-link="tiktok" href="#">TikTok</a><a data-link="instagram" href="#">Instagram</a>' +
      '<a data-link="linkedin" href="#">LinkedIn</a></div>' +
      '<div class="footer__col"><h4>' + esc(f.more) + '</h4>' +
      '<a href="storia.html">' + esc(f.links.storia) + '</a><a href="formazione.html">' + esc(f.links.formazione) + '</a>' +
      '<a href="note.html">' + esc(f.links.note) + '</a></div></div>' +
      '<div class="footer__bottom"><small>' + esc(f.rights) + '</small><small>' + esc(f.built) + '</small></div></div></footer>';
  }

  // ---- page bodies ----
  function storiaBody(t) {
    var s = t.storia;
    var cv = s.beats.map(function (b) {
      return '<div class="cv__row"><span class="cv__node"></span><span class="cv__yr">' + esc(b.yr) + '</span>' +
        '<div><h3 class="cv__t">' + esc(b.t) + '</h3><p class="cv__d">' + esc(b.d) + '</p></div></div>';
    }).join("");
    var valori = s.valori.map(function (v) {
      return '<div class="valori__item"><h3>' + esc(v.t) + '</h3><p>' + esc(v.d) + '</p></div>';
    }).join("");
    return '<section class="section pagehead"><div class="wrap storia__intro">' +
      '<div>' + eyebrow(s.eyebrow) + '<h1 class="pagehead__h">' + esc(s.h) + '</h1><p class="pagehead__lead">' + esc(s.lead) + '</p></div>' +
      '<img class="storia__portrait" src="assets/mario-storia.jpg" alt="' + esc(s.photo) + '" loading="lazy" style="object-fit:cover;object-position:50% 30%"></div></section>' +
      '<section class="section" style="padding-top:0"><div class="wrap">' +
      '<span class="logos__label">' + esc(s.provenance) + '</span><div class="logos">' +
      [["pwc.png", "PwC"], ["reckitt.jpg", "Reckitt Benckiser"], ["webidoo.jpg", "Webidoo"], ["fyblo.png", "Fyblo"], ["basement.png", "Basement Eleven"]]
        .map(function (g) { return '<div class="logo-chip"><img src="assets/logos/' + g[0] + '" alt="' + g[1] + '" loading="lazy"></div>'; }).join("") +
      '</div></div></section>' +
      '<section class="section sec-ink"><div class="wrap--narrow"><div class="eyebrow-row">' +
      eyebrow(s.eyebrow + " · " + s.pathLabel, true) + '</div><div class="cv">' + cv + '</div></div></section>' +
      '<section class="section"><div class="wrap">' + eyebrow(s.valoriEyebrow) +
      '<h2 class="sec-h">' + esc(s.valoriH) + '</h2><div class="valori">' + valori + '</div></div></section>';
  }

  function progettiBody(t) {
    var p = t.progetti;
    var cases = p.cases.map(function (c) {
      var tags = c.tags.map(function (tag) { return '<span class="mm-tag">' + esc(tag) + '</span>'; }).join("");
      var link = c.link ? '<div class="case__link">' + outlink(c.link, 'data-link="' + c.linkKey + '" href="#"') + '</div>' : "";
      var srcs = c.sources ? '<div class="case__sources">' + esc(p.sourcesLabel) + ': ' +
        c.sources.map(function (s) { return '<a href="' + s.u + '" target="_blank" rel="noopener">' + esc(s.l) + '</a>'; }).join(' · ') + '</div>' : "";
      return '<div class="mm-card mm-card--flush case"><div><h2 class="case__name">' + esc(c.t) + '</h2>' +
        '<span class="case__meta">' + esc(c.meta) + '</span><div class="case__tags" style="margin-top:var(--space-5)">' + tags + '</div></div>' +
        '<div><p class="case__body">' + esc(c.d) + '</p><div class="case__proof">' + esc(c.proof) + '</div>' + srcs + link + '</div></div>';
    }).join("");
    return '<section class="section pagehead"><div class="wrap">' + eyebrow(p.eyebrow) +
      '<h1 class="pagehead__h">' + esc(p.h) + '</h1><p class="pagehead__lead">' + esc(p.lead) + '</p>' +
      '<img class="pagehead__img" src="assets/mario-pitch.jpg" alt="Mario presenta Fyblo sul palco" loading="lazy"></div></section>' +
      '<section class="section sec-sand"><div class="wrap"><div class="cases">' + cases + '</div></div></section>';
  }

  function aziendeBody(t) {
    var a = t.aziende;
    var steps = a.steps.map(function (st) {
      return '<div class="mm-card mm-card--flush step-c"><span class="step-c__n">' + esc(st.n) + '</span>' +
        '<h3 class="step-c__t">' + esc(st.t) + '</h3><p class="step-c__d">' + esc(st.d) + '</p></div>';
    }).join("");
    function li(items) { return items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join(""); }
    return '<section class="section pagehead"><div class="wrap">' + eyebrow(a.eyebrow) +
      '<h1 class="pagehead__h">' + esc(a.h) + '</h1><p class="pagehead__lead">' + esc(a.lead) + '</p></div></section>' +
      '<section class="section sec-sand"><div class="wrap">' + eyebrow(a.stepEyebrow) +
      '<div class="steps">' + steps + '</div></div></section>' +
      '<section class="section"><div class="wrap">' + eyebrow(a.forEyebrow) + '<div class="forwho">' +
      '<div class="forwho__col"><h3>' + esc(a.forYes.t) + '</h3><ul class="forwho__list">' + li(a.forYes.items) + '</ul></div>' +
      '<div class="forwho__col forwho__col--no"><h3>' + esc(a.forNo.t) + '</h3><ul class="forwho__list">' + li(a.forNo.items) + '</ul></div>' +
      '</div><p class="pricing">' + esc(a.pricingNote) + '</p><div class="handoff">' +
      '<div class="mm-card mm-card--flush handoff__card"><h3>' + esc(a.thinking.t) + '</h3><p>' + esc(a.thinking.d) + '</p>' +
      outlink(a.thinking.link, 'data-link="thinking" href="#"') + '</div>' +
      '<div class="mm-card mm-card--flush handoff__card"><h3>' + esc(a.training.t) + '</h3><p>' + esc(a.training.d) + '</p>' +
      outlink(a.training.link, 'href="formazione.html"', "arrow-right") + '</div></div></div></section>' +
      '<section class="section sec-ink"><div class="wrap--narrow ctaband"><h2>' + esc(a.ctaH) + '</h2>' +
      '<p>' + esc(a.ctaP) + '</p>' + ctaBtn(t, true) + ctaAlt(t) + '</div></section>';
  }

  function formazioneBody(t) {
    var f = t.formazione;
    var temi = f.temi.map(function (tm) {
      return '<div class="mm-card mm-card--flush tema"><span class="tema__ic"><i data-lucide="' + tm.ic + '"></i></span>' +
        '<div><h3>' + esc(tm.t) + '</h3><p>' + esc(tm.d) + '</p></div></div>';
    }).join("");
    var formati = f.formati.map(function (fm) {
      return '<div class="formato"><h3>' + esc(fm.t) + '</h3><p>' + esc(fm.d) + '</p></div>';
    }).join("");
    return '<section class="section pagehead"><div class="wrap">' + eyebrow(f.eyebrow) +
      '<h1 class="pagehead__h">' + esc(f.h) + '</h1><p class="pagehead__lead">' + esc(f.lead) + '</p></div></section>' +
      '<section class="section sec-sand"><div class="wrap">' + eyebrow(f.temiEyebrow) +
      '<div class="temi">' + temi + '</div></div></section>' +
      '<section class="section"><div class="wrap">' + eyebrow(f.formatiEyebrow) +
      '<div class="formati">' + formati + '</div></div></section>' +
      '<section class="section sec-ink"><div class="wrap divulgo__grid"><div>' + eyebrow(f.proofEyebrow, true) +
      '<h2 class="divulgo__h">' + esc(f.proofH) + '</h2><p class="divulgo__p">' + esc(f.proofP) + '</p></div>' +
      '<div class="divulgo__stat"><div class="divulgo__big">7M+</div><div class="divulgo__cap">' + esc(f.statCap) + '</div></div></div></section>' +
      '<section class="section"><div class="wrap--narrow ctaband"><h2 style="color:var(--text-strong)">' + esc(f.ctaH) + '</h2>' +
      '<p style="color:var(--text-muted)">' + esc(f.ctaP) + '</p>' + ctaBtn(t, true) + ctaAlt(t) + '</div></section>';
  }

  function noteList(n, filterIdx) {
    var visible = n.posts.filter(function (post) {
      if (filterIdx === 0) return true;
      var isArt = post.kind === n.articleWord;
      return filterIdx === 1 ? isArt : !isArt;
    });
    return visible.map(function (post) {
      var isArt = post.kind === n.articleWord;
      return '<li class="noteitem"><div class="noteitem__link noteitem__link--soon">' +
        '<span class="noteitem__kind' + (isArt ? '' : ' noteitem__kind--pensiero') + '">' + esc(post.kind) + '</span>' +
        '<span><span class="noteitem__t">' + esc(post.t) + '</span><span class="noteitem__d">' + esc(post.d) + '</span></span>' +
        '<span class="noteitem__read">' + esc(post.read) + '</span></div></li>';
    }).join("");
  }
  function noteBody(t) {
    var n = t.note;
    var filters = n.filters.map(function (fl, i) {
      return '<button class="notefilter' + (i === 0 ? ' is-active' : '') + '" data-filter="' + i + '">' + esc(fl) + '</button>';
    }).join("");
    return '<section class="section pagehead"><div class="wrap">' + eyebrow(n.eyebrow) +
      '<h1 class="pagehead__h">' + esc(n.h) + '</h1><p class="pagehead__lead">' + esc(n.lead) + '</p>' +
      '<p class="note-soon">' + esc(n.soonNote) + '</p>' +
      '<div class="notefilters">' + filters + '</div></div></section>' +
      '<section class="section" style="padding-top:0"><div class="wrap">' +
      '<ul class="notelist" id="notelist">' + noteList(n, 0) + '</ul>' +
      '<div class="newsletter"><div><h3>' + esc(n.newsletterH) + '</h3><p>' + esc(n.newsletterP) + '</p></div>' +
      '<form class="newsletter__form" id="nl-form"><div class="mm-field" style="flex:1">' +
      '<label class="mm-field__label" for="nl-email">Email</label>' +
      '<input id="nl-email" class="mm-field__input" type="email" required placeholder="' + esc(n.newsletterPlaceholder) + '">' +
      '<span class="mm-field__hint" id="nl-hint">' + esc(n.newsletterHint) + '</span></div>' +
      '<button type="submit" class="mm-btn mm-btn--primary">' + esc(n.newsletterBtn) + '</button></form></div></div></section>';
  }

  var BODIES = { storia: storiaBody, progetti: progettiBody, aziende: aziendeBody, formazione: formazioneBody, note: noteBody };

  // ---- behaviour ----
  function applyLinks(root) {
    root.querySelectorAll("[data-link]").forEach(function (el) {
      var url = L[el.getAttribute("data-link")];
      if (!url) return;
      el.setAttribute("href", url);
      if (/^https?:/i.test(url)) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      } else {
        el.removeAttribute("target");
        el.removeAttribute("rel");
      }
    });
  }

  function buildAppHTML(page, lang) {
    var t = PAGECOPY[lang] || PAGECOPY.it;
    return subnav(t, page, lang) + navmenu(t, lang) + '<main>' + BODIES[page](t) + '</main>' + footer(t);
  }

  function render(page, lang) {
    document.documentElement.lang = lang;
    document.body.classList.remove("menu-open");
    var app = document.getElementById("app");
    var t = PAGECOPY[lang] || PAGECOPY.it;
    app.innerHTML = buildAppHTML(page, lang);
    applyLinks(app);

    // lang toggle
    app.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () {
        var l = b.getAttribute("data-lang");
        try { localStorage.setItem("mm-lang", l); } catch (e) {}
        render(page, l);
        window.scrollTo(0, 0);
      });
    });

    // mobile menu
    var burger = app.querySelector("#nav-burger");
    var menu = app.querySelector("#navmenu");
    var closeBtn = app.querySelector("#nav-close");
    if (burger && menu) {
      function shut() { menu.classList.remove("is-open"); document.body.classList.remove("menu-open"); burger.setAttribute("aria-expanded", "false"); }
      burger.addEventListener("click", function () { menu.classList.add("is-open"); document.body.classList.add("menu-open"); burger.setAttribute("aria-expanded", "true"); });
      if (closeBtn) closeBtn.addEventListener("click", shut);
      menu.querySelectorAll(".navmenu__links a").forEach(function (a) { a.addEventListener("click", shut); });
    }

    // note filters
    if (page === "note") {
      var n = t.note;
      app.querySelectorAll(".notefilter").forEach(function (btn) {
        btn.addEventListener("click", function () {
          app.querySelectorAll(".notefilter").forEach(function (x) { x.classList.remove("is-active"); });
          btn.classList.add("is-active");
          document.getElementById("notelist").innerHTML = noteList(n, parseInt(btn.getAttribute("data-filter"), 10));
        });
      });
      var form = document.getElementById("nl-form");
      if (form) form.addEventListener("submit", function (e) {
        e.preventDefault();
        var email = (form.querySelector("input").value || "").trim();
        var subj = lang === "en" ? "Subscribe me to your newsletter" : "Iscrivimi alla tua newsletter";
        var body = (lang === "en"
          ? "Hi Mario, please add me to your newsletter.\nMy email: "
          : "Ciao Mario, aggiungimi alla tua newsletter.\nLa mia email: ") + email;
        window.location.href = "mailto:mario@mariomoschetta.com?subject=" +
          encodeURIComponent(subj) + "&body=" + encodeURIComponent(body);
        document.getElementById("nl-hint").textContent = n.newsletterThanks;
        form.querySelector("input").value = "";
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function boot() {
    var page = document.body.getAttribute("data-page");
    if (!page || !BODIES[page]) return;
    var lang = "it";
    try { lang = localStorage.getItem("mm-lang") === "en" ? "en" : "it"; } catch (e) {}
    render(page, lang);
  }

  if (typeof module !== "undefined" && module.exports) {
    // Node (build step): export the pure renderer for static pre-rendering.
    module.exports = { buildAppHTML: buildAppHTML, PAGECOPY: PAGECOPY };
  } else {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
    else boot();
  }
})(typeof window !== "undefined" ? window : this);
