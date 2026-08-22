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
    stack: [
      "Java",
      "Spring Boot",
      "Angular",
      "React",
      "Microservices",
      "Redis",
      "Kafka",
      "Kubernetes",
      "Keycloak",
      "Docker",
      "GitLab",
      "Mendix",
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
    stack: [
      "Java",
      "Angular",
      "Spring Boot",
      "Docker",
      "Jenkins",
      "GitLab",
      "Jira",
      "Scrum",
      "ETL",
      "SSIS",
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
      "Explored and ran in-depth analysis of customer data to surface trends, patterns, and actionable insights.",
      "Applied clustering techniques to segment customers into groups with similar behaviors, visualized through interactive dashboards.",
      "Applied statistical methods, machine learning, and deep learning to estimate customer lifetime value and plot survival curves.",
      "Proposed solutions to optimize company decision-making processes.",
    ],
    stack: [
      "Python",
      "scikit-learn",
      "PyTorch",
      "SQL",
      "Power BI",
      "Azure",
      "GitLab",
      "Jira",
      "Scrum",
    ],
  },
];
