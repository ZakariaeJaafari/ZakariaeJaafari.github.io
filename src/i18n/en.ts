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
      "Full-stack engineer with 4+ years delivering Java 21 and Spring Boot systems for public-sector and enterprise clients: Angular and React interfaces, event-driven microservices, Keycloak IAM. Based in Rabat. Works in French, English and Arabic. Open to Software Engineer and Full-Stack roles in French-speaking Europe, and to Data Engineer roles where the Java/Kafka background transfers.",
    viewProjects: "View projects",
    photoAlt:
      "Portrait of Zakariae Jaafari in a white shirt, against a light background.",
  },
  about: {
    heading: "About",
    paragraphs: [
      "I am a Full-Stack Software Engineer in Rabat. Since September 2024 I have been a freelance software engineer at Agence de Développement du Digital (ADD), Morocco's national digital development agency: Java 21 and Spring Boot services, Angular and React interfaces, Redis and Kafka between services, Docker and Kubernetes for delivery, Keycloak for identity. Mendix is one of the tools I use when the brief calls for it — not the centre of the work.",
      "Before that I spent two years at Inetum Morocco, the local arm of the French IT services group, as a software engineer: microservices, REST APIs, Angular, Docker, JUnit/Mockito tests, and Mendix when rapid delivery was the constraint. I trained as a Data and Software Engineer at INSEA, spent an exchange year in Artificial Intelligence at Université Laval, and interned in data science at Beneva in Québec.",
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
        company: "Agence de Développement du Digital (ADD)",
        location: "Rabat, Morocco",
        start: "Sept 2024",
        end: "Present",
        summary:
          "Morocco's national digital development agency. Java 21 / Spring Boot services and Angular / React interfaces for public-sector digital services — Kafka, Redis, Keycloak, Docker and Kubernetes.",
        bullets: [
          "Design and build Java 21 / Spring Boot services and Angular / React interfaces for public-sector digital services, using Kafka for cross-service events and Redis for caching.",
          "Deploy and orchestrate services with Docker and Kubernetes; manage authentication and IAM with Keycloak.",
          "Cover services with JUnit, Mockito and integration tests before release.",
          "Gather requirements directly with client stakeholders and turn them into sprint-ready work.",
          "Mentor junior developers and lead the team on sprint goals in Scrum.",
        ],
      },
      {
        id: "inetum",
        title: "Software Engineer",
        company: "Inetum Morocco — French IT services group",
        location: "Rabat, Morocco",
        start: "Aug 2022",
        end: "Aug 2024",
        bullets: [
          "Built Spring Boot microservices and REST APIs for production applications, in Scrum.",
          "Delivered Angular interfaces with cross-functional teams; wrote unit and integration tests (JUnit, Mockito).",
          "Containerized services with Docker; CI on Jenkins and GitLab. Used Mendix when rapid delivery was the constraint.",
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
          "Segmented customers with clustering and built dashboards; estimated customer lifetime value and plotted survival curves.",
          "Proposed analyses to support company decision-making (Python, scikit-learn, PyTorch, SQL, Azure).",
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
    screenshots: "Interface",
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
        "CI: Maven tests on JDK 21 including Testcontainers/Flyway integration tests, Nx production build, Compose validation",
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
      ],
    },
  },
  skills: {
    heading: "Skills",
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
          "REST APIs",
          "Microservices",
          "Mendix",
        ],
      },
      {
        name: "Frontend",
        items: ["TypeScript", "JavaScript", "Angular", "React"],
      },
      {
        name: "Data & messaging",
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
        name: "Platform",
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
          "BigQuery",
          "dbt",
          "DuckDB",
          "Kestra",
          "Spark",
        ],
      },
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
        date: "Jan 2024",
        credential: "69110",
      },
    ],
  },
  recommendation: {
    heading: "Recommendation",
    quote:
      "What stood out most about Zakaria was his calm confidence and his deep understanding of software development processes. Whether we were troubleshooting critical issues or brainstorming new features, he always brought thoughtful insights and dependable solutions. Beyond his technical talents, he has a remarkable ability to communicate ideas effectively and work seamlessly with both technical and non-technical stakeholders.",
    attribution: "Moncef Tokka",
    context: "Colleague at Agence de Développement du Digital (ADD)",
  },
  contact: {
    heading: "Contact",
    intro:
      "Based in Rabat. Open to Software Engineer and Full-Stack roles in French-speaking Europe, and to Data Engineer roles where the Java/Kafka background transfers.",
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
