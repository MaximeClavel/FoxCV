// ===== DATA =====
const cvData = {
  name: "Maxime CLAVEL",
  title: "Expert Technique Salesforce",
  yearsXP: "+10",
  nbProjects: 17,
  nbCerts: 2,
  employer: "CGI",
  employerLogo: "assets/img/cgi-logo.png",
  profile: "Fort de plus de 10 ans d'expérience dans le secteur IT, expert Salesforce intervenant sur toutes les phases projet : analyse, conseil, conception fonctionnelle et technique, implémentation, gestion de versions et support utilisateur. Consultant chez CGI depuis 2018.",
  languages: "Français (courant), Anglais (avancé)",
  industries: "Santé, Énergie, Luxe, Aéronautique, Sport, BTP",
  qualifications: [
    { name: "Salesforce (Apex, VF, Aura, LWC)", level: 95, cat: "expert" },
    { name: "JavaScript / HTML / CSS", level: 85, cat: "expert" },
    { name: "Java / JavaEE", level: 65, cat: "advanced" },
    { name: "C / C++", level: 55, cat: "intermediate" },
    { name: "WINDEV / WEBDEV", level: 60, cat: "advanced" },
    { name: "SQL", level: 75, cat: "advanced" }
  ],
  tools: ["VSCode", "Dataloader", "Git", "Postman", "Copilot", "NetBeans", "Eclipse", "Bitbucket", "GitLab", "Azure DevOps"],
  areas: ["Développement applicatif", "Cloud Computing", "Data Science", "CI/CD & DevOps"],
  linkedinUrl: "https://www.linkedin.com/in/maxime-clavel-7603a3aa/",
  linkedinPosts: [
    { title: "Retour d'expérience sur la migration Salesforce Lightning pour un client dans le secteur de l'énergie", date: "Juin 2025" },
    { title: "5 bonnes pratiques pour structurer ses déploiements Salesforce avec les pipelines CI/CD", date: "Mai 2025" },
    { title: "Pourquoi les LWC changent la donne en matière d'expérience utilisateur Salesforce", date: "Avril 2025" }
  ],
  projects: [
    {
      name: "FoxLog",
      tagline: "Chrome Extension — Salesforce Debug Log Viewer",
      version: "1.3.1",
      users: 37,
      releases: 7,
      license: "MIT",
      languages: [
        { name: "JavaScript", pct: 77.6, color: "#f1e05a" },
        { name: "CSS", pct: 20.1, color: "#563d7c" },
        { name: "Apex", pct: 1.5, color: "#1797c0" },
        { name: "HTML", pct: 0.8, color: "#e34c26" }
      ],
      description: "Extension Chrome puissante qui révolutionne l'analyse des debug logs Salesforce. Fini les logs bruts illisibles : visualisez instantanément vos logs Apex dans une interface moderne et intuitive directement depuis Salesforce Lightning.",
      features: [
        { icon: "📊", title: "Visualisation temps réel", desc: "Affichage automatique des logs Apex avec rafraîchissement intelligent et parseur analysant 15+ types de lignes" },
        { icon: "🔍", title: "22 détections d'anti-patterns", desc: "SOQL/DML en boucle, N+1 Query, récursion Trigger, IDs en dur… avec niveaux de sévérité et suggestions de correction" },
        { icon: "🌳", title: "4 vues complémentaires", desc: "Summary, Call Tree hiérarchique, Analyse anti-patterns, Raw Log — avec export PDF/Markdown/TXT" },
        { icon: "👥", title: "Gestion multi-utilisateurs", desc: "Sélection d'utilisateur avec indicateurs visuels de TraceFlag 🟢🟡📋 et activation/désactivation en un clic" },
        { icon: "⚡", title: "Performance optimisée", desc: "Cache intelligent, Web Workers pour le call tree, traitement en arrière-plan pour une expérience fluide" },
        { icon: "🛡️", title: "Alertes limites Salesforce", desc: "Monitoring temps réel des limites d'exécution avec alertes visuelles à 70% et 90%" }
      ],
      chromeUrl: "https://chromewebstore.google.com/detail/foxlog-salesforce-debug-l/ljohmmiegangoogccdmafimhilpfekhh",
      githubUrl: "https://github.com/MaximeClavel/FoxLog"
    }
  ],
  cgiCareer: [
    { office: "CGI — Montréal, Canada", dates: "04/2022 — Présent", missions: [0, 1] },
    { office: "CGI — Montpellier, France", dates: "09/2018 — 04/2022", missions: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] }
  ],
  experiences: [
    {
      sector: "Énergie — Société d'État",
      dates: "10/2022 — Présent",
      position: "Lead Developer Salesforce — Consultant Technique",
      employer: "CGI Montréal",
      description: "Implémentation de solutions fonctionnelles robustes respectant les exigences client et les bonnes pratiques Salesforce. Analyse et résolution de problèmes et incidents. Application de correctifs via configuration et mise en place de la solution. Maintenance des composants Salesforce. Implémentation CI/CD.",
      responsibilities: ["Développement de nouvelles fonctionnalités", "Support technique", "Implémentation/support DevOps", "Revue de code"],
      environment: ["Salesforce CRM", "Bitbucket", "CI/CD"]
    },
    {
      sector: "Énergie Renouvelable",
      dates: "05/2022 — 10/2022",
      position: "Développeur Salesforce — Consultant Technique",
      employer: "CGI Montréal",
      description: "Implémentation d'un MVP Salesforce pour améliorer la gestion des opportunités et des parties prenantes. Migration depuis des bases de données disparates et des pipelines de vente gérés sous Excel et OneNote vers Salesforce CRM.",
      responsibilities: ["Développement de nouvelles fonctionnalités", "Support technique"],
      environment: ["Salesforce CRM", "SharePoint", "Outlook", "SSO", "Azure DevOps"]
    },
    {
      sector: "Aéronautique & Défense",
      dates: "12/2021 — 04/2022",
      position: "Développeur Salesforce — Tech Lead Consultant",
      employer: "CGI Montpellier",
      description: "Leader technologique mondial. Environnement Salesforce pour la gestion des ventes liées à l'aérospatiale.",
      responsibilities: ["Développement", "Support technique", "Revue d'implémentation", "Gestion des déploiements"],
      environment: ["Salesforce CRM", "GitLab", "CI/CD"]
    },
    {
      sector: "Gaz Industriel & Santé",
      dates: "03/2021 — 12/2021",
      position: "Développeur Salesforce — Consultant Technique",
      employer: "CGI Montpellier",
      description: "Intégration continue avec différents systèmes externes : G-Suite, Medallia, SAP-DataLake-MongoDB-TIBCO, CPQ — Configuration de prix et devis.",
      responsibilities: ["Développement de nouvelles fonctionnalités", "Support technique"],
      environment: ["Salesforce CRM", "Google G-Suite", "Medallia", "SAP", "CPQ"]
    },
    {
      sector: "Services aux Particuliers",
      dates: "02/2021",
      position: "Développeur Salesforce — Consultant Technique",
      employer: "CGI Montpellier",
      description: "Groupe français leader fournissant des services aux particuliers et entreprises.",
      responsibilities: ["Support technique", "Assistance technique"],
      environment: ["Salesforce CRM", "Community"]
    },
    {
      sector: "Agence Publique — Environnement",
      dates: "02/2021",
      position: "Développeur Salesforce — Consultant Technique",
      employer: "CGI Montpellier",
      description: "Préparation d'un avant-vente et réorganisation d'une Org Salesforce.",
      responsibilities: ["Réorganisation Org Salesforce"],
      environment: ["Salesforce CRM"]
    },
    {
      sector: "Services Numériques — Notariat",
      dates: "02/2021",
      position: "Développeur Salesforce — Consultant Technique",
      employer: "CGI Montpellier",
      description: "Implémentation d'un Auth. Provider sur un Org Hub.",
      responsibilities: ["Développement", "Assistance technique"],
      environment: ["Salesforce CRM", "Auth. Provider"]
    },
    {
      sector: "Secteur Bancaire",
      dates: "03/2020 — 12/2021",
      position: "Responsable Technique TMA",
      employer: "CGI Montpellier",
      description: "Application Salesforce permettant la gestion du suivi des agences bancaires.",
      responsibilities: ["Gestion des risques", "Supervision technique", "Suivi des normes Salesforce", "Développement"],
      environment: ["Salesforce CRM", "Auth. Provider"]
    },
    {
      sector: "Tourisme & Loisirs",
      dates: "10/2019 — 07/2020",
      position: "Responsable Technique",
      employer: "CGI Montpellier",
      description: "Changement de CRM pour la partie B2C. Architecture technique, webservices, ateliers de cadrage.",
      responsibilities: ["Architecture technique", "Webservices", "Ateliers de cadrage", "Gestion des risques", "Supervision technique"],
      environment: ["Salesforce CRM", "WebServices"]
    },
    {
      sector: "Ingénierie & BTP",
      dates: "01/2019 — 12/2020",
      position: "Consultant Technique",
      employer: "CGI Montpellier",
      description: "Avant-vente puis équipe de développement pour traiter plusieurs évolutions. Implémentation SSO et Outlook Sync.",
      responsibilities: ["Développement", "Implémentation SSO", "Outlook Sync"],
      environment: ["Salesforce CRM"]
    },
    {
      sector: "Sport — Fédération Nationale",
      dates: "01/2019 — 12/2019",
      position: "Responsable Technique",
      employer: "CGI Montpellier",
      description: "Application Salesforce Classic pour la gestion des matchs de la Ligue Nationale de Rugby.",
      responsibilities: ["Développement", "Assistance technique"],
      environment: ["Salesforce CRM", "Visualforce"]
    },
    {
      sector: "Luxe & Cosmétiques",
      dates: "01/2019 — 12/2019",
      position: "Consultant Technique",
      employer: "CGI Montpellier",
      description: "Application mobile tablette pour les Beauty Assistants en approche Clienteling. Modernisation du processus de vente et de conseil grâce à la digitalisation.",
      responsibilities: ["Développement", "Support technique"],
      environment: ["Salesforce CRM"]
    },
    {
      sector: "Distribution — Matériel Industriel",
      dates: "01/2019 — 12/2019",
      position: "Consultant Technique",
      employer: "CGI Montpellier",
      description: "TMA de l'application Salesforce : suivi de stock, facturation et gestion des interventions.",
      responsibilities: ["Développement", "Support technique"],
      environment: ["Salesforce CRM", "Lightning Framework"]
    },
    {
      sector: "Restauration Collective",
      dates: "09/2018 — 12/2019",
      position: "Consultant Technique",
      employer: "CGI Montpellier",
      description: "TMA d'une très petite équipe avec des interventions ponctuelles.",
      responsibilities: ["Développement", "Support technique"],
      environment: ["Salesforce CRM", "Lightning Framework"]
    },
    {
      sector: "Assurance Entreprises & Collectivités",
      dates: "09/2018 — 12/2019",
      position: "Responsable Technique",
      employer: "CGI Montpellier",
      description: "Projet intégré à l'équipe déjà en place pour le projet du secteur Environnement & Eau.",
      responsibilities: ["Développement", "Support technique"],
      environment: ["Salesforce CRM", "Classic"]
    },
    {
      sector: "Environnement & Eau",
      dates: "09/2018 — 12/2019",
      position: "Responsable Technique",
      employer: "CGI Montpellier",
      description: "TMA suite à la migration de Salesforce Classic vers Lightning Experience.",
      responsibilities: ["Développement", "Support technique"],
      environment: ["Salesforce CRM", "Lightning Framework"]
    }
  ],
  preCareer: {
    sector: "Aménagement Urbain",
    dates: "09/2015 — 08/2018",
    position: "Développeur (Alternance — 3 ans)",
    employer: null,
    description: "Intégration au sein d'un service informatique pour une alternance de 3 ans. Recueil des besoins, rédaction de spécifications techniques, développement, assistance fonctionnelle et technique.",
    responsibilities: ["Recueil des besoins", "Spécifications techniques", "Développement", "Assistance"],
    environment: ["WINDEV", "WEBDEV"]
  },
  certifications: [
    { name: "Salesforce Certified Administrator", img: "assets/img/cert-admin.png", issuer: "Salesforce" },
    { name: "Salesforce Certified Platform Developer I", img: "assets/img/cert-dev1.png", issuer: "Salesforce" }
  ],
  education: [
    { title: "RNCP Niveau 7 — Expert Informatique et Système d'Information", school: "EPSI, Montpellier", year: "2018" },
    { title: "RNCP Niveau 6 — Administrateur Systèmes, Réseaux et Bases de Données", school: "EPSI, Montpellier", year: "2016" }
  ]
};

