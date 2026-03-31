// ===== DATA =====
let currentLang = localStorage.getItem('foxcv-lang') || 'fr';

const cvDataFR = {
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
    { title: "TDX '24 — Deep Dive into Apex Best Practices", date: "Mars 2025", url: "https://www.linkedin.com/posts/maxime-clavel-7603a3aa_tdx-24-deep-dive-into-apex-best-practices-ugcPost-7175340048383397888-kLW6" },
    { title: "Deep Dive into LWC Best Practices", date: "Mars 2025", url: "https://www.linkedin.com/posts/maxime-clavel-7603a3aa_deep-dive-into-lwc-best-practices-ugcPost-7173185464609165312-FMvz" },
    { title: "LWC — What's New and What's Coming", date: "Mars 2025", url: "https://www.linkedin.com/posts/maxime-clavel-7603a3aa_lwc-whats-new-and-whats-coming-ugcPost-7173919556749426688-41Xb" }
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

const cvDataEN = {
  name: "Maxime CLAVEL",
  title: "Salesforce Technical Expert",
  yearsXP: "+10",
  nbProjects: 17,
  nbCerts: 2,
  employer: "CGI",
  employerLogo: "assets/img/cgi-logo.png",
  profile: "With over 10 years of experience in the IT sector, Salesforce expert involved in all project phases: analysis, consulting, functional and technical design, implementation, version management and user support. Consultant at CGI since 2018.",
  languages: "French (fluent), English (advanced)",
  industries: "Healthcare, Energy, Luxury, Aerospace, Sports, Construction",
  qualifications: [
    { name: "Salesforce (Apex, VF, Aura, LWC)", level: 95, cat: "expert" },
    { name: "JavaScript / HTML / CSS", level: 85, cat: "expert" },
    { name: "Java / JavaEE", level: 65, cat: "advanced" },
    { name: "C / C++", level: 55, cat: "intermediate" },
    { name: "WINDEV / WEBDEV", level: 60, cat: "advanced" },
    { name: "SQL", level: 75, cat: "advanced" }
  ],
  tools: ["VSCode", "Dataloader", "Git", "Postman", "Copilot", "NetBeans", "Eclipse", "Bitbucket", "GitLab", "Azure DevOps"],
  areas: ["Application Development", "Cloud Computing", "Data Science", "CI/CD & DevOps"],
  linkedinUrl: "https://www.linkedin.com/in/maxime-clavel-7603a3aa/",
  linkedinPosts: [
    { title: "TDX '24 — Deep Dive into Apex Best Practices", date: "March 2025", url: "https://www.linkedin.com/posts/maxime-clavel-7603a3aa_tdx-24-deep-dive-into-apex-best-practices-ugcPost-7175340048383397888-kLW6" },
    { title: "Deep Dive into LWC Best Practices", date: "March 2025", url: "https://www.linkedin.com/posts/maxime-clavel-7603a3aa_deep-dive-into-lwc-best-practices-ugcPost-7173185464609165312-FMvz" },
    { title: "LWC — What's New and What's Coming", date: "March 2025", url: "https://www.linkedin.com/posts/maxime-clavel-7603a3aa_lwc-whats-new-and-whats-coming-ugcPost-7173919556749426688-41Xb" }
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
      description: "A powerful Chrome extension that revolutionizes Salesforce debug log analysis. No more unreadable raw logs: instantly visualize your Apex logs in a modern, intuitive interface directly from Salesforce Lightning.",
      features: [
        { icon: "📊", title: "Real-time Visualization", desc: "Automatic display of Apex logs with smart refresh and a parser analyzing 15+ log line types" },
        { icon: "🔍", title: "22 Anti-pattern Detections", desc: "SOQL/DML in loops, N+1 Query, Trigger recursion, hardcoded IDs… with severity levels and fix suggestions" },
        { icon: "🌳", title: "4 Complementary Views", desc: "Summary, hierarchical Call Tree, Anti-pattern Analysis, Raw Log — with PDF/Markdown/TXT export" },
        { icon: "👥", title: "Multi-user Management", desc: "User selector with visual TraceFlag indicators 🟢🟡📋 and one-click activation/deactivation" },
        { icon: "⚡", title: "Optimized Performance", desc: "Smart caching, Web Workers for the call tree, background processing for a smooth experience" },
        { icon: "🛡️", title: "Salesforce Limits Alerts", desc: "Real-time monitoring of execution limits with visual alerts at 70% and 90%" }
      ],
      chromeUrl: "https://chromewebstore.google.com/detail/foxlog-salesforce-debug-l/ljohmmiegangoogccdmafimhilpfekhh",
      githubUrl: "https://github.com/MaximeClavel/FoxLog"
    }
  ],
  cgiCareer: [
    { office: "CGI — Montreal, Canada", dates: "04/2022 — Present", missions: [0, 1] },
    { office: "CGI — Montpellier, France", dates: "09/2018 — 04/2022", missions: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] }
  ],
  experiences: [
    {
      sector: "Energy — State Corporation",
      dates: "10/2022 — Present",
      position: "Salesforce Lead Developer — Technical Consultant",
      employer: "CGI Montreal",
      description: "Implementation of robust functional solutions meeting client requirements and Salesforce best practices. Analysis and resolution of issues and incidents. Applying fixes via configuration and solution implementation. Maintenance of Salesforce components. CI/CD implementation.",
      responsibilities: ["New feature development", "Technical support", "DevOps implementation/support", "Code review"],
      environment: ["Salesforce CRM", "Bitbucket", "CI/CD"]
    },
    {
      sector: "Renewable Energy",
      dates: "05/2022 — 10/2022",
      position: "Salesforce Developer — Technical Consultant",
      employer: "CGI Montreal",
      description: "Implementation of a Salesforce MVP to improve opportunity and stakeholder management. Migration from disparate databases and sales pipelines managed in Excel and OneNote to Salesforce CRM.",
      responsibilities: ["New feature development", "Technical support"],
      environment: ["Salesforce CRM", "SharePoint", "Outlook", "SSO", "Azure DevOps"]
    },
    {
      sector: "Aerospace & Defense",
      dates: "12/2021 — 04/2022",
      position: "Salesforce Developer — Tech Lead Consultant",
      employer: "CGI Montpellier",
      description: "Global technology leader. Salesforce environment for aerospace sales management.",
      responsibilities: ["Development", "Technical support", "Implementation review", "Deployment management"],
      environment: ["Salesforce CRM", "GitLab", "CI/CD"]
    },
    {
      sector: "Industrial Gas & Healthcare",
      dates: "03/2021 — 12/2021",
      position: "Salesforce Developer — Technical Consultant",
      employer: "CGI Montpellier",
      description: "Continuous integration with various external systems: G-Suite, Medallia, SAP-DataLake-MongoDB-TIBCO, CPQ — Configure Price Quote.",
      responsibilities: ["New feature development", "Technical support"],
      environment: ["Salesforce CRM", "Google G-Suite", "Medallia", "SAP", "CPQ"]
    },
    {
      sector: "Consumer Services",
      dates: "02/2021",
      position: "Salesforce Developer — Technical Consultant",
      employer: "CGI Montpellier",
      description: "French group leading provider of services to individuals and businesses.",
      responsibilities: ["Technical support", "Technical assistance"],
      environment: ["Salesforce CRM", "Community"]
    },
    {
      sector: "Public Agency — Environment",
      dates: "02/2021",
      position: "Salesforce Developer — Technical Consultant",
      employer: "CGI Montpellier",
      description: "Pre-sales preparation and reorganization of a Salesforce Org.",
      responsibilities: ["Salesforce Org reorganization"],
      environment: ["Salesforce CRM"]
    },
    {
      sector: "Digital Services — Notary",
      dates: "02/2021",
      position: "Salesforce Developer — Technical Consultant",
      employer: "CGI Montpellier",
      description: "Implementation of an Auth. Provider on a Hub Org.",
      responsibilities: ["Development", "Technical assistance"],
      environment: ["Salesforce CRM", "Auth. Provider"]
    },
    {
      sector: "Banking Sector",
      dates: "03/2020 — 12/2021",
      position: "TMA Technical Lead",
      employer: "CGI Montpellier",
      description: "Salesforce application enabling management and tracking of bank branches.",
      responsibilities: ["Risk management", "Technical oversight", "Salesforce standards compliance", "Development"],
      environment: ["Salesforce CRM", "Auth. Provider"]
    },
    {
      sector: "Tourism & Leisure",
      dates: "10/2019 — 07/2020",
      position: "Technical Lead",
      employer: "CGI Montpellier",
      description: "CRM change for the B2C division. Technical architecture, web services, scoping workshops.",
      responsibilities: ["Technical architecture", "Web services", "Scoping workshops", "Risk management", "Technical oversight"],
      environment: ["Salesforce CRM", "WebServices"]
    },
    {
      sector: "Engineering & Construction",
      dates: "01/2019 — 12/2020",
      position: "Technical Consultant",
      employer: "CGI Montpellier",
      description: "Pre-sales then development team to handle multiple evolutions. SSO and Outlook Sync implementation.",
      responsibilities: ["Development", "SSO implementation", "Outlook Sync"],
      environment: ["Salesforce CRM"]
    },
    {
      sector: "Sports — National Federation",
      dates: "01/2019 — 12/2019",
      position: "Technical Lead",
      employer: "CGI Montpellier",
      description: "Salesforce Classic application for managing National Rugby League matches.",
      responsibilities: ["Development", "Technical assistance"],
      environment: ["Salesforce CRM", "Visualforce"]
    },
    {
      sector: "Luxury & Cosmetics",
      dates: "01/2019 — 12/2019",
      position: "Technical Consultant",
      employer: "CGI Montpellier",
      description: "Tablet mobile application for Beauty Assistants with a Clienteling approach. Modernizing the sales and advisory process through digitalization.",
      responsibilities: ["Development", "Technical support"],
      environment: ["Salesforce CRM"]
    },
    {
      sector: "Distribution — Industrial Equipment",
      dates: "01/2019 — 12/2019",
      position: "Technical Consultant",
      employer: "CGI Montpellier",
      description: "TMA of the Salesforce application: stock tracking, billing and intervention management.",
      responsibilities: ["Development", "Technical support"],
      environment: ["Salesforce CRM", "Lightning Framework"]
    },
    {
      sector: "Collective Catering",
      dates: "09/2018 — 12/2019",
      position: "Technical Consultant",
      employer: "CGI Montpellier",
      description: "TMA of a very small team with occasional interventions.",
      responsibilities: ["Development", "Technical support"],
      environment: ["Salesforce CRM", "Lightning Framework"]
    },
    {
      sector: "Corporate & Public Insurance",
      dates: "09/2018 — 12/2019",
      position: "Technical Lead",
      employer: "CGI Montpellier",
      description: "Project integrated into the team already in place for the Environment & Water sector project.",
      responsibilities: ["Development", "Technical support"],
      environment: ["Salesforce CRM", "Classic"]
    },
    {
      sector: "Environment & Water",
      dates: "09/2018 — 12/2019",
      position: "Technical Lead",
      employer: "CGI Montpellier",
      description: "TMA following the migration from Salesforce Classic to Lightning Experience.",
      responsibilities: ["Development", "Technical support"],
      environment: ["Salesforce CRM", "Lightning Framework"]
    }
  ],
  preCareer: {
    sector: "Urban Planning",
    dates: "09/2015 — 08/2018",
    position: "Developer (Work-Study — 3 years)",
    employer: null,
    description: "Integration within an IT department for a 3-year work-study program. Requirements gathering, technical specifications writing, development, functional and technical support.",
    responsibilities: ["Requirements gathering", "Technical specifications", "Development", "Support"],
    environment: ["WINDEV", "WEBDEV"]
  },
  certifications: [
    { name: "Salesforce Certified Administrator", img: "assets/img/cert-admin.png", issuer: "Salesforce" },
    { name: "Salesforce Certified Platform Developer I", img: "assets/img/cert-dev1.png", issuer: "Salesforce" }
  ],
  education: [
    { title: "RNCP Level 7 — IT & Information Systems Expert", school: "EPSI, Montpellier", year: "2018" },
    { title: "RNCP Level 6 — Systems, Networks & Database Administrator", school: "EPSI, Montpellier", year: "2016" }
  ]
};

