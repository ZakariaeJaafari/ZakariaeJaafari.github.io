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
    id: "dxc",
    title: "Full-Stack Engineer — Mendix Consultant",
    company: "DXC Technology / ADD",
    location: "Rabat, Morocco",
    start: "Sept 2024",
    end: "Present",
    summary:
      "Design and development of enterprise applications on Mendix, with Java and React where the platform needs to be extended.",
    bullets: [
      "Build responsive interfaces with Mendix’s custom UI, custom widgets and JavaScript actions.",
      "Develop backend logic with microflows, workflows, database calls, Java actions, REST and OData.",
      "Manage configuration and delivery through Git / GitLab.",
      "Work with cross-functional teams to gather requirements and ship in an agile cadence.",
      "Mentor junior developers on Mendix practices and guide the team toward sprint goals.",
      "Translate client requirements into working software.",
    ],
    stack: [
      "Mendix",
      "Java",
      "Spring Boot",
      "React",
      "GitLab",
      "OQL",
      "REST",
      "Agile",
    ],
  },
  {
    id: "inetum",
    title: "Study and Development Engineer",
    company: "Inetum",
    location: "Rabat, Morocco",
    start: "Aug 2022",
    end: "Aug 2024",
    bullets: [
      "Develop and consume microservices, and implement REST APIs, in an agile delivery model.",
      "Build responsive user interfaces with Angular.",
      "Containerise applications with Docker.",
      "Deliver applications on the Mendix low-code platform.",
      "Collaborate with cross-functional teams on requirements and planning, using Git for version control.",
    ],
    stack: [
      "Java",
      "Spring",
      "Angular",
      "Docker",
      "Mendix",
      "Keycloak",
      "Jenkins",
      "Sonar",
      "JUnit",
      "GitLab",
      "BPMN",
      "SSIS",
      "Scrum",
    ],
  },
  {
    id: "beneva",
    title: "End-of-studies internship — Data Science",
    company: "Beneva",
    location: "Québec, Canada",
    start: "May 2022",
    end: "Aug 2022",
    bullets: [
      "Explore and analyse customer data to identify trends, patterns and useful insights.",
      "Apply clustering to segment customers with similar behaviour.",
      "Visualise results and build interactive dashboards so the findings can be shared.",
      "Use statistical methods, machine learning and deep learning to estimate customer lifetime and plot survival curves.",
      "Propose ways to support the company’s decision processes.",
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
