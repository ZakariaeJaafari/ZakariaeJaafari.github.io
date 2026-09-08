import type { Dictionary } from "./types";

export const fr: Dictionary = {
  meta: {
    title: "Zakariae Jaafari — Ingénieur logiciel · Data Engineering",
    description:
      "Ingénieur logiciel à Rabat, spécialisé en backend Java/Spring, avec des projets data engineering testés en Python, dbt, DuckDB et Bruin.",
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
    kickerAvailability: "Ouvert à l'Europe francophone",
    title: "Ingénieur logiciel · Data Engineering",
    headline: "Java 21 · Spring Boot · Kafka · Python · dbt · DuckDB",
    summary:
      "Ingénieur logiciel avec plus de 4 ans sur des services Java et Spring Boot pour le secteur public et des clients d'ESN. Mes projets publics étendent ce socle backend vers des pipelines data testés en Python, dbt, DuckDB et Bruin.",
    viewProjects: "Voir les projets",
    photoAlt:
      "Portrait de Zakariae Jaafari, chemise blanche, fond clair.",
  },
  about: {
    heading: "À propos",
    paragraphs: [
      "Ingénieur logiciel à Rabat, j'ai plus de 4 ans d'expérience entre services numériques publics et ESN. À l'Agence de Développement du Digital (ADD), je développe des services Java 21 / Spring Boot, des interfaces Angular et React, des intégrations Kafka et Redis, l'IAM avec Keycloak et la livraison Docker/Kubernetes. Auparavant, je développais des microservices Spring et des applications Angular chez Inetum Maroc.",
      "Mes projets publics de data engineering prolongent ce socle backend : schéma en étoile dbt/DuckDB testé sur 109 millions de lignes sources, pipeline Bruin sur DuckDB et MotherDuck, et chargement Kestra vérifié vers PostgreSQL. Je suis diplômé ingénieur Data & Software Engineering de l'INSEA, j'ai suivi un programme d'échange en IA à l'Université Laval et je travaille en français, anglais et arabe.",
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
      "Trois projets vérifiables couvrant architecture backend, analytics engineering et ELT cloud. Les travaux de cours complémentaires restent sur GitHub sans surcharger la première impression.",
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
    "data-analytics": {
      oneLiner:
        "Analytics engineering sur les courses TLC new-yorkaises : dbt et DuckDB transforment le Parquet en schéma en étoile testé.",
      role: "Projet phare",
      description:
        "Entrepôt d'analytics engineering pour les taxis yellow et green. ingest_data.py pose les fichiers mensuels en Parquet dans DuckDB (schéma prod). dbt enchaîne staging, intermediate et marts — dimensions zones et vendors, fct_trips incrémental, revenu mensuel par zone. Seeds, macros, dbt_utils et docs générées. Module 04 du Zoomcamp, exécuté en local plutôt que sur BigQuery.",
      problem:
        "La TLC publie des dizaines de millions de lignes, avec des colonnes yellow/green incompatibles. Il faut des modèles typés, documentés, joignables — pas un tas de CSV.",
      solution:
        "Chargement Parquet dans DuckDB, puis construction staging → intermediate → marts avec dbt. La couche intermédiaire calcule désormais trip_id à partir du grain stable complet : une ancienne clé trop courte supprimait 202 906 courses valides. Le modèle corrigé conserve les 8 298 395 lignes de janvier et une fixture CI protège cette régression.",
      features: [
        "ingest_data.py : CSV.gz → Parquet → schéma DuckDB prod",
        "Staging yellow et green avec nommage commun",
        "Schéma en étoile : dim_zones, dim_vendors, fct_trips incrémental, fct_monthly_zone_revenue",
        "Seeds zones et types de paiement ; macros safe_cast et durée de course",
        "Packages dbt_utils et codegen ; docs dbt générées et servies en local",
      ],
      decisions: [
        {
          title: "DuckDB plutôt que BigQuery en local",
          body: "Le module Zoomcamp vise BigQuery. Ici les mêmes idées de modélisation tiennent dans un fichier DuckDB, sans facture cloud.",
        },
        {
          title: "Faits incrémentaux",
          body: "fct_trips fusionne sur trip_id pour ajouter des mois sans reconstruire 8 millions de lignes.",
        },
      ],
    },
    "dataplatforme-bruin": {
      oneLiner:
        "ELT Bruin sur DuckDB et MotherDuck : ingestion PyArrow par lots, contrôles en staging, rapports journaliers.",
      role: "Complémentaire",
      description:
        "Pipeline ELT NYC taxi sur Bruin. Les assets Python récupèrent le parquet TLC, cèdent des lots PyArrow de 150 000 lignes, et atterrissent dans DuckDB ou MotherDuck. Les assets SQL filtrent, joignent le lookup paiement, dédupliquent, puis agrègent trips_report. Même code, deux environnements. Module 05 du Zoomcamp.",
      problem:
        "Un unique payload Arrow dépasse la limite IPC ~256 Mo de Bruin sur les gros mois (janvier 2020 yellow : 6,4 M de lignes). Retrélécharger le parquet à chaque run est du gaspillage. Les tarifs invalides et les clés composites dupliquées ne doivent pas arriver au rapport.",
      solution:
        "trips.py est un générateur : cache parquet local, colonnes réduites, lots, append à l'ingestion. Le staging est incrémental (time_interval), écarte les lignes invalides, ROW_NUMBER() sur une clé composite. Production : base MotherDuck nyc_taxi. Requête du 8 sept. 2026 : 6 405 008 lignes ingérées, 6 370 784 en staging, 312 agrégats. bruin validate en local : 4 assets, aucun problème.",
      features: [
        "Quatre assets : ingestion.trips, ingestion.payment_lookup, staging.trips, reports.trips_report",
        "Lots PyArrow de 150 000 lignes sous la limite IPC Bruin",
        "Contrôles de colonnes et d'unicité en staging",
        "DuckDB local et MotherDuck avec le même SQL d'assets",
      ],
      decisions: [
        {
          title: "Append brut, dédup en staging",
          body: "La zone d'atterrissage reste simple. Dédup et qualité là où on peut les tester.",
        },
        {
          title: "Un pipeline, deux backends",
          body: "La connexion duckdb-default pointe un fichier local en default et MotherDuck en production.",
        },
      ],
    },
    "workflow-orchestration": {
      oneLiner:
        "ETL Kestra planifié : CSV TLC mensuels vers PostgreSQL, COPY en staging puis MERGE.",
      role: "Complémentaire",
      description:
        "Flux Kestra (postgres_taxi_scheduled, namespace zoomcamp) : téléchargement du mois TLC choisi, PostgreSQL COPY vers une table de staging, clé MD5 déterministe, puis MERGE vers yellow_tripdata ou green_tripdata. Docker Compose lance Kestra, son stockage de métadonnées, PostgreSQL et pgAdmin. Module orchestration du Zoomcamp.",
      problem:
        "Les fichiers mensuels doivent arriver dans PostgreSQL sans dupliquer un mois relancé, et les schémas yellow / green diffèrent.",
      solution:
        "Les entrées choisissent le type de taxi et la période YYYY-MM, ce qui rend les exécutions manuelles et planifiées déterministes. Les branches créent les tables typées, utilisent COPY vers staging, puis MERGE sur unique_row_id. Une exécution yellow de janvier 2021 a été revérifiée avec succès sur Kestra 1.1.20 et a chargé 7 774 773 lignes dans PostgreSQL.",
      features: [
        "Serveur Kestra standalone, métadonnées Postgres",
        "COPY staging + MERGE sans doublons",
        "DDL yellow et green séparés",
        "Déclencheurs cron mensuels et label backfill",
        "pgAdmin sur le port 8085, base ny_taxi",
        "Exécution janvier 2021 vérifiée : SUCCESS, 7 774 773 lignes yellow",
      ],
    },
  },
  skills: {
    heading: "Compétences",
    intro: "Technologies étayées par l'expérience professionnelle ou par des projets publics vérifiables.",
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
        ],
      },
      {
        name: "Plateforme & sécurité",
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
          "Keycloak / IAM",
          "Mendix",
        ],
      },
      {
        name: "Data engineering",
        items: [
          "Python",
          "pandas",
          "dbt",
          "DuckDB",
          "MotherDuck",
          "Bruin",
          "PyArrow",
          "Parquet",
          "Kestra",
          "Docker Compose",
        ],
      },
    ],
  },
  education: {
    heading: "Formation",
    certsHeading: "Certifications",
    items: [
      {
        title: "Programme d'échange en informatique — Intelligence artificielle",
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
      "Basé à Rabat. Ouvert aux postes d'ingénieur logiciel et Data Engineer en Europe francophone, y compris dans des équipes data-platform où Java, Kafka et Python se transfèrent.",
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