const uiLabels = {
  fr: {
    appTitle: "Salesforce Technical Consultant",
    searchPlaceholder: "Rechercher dans le CV...",
    darkModeTitle: "Basculer mode sombre / clair",
    tabHome: "Accueil", tabProfile: "Profil", tabExperience: "Expériences",
    tabSkills: "Compétences", tabCertifications: "Certifications", tabProjects: "Projets",
    yearsXP: "Années d'expérience", projectsDone: "Projets réalisés",
    sfCerts: "Certifications Salesforce", industrySectors: "Secteurs d'industrie",
    profileSummary: "Résumé du profil", available: "Disponible",
    consultant: "Consultant CGI", latestMissions: "Dernières missions",
    thSector: "Secteur", thPosition: "Poste", thDates: "Dates",
    fullName: "Nom complet", titleLabel: "Titre", employerLabel: "Employeur",
    experienceLabel: "Expérience", certsLabel: "Certifications", langLabel: "Langues",
    sectorsLabel: "Secteurs", about: "À propos", active: "Actif",
    expertSF: "Expert Salesforce", linkedinPosts: "Publications LinkedIn",
    seeMoreLinkedin: "Voir plus sur LinkedIn →",
    projectDesc: "Description du projet", responsibilities: "Responsabilités",
    techEnv: "Environnement technique", preCGI: "Avant CGI — Alternance",
    langFrameworks: "Langages & Frameworks", toolsSoftware: "Outils & Logiciels",
    expertiseAreas: "Domaines d'expertise", certifications: "Certifications",
    education: "Formation", issuedBy: "Délivré par",
    keyFeatures: "Fonctionnalités clés", techStack: "Stack technique",
    users: "utilisateurs", releases: "releases",
    employerInfo: "CGI — Montréal (depuis 04/2022)",
    yearsInIT: "ans dans l'IT", sfCertsCount: "certifications Salesforce",
    alternance: "Alternance"
  },
  en: {
    appTitle: "Salesforce Technical Consultant",
    searchPlaceholder: "Search in CV...",
    darkModeTitle: "Toggle dark / light mode",
    tabHome: "Home", tabProfile: "Profile", tabExperience: "Experience",
    tabSkills: "Skills", tabCertifications: "Certifications", tabProjects: "Projects",
    yearsXP: "Years of experience", projectsDone: "Projects completed",
    sfCerts: "Salesforce Certifications", industrySectors: "Industry sectors",
    profileSummary: "Profile Summary", available: "Available",
    consultant: "CGI Consultant", latestMissions: "Latest Missions",
    thSector: "Sector", thPosition: "Position", thDates: "Dates",
    fullName: "Full Name", titleLabel: "Title", employerLabel: "Employer",
    experienceLabel: "Experience", certsLabel: "Certifications", langLabel: "Languages",
    sectorsLabel: "Sectors", about: "About", active: "Active",
    expertSF: "Salesforce Expert", linkedinPosts: "LinkedIn Posts",
    seeMoreLinkedin: "See more on LinkedIn →",
    projectDesc: "Project Description", responsibilities: "Responsibilities",
    techEnv: "Technical Environment", preCGI: "Before CGI — Work-Study",
    langFrameworks: "Languages & Frameworks", toolsSoftware: "Tools & Software",
    expertiseAreas: "Areas of Expertise", certifications: "Certifications",
    education: "Education", issuedBy: "Issued by",
    keyFeatures: "Key Features", techStack: "Tech Stack",
    users: "users", releases: "releases",
    employerInfo: "CGI — Montreal (since 04/2022)",
    yearsInIT: "years in IT", sfCertsCount: "Salesforce certifications",
    alternance: "Work-Study"
  }
};

