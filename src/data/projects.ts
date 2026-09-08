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
    slug: "data-analytics",
    name: "data-analytics",
    oneLiner:
      "Analytics engineering for NYC TLC trips: dbt and DuckDB turn raw Parquet into a tested star schema.",
    role: "Flagship",
    description:
      "An analytics-engineering warehouse for NYC yellow and green taxi trips. ingest_data.py lands monthly files as Parquet in DuckDB (prod schema). dbt then builds staging, intermediate, and marts — dimensions for zones and vendors, an incremental fct_trips, and monthly zone revenue. Seeds, macros, dbt_utils, and generated docs are in the repo. Coursework from DataTalksClub Zoomcamp module 04, run locally instead of BigQuery.",
    problem:
      "TLC publishes tens of millions of trip rows with inconsistent yellow/green column names. Analysts need typed, documented models and a grain they can join — not a pile of CSVs.",
    solution:
      "Load Parquet into DuckDB, then a dbt project with a classic staging → intermediate → marts layout. Staging casts and renames; intermediate unions services, builds a surrogate trip_id, and deduplicates; marts form a star schema. The dev target samples January 2019 so local runs stay bounded. After ingest, prod.yellow_tripdata holds 109,047,518 rows and prod.green_tripdata 7,778,101; fct_trips on the sampled dev target has 8,095,489 rows.",
    features: [
      "ingest_data.py: CSV.gz → Parquet → DuckDB prod schema",
      "Staging for yellow and green with shared naming",
      "Star schema: dim_zones, dim_vendors, incremental fct_trips, fct_monthly_zone_revenue",
      "Seeds for taxi zones and payment types; macros including safe_cast and trip duration",
      "dbt packages: dbt_utils, codegen; dbt docs generated and served locally",
    ],
    decisions: [
      {
        title: "DuckDB instead of BigQuery for the local warehouse",
        body: "The Zoomcamp module targets BigQuery. This repo keeps the same modeling ideas on a laptop-sized DuckDB file so the work is reproducible without a cloud bill.",
      },
      {
        title: "Incremental facts",
        body: "fct_trips merges on trip_id so later months can append without rebuilding 8M+ rows from scratch.",
      },
    ],
    stack: ["dbt", "DuckDB", "SQL", "Python", "Parquet", "Docker Compose"],
    github: "https://github.com/ZakariaeJaafari/data-analytics",
    screenshots: [
      {
        src: "/projects/data-analytics/dbt-docs-overview.png",
        alt: "dbt docs for the taxi_rides_ny project, showing sources, models, seeds and packages",
      },
      {
        src: "/projects/data-analytics/dbt-fct-trips.png",
        alt: "dbt docs for the incremental fct_trips mart",
      },
      {
        src: "/projects/data-analytics/duckdb-prod-schema.png",
        alt: "DuckDB explorer showing prod.yellow_tripdata and prod.green_tripdata",
      },
    ],
  },
  {
    slug: "dataplatforme-bruin",
    name: "DataPlatforme-Bruin",
    oneLiner:
      "Bruin ELT on DuckDB and MotherDuck: batched PyArrow ingestion, staging quality checks, daily trip reports.",
    role: "Supporting",
    description:
      "An end-to-end NYC taxi ELT pipeline on Bruin. Python assets fetch TLC parquet, yield 150k-row PyArrow batches, and land in DuckDB or MotherDuck. SQL assets filter, join a payment lookup, and deduplicate in staging, then aggregate a trips_report. Same pipeline code, two environments. Zoomcamp module 05 (data platforms).",
    problem:
      "A single Arrow IPC payload hits Bruin’s ~256 MB limit on large months (January 2020 yellow is 6.4M rows). Re-downloading parquet on every run wastes time. Invalid fares and duplicate composite keys should not reach the report.",
    solution:
      "trips.py is a generator: cache parquet locally, prune columns, yield batches, append at ingestion. Staging uses a time_interval incremental strategy, drops invalid rows, and ROW_NUMBER() on a composite key. Production is MotherDuck database nyc_taxi. Re-queried 8 Sep 2026: 6,405,008 ingested rows, 6,370,784 staged, 312 report rows. bruin validate on the local environment reported four assets, no issues.",
    features: [
      "Four assets: ingestion.trips, ingestion.payment_lookup, staging.trips, reports.trips_report",
      "Chunked PyArrow batches (150k rows) under Bruin’s Arrow IPC limit",
      "Column checks and uniqueness on staging",
      "Local DuckDB and MotherDuck production with the same asset SQL",
    ],
    decisions: [
      {
        title: "Append raw, dedupe in staging",
        body: "The landing zone stays simple. Dedup and quality live where they can be tested.",
      },
      {
        title: "One pipeline, two backends",
        body: "Connection name duckdb-default points at a local file in default and at MotherDuck in production.",
      },
    ],
    stack: ["Bruin", "DuckDB", "MotherDuck", "Python", "PyArrow", "SQL"],
    github: "https://github.com/ZakariaeJaafari/DataPlatforme-Bruin",
  },
  {
    slug: "workflow-orchestration",
    name: "Workflow-Orchestration",
    oneLiner:
      "Kestra scheduled ETL: monthly NYC TLC CSVs into PostgreSQL with staging COPY and MERGE.",
    role: "Supporting",
    description:
      "A Kestra flow (postgres_taxi_scheduled, namespace zoomcamp) that wget’s a monthly TLC CSV, COPY’s it into a staging table, stamps a deterministic MD5 unique_row_id, and MERGE’s into yellow_tripdata or green_tripdata. Docker Compose runs Kestra, two Postgres instances, and pgAdmin. Zoomcamp orchestration module.",
    problem:
      "Monthly taxi files must land in PostgreSQL without duplicating rows when a month is re-run, and yellow vs green schemas differ.",
    solution:
      "Inputs select taxi type. Shell extract gunzips the GitHub release. Branching tasks create typed tables, COPY into staging, then MERGE on unique_row_id. Cron: green 09:00 on the 1st, yellow 10:00. Concurrency limit 1. Credentials in compose are local-dev defaults, not production secrets.",
    features: [
      "Kestra standalone server with Postgres metadata store",
      "Staging COPY + MERGE skip-duplicates load",
      "Separate yellow and green DDL",
      "Monthly cron triggers and backfill label",
      "pgAdmin on port 8085 against ny_taxi",
    ],
    stack: ["Kestra", "PostgreSQL", "Docker Compose", "SQL"],
    github: "https://github.com/ZakariaeJaafari/Workflow-Orchestration",
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
];
