/* ============================================================
   Percorso FSL — Christian Ladisa · V ITIA C
   Dati della linea temporale + interazioni
   (Accenture esclusa da tutti e tre gli anni, come richiesto)
   ============================================================ */

const TIMELINE = [
  {
    year: "Classe III",
    sub: "Anno scolastico 2023 / 2024",
    items: [
      {
        title: "Corso sicurezza sui luoghi di lavoro",
        org: "ANFOS",
        hours: "4 h",
        desc: "Corso online sulla normativa per la sicurezza nei luoghi di lavoro, con riferimento al D.Lgs 81/08, superamento del test e attestato di frequenza.",
        tags: ["Online", "Diritto e normativa", "Sicurezza"]
      },
      {
        title: "IBM SkillsBuild",
        org: "IBM",
        hours: "Webinar",
        desc: "Webinar e utilizzo della piattaforma IBM per la formazione, con percorso di certificazione su competenze informatiche e digitali.",
        tags: ["Online", "Informatica", "Certificazione"]
      },
      {
        title: "Sprint School — Autoimprenditorialità",
        org: "Sprint School",
        hours: "15 h",
        desc: "Programma sull'autoimprenditorialità: sviluppo di idee imprenditoriali, creazione di startup e competizione finale.",
        tags: ["In presenza + Online", "Soft skills", "Startup"]
      }
    ]
  },
  {
    year: "Classe IV",
    sub: "Anno scolastico 2024 / 2025",
    items: [
      {
        title: "LV8 — Progetto Next Level",
        org: "Fondazione Vodafone · Next Level ETS",
        hours: "8 h",
        desc: "Learning app per le competenze digitali, con rilascio di 3 Open Badge in linea con il quadro europeo DigComp 2.2.",
        tags: ["In presenza + Online", "Competenze digitali", "Open Badge"]
      },
      {
        title: "Open Day Mermec / AngelStar",
        org: "Mermec · AngelStar",
        hours: "2 h",
        desc: "Presentazione della joint venture Mermec/AngelStar, ingegneria internazionale per il segnalamento e il controllo ferroviario ERTMS, ai fini dell'orientamento.",
        tags: ["In presenza", "Orientamento", "Telecomunicazioni"]
      },
      {
        title: "AI nella comunicazione",
        org: "Apulia Digital Maker",
        hours: "16 h",
        desc: "Lezioni frontali e applicazioni pratiche dell'Intelligenza Artificiale per implementare e gestire tecnologie e piattaforme basate sull'IA.",
        tags: ["In presenza", "Intelligenza Artificiale", "Informatica"]
      }
    ]
  },
  {
    year: "Classe V",
    sub: "Anno scolastico 2025 / 2026",
    items: [
      {
        title: "Open Day ELIS — Open Fiber",
        org: "ELIS · Open Fiber",
        hours: "2 h",
        desc: "Open day sulle professionalità in Open Fiber, analisi di un CV efficace e simulazione di colloquio selettivo.",
        tags: ["Online", "Orientamento", "Colloquio"]
      },
      {
        title: "Open Day Mermec / AngelStar",
        org: "Mermec · AngelStar",
        hours: "2 h",
        desc: "Presentazione della joint venture Mermec/AngelStar e delle posizioni lavorative nel gruppo, per l'orientamento post‑diploma.",
        tags: ["In presenza", "Orientamento"]
      },
      {
        title: "Mind the Web",
        org: "TIM · IDMO",
        hours: "8 h",
        desc: "Ciclo di 4 webinar sui media digitali e l'IA: bias cognitivi, disinformazione, dieta mediatica e metodo scientifico per una cultura digitale critica.",
        tags: ["Online", "Media & IA", "Pensiero critico"]
      },
      {
        title: "OrientaPuglia — X Edizione",
        org: "Associazione ASTER",
        hours: "5 h",
        desc: "Fiera per l'orientamento scolastico, universitario e professionale, a contatto diretto con atenei italiani ed esteri e con gli orientatori.",
        tags: ["In presenza", "Orientamento"]
      },
      {
        title: "Il Futuro ti Assomiglia",
        org: "Fondazione Megamark",
        hours: "5 h",
        desc: "Seminario orientativo e motivazionale: autostima, gestione di ansia e stress, allenarsi al fare e imparare a orientarsi, con relatori d'eccezione.",
        tags: ["In presenza", "Motivazione", "Soft skills"]
      },
      {
        title: "Salone dello Studente — Campus Bari",
        org: "Campus · Fiera del Levante",
        hours: "4 h",
        desc: "Manifestazione sull'orientamento all'università e alle professioni con visita guidata, workshop e colloqui aziendali.",
        tags: ["In presenza", "Orientamento", "Workshop"]
      },
      {
        title: "Orientamento PoliBa",
        org: "Politecnico di Bari",
        hours: "2 h",
        desc: "Presentazione dell'offerta formativa, dei dipartimenti e dei servizi del Politecnico di Bari, con interventi del Rettore e dei delegati all'orientamento.",
        tags: ["In presenza", "Orientamento universitario"]
      },
      {
        fav: "auriga",
        title: "Visita aziendale Auriga S.p.A.",
        org: "Auriga S.p.A.",
        hours: "5 h",
        desc: "Visita guidata presso la sede di Bari di Auriga, leader italiano nel software per la banca omnicanale, presente in oltre 60 paesi nel mondo.",
        tags: ["In presenza", "Mondo del lavoro", "Software"]
      },
      {
        title: "Oracle Web Application Academy",
        org: "CivicaMente · Oracle",
        hours: "16 h",
        desc: "Formazione su Database Oracle e Oracle APEX: dati relazionali, comandi SQL, interrogazione delle tabelle e sviluppo di applicazioni web.",
        tags: ["Online · E‑learning", "SQL & Database", "Sviluppo web"]
      },
      {
        fav: "leonardo",
        title: "In volo con Leonardo",
        org: "CivicaMente · Leonardo",
        hours: "25 h",
        desc: "Percorso e‑learning in 6 unità sullo sviluppo tecnologico e il volo, seguito da un project work per immaginare i nuovi scenari del settore aerospaziale.",
        tags: ["Online · E‑learning", "Aerospazio", "Project work"]
      },
      {
        title: "Sprint School — Soft Skills",
        org: "Sprint School",
        hours: "6 h",
        desc: "Autoimprenditorialità giovanile: megatrend, problem solving, comunicazione e storytelling, dal mondo startup fino all'hackathon finale.",
        tags: ["In presenza + Online", "Startup", "Hackathon"]
      },
      {
        title: "Orientamento Forze Armate",
        org: "Fidelis",
        hours: "1 h",
        desc: "Presentazione delle possibili carriere nelle Forze Armate per l'orientamento post‑diploma.",
        tags: ["In presenza", "Orientamento"]
      },
      {
        title: "Orientamento Università eCampus",
        org: "Università eCampus",
        hours: "1 h",
        desc: "Presentazione dei corsi di laurea dell'Università telematica eCampus.",
        tags: ["In presenza", "Orientamento universitario"]
      },
      {
        title: "Orientamento Università Bona Sforza",
        org: "Università Bona Sforza",
        hours: "1 h",
        desc: "Presentazione dei corsi di laurea dell'Università per l'orientamento post‑diploma.",
        tags: ["In presenza", "Orientamento universitario"]
      }
    ]
  }
];