function getCvData() { return currentLang === 'en' ? cvDataEN : cvDataFR; }
function getLabels() { return uiLabels[currentLang]; }

// Keep backward-compatible reference
let cvData = getCvData();

// ===== RENDER FUNCTIONS =====
function renderHome() {
  const d = getCvData();
  const l = getLabels();
  return `
    <div class="dashboard-grid">
      <article class="slds-card kpi-card"><div class="slds-card__body slds-card__body_inner"><div class="kpi-value">${d.yearsXP}</div><div class="kpi-label">${l.yearsXP}</div></div></article>
      <article class="slds-card kpi-card accent-green"><div class="slds-card__body slds-card__body_inner"><div class="kpi-value">${d.nbProjects}</div><div class="kpi-label">${l.projectsDone}</div></div></article>
      <article class="slds-card kpi-card accent-orange"><div class="slds-card__body slds-card__body_inner"><div class="kpi-value">${d.nbCerts}</div><div class="kpi-label">${l.sfCerts}</div></div></article>
      <article class="slds-card kpi-card accent-purple"><div class="slds-card__body slds-card__body_inner"><div class="kpi-value">6</div><div class="kpi-label">${l.industrySectors}</div></div></article>
    </div>
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__figure">
            <span class="slds-icon_container slds-icon-standard-contact" style="background:#1b96ff;border-radius:.25rem;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center">
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#fff"/></svg>
            </span>
          </div>
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>${l.profileSummary}</span></h2></div>
        </header>
      </div>
      <div class="slds-card__body slds-card__body_inner">
        <p style="line-height:1.7;color:#3e3e3c">${d.profile}</p>
        <div class="slds-grid slds-gutters_small slds-m-top_small" style="gap:.75rem;flex-wrap:wrap">
          <span class="slds-badge slds-badge_success" style="background:#2e844a;color:#fff">${l.available}</span>
          <span class="slds-badge" style="background:#e21836;color:#fff">${l.consultant}</span>
          <span class="slds-badge" style="background:#1b96ff;color:#fff">${d.industries}</span>
          <span class="slds-badge slds-badge_warning" style="background:#dd7a01;color:#fff">${d.languages}</span>
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
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>${l.latestMissions}</span></h2></div>
        </header>
      </div>
      <div class="slds-card__body">
        <div class="table-scroll-wrapper">
        <table class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_striped">
          <thead><tr class="slds-line-height_reset">
            <th class="slds-text-title_caps" scope="col"><div class="slds-truncate">${l.thSector}</div></th>
            <th class="slds-text-title_caps" scope="col"><div class="slds-truncate">${l.thPosition}</div></th>
            <th class="slds-text-title_caps" scope="col"><div class="slds-truncate">${l.thDates}</div></th>
          </tr></thead>
          <tbody>${d.experiences.slice(0, 5).map(e => `
            <tr class="slds-hint-parent">
              <td><div class="slds-truncate" title="${e.sector}"><strong>${e.sector}</strong></div></td>
              <td><div class="slds-truncate" title="${e.position}">${e.position}</div></td>
              <td><div class="slds-truncate" title="${e.dates}">${e.dates}</div></td>
            </tr>`).join('')}
          </tbody>
        </table>
        </div>
      </div>
    </article>`;
}

