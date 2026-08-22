export interface SkillGroup {
  name: string;
  items: string[];
}

export const skills: SkillGroup[] = [
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
  {
    name: "Security",
    items: ["Keycloak / IAM"],
  },
  {
    name: "DevOps",
    items: ["Docker", "Kubernetes", "GitLab", "Jenkins", "Azure"],
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
  {
    name: "Data science",
    items: ["scikit-learn", "PyTorch", "Power BI", "ML / DL"],
  },
  {
    name: "Low-code",
    items: ["Mendix"],
  },
];
