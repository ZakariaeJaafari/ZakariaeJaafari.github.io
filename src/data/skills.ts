export interface SkillGroup {
  name: string;
  items: string[];
}

/** Skills as listed on the August 2026 CV. */
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
    items: ["SQL", "PL/SQL", "Oracle DB", "Redis", "Kafka"],
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
    name: "Low-code",
    items: ["Mendix"],
  },
  {
    name: "Data science",
    items: ["Python", "scikit-learn", "PyTorch", "Power BI", "ML / DL"],
  },
  {
    name: "AI tools",
    items: ["Claude", "Cursor", "Codex"],
  },
];