function renderProfile() {
  const d = getCvData();
  const l = getLabels();
  return `
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__figure">
            <span class="slds-avatar slds-avatar_circle slds-avatar_large" style="width:3rem;height:3rem;overflow:hidden"><img src="assets/img/profile.png" alt="Maxime CLAVEL" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></span>
          </div>
          <div class="slds-media__body">
            <h2 class="slds-card__header-title"><span>${d.name}</span></h2>
            <p class="slds-text-body_small slds-text-color_weak">${d.title}</p>
          </div>
        </header>
        <div class="slds-no-flex"><span class="slds-badge slds-badge_success" style="background:#2e844a;color:#fff">${l.active}</span></div>
      </div>
      <div class="slds-card__body">
        <div class="slds-page-header__detail-row slds-grid slds-wrap" style="padding:.5rem 1rem;border-bottom:1px solid #e5e5e5;gap:.5rem">
          <span class="slds-badge slds-theme_success" style="background:#2e844a;color:#fff">${l.available}</span>
          <span class="slds-badge" style="background:#1b96ff;color:#fff">${l.expertSF}</span>
          <span class="slds-badge" style="background:#e21836;color:#fff">CGI</span>
        </div>
        <div class="record-detail-grid">
          <div class="record-field"><div class="slds-form-element__label">${l.fullName}</div><div class="slds-form-element__static">${d.name}</div></div>
          <div class="record-field"><div class="slds-form-element__label">${l.titleLabel}</div><div class="slds-form-element__static">${d.title}</div></div>
          <div class="record-field"><div class="slds-form-element__label">${l.employerLabel}</div><div class="slds-form-element__static">${l.employerInfo}</div></div>
          <div class="record-field"><div class="slds-form-element__label">${l.experienceLabel}</div><div class="slds-form-element__static">${d.yearsXP} ${l.yearsInIT}</div></div>
          <div class="record-field"><div class="slds-form-element__label">${l.certsLabel}</div><div class="slds-form-element__static">${d.nbCerts} ${l.sfCertsCount}</div></div>
          <div class="record-field"><div class="slds-form-element__label">${l.langLabel}</div><div class="slds-form-element__static">${d.languages}</div></div>
          <div class="record-field"><div class="slds-form-element__label">${l.sectorsLabel}</div><div class="slds-form-element__static">${d.industries}</div></div>
        </div>
      </div>
    </article>
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>${l.about}</span></h2></div>
        </header>
      </div>
      <div class="slds-card__body slds-card__body_inner"><p style="line-height:1.7;color:#3e3e3c">${d.profile}</p></div>
    </article>
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__figure">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#0a66c2"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </span>
          </div>
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>${l.linkedinPosts}</span></h2></div>
        </header>
      </div>
      <div class="slds-card__body slds-card__body_inner">
        ${d.linkedinPosts.map(p => `
        <${p.url ? `a href="${p.url}" target="_blank" rel="noopener noreferrer"` : 'div'} class="linkedin-post${p.url ? ' linkedin-post--link' : ''}">
          <div class="linkedin-post__icon">
            <svg viewBox="0 0 24 24" width="16" height="16"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          </div>
          <div class="linkedin-post__body">
            <div class="linkedin-post__title">${p.title}</div>
            <div class="linkedin-post__date">${p.date}</div>
          </div>
        </${p.url ? 'a' : 'div'}>`).join('')}
      </div>
      <div class="slds-card__footer">
        <a href="${d.linkedinUrl}" target="_blank" rel="noopener noreferrer" style="font-size:.8125rem;font-weight:600">${l.seeMoreLinkedin}</a>
      </div>
    </article>`;
}