// ===== RENDER FUNCTIONS =====
function renderHome() {
  return `
    <div class="dashboard-grid">
      <article class="slds-card kpi-card"><div class="slds-card__body slds-card__body_inner"><div class="kpi-value">${cvData.yearsXP}</div><div class="kpi-label">Années d'expérience</div></div></article>
      <article class="slds-card kpi-card accent-green"><div class="slds-card__body slds-card__body_inner"><div class="kpi-value">${cvData.nbProjects}</div><div class="kpi-label">Projets réalisés</div></div></article>
      <article class="slds-card kpi-card accent-orange"><div class="slds-card__body slds-card__body_inner"><div class="kpi-value">${cvData.nbCerts}</div><div class="kpi-label">Certifications Salesforce</div></div></article>
      <article class="slds-card kpi-card accent-purple"><div class="slds-card__body slds-card__body_inner"><div class="kpi-value">6</div><div class="kpi-label">Secteurs d'industrie</div></div></article>
    </div>
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__figure">
            <span class="slds-icon_container slds-icon-standard-contact" style="background:#1b96ff;border-radius:.25rem;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center">
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#fff"/></svg>
            </span>
          </div>
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>Résumé du profil</span></h2></div>
        </header>
      </div>
      <div class="slds-card__body slds-card__body_inner">
        <p style="line-height:1.7;color:#3e3e3c">${cvData.profile}</p>
        <div class="slds-grid slds-gutters_small slds-m-top_small" style="gap:.75rem;flex-wrap:wrap">
          <span class="slds-badge slds-badge_success" style="background:#2e844a;color:#fff">Disponible</span>
          <span class="slds-badge" style="background:#e21836;color:#fff">Consultant CGI</span>
          <span class="slds-badge" style="background:#1b96ff;color:#fff">${cvData.industries}</span>
          <span class="slds-badge slds-badge_warning" style="background:#dd7a01;color:#fff">${cvData.languages}</span>
        </div>
      </div>
    </article>
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__figure">
            <span class="slds-icon_container" style="background:#1b96ff;border-radius:.25rem;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center">
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="#fff"/></svg>
            </span>
          </div>
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>Dernières missions</span></h2></div>
        </header>
      </div>
      <div class="slds-card__body">
        <table class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_striped">
          <thead><tr class="slds-line-height_reset">
            <th class="slds-text-title_caps" scope="col"><div class="slds-truncate">Secteur</div></th>
            <th class="slds-text-title_caps" scope="col"><div class="slds-truncate">Poste</div></th>
            <th class="slds-text-title_caps" scope="col"><div class="slds-truncate">Dates</div></th>
          </tr></thead>
          <tbody>${cvData.experiences.slice(0, 5).map(e => `
            <tr class="slds-hint-parent">
              <td><div class="slds-truncate" title="${e.sector}"><strong>${e.sector}</strong></div></td>
              <td><div class="slds-truncate" title="${e.position}">${e.position}</div></td>
              <td><div class="slds-truncate" title="${e.dates}">${e.dates}</div></td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </article>`;
}

function renderProfile() {
  return `
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__figure">
            <span class="slds-avatar slds-avatar_circle slds-avatar_large" style="width:3rem;height:3rem;overflow:hidden"><img src="assets/img/profile.png" alt="Maxime CLAVEL" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></span>
          </div>
          <div class="slds-media__body">
            <h2 class="slds-card__header-title"><span>${cvData.name}</span></h2>
            <p class="slds-text-body_small slds-text-color_weak">${cvData.title}</p>
          </div>
        </header>
        <div class="slds-no-flex"><span class="slds-badge slds-badge_success" style="background:#2e844a;color:#fff">Actif</span></div>
      </div>
      <div class="slds-card__body">
        <div class="slds-page-header__detail-row slds-grid slds-wrap" style="padding:.5rem 1rem;border-bottom:1px solid #e5e5e5;gap:.5rem">
          <span class="slds-badge slds-theme_success" style="background:#2e844a;color:#fff">Disponible</span>
          <span class="slds-badge" style="background:#1b96ff;color:#fff">Expert Salesforce</span>
          <span class="slds-badge" style="background:#e21836;color:#fff">CGI</span>
        </div>
        <div class="record-detail-grid">
          <div class="record-field"><div class="slds-form-element__label">Nom complet</div><div class="slds-form-element__static">${cvData.name}</div></div>
          <div class="record-field"><div class="slds-form-element__label">Titre</div><div class="slds-form-element__static">${cvData.title}</div></div>
          <div class="record-field"><div class="slds-form-element__label">Employeur</div><div class="slds-form-element__static">CGI — Montréal (depuis 04/2022)</div></div>
          <div class="record-field"><div class="slds-form-element__label">Expérience</div><div class="slds-form-element__static">${cvData.yearsXP} ans dans l'IT</div></div>
          <div class="record-field"><div class="slds-form-element__label">Certifications</div><div class="slds-form-element__static">${cvData.nbCerts} certifications Salesforce</div></div>
          <div class="record-field"><div class="slds-form-element__label">Langues</div><div class="slds-form-element__static">${cvData.languages}</div></div>
          <div class="record-field"><div class="slds-form-element__label">Secteurs</div><div class="slds-form-element__static">${cvData.industries}</div></div>
        </div>
      </div>
    </article>
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>À propos</span></h2></div>
        </header>
      </div>
      <div class="slds-card__body slds-card__body_inner"><p style="line-height:1.7;color:#3e3e3c">${cvData.profile}</p></div>
    </article>
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__figure">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#0a66c2"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </span>
          </div>
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>Publications LinkedIn</span></h2></div>
        </header>
      </div>
      <div class="slds-card__body slds-card__body_inner">
        ${cvData.linkedinPosts.map(p => `
        <div class="linkedin-post">
          <div class="linkedin-post__icon">
            <svg viewBox="0 0 24 24" width="16" height="16"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          </div>
          <div class="linkedin-post__body">
            <div class="linkedin-post__title">${p.title}</div>
            <div class="linkedin-post__date">${p.date}</div>
          </div>
        </div>`).join('')}
      </div>
      <div class="slds-card__footer">
        <a href="${cvData.linkedinUrl}" target="_blank" rel="noopener noreferrer" style="font-size:.8125rem;font-weight:600">Voir plus sur LinkedIn →</a>
      </div>
    </article>`;
}

function renderExperience() {
  // Build split list with CGI office headers
  let listHtml = '';
  // All experiences are CGI missions
  cvData.cgiCareer.forEach(office => {
    listHtml += `<div class="split-list-office">
      <img src="${cvData.employerLogo}" alt="CGI" class="split-office-logo">
      <div><strong>${office.office}</strong><br><span style="font-size:.6875rem;color:#939393">${office.dates}</span></div>
    </div>`;
    office.missions.forEach(idx => {
      const e = cvData.experiences[idx];
      listHtml += `<div class="split-list-item${idx === 0 ? ' slds-is-active' : ''}" data-index="${idx}" data-type="cgi">
        <div class="item-title">${e.sector}</div>
        <div class="item-subtitle">${e.position}</div>
        <div class="item-dates">${e.dates}</div>
      </div>`;
    });
  });
  // Pre-career (alternance)
  const pre = cvData.preCareer;
  listHtml += `<div class="split-list-office split-list-office--alt">
    <div><strong>Avant CGI — Alternance</strong><br><span style="font-size:.6875rem;color:#939393">${pre.dates}</span></div>
  </div>`;
  listHtml += `<div class="split-list-item" data-index="-1" data-type="pre">
    <div class="item-title">${pre.sector}</div>
    <div class="item-subtitle">${pre.position}</div>
    <div class="item-dates">${pre.dates}</div>
  </div>`;

  return `
    <div class="split-view">
      <div class="split-list">${listHtml}</div>
      <div class="split-detail" id="exp-detail">${renderExpDetail(0)}</div>
    </div>`;
}

function renderExpDetail(idx) {
  const e = idx === -1 ? cvData.preCareer : cvData.experiences[idx];
  const employerBadge = e.employer ? `<span class="slds-badge" style="background:#e21836;color:#fff;margin-left:.5rem">${e.employer}</span>` : '<span class="slds-badge" style="background:#706e6b;color:#fff;margin-left:.5rem">Alternance</span>';
  return `
    <div class="slds-page-header">
      <div class="slds-page-header__row">
        <div class="slds-page-header__col-title">
          <div class="slds-media">
            <div class="slds-media__figure">
              <span class="slds-icon_container" style="background:#1b96ff;border-radius:.25rem;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center">
                <svg viewBox="0 0 24 24" width="16" height="16"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="#fff"/></svg>
              </span>
            </div>
            <div class="slds-media__body">
              <div class="slds-page-header__name">
                <div class="slds-page-header__name-title">
                  <h1><span class="slds-page-header__title slds-truncate" title="${e.sector}">${e.sector}</span></h1>
                </div>
              </div>
              <p class="slds-page-header__name-meta">${e.position} — ${e.dates} ${employerBadge}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-section slds-m-top_medium">
      <h4>Description du projet</h4>
      <p>${e.description}</p>
    </div>
    <div class="detail-section">
      <h4>Responsabilités</h4>
      <div class="detail-tags">${e.responsibilities.map(r => `<span class="slds-badge detail-tag">${r}</span>`).join('')}</div>
    </div>
    <div class="detail-section">
      <h4>Environnement technique</h4>
      <div class="detail-tags">${e.environment.map(t => `<span class="slds-badge detail-tag">${t}</span>`).join('')}</div>
    </div>`;
}

function renderSkills() {
  const bars = cvData.qualifications.map(q => `
    <div class="skill-bar">
      <div class="skill-bar-label"><span>${q.name}</span><span>${q.level}%</span></div>
      <div class="skill-bar-track"><div class="skill-bar-fill ${q.cat}" style="width:${q.level}%"></div></div>
    </div>`).join('');

  const tools = cvData.tools.map(t => `<span class="tool-chip">${t}</span>`).join('');
  const areas = cvData.areas.map(a => `<span class="slds-badge detail-tag">${a}</span>`).join('');

  return `
    <div class="skills-grid">
      <article class="slds-card">
        <div class="slds-card__header slds-grid">
          <header class="slds-media slds-media_center slds-has-flexi-truncate">
            <div class="slds-media__figure">
              <span class="slds-icon_container" style="background:#1b96ff;border-radius:.25rem;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center">
                <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#fff"/></svg>
              </span>
            </div>
            <div class="slds-media__body"><h2 class="slds-card__header-title"><span>Langages &amp; Frameworks</span></h2></div>
          </header>
        </div>
        <div class="slds-card__body slds-card__body_inner">${bars}</div>
      </article>
      <div>
        <article class="slds-card">
          <div class="slds-card__header slds-grid">
            <header class="slds-media slds-media_center slds-has-flexi-truncate">
              <div class="slds-media__figure">
                <span class="slds-icon_container" style="background:#dd7a01;border-radius:.25rem;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center">
                  <svg viewBox="0 0 24 24" width="16" height="16"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" fill="#fff"/></svg>
                </span>
              </div>
              <div class="slds-media__body"><h2 class="slds-card__header-title"><span>Outils &amp; Logiciels</span></h2></div>
            </header>
          </div>
          <div class="slds-card__body slds-card__body_inner"><div class="tools-list">${tools}</div></div>
        </article>
        <article class="slds-card">
          <div class="slds-card__header slds-grid">
            <header class="slds-media slds-media_center slds-has-flexi-truncate">
              <div class="slds-media__figure">
                <span class="slds-icon_container" style="background:#8b6dba;border-radius:.25rem;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center">
                  <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#fff"/></svg>
                </span>
              </div>
              <div class="slds-media__body"><h2 class="slds-card__header-title"><span>Domaines d'expertise</span></h2></div>
            </header>
          </div>
          <div class="slds-card__body slds-card__body_inner"><div class="detail-tags">${areas}</div></div>
        </article>
      </div>
    </div>`;
}

function renderCertifications() {
  const certs = cvData.certifications.map(c => `
    <a href="https://www.salesforce.com/trailblazer/mclavel" target="_blank" rel="noopener noreferrer" class="slds-card cert-card" style="display:block;text-decoration:none;cursor:pointer">
      <div class="slds-card__body slds-card__body_inner" style="display:flex;align-items:center;gap:1rem">
        <img src="${c.img}" alt="${c.name}" style="width:80px;height:auto">
        <div class="cert-info"><h3>${c.name}</h3><p>Délivré par ${c.issuer}</p></div>
      </div>
    </a>`).join('');

  const edu = cvData.education.map(e => `
    <div class="edu-item">
      <h3>${e.title}</h3>
      <p>${e.school} — ${e.year}</p>
    </div>`).join('');

  return `
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__figure">
            <span class="slds-icon_container" style="background:#1b96ff;border-radius:.25rem;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center">
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" fill="#fff"/></svg>
            </span>
          </div>
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>Certifications</span></h2></div>
        </header>
        <div class="slds-no-flex"><span class="slds-badge" style="background:#1b96ff;color:#fff">${cvData.nbCerts}</span></div>
      </div>
      <div class="slds-card__body slds-card__body_inner"><div class="cert-grid">${certs}</div></div>
    </article>
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__figure">
            <span class="slds-icon_container" style="background:#2e844a;border-radius:.25rem;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center">
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="#fff"/></svg>
            </span>
          </div>
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>Formation</span></h2></div>
        </header>
      </div>
      <div class="slds-card__body slds-card__body_inner"><div class="edu-timeline">${edu}</div></div>
    </article>`;
}

function renderProjects() {
  return cvData.projects.map(p => {
    const featureCards = p.features.map(f => `
      <div class="project-feature-card">
        <div class="project-feature-icon">${f.icon}</div>
        <div class="project-feature-body">
          <div class="project-feature-title">${f.title}</div>
          <div class="project-feature-desc">${f.desc}</div>
        </div>
      </div>`).join('');

    const langBars = p.languages.map(l => `
      <div class="project-lang">
        <span class="project-lang-dot" style="background:${l.color}"></span>
        <span class="project-lang-name">${l.name}</span>
        <span class="project-lang-pct">${l.pct}%</span>
      </div>`).join('');

    return `
    <!-- Project hero card -->
    <article class="slds-card project-hero">
      <div class="slds-card__body slds-card__body_inner" style="padding:1.5rem">
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem">
          <div class="project-logo">🦊</div>
          <div style="flex:1;min-width:0">
            <h2 style="font-size:1.5rem;font-weight:800;color:#032d60;margin:0">${p.name}</h2>
            <p style="font-size:.875rem;color:#706e6b;margin:.25rem 0 0">${p.tagline}</p>
          </div>
          <div style="display:flex;gap:.5rem;flex-shrink:0">
            <a href="${p.chromeUrl}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn--chrome">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              Chrome Web Store
            </a>
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn--github">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
              GitHub
            </a>
          </div>
        </div>
        <div style="display:flex;gap:1rem;margin-bottom:1.25rem;flex-wrap:wrap">
          <span class="slds-badge" style="background:#1b96ff;color:#fff">v${p.version}</span>
          <span class="slds-badge" style="background:#2e844a;color:#fff">${p.users} utilisateurs</span>
          <span class="slds-badge" style="background:#8b6dba;color:#fff">${p.releases} releases</span>
          <span class="slds-badge" style="background:#706e6b;color:#fff">${p.license}</span>
        </div>
        <p style="line-height:1.7;color:#3e3e3c;font-size:.875rem">${p.description}</p>
      </div>
    </article>

    <!-- Features grid -->
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__figure">
            <span class="slds-icon_container" style="background:#1b96ff;border-radius:.25rem;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center">
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#fff"/></svg>
            </span>
          </div>
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>Fonctionnalités clés</span></h2></div>
        </header>
        <div class="slds-no-flex"><span class="slds-badge" style="background:#1b96ff;color:#fff">${p.features.length}</span></div>
      </div>
      <div class="slds-card__body slds-card__body_inner">
        <div class="project-features-grid">${featureCards}</div>
      </div>
    </article>

    <!-- Tech stack -->
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__figure">
            <span class="slds-icon_container" style="background:#8b6dba;border-radius:.25rem;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center">
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="#fff"/></svg>
            </span>
          </div>
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>Stack technique</span></h2></div>
        </header>
      </div>
      <div class="slds-card__body slds-card__body_inner">
        <div class="project-lang-bar">
          ${p.languages.map(l => `<div class="project-lang-segment" style="width:${l.pct}%;background:${l.color}" title="${l.name} ${l.pct}%"></div>`).join('')}
        </div>
        <div class="project-lang-legend">${langBars}</div>
      </div>
    </article>`;
  }).join('');
}

// ===== TAB NAVIGATION =====
const tabs = document.querySelectorAll('.slds-context-bar__item[data-tab]');
const contents = document.querySelectorAll('.tab-content');
const renderers = { home: renderHome, profile: renderProfile, experience: renderExperience, skills: renderSkills, certifications: renderCertifications, projects: renderProjects };

function switchTab(tabName) {
  tabs.forEach(t => t.classList.toggle('slds-is-active', t.dataset.tab === tabName));
  contents.forEach(c => c.classList.toggle('slds-is-active', c.id === 'tab-' + tabName));
  const container = document.getElementById('tab-' + tabName);
  if (container && renderers[tabName]) container.innerHTML = renderers[tabName]();
  if (tabName === 'experience') bindExpListeners();
  if (tabName === 'skills') animateSkillBars();
}

function bindExpListeners() {
  document.querySelectorAll('.split-list-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.split-list-item').forEach(i => i.classList.remove('slds-is-active'));
      item.classList.add('slds-is-active');
      const idx = parseInt(item.dataset.index);
      document.getElementById('exp-detail').innerHTML = renderExpDetail(idx);
    });
  });
}

function animateSkillBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const w = bar.style.width;
    bar.style.width = '0';
    requestAnimationFrame(() => { requestAnimationFrame(() => { bar.style.width = w; }); });
  });
}

tabs.forEach(tab => tab.addEventListener('click', () => switchTab(tab.dataset.tab)));

// ===== SEARCH =====
document.getElementById('globalSearch').addEventListener('input', function () {
  const q = this.value.toLowerCase().trim();
  if (!q) return;
  const matches = [];
  if (cvData.profile.toLowerCase().includes(q)) matches.push('profile');
  cvData.experiences.forEach(e => {
    if ((e.sector + e.description + e.position).toLowerCase().includes(q)) matches.push('experience');
  });
  cvData.qualifications.forEach(s => { if (s.name.toLowerCase().includes(q)) matches.push('skills'); });
  cvData.certifications.forEach(c => { if (c.name.toLowerCase().includes(q)) matches.push('certifications'); });
  if (matches.length) switchTab(matches[0]);
});

// ===== DARK MODE =====
const darkBtn = document.getElementById('darkModeBtn');
const scope = document.querySelector('.slds-scope');

function setDarkMode(on) {
  scope.classList.toggle('dark-mode', on);
  localStorage.setItem('foxcv-dark', on ? '1' : '0');
}

darkBtn.addEventListener('click', () => setDarkMode(!scope.classList.contains('dark-mode')));

// restore preference
if (localStorage.getItem('foxcv-dark') === '1') setDarkMode(true);

// ===== INIT =====
switchTab('home');
