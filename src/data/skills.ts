export interface SkillGroup {
  name: string;
  items: string[];
}

export const skills: SkillGroup[] = [
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
];