function renderExperience() {
  const d = getCvData();
  const l = getLabels();
  // Build split list with CGI office headers
  let listHtml = '';
  // All experiences are CGI missions
  d.cgiCareer.forEach(office => {
    listHtml += `<div class="split-list-office">
      <img src="${d.employerLogo}" alt="CGI" class="split-office-logo">
      <div><strong>${office.office}</strong><br><span style="font-size:.6875rem;color:#939393">${office.dates}</span></div>
    </div>`;
    office.missions.forEach(idx => {
      const e = d.experiences[idx];
      listHtml += `<div class="split-list-item${idx === 0 ? ' slds-is-active' : ''}" data-index="${idx}" data-type="cgi">
        <div class="item-title">${e.sector}</div>
        <div class="item-subtitle">${e.position}</div>
        <div class="item-dates">${e.dates}</div>
      </div>`;
    });
  });
  // Pre-career (alternance)
  const pre = d.preCareer;
  listHtml += `<div class="split-list-office split-list-office--alt">
    <div><strong>${l.preCGI}</strong><br><span style="font-size:.6875rem;color:#939393">${pre.dates}</span></div>
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
  const d = getCvData();
  const l = getLabels();
  const e = idx === -1 ? d.preCareer : d.experiences[idx];
  const employerBadge = e.employer ? `<span class="slds-badge" style="background:#e21836;color:#fff;margin-left:.5rem">${e.employer}</span>` : `<span class="slds-badge" style="background:#706e6b;color:#fff;margin-left:.5rem">${l.alternance}</span>`;
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
      <h4>${l.projectDesc}</h4>
      <p>${e.description}</p>
    </div>
    <div class="detail-section">
      <h4>${l.responsibilities}</h4>
      <div class="detail-tags">${e.responsibilities.map(r => `<span class="slds-badge detail-tag">${r}</span>`).join('')}</div>
    </div>
    <div class="detail-section">
      <h4>${l.techEnv}</h4>
      <div class="detail-tags">${e.environment.map(t => `<span class="slds-badge detail-tag">${t}</span>`).join('')}</div>
    </div>`;
}

