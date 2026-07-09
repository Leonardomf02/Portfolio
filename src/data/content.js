// Single source of truth for the portfolio content.

export const profile = {
  name: "Leonardo Santos",
  // Rotating one-liners under the name.
  roles: [
    "Full-stack developer",
    "React · Python · FastAPI",
    "Route-optimization AI @ HULTIG",
    "CS & Engineering @ UBI",
  ],
  location: "Portugal",
  email: "leonardomfsantos20@gmail.com",
  github: "https://github.com/Leonardomf02",
  linkedin: "https://www.linkedin.com/in/leonardosantos02/",
  cv: "/Portfolio/cv.pdf",
};

export const about = {
  paragraphs: [
    "I'm Leonardo, 24, from Portugal. I studied Computer Science and Engineering at the University of Beira Interior, and these days I spend most of my time building AI systems. Cybersecurity is the other area I keep coming back to.",
    "I did a full-stack internship at Cyient in Lisbon and spent an Erasmus year in Poland. Right now I'm at HULTIG, the research lab at UBI, where I'm building an AI algorithm for route optimization.",
  ],
};

export const journey = [
  {
    period: "Now",
    title: "AI Developer — HULTIG, University of Beira Interior",
    place: "Covilhã, Portugal",
    note: "Building an AI algorithm for route optimization at the university's research lab.",
  },
  {
    period: "Spring 2025",
    title: "Erasmus — Cracow University of Technology",
    place: "Kraków, Poland",
    note: "Second Erasmus semester, at Politechnika Krakowska.",
  },
  {
    period: "Oct 2024 – Feb 2025",
    title: "Erasmus — Rzeszów University of Technology",
    place: "Rzeszów, Poland",
    note: "First semester abroad, Computer Science.",
  },
  {
    period: "Jul – Sep 2024",
    title: "Full-stack Developer — Cyient (internship)",
    place: "Lisbon, Portugal",
    note: "Three-month summer internship building full-stack web features.",
  },
  {
    period: "2021 – 2025",
    title: "BSc Computer Science & Engineering — UBI",
    place: "Covilhã, Portugal",
    note: "Bachelor's degree. Google Cloud Cybersecurity certificate along the way.",
  },
];

export const projects = [
  {
    name: "Cristopher",
    tagline: "A personal life manager I actually use every day.",
    description:
      "Calendar, expense tracking with charts, a League of Legends match tracker, trips, habits and notes — all in one place. Built to replace five different apps with one that fits how I work.",
    stack: ["React", "TypeScript", "Tailwind", "FastAPI", "SQLite"],
    repo: "https://github.com/Leonardomf02/Cristopher",
    highlight: true,
    year: "2026",
  },
  {
    name: "Travel",
    tagline: "Plan trips and search real flights.",
    description:
      "Trip planning, a log of places I've been with notes and ratings, and live flight search through the Amadeus API. Includes auth and a few AI-assisted suggestions.",
    stack: ["React", "FastAPI", "SQLite", "Amadeus API"],
    repo: "https://github.com/Leonardomf02/Travel",
    highlight: false,
    year: "2026",
  },
  {
    name: "imdb-tracker",
    tagline: "Keep track of what I watch.",
    description:
      "A full-stack film tracker — browse, rate and keep a watchlist. A lighter Python-backed take on the same idea, with a start script that boots the whole stack in one command.",
    stack: ["Python", "JavaScript", "SQLite"],
    repo: "https://github.com/Leonardomf02/imdb-tracker",
    highlight: false,
    year: "2026",
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "HTML / CSS"] },
  { group: "Backend", items: ["Python", "FastAPI", "PHP", "Node.js", "Java", "C"] },
  { group: "Tools & data", items: ["SQLite", "Git", "Linux", "REST APIs", "Google Cloud"] },
];
