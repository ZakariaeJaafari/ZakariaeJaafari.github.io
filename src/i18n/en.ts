import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Zakariae Jaafari — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer in Rabat. Java, Spring Boot, Angular and React — microservices, data pipelines, and the front ends that sit on them. Open to Software, Full-Stack, Data Engineer and Data Science roles worldwide.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
    cv: "Download CV",
    menu: "Menu",
    skip: "Skip to content",
    primary: "Primary",
    mobile: "Mobile",
    languages: "Language",
  },
  hero: {
    kickerLocation: "Rabat, Morocco",
    kickerAvailability: "Open to roles worldwide",
    title: "Full-Stack Software Engineer",
    headline: "Java · Spring Boot · Angular · React",
    summary:
      "Full-stack engineer with 4+ years shipping production software: Java and Spring Boot backends, Angular and React front ends, event-driven microservices, and data pipelines. Based in Rabat. Open to Software Engineer, Full-Stack, Data Engineer and Data Science roles worldwide.",
    viewProjects: "View projects",
    photoAlt:
      "Portrait of Zakariae Jaafari in a white shirt, against a light background.",
  },
  about: {
    heading: "About",
    paragraphs: [
      "I am a Full-Stack Software Engineer in Rabat. Since September 2024 I have been a freelance software engineer at ADD Agency, designing full-stack solutions for enterprise clients: Java and Spring Boot services, Angular and React interfaces, Redis and Kafka between services, Docker and Kubernetes for delivery, Keycloak for identity. Mendix is one of the tools I use when the brief calls for it — not the centre of the work.",
      "Before that I spent two years at Inetum Morocco as a software engineer: microservices, REST APIs, Angular, Docker, and Mendix for rapid delivery. I trained as a Data and Software Engineer at INSEA, spent an exchange year in Artificial Intelligence at Université Laval, and interned in data science at Beneva in Québec.",
      "I care about the data side of the stack as much as the product side. The engineering degree is in Data and Software Engineering; the internship was clustering, lifetime value and survival curves; and I followed the DataTalksClub Data Engineering Zoomcamp — the NYC taxi ingestion pipeline on this site comes from that work. I am looking for Software Engineer and Full-Stack roles, and I am equally open to Data Engineer and Data Science positions.",
    ],
    spoken: [
      { name: "Arabic", level: "Native" },
      { name: "French", level: "Fluent" },
      { name: "English", level: "Fluent" },
    ],
  },
  experience: {
    heading: "Experience",
    environment: "Environment",
    roles: [
      {
        id: "add",
        title: "Software Engineer (Freelance)",
        company: "ADD Agency",
        location: "Rabat, Morocco",
        start: "Sept 2024",
        end: "Present",
        summary:
          "Design and build full-stack solutions for enterprise clients — from custom Java/Spring/Angular/React systems with event-driven microservices to low-code (Mendix) applications.",
        bullets: [
          "Build responsive, intuitive UIs using Angular, React, and Mendix’s custom UI framework with custom widgets and JavaScript actions.",
          "Develop backend services in Java and Spring Boot, using Redis for caching and Kafka for event-driven communication between microservices.",
          "Deploy and orchestrate services with Docker and Kubernetes; manage authentication and IAM with Keycloak.",
          "Work directly with clients to gather requirements, mentor junior developers, and lead the team on sprint goals in an agile environment.",
        ],
      },
      {
        id: "inetum",
        title: "Software Engineer",
        company: "Inetum Morocco",
        location: "Rabat, Morocco",
        start: "Aug 2022",
        end: "Aug 2024",
        bullets: [
          "Built and consumed microservices and RESTful APIs following agile methodologies, for scalable production applications.",
          "Delivered responsive, intuitive UIs using Angular, working directly with cross-functional teams on requirements and planning.",
          "Containerized applications with Docker for efficient deployment and management.",
          "Built applications on the Mendix low-code platform for rapid delivery.",
        ],
      },
      {
        id: "beneva",
        title: "Data Science Intern (Final-Year Internship)",
        company: "Beneva",
        location: "Québec, Canada",
        start: "May 2022",
        end: "Aug 2022",
        bullets: [
          "Explored and ran in-depth analysis of customer data to surface trends, patterns, and actionable insights.",
          "Applied clustering techniques to segment customers into groups with similar behaviors, visualized through interactive dashboards.",
          "Applied statistical methods, machine learning, and deep learning to estimate customer lifetime value and plot survival curves.",
          "Proposed solutions to optimize company decision-making processes.",
        ],
      },
    ],
  },
  projects: {
    heading: "Featured projects",
    intro: "Public GitHub work. ChantiePro is the one to open first; the taxi pipeline is the data-engineering piece.",
    details: "Project details",
    github: "GitHub",
    demo: "Live demo",
    all: "All featured projects",
    overview: "Overview",
    problem: "Problem",
    solution: "Technical solution",
    architecture: "Architecture",
    inRepo: "What is in the repository",
    decisions: "Technical decisions",
    technologies: "Technologies",
    links: "Links",
    source: "Source on GitHub",
    crumb: "Projects",
    pathLabel: "Request path and backing services",
    business: "Business services",
  },
  projectPages: {
    chantiepro: {
      oneLiner:
        "Event-driven construction management platform: sixteen Spring Boot services, Kafka, and an Angular 18 front end.",
      role: "Flagship",
      description:
        "A personal engineering project that models a construction firm as thirteen business services plus three platform services. Each service owns a private PostgreSQL schema. Changes that other parts of the system must react to travel as Kafka domain events. An Angular 18 workspace in Nx sits on top; Prometheus, Grafana, Loki and Zipkin sit underneath.",
      problem:
        "A construction site behaves like a small business: materials arrive and are consumed, equipment moves between sites, crews clock in, expenses need approval, and every event has to reconcile against a project budget. Putting that in one monolith couples every change. The goal was to decompose a real domain into independently deployable services and still ship a coherent UI.",
      solution:
        "Requests enter a Spring Cloud Gateway that validates the JWT once and forwards the authenticated principal. Services discover each other through Eureka and load configuration from a config server. Anything another bounded context must observe — a project changing status, an expense being approved — is published to Kafka instead of being handled with a synchronous call. Data is organisation-scoped via an organizationId in the JWT, applied at the query layer. That is not a hardened multi-tenant isolation model.",
      features: [
        "Thirteen business services and three platform services (gateway, Eureka, config server) on Java 21 and Spring Boot 3.3",
        "Six shared libraries for DTOs, security, Kafka, audit, exceptions and web filters",
        "Schema-per-service PostgreSQL 16 with Flyway migrations",
        "Kafka domain events consumed by notification, audit and finance",
        "Redis cache, MinIO object storage, springdoc OpenAPI",
        "Angular 18 in an Nx monorepo with NgRx Signal Store",
        "Prometheus, Grafana, Loki and Zipkin",
        "CI: Maven tests on JDK 21, Nx production build, Compose validation",
      ],
      decisions: [
        {
          title: "Schema per service, not a shared database",
          body: "Each service owns its tables. There are no cross-service joins. That keeps deployability real; it also forces every collaboration between services to be an explicit API or an event.",
        },
        {
          title: "Events for reactions, REST for commands",
          body: "Synchronous REST stays inside a use case the caller is waiting on. Audit and notification never need to be on that path, so they subscribe.",
        },
        {
          title: "Shared libraries instead of copy-paste",
          body: "JWT filters, event envelopes and error shapes live in Maven modules. A new service inherits the platform’s conventions by declaring a dependency.",
        },
      ],
    },
    "nyc-taxi-ingestion-pipeline": {
      oneLiner:
        "Containerised, memory-bounded job that streams NYC yellow-taxi trip files into PostgreSQL.",
      role: "Supporting",
      description:
        "A Dockerised ingestion job that loads monthly NYC TLC yellow-taxi CSVs into PostgreSQL in fixed-size chunks, so peak memory stays flat regardless of file size. Built while working through the DataTalksClub Data Engineering Zoomcamp Docker module, then tidied into a standalone job.",
      problem:
        "Each monthly TLC file contains millions of rows. Reading one into a single dataframe and writing it in one transaction loads the whole month into memory and fails as the files grow.",
      solution:
        "pandas yields 100,000-row chunks. An explicit dtype map — including nullable Int64 for integer columns that may contain nulls — keeps every chunk’s schema identical, which is what stops a mid-job insert from failing when inference would have changed a type. The first write creates the table from the schema without inserting rows; later chunks append. The image builds from a committed uv lockfile.",
      features: [
        "Chunked CSV streaming over HTTP from the public TLC release files",
        "Explicit dtypes and parsed timestamps so chunk schemas stay stable",
        "Docker Compose stack: PostgreSQL 18 with a healthcheck, plus pgAdmin",
        "Credentials from environment variables, not argv (visible in the process table)",
        "Reproducible image via a committed uv lockfile",
      ],
      decisions: [
        {
          title: "Chunk size is a memory budget, not a tuning hobby",
          body: "100,000 rows is large enough to keep the database busy and small enough that the process stays predictable on a laptop.",
        },
        {
          title: "Replace once, then append",
          body: "Re-running the job rebuilds the table instead of duplicating rows. That is the right default for a workshop-sized pipeline.",
        },
      ],
    },
    "face-detection-react": {
      oneLiner:
        "React app that detects a face in an image URL and overlays a bounding box.",
      role: "Supporting",
      description:
        "A small single-page React app. Paste an image URL, call the Clarifai face-detection model, convert the returned normalised coordinates into CSS pixel offsets, and draw a box on the rendered image. An early front-end project, kept because the mapping logic is still a clean example. There is no backend, no authentication and no database.",
      problem:
        "Clarifai returns a box as four floats between 0 and 1, relative to the image’s own dimensions. The browser needs CSS offsets in pixels, relative to the rendered <img>, which may be scaled.",
      solution:
        "calculateFaceLocation reads the rendered element’s width and height and multiplies. right and bottom are inverted because the overlay is positioned with CSS right/bottom, which measure inward from the opposite edge. The Clarifai key is read from REACT_APP_CLARIFAI_API_KEY. Create React App inlines that variable into the bundle, so the key is not treated as a server secret.",
      features: [
        "URL input and Detect action against Clarifai’s face-detection model",
        "Normalised-to-pixel coordinate mapping against the rendered image",
        "Loading and error states, including a missing API key",
        "Public demo on GitHub Pages",
      ],
    },
  },
  skills: {
    heading: "Skills",
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
        name: "Data & messaging",
        items: ["SQL", "PL/SQL", "Oracle DB", "Redis", "Kafka", "ETL", "SSIS"],
      },
      { name: "Security", items: ["Keycloak / IAM"] },
      {
        name: "DevOps",
        items: ["Docker", "Kubernetes", "GitLab", "Jenkins", "Azure"],
      },
      {
        name: "Data engineering",
        items: [
          "Python",
          "pandas",
          "SQL",
          "PostgreSQL",
          "Docker",
          "Docker Compose",
          "Terraform",
          "GCP",
          "BigQuery",
          "dbt",
          "DuckDB",
          "Kestra",
          "Spark",
          "Kafka",
        ],
      },
      {
        name: "Data science",
        items: ["scikit-learn", "PyTorch", "Power BI", "ML / DL"],
      },
      { name: "Low-code", items: ["Mendix"] },
    ],
  },
  education: {
    heading: "Education",
    certsHeading: "Certifications",
    items: [
      {
        title: "M.Sc. in Computer Science — Artificial Intelligence",
        school: "Université Laval",
        location: "Québec, Canada",
        start: "Aug 2021",
        end: "May 2022",
        note: "Exchange programme",
      },
      {
        title: "Engineering Degree in Data and Software Engineering",
        school: "INSEA",
        location: "Rabat, Morocco",
        start: "Sept 2019",
        end: "May 2022",
      },
    ],
    certs: [
      {
        title: "Rapid Developer Certificate",
        issuer: "Mendix",
        date: "Since Dec 2023",
      },
    ],
  },
  contact: {
    heading: "Contact",
    intro:
      "Based in Rabat. Open to Software Engineer, Full-Stack, Data Engineer and Data Science roles worldwide.",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    github: "GitHub",
    cvVersions: "CV versions",
  },
  footer: {
    nameLine: "Rabat, Morocco",
  },
  notFound: {
    title: "Page not found — Zakariae Jaafari",
    heading: "This page is not here.",
    body: "The address may have changed, or it was never published.",
    home: "Back to the homepage",
  },
};