function renderSkills() {
  const d = getCvData();
  const l = getLabels();
  const bars = d.qualifications.map(q => `
    <div class="skill-bar">
      <div class="skill-bar-label"><span>${q.name}</span><span>${q.level}%</span></div>
      <div class="skill-bar-track"><div class="skill-bar-fill ${q.cat}" style="width:${q.level}%"></div></div>
    </div>`).join('');

  const tools = d.tools.map(t => `<span class="tool-chip">${t}</span>`).join('');
  const areas = d.areas.map(a => `<span class="slds-badge detail-tag">${a}</span>`).join('');

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
            <div class="slds-media__body"><h2 class="slds-card__header-title"><span>${l.langFrameworks}</span></h2></div>
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
              <div class="slds-media__body"><h2 class="slds-card__header-title"><span>${l.toolsSoftware}</span></h2></div>
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
              <div class="slds-media__body"><h2 class="slds-card__header-title"><span>${l.expertiseAreas}</span></h2></div>
            </header>
          </div>
          <div class="slds-card__body slds-card__body_inner"><div class="detail-tags">${areas}</div></div>
        </article>
      </div>
    </div>`;
}

function renderCertifications() {
  const d = getCvData();
  const l = getLabels();
  const certs = d.certifications.map(c => `
    <a href="https://www.salesforce.com/trailblazer/mclavel" target="_blank" rel="noopener noreferrer" class="slds-card cert-card" style="display:block;text-decoration:none;cursor:pointer">
      <div class="slds-card__body slds-card__body_inner" style="display:flex;align-items:center;gap:1rem">
        <img src="${c.img}" alt="${c.name}" style="width:80px;height:auto">
        <div class="cert-info"><h3>${c.name}</h3><p>${l.issuedBy} ${c.issuer}</p></div>
      </div>
    </a>`).join('');

  const edu = d.education.map(e => `
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
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>${l.certifications}</span></h2></div>
        </header>
        <div class="slds-no-flex"><span class="slds-badge" style="background:#1b96ff;color:#fff">${d.nbCerts}</span></div>
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
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>${l.education}</span></h2></div>
        </header>
      </div>
      <div class="slds-card__body slds-card__body_inner"><div class="edu-timeline">${edu}</div></div>
    </article>`;
}

function renderProjects() {
  const d = getCvData();
  const lb = getLabels();
  return d.projects.map(p => {
    const featureCards = p.features.map(f => `
      <div class="project-feature-card">
        <div class="project-feature-icon">${f.icon}</div>
        <div class="project-feature-body">
          <div class="project-feature-title">${f.title}</div>
          <div class="project-feature-desc">${f.desc}</div>
        </div>
      </div>`).join('');

    const langBars = p.languages.map(lg => `
      <div class="project-lang">
        <span class="project-lang-dot" style="background:${lg.color}"></span>
        <span class="project-lang-name">${lg.name}</span>
        <span class="project-lang-pct">${lg.pct}%</span>
      </div>`).join('');

    return `
    <!-- Project hero card -->
    <article class="slds-card project-hero">
      <div class="slds-card__body slds-card__body_inner" style="padding:1.5rem">
        <div class="project-hero-header">
          <div class="project-logo">🦊</div>
          <div class="project-hero-info">
            <h2 style="font-size:1.5rem;font-weight:800;color:#032d60;margin:0">${p.name}</h2>
            <p style="font-size:.875rem;color:#706e6b;margin:.25rem 0 0">${p.tagline}</p>
          </div>
          <div class="project-hero-actions">
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
          <span class="slds-badge" style="background:#2e844a;color:#fff">${p.users} ${lb.users}</span>
          <span class="slds-badge" style="background:#8b6dba;color:#fff">${p.releases} ${lb.releases}</span>
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
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>${lb.keyFeatures}</span></h2></div>
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
          <div class="slds-media__body"><h2 class="slds-card__header-title"><span>${lb.techStack}</span></h2></div>
        </header>
      </div>
      <div class="slds-card__body slds-card__body_inner">
        <div class="project-lang-bar">
          ${p.languages.map(lg => `<div class="project-lang-segment" style="width:${lg.pct}%;background:${lg.color}" title="${lg.name} ${lg.pct}%"></div>`).join('')}
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
  const d = getCvData();
  const matches = [];
  if (d.profile.toLowerCase().includes(q)) matches.push('profile');
  d.experiences.forEach(e => {
    if ((e.sector + e.description + e.position).toLowerCase().includes(q)) matches.push('experience');
  });
  d.qualifications.forEach(s => { if (s.name.toLowerCase().includes(q)) matches.push('skills'); });
  d.certifications.forEach(c => { if (c.name.toLowerCase().includes(q)) matches.push('certifications'); });
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

// ===== LANGUAGE TOGGLE =====
const langBtn = document.getElementById('langToggleBtn');

function updateUILanguage() {
  const l = getLabels();
  cvData = getCvData();

  // Update button label & title
  langBtn.querySelector('.lang-label').textContent = currentLang === 'fr' ? 'EN' : 'FR';
  langBtn.title = currentLang === 'fr' ? 'Switch to English' : 'Passer en Français';

  // Update header
  document.querySelector('.slds-app-name').textContent = l.appTitle;
  document.getElementById('globalSearch').placeholder = l.searchPlaceholder;

  // Update nav tab labels
  const tabLabels = {
    home: l.tabHome, profile: l.tabProfile, experience: l.tabExperience,
    skills: l.tabSkills, certifications: l.tabCertifications, projects: l.tabProjects
  };
  tabs.forEach(t => {
    const key = t.dataset.tab;
    if (tabLabels[key]) {
      t.querySelector('.slds-truncate').textContent = tabLabels[key];
      t.querySelector('.slds-context-bar__label-action').title = tabLabels[key];
    }
  });

  // Re-render active tab
  const activeTab = document.querySelector('.slds-context-bar__item.slds-is-active[data-tab]');
  if (activeTab) switchTab(activeTab.dataset.tab);
}

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('foxcv-lang', currentLang);
  updateUILanguage();
});

