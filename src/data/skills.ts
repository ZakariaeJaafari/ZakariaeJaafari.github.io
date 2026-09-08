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
    ],
  },
  {
    name: "Platform & security",
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
];
