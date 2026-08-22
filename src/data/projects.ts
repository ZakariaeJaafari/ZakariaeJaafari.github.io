export interface Project {
  slug: string;
  name: string;
  oneLiner: string;
  role: "Flagship" | "Supporting";
  year?: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  decisions?: { title: string; body: string }[];
  stack: string[];
  github: string;
  demo?: string;
  demoLabel?: string;
  screenshots?: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    slug: "chantiepro",
    name: "ChantiePro",
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
      "GitHub Actions CI: Maven tests on JDK 21, Nx production build, Compose validation",
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
    stack: [
      "Java 21",
      "Spring Boot 3.3",
      "Spring Cloud",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "Angular 18",
      "Nx",
      "Docker",
    ],
    github: "https://github.com/ZakariaeJaafari/chantiepro",
    screenshots: [
      {
        src: "/projects/chantiepro/login.png",
        alt: "ChantiePro login screen — construction-site management sign-in",
      },
      {
        src: "/projects/chantiepro/register.png",
        alt: "ChantiePro registration form",
      },
    ],
  },
  {
    slug: "nyc-taxi-ingestion-pipeline",
    name: "NYC Taxi Ingestion Pipeline",
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
    stack: [
      "Python 3.13",
      "pandas",
      "SQLAlchemy",
      "PostgreSQL",
      "Docker Compose",
      "uv",
    ],
    github: "https://github.com/ZakariaeJaafari/nyc-taxi-ingestion-pipeline",
  },
  {
    slug: "face-detection-react",
    name: "Face Detection",
    oneLiner:
      "React app that detects a face in an image URL and overlays a bounding box.",
    role: "Supporting",
    year: "2021",
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
    stack: ["React", "JavaScript", "Clarifai API", "Webpack"],
    github: "https://github.com/ZakariaeJaafari/face-detection-react",
  },
];