// ===== MOBILE APP LAUNCHER =====
let mobileLauncherOpen = false;

function buildMobileLauncher() {
  let panel = document.getElementById('mobileLauncherPanel');
  let overlay = document.getElementById('mobileLauncherOverlay');

  if (!panel) {
    overlay = document.createElement('div');
    overlay.className = 'mobile-launcher-overlay';
    overlay.id = 'mobileLauncherOverlay';
    panel = document.createElement('div');
    panel.className = 'mobile-launcher-panel';
    panel.id = 'mobileLauncherPanel';
    document.querySelector('.slds-context-bar').after(overlay, panel);
    overlay.addEventListener('click', closeMobileLauncher);
  }

  const l = getLabels();
  const tabKeys = ['home','profile','experience','skills','certifications','projects'];
  const tabLabelsMap = { home:l.tabHome, profile:l.tabProfile, experience:l.tabExperience, skills:l.tabSkills, certifications:l.tabCertifications, projects:l.tabProjects };
  const activeTab = document.querySelector('.slds-context-bar__item.slds-is-active[data-tab]');
  const activeKey = activeTab ? activeTab.dataset.tab : 'home';

  let html = '<ul class="mobile-launcher-nav">';
  tabKeys.forEach(key => {
    html += '<li><a data-mobile-tab="'+key+'"'+(key===activeKey?' class="is-active"':'')+'>'+tabLabelsMap[key]+'</a></li>';
  });
  html += '</ul>';
  html += '<div class="mobile-launcher-actions">';
  html += '<button class="lang-toggle" id="mobileLangBtn"><span class="lang-label">'+(currentLang==='fr'?'EN':'FR')+'</span></button>';
  html += '<button class="darkmode-toggle" id="mobileDarkBtn">';
  html += '<svg class="icon-sun" viewBox="0 0 24 24" width="18" height="18"'+(scope.classList.contains('dark-mode')?' style="display:none"':'')+'><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" fill="currentColor"/></svg>';
  html += '<svg class="icon-moon" viewBox="0 0 24 24" width="18" height="18"'+(scope.classList.contains('dark-mode')?'':' style="display:none"')+'><path d="M9.37 5.51A7.35 7.35 0 009.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0112 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" fill="currentColor"/></svg>';
  html += '</button>';
  html += '<a href="https://www.linkedin.com/in/maxime-clavel-7603a3aa/" target="_blank" rel="noopener noreferrer" class="linkedin-btn"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg></a>';
  html += '</div>';
  panel.innerHTML = html;

  panel.querySelectorAll('[data-mobile-tab]').forEach(a => {
    a.addEventListener('click', () => {
      closeMobileLauncher();
      switchTab(a.dataset.mobileTab);
      buildMobileLauncher();
    });
  });
  document.getElementById('mobileLangBtn').addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('foxcv-lang', currentLang);
    updateUILanguage();
    buildMobileLauncher();
  });
  document.getElementById('mobileDarkBtn').addEventListener('click', () => {
    setDarkMode(!scope.classList.contains('dark-mode'));
    buildMobileLauncher();
  });
}

