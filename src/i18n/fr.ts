import type { Dictionary } from "./types";

export const fr: Dictionary = {
  meta: {
    title: "Zakariae Jaafari — Ingénieur logiciel · Data Engineering & IA",
    description:
      "Ingénieur logiciel à Rabat. Java, Spring Boot, Kafka et Python — le logiciel d'abord, avec une orientation data engineering et IA appliquée. Ouvert aux postes d'ingénieur logiciel et Full-Stack en Europe francophone.",
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
    title: "Ingénieur logiciel · Data Engineering & IA",
    headline: "Java · Spring Boot · Kafka · Python",
    summary:
      "Ingénieur logiciel, plus de 4 ans sur Java 21 et Spring Boot côté secteur public et ESN : microservices événementiels, Angular et React, IAM Keycloak. Orientation data engineering et IA appliquée. Basé à Rabat. Intervient en français, anglais et arabe. Ouvert aux postes d'ingénieur logiciel et Full-Stack en Europe francophone.",
    viewProjects: "Voir les projets",
    photoAlt:
      "Portrait de Zakariae Jaafari, chemise blanche, fond clair.",
  },
  about: {
    heading: "À propos",
    paragraphs: [
      "Je suis ingénieur logiciel à Rabat. Depuis septembre 2024, je suis ingénieur freelance auprès de l'Agence de Développement du Digital (ADD), l'opérateur national marocain du numérique : services Java 21 et Spring Boot, interfaces Angular et React, Redis et Kafka entre les services, Docker et Kubernetes pour la livraison, Keycloak pour l'identité. Mendix fait partie des outils lorsque le besoin s'y prête — ce n'est pas le centre du travail.",
      "Avant cela, deux ans chez Inetum Maroc, antenne du groupe ESN français, comme ingénieur logiciel : microservices, API REST, Angular, Docker, tests JUnit/Mockito, et Mendix lorsque la contrainte était la vitesse de livraison. Formation d'ingénieur Data & Software Engineering à l'INSEA, année d'échange en intelligence artificielle à l'Université Laval, stage data science chez Beneva à Québec.",
      "Je construis une orientation data engineering et IA appliquée sur cette base d'ingénierie logicielle. Le diplôme INSEA est en Data and Software Engineering ; l'échange à Laval portait sur l'intelligence artificielle ; le stage Beneva sur le clustering, la valeur vie client et les courbes de survie ; le pipeline des taxis new-yorkais sur ce site vient du Data Engineering Zoomcamp de DataTalksClub. Je vise d'abord des postes d'ingénieur logiciel, y compris dans des équipes data-platform ou proches de l'IA, là où Java, Kafka et Python se transfèrent.",
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
        company: "Agence de Développement du Digital (ADD)",
        location: "Rabat, Maroc",
        start: "Sept. 2024",
        end: "Aujourd'hui",
        summary:
          "L'agence nationale du développement du digital. Services Java 21 / Spring Boot et interfaces Angular / React pour des services numériques du secteur public — Kafka, Redis, Keycloak, Docker et Kubernetes.",
        bullets: [
          "Conception et développement de services Java 21 / Spring Boot et d'interfaces Angular / React pour des services numériques du secteur public, Kafka pour les événements inter-services, Redis pour le cache.",
          "Déploiement et orchestration avec Docker et Kubernetes ; authentification et IAM avec Keycloak.",
          "Couverture des services par des tests unitaires et d'intégration (JUnit, Mockito) avant mise en production.",
          "Recueil du besoin en direct avec les parties prenantes clientes, et traduction en travail de sprint.",
          "Encadrement des développeurs juniors et pilotage des objectifs de sprint en Scrum.",
        ],
      },
      {
        id: "inetum",
        title: "Ingénieur logiciel",
        company: "Inetum Maroc — ESN du groupe Inetum",
        location: "Rabat, Maroc",
        start: "Août 2022",
        end: "Août 2024",
        bullets: [
          "Développement de microservices Spring Boot et d'API REST pour des applications de production, en Scrum.",
          "Interfaces Angular avec des équipes pluridisciplinaires ; tests unitaires et d'intégration (JUnit, Mockito).",
          "Conteneurisation Docker ; CI Jenkins et GitLab. Mendix lorsque la contrainte était la vitesse de livraison.",
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
          "Segmentation clients par clustering et tableaux de bord ; estimation de la valeur vie client et courbes de survie.",
          "Analyses proposées pour éclairer les décisions de l'entreprise (Python, scikit-learn, PyTorch, SQL, Azure).",
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
    screenshots: "Interface",
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
        "CI : tests Maven sur JDK 21 dont tests d'intégration Testcontainers/Flyway, build Nx de production, validation Compose",
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
      ],
    },
  },
  skills: {
    heading: "Compétences",
    groups: [
      {
        name: "Backend",
        items: [
          "Java 21",
          "Spring Boot",
          "Spring Data JPA",
          "Hibernate",
          "Spring Security",
          "Spring Cloud",
          "API REST",
          "Microservices",
          "Mendix",
        ],
      },
      {
        name: "Frontend",
        items: ["TypeScript", "JavaScript", "Angular", "React"],
      },
      {
        name: "Données & messaging",
        items: [
          "SQL",
          "PostgreSQL",
          "Oracle DB",
          "Flyway",
          "Redis",
          "Kafka",
          "Keycloak / IAM",
        ],
      },
      {
        name: "Plateforme",
        items: [
          "Docker",
          "Kubernetes",
          "Maven",
          "Git",
          "GitLab",
          "Jenkins",
          "CI/CD",
          "JUnit",
          "Mockito",
          "Azure",
        ],
      },
      {
        name: "Data engineering",
        items: [
          "Python",
          "pandas",
          "PostgreSQL",
          "Docker Compose",
          "Terraform",
          "GCP",
          "GCS",
          "BigQuery",
          "dbt",
          "DuckDB",
          "Kestra",
          "dlt",
          "Bruin",
          "Spark",
          "Kafka Streams",
          "KSQL",
          "Avro",
          "Flink",
        ],
      },
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
        date: "Janv. 2024",
        credential: "69110",
      },
    ],
  },
  recommendation: {
    heading: "Recommandation",
    quote:
      "What stood out most about Zakaria was his calm confidence and his deep understanding of software development processes. Whether we were troubleshooting critical issues or brainstorming new features, he always brought thoughtful insights and dependable solutions. Beyond his technical talents, he has a remarkable ability to communicate ideas effectively and work seamlessly with both technical and non-technical stakeholders.",
    attribution: "Moncef Tokka",
    context: "Collègue à l'Agence de Développement du Digital (ADD)",
  },
  contact: {
    heading: "Contact",
    intro:
      "Basé à Rabat. Ouvert aux postes d'ingénieur logiciel et Full-Stack en Europe francophone, et aux équipes data-platform ou proches de l'IA lorsque Java, Kafka et Python se transfèrent.",
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
