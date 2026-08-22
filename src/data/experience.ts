export interface Role {
  id: string;
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  summary?: string;
  bullets: string[];
  stack: string[];
}

export const experience: Role[] = [
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
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring Data JPA",
      "Angular",
      "React",
      "Kafka",
      "Redis",
      "Keycloak",
      "Docker",
      "Kubernetes",
      "GitLab",
      "CI/CD",
      "JUnit",
      "Mockito",
      "Mendix",
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
    stack: [
      "Java",
      "Spring Boot",
      "Angular",
      "Docker",
      "Jenkins",
      "GitLab",
      "Jira",
      "Scrum",
      "JUnit",
      "Mockito",
      "Mendix",
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
    stack: [
      "Python",
      "scikit-learn",
      "PyTorch",
      "SQL",
      "Azure",
      "GitLab",
      "Scrum",
    ],
  },
];
