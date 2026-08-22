export interface SkillGroup {
  name: string;
  items: string[];
}

/**
 * Skills listed on the CV, plus technologies verified in public GitHub
 * repositories (ChantiePro, NYC taxi pipeline). Nothing is invented.
 */
export const skills: SkillGroup[] = [
  {
    name: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring Data",
      "Spring Security",
      "Spring Cloud",
      "Maven",
      "REST",
      "OData",
    ],
  },
  {
    name: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "Angular",
      "React",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    name: "Low-code",
    items: ["Mendix"],
  },
  {
    name: "Architecture",
    items: ["Microservices", "Event-driven systems", "REST APIs", "BPMN", "UML"],
  },
  {
    name: "Data & messaging",
    items: [
      "SQL",
      "PL/SQL",
      "T-SQL",
      "OQL",
      "PostgreSQL",
      "Apache Kafka",
      "Redis",
      "ETL",
      "SSIS",
      "Oracle Database",
    ],
  },
  {
    name: "Security",
    items: ["Keycloak", "Spring Security", "JWT"],
  },
  {
    name: "DevOps",
    items: [
      "Docker",
      "Git",
      "GitLab",
      "Jenkins",
      "SonarQube",
      "GitHub Actions",
      "JUnit",
    ],
  },
  {
    name: "Methodologies",
    items: ["Agile", "Scrum", "Jira"],
  },
  {
    name: "Data science",
    items: [
      "Python",
      "scikit-learn",
      "PyTorch",
      "Power BI",
      "Azure",
      "SAS",
      "R",
    ],
  },
];