/* ---------- Render della timeline ---------- */
function renderTimeline() {
  const root = document.getElementById("timeline-root");
  if (!root) return;

  const html = TIMELINE.map((group) => {
    const items = group.items.map((it) => {
      const favClass = it.fav ? " tl-item--fav" : "";
      const star = it.fav ? '<span class="tl-card__star" aria-hidden="true">★</span>' : "";
      const tags = it.tags.map((t) => `<span class="tl-card__tag">${t}</span>`).join("");
      const favLink = it.fav
        ? `<a class="tl-card__favlink" href="#${it.fav}">Scopri perché mi ha formato →</a>`
        : "";
      return `
        <div class="tl-item${favClass} reveal">
          <div class="tl-card">
            <div class="tl-card__top">
              <div>
                <h4 class="tl-card__title">${star}${it.title}</h4>
                <div class="tl-card__org">${it.org}</div>
              </div>
              <span class="tl-card__hours">${it.hours}</span>
            </div>
            <p class="tl-card__desc">${it.desc}</p>
            <div class="tl-card__tags">${tags}</div>
            ${favLink}
          </div>
        </div>`;
    }).join("");

    return `
      <div class="tl-year reveal">
        <span class="tl-year__label">${group.year}</span>
        <span class="tl-year__sub">${group.sub}</span>
      </div>
      ${items}`;
  }).join("");

  root.innerHTML = html;
}

/* ---------- Reveal on scroll ---------- */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  els.forEach((el) => io.observe(el));
}

/* ---------- Conteggio statistiche ---------- */
function setupCounters() {
  const nums = document.querySelectorAll(".stat__num");
  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || "";
    const dur = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + (p === 1 ? suffix : "");
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (!("IntersectionObserver" in window)) { nums.forEach(animate); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.6 });
  nums.forEach((n) => io.observe(n));
}

/* ---------- Nav: stato scroll, link attivo, menu mobile ---------- */
function setupNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("navBurger");
  const links = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav__link");

  const onScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 20);
    const prog = document.getElementById("scrollProgress");
    const h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.width = h > 0 ? (window.scrollY / h) * 100 + "%" : "0%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.forEach((l) => l.addEventListener("click", () => {
    links.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }));

  // Link attivo in base alla sezione visibile
  const sections = document.querySelectorAll("section[id]");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach((l) =>
          l.classList.toggle("is-active", l.getAttribute("href") === "#" + id));
      }
    });
  }, { threshold: 0.5 });
  sections.forEach((s) => io.observe(s));
}

/* ---------- Navigazione da tastiera per l'esposizione ---------- */
function setupKeyboardNav() {
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const goTo = (dir) => {
    const ref = window.scrollY + 4; // posizione corrente con piccola tolleranza
    // indice dell'ultima sezione il cui inizio è già stato superato
    let current = 0;
    sections.forEach((s, i) => { if (s.offsetTop <= ref) current = i; });
    const idx = Math.max(0, Math.min(sections.length - 1, current + dir));
    sections[idx]?.scrollIntoView({ behavior: "smooth" });
  };
  window.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;
    if (e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); goTo(1); }
    if (e.key === "ArrowUp" || e.key === "PageUp") { e.preventDefault(); goTo(-1); }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  setupReveal();
  setupCounters();
  setupNav();
  setupKeyboardNav();
});
