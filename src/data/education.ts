export interface EducationItem {
  title: string;
  school: string;
  location: string;
  start: string;
  end: string;
}

export interface Certification {
  title: string;
  issuer: string;
  location: string;
  date: string;
}

export const education: EducationItem[] = [
  {
    title: "Master’s in Computer Science — Artificial Intelligence",
    school: "Université Laval (exchange programme)",
    location: "Québec, Canada",
    start: "Aug 2021",
    end: "May 2022",
  },
  {
    title: "State Engineer Diploma — Data & Software Engineering",
    school: "Institut National de Statistique et d’Économie Appliquée (INSEA)",
    location: "Rabat, Morocco",
    start: "Sept 2019",
    end: "May 2022",
  },
  {
    title: "MPSI preparatory classes",
    school: "CPGE Salmane El Farissi",
    location: "Salé, Morocco",
    start: "Sept 2016",
    end: "June 2019",
  },
];

export const certifications: Certification[] = [
  {
    title: "Mendix Intermediate Developer",
    issuer: "Mendix",
    location: "Rabat",
    date: "Dec 2024",
  },
  {
    title: "Mendix Rapid Developer",
    issuer: "Mendix",
    location: "Rabat",
    date: "Dec 2023",
  },
];
