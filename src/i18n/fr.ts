import type { Dictionary } from "./types";

export const fr: Dictionary = {
  meta: {
    title: "Zakariae Jaafari — Ingénieur logiciel Full-Stack",
    description:
      "Ingénieur logiciel Full-Stack à Rabat. Java, Spring Boot, Angular et React — microservices, pipelines de données, et les interfaces qui les accompagnent. Ouvert aux postes Software, Full-Stack, Data Engineer et Data Science, partout.",
  },
  nav: {
    about: "À propos",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    education: "Formation",
    contact: "Contact",
    cv: "Télécharger le CV",
    menu: "Menu",
    skip: "Aller au contenu",
    primary: "Principale",
    mobile: "Mobile",
    languages: "Langue",
  },
  hero: {
    kickerLocation: "Rabat, Maroc",
    kickerAvailability: "Ouvert aux opportunités partout",
    title: "Ingénieur logiciel Full-Stack",
    headline: "Java · Spring Boot · Angular · React",
    summary:
      "Ingénieur full-stack avec plus de 4 ans de livraison en production : backends Java et Spring Boot, interfaces Angular et React, microservices événementiels et pipelines de données. Basé à Rabat. Ouvert aux postes d'ingénieur logiciel, Full-Stack, Data Engineer et Data Science, partout dans le monde.",
    viewProjects: "Voir les projets",
    photoAlt:
      "Portrait de Zakariae Jaafari, chemise blanche, fond clair.",
  },
  about: {
    heading: "À propos",
    paragraphs: [
      "Je suis ingénieur logiciel Full-Stack à Rabat. Depuis septembre 2024, je suis ingénieur freelance chez ADD Agency : services Java et Spring Boot, interfaces Angular et React, Redis et Kafka entre les services, Docker et Kubernetes pour la livraison, Keycloak pour l'identité. Mendix fait partie des outils lorsque le besoin s'y prête — ce n'est pas le centre du travail.",
      "Avant cela, deux ans chez Inetum Maroc comme ingénieur logiciel : microservices, API REST, Angular, Docker, et Mendix pour les livraisons rapides. Formation d'ingénieur Data & Software Engineering à l'INSEA, année d'échange en intelligence artificielle à l'Université Laval, stage data science chez Beneva à Québec.",
      "Le volet data m'intéresse autant que le produit. Le diplôme d'ingénieur est en Data and Software Engineering ; le stage portait sur le clustering, la valeur vie client et les courbes de survie ; j'ai suivi le Data Engineering Zoomcamp de DataTalksClub — le pipeline d'ingestion des taxis new-yorkais sur ce site en est issu. Je vise des postes d'ingénieur logiciel et Full-Stack, et je suis tout autant ouvert aux rôles Data Engineer et Data Science.",
    ],
    spoken: [
      { name: "Arabe", level: "Langue maternelle" },
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "Courant" },
    ],
  },
  experience: {
    heading: "Expérience",
    environment: "Environnement",
    roles: [
      {
        id: "add",
        title: "Ingénieur logiciel (Freelance)",
        company: "ADD Agency",
        location: "Rabat, Maroc",
        start: "Sept. 2024",
        end: "Aujourd'hui",
        summary:
          "Conception et développement de solutions full-stack pour des clients entreprise — de systèmes Java/Spring/Angular/React à microservices événementiels jusqu'aux applications low-code (Mendix).",
        bullets: [
          "Interfaces réactives avec Angular, React, et l'UI personnalisée Mendix (widgets sur mesure, actions JavaScript).",
          "Services backend en Java et Spring Boot, Redis pour le cache, Kafka pour la communication événementielle entre microservices.",
          "Déploiement et orchestration avec Docker et Kubernetes ; authentification et IAM avec Keycloak.",
          "Travail direct avec les clients, encadrement des développeurs juniors, et pilotage des objectifs de sprint en environnement agile.",
        ],
      },
      {
        id: "inetum",
        title: "Ingénieur logiciel",
        company: "Inetum Maroc",
        location: "Rabat, Maroc",
        start: "Août 2022",
        end: "Août 2024",
        bullets: [
          "Développement et consommation de microservices et d'API REST selon les méthodes agiles, pour des applications de production évolutives.",
          "Interfaces Angular réactives, en collaboration directe avec des équipes pluridisciplinaires sur les besoins et la planification.",
          "Conteneurisation des applications avec Docker pour un déploiement et une exploitation efficaces.",
          "Applications sur la plateforme low-code Mendix pour une livraison rapide.",
        ],
      },
      {
        id: "beneva",
        title: "Stagiaire data science (PFE)",
        company: "Beneva",
        location: "Québec, Canada",
        start: "Mai 2022",
        end: "Août 2022",
        bullets: [
          "Exploration et analyse approfondie des données clients pour faire émerger tendances, motifs et insights actionnables.",
          "Techniques de clustering pour segmenter les clients aux comportements similaires, visualisées dans des tableaux de bord interactifs.",
          "Méthodes statistiques, machine learning et deep learning pour estimer la valeur vie client et tracer les courbes de survie.",
          "Propositions pour renforcer les processus de décision de l'entreprise.",
        ],
      },
    ],
  },
  projects: {
    heading: "Projets en avant",
    intro:
      "Dépôts GitHub publics. ChantiePro est le projet à ouvrir en premier ; le pipeline taxis est le volet data engineering.",
    details: "Fiche projet",
    github: "GitHub",
    demo: "Démo",
    all: "Tous les projets",
    overview: "Vue d'ensemble",
    problem: "Problème",
    solution: "Solution technique",
    architecture: "Architecture",
    inRepo: "Ce que contient le dépôt",
    decisions: "Choix techniques",
    technologies: "Technologies",
    links: "Liens",
    source: "Code sur GitHub",
    crumb: "Projets",
    pathLabel: "Chemin de requête et services de fond",
    business: "Services métier",
  },
  projectPages: {
    chantiepro: {
      oneLiner:
        "Plateforme de gestion de chantier événementielle : seize services Spring Boot, Kafka, et un front Angular 18.",
      role: "Projet phare",
      description:
        "Projet personnel d'ingénierie qui modélise une entreprise de construction en treize services métier et trois services de plateforme. Chaque service possède son schéma PostgreSQL. Les changements que le reste du système doit observer circulent en événements Kafka. Un workspace Angular 18 sous Nx au-dessus ; Prometheus, Grafana, Loki et Zipkin en dessous.",
      problem:
        "Un chantier se comporte comme une petite entreprise : les matériaux arrivent et se consomment, le matériel circule, les équipes pointent, les notes de frais doivent être validées, et chaque événement doit se réconcilier avec un budget. Un monolithe couple chaque changement. L'objectif était de découper un vrai domaine en services déployables séparément, tout en livrant une interface cohérente.",
      solution:
        "Les requêtes entrent par une Spring Cloud Gateway qui valide le JWT une fois et transmet le principal authentifié. Les services se découvrent via Eureka et chargent leur configuration depuis un config server. Tout ce qu'un autre bounded context doit observer — un projet qui change de statut, une dépense approuvée — est publié sur Kafka plutôt que traité par un appel synchrone. Les données sont scopées par organisation via un organizationId dans le JWT, appliqué à la couche requête. Ce n'est pas un modèle d'isolation multi-tenant durci.",
      features: [
        "Treize services métier et trois services de plateforme (gateway, Eureka, config server) en Java 21 et Spring Boot 3.3",
        "Six bibliothèques partagées : DTO, sécurité, Kafka, audit, exceptions, filtres web",
        "PostgreSQL 16, un schéma par service, migrations Flyway",
        "Événements Kafka consommés par notification, audit et finance",
        "Cache Redis, stockage objet MinIO, OpenAPI springdoc",
        "Angular 18 dans un monorepo Nx, NgRx Signal Store",
        "Prometheus, Grafana, Loki et Zipkin",
        "CI : tests Maven sur JDK 21, build Nx de production, validation Compose",
      ],
      decisions: [
        {
          title: "Un schéma par service, pas de base partagée",
          body: "Chaque service possède ses tables. Aucune jointure inter-services. La déployabilité reste réelle ; toute collaboration passe par une API ou un événement.",
        },
        {
          title: "Des événements pour les réactions, du REST pour les commandes",
          body: "Le REST synchrone reste dans le cas d'usage que l'appelant attend. L'audit et les notifications n'ont pas à être sur ce chemin : ils s'abonnent.",
        },
        {
          title: "Des bibliothèques partagées plutôt que du copier-coller",
          body: "Filtres JWT, enveloppes d'événements et formes d'erreur vivent dans des modules Maven. Un nouveau service hérite des conventions en déclarant une dépendance.",
        },
      ],
    },
    "nyc-taxi-ingestion-pipeline": {
      oneLiner:
        "Job conteneurisé, à mémoire bornée, qui stream les fichiers de taxis jaunes new-yorkais vers PostgreSQL.",
      role: "Complémentaire",
      description:
        "Job d'ingestion Dockerisé qui charge les CSV mensuels TLC des taxis jaunes dans PostgreSQL par paquets de taille fixe, pour que la mémoire de pic reste plate quelle que soit la taille du fichier. Construit en suivant le module Docker du Data Engineering Zoomcamp de DataTalksClub, puis isolé en job autonome.",
      problem:
        "Chaque fichier mensuel TLC contient des millions de lignes. Le charger d'un bloc dans un dataframe et l'écrire en une transaction satura la mémoire dès que les fichiers grandissent.",
      solution:
        "pandas produit des paquets de 100 000 lignes. Une carte de types explicite — dont Int64 nullable pour les colonnes entières pouvant contenir des nulls — garde le schéma identique d'un paquet à l'autre, ce qui évite qu'un insert échoue à mi-chemin. La première écriture crée la table à partir du schéma sans insérer de lignes ; les suivantes ajoutent. L'image se construit depuis un lockfile uv commité.",
      features: [
        "Streaming CSV par paquets depuis les fichiers publics TLC",
        "Types et horodatages explicites pour un schéma stable",
        "Stack Docker Compose : PostgreSQL 18 avec healthcheck, plus pgAdmin",
        "Identifiants lus dans l'environnement, pas en argument de ligne de commande",
        "Image reproductible via un lockfile uv versionné",
      ],
      decisions: [
        {
          title: "La taille de paquet est un budget mémoire",
          body: "100 000 lignes suffisent à occuper la base sans faire déborder un ordinateur portable.",
        },
        {
          title: "Remplacer une fois, puis ajouter",
          body: "Relancer le job reconstruit la table au lieu de dupliquer les lignes. C'est le bon défaut pour un pipeline de cette taille.",
        },
      ],
    },
    "face-detection-react": {
      oneLiner:
        "Application React qui détecte un visage dans une URL d'image et superpose un cadre.",
      role: "Complémentaire",
      description:
        "Petite application React d'une page. On colle une URL, on appelle le modèle de détection de visage Clarifai, on convertit les coordonnées normalisées en offsets CSS, et on dessine un cadre. Projet front de début, conservé parce que la logique de mapping reste un exemple propre. Pas de backend, pas d'authentification, pas de base.",
      problem:
        "Clarifai renvoie un cadre en quatre flottants entre 0 et 1, relatifs aux dimensions de l'image. Le navigateur a besoin d'offsets CSS en pixels, relatifs à l'<img> rendu, qui peut être mis à l'échelle.",
      solution:
        "calculateFaceLocation lit la largeur et la hauteur de l'élément rendu et multiplie. right et bottom sont inversés parce que le calque est positionné en CSS right/bottom, qui se mesurent depuis le bord opposé. La clé Clarifai vient de REACT_APP_CLARIFAI_API_KEY. Create React App l'inline dans le bundle : ce n'est pas un secret côté serveur.",
      features: [
        "Saisie d'URL et action Detect contre le modèle Clarifai",
        "Passage des coordonnées normalisées aux pixels de l'image rendue",
        "États de chargement et d'erreur, y compris clé API manquante",
        "Démo publique",
      ],
    },
  },
  skills: {
    heading: "Compétences",
    intro:
      "Issues du CV. Kafka, Redis, Kubernetes et Keycloak font partie de la mission freelance actuelle chez ADD Agency, et apparaissent aussi dans ChantiePro.",
    groups: [
      {
        name: "Backend",
        items: [
          "Java",
          "Spring Boot",
          "Spring Data",
          "Spring Security",
          "Spring Cloud",
          "REST",
          "OData",
          "Microservices",
        ],
      },
      {
        name: "Frontend",
        items: ["TypeScript", "JavaScript", "Angular", "React", "HTML", "CSS"],
      },
      {
        name: "Données & messaging",
        items: ["SQL", "PL/SQL", "Oracle DB", "Redis", "Kafka", "ETL", "SSIS"],
      },
      { name: "Sécurité", items: ["Keycloak / IAM"] },
      {
        name: "DevOps",
        items: ["Docker", "Kubernetes", "GitLab", "Jenkins", "Azure"],
      },
      {
        name: "Data engineering & science",
        items: ["Python", "pandas", "scikit-learn", "PyTorch", "Power BI", "ML / DL"],
      },
      { name: "Low-code", items: ["Mendix"] },
      { name: "Outils IA", items: ["Claude", "Cursor", "Codex"] },
    ],
  },
  education: {
    heading: "Formation",
    certsHeading: "Certifications",
    items: [
      {
        title: "Maîtrise en informatique — Intelligence artificielle",
        school: "Université Laval",
        location: "Québec, Canada",
        start: "Août 2021",
        end: "Mai 2022",
        note: "Programme d'échange",
      },
      {
        title: "Diplôme d'ingénieur — Data & Software Engineering",
        school: "INSEA",
        location: "Rabat, Maroc",
        start: "Sept. 2019",
        end: "Mai 2022",
      },
    ],
    certs: [
      {
        title: "Rapid Developer Certificate",
        issuer: "Mendix",
        date: "Depuis déc. 2023",
      },
    ],
  },
  contact: {
    heading: "Contact",
    intro:
      "Basé à Rabat. Ouvert aux postes d'ingénieur logiciel, Full-Stack, Data Engineer et Data Science, partout dans le monde.",
    email: "E-mail",
    phone: "Téléphone",
    linkedin: "LinkedIn",
    github: "GitHub",
    cvVersions: "Versions du CV",
  },
  footer: {
    nameLine: "Rabat, Maroc",
  },
  notFound: {
    title: "Page introuvable — Zakariae Jaafari",
    heading: "Cette page n'existe pas.",
    body: "L'adresse a peut-être changé, ou la page n'a jamais été publiée.",
    home: "Retour à l'accueil",
  },
};
