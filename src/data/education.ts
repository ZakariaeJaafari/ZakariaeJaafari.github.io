export interface EducationItem {
  title: string;
  school: string;
  location: string;
  start: string;
  end: string;
  note?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  location: string;
  date: string;
  credential?: string;
}

export const education: EducationItem[] = [
  {
    title: "M.Sc. in Computer Science — Artificial Intelligence",
    school: "Université Laval",
    location: "Québec, Canada",
    start: "Aug 2021",
    end: "May 2022",
    note: "Exchange programme",
  },
  {
    title: "Engineering Degree in Data and Software Engineering",
    school: "INSEA",
    location: "Rabat, Morocco",
    start: "Sept 2019",
    end: "May 2022",
  },
];

export const certifications: Certification[] = [
  {
    title: "Intermediate Developer Certificate",
    issuer: "Mendix",
    location: "",
    date: "Dec 2024",
  },
  {
    title: "Rapid Developer Certificate",
    issuer: "Mendix",
    location: "",
    date: "Jan 2024",
    credential: "69110",
  },
];