function toggleMobileLauncher() {
  mobileLauncherOpen = !mobileLauncherOpen;
  const panel = document.getElementById('mobileLauncherPanel');
  const overlay = document.getElementById('mobileLauncherOverlay');
  if (mobileLauncherOpen) buildMobileLauncher();
  if (panel) panel.classList.toggle('is-open', mobileLauncherOpen);
  if (overlay) overlay.classList.toggle('is-open', mobileLauncherOpen);
}

function closeMobileLauncher() {
  mobileLauncherOpen = false;
  const panel = document.getElementById('mobileLauncherPanel');
  const overlay = document.getElementById('mobileLauncherOverlay');
  if (panel) panel.classList.remove('is-open');
  if (overlay) overlay.classList.remove('is-open');
}

document.querySelector('.context-bar-launcher').addEventListener('click', toggleMobileLauncher);

// Add mobile launcher button inside global header
(function() {
  const headerLogo = document.querySelector('.slds-global-header__logo');
  const mobileBtn = document.createElement('button');
  mobileBtn.className = 'mobile-header-launcher';
  mobileBtn.title = 'Menu';
  mobileBtn.setAttribute('aria-label', 'Menu');
  mobileBtn.innerHTML = '<svg viewBox="0 0 52 52" width="28" height="28"><rect x="2" y="2" rx="3" width="12" height="12" fill="currentColor"/><rect x="20" y="2" rx="3" width="12" height="12" fill="currentColor"/><rect x="38" y="2" rx="3" width="12" height="12" fill="currentColor"/><rect x="2" y="20" rx="3" width="12" height="12" fill="currentColor"/><rect x="20" y="20" rx="3" width="12" height="12" fill="currentColor"/><rect x="38" y="20" rx="3" width="12" height="12" fill="currentColor"/><rect x="2" y="38" rx="3" width="12" height="12" fill="currentColor"/><rect x="20" y="38" rx="3" width="12" height="12" fill="currentColor"/><rect x="38" y="38" rx="3" width="12" height="12" fill="currentColor"/></svg>';
  headerLogo.insertBefore(mobileBtn, headerLogo.firstChild);
  mobileBtn.addEventListener('click', toggleMobileLauncher);
})();

// ===== INIT =====
updateUILanguage();
buildMobileLauncher();
switchTab('home');
