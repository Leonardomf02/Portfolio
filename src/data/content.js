// Single source of truth for the portfolio content.
// Swap LINKEDIN_URL and the CV file when you have them.

export const profile = {
  name: "Leonardo M. F. Santos",
  // Rotating one-liners under the name.
  roles: [
    "Full-stack developer",
    "React · FastAPI · Python",
    "Erasmus × Poland",
    "I ship side-projects",
  ],
  location: "Portugal · currently Kraków, Poland",
  email: "leonardomfsantos20@gmail.com",
  github: "https://github.com/Leonardomf02",
  linkedin: "https://www.linkedin.com/in/leonardosantos02/",
  cv: "/Portfolio/cv.pdf",
};

export const about = {
  paragraphs: [
    "I'm a developer who learns by building. Most of what I know came from turning small, annoying problems in my own life into full apps — a calendar I'd actually use, a way to track trips, a movie tracker.",
    "I work end-to-end: React and TypeScript on the front, FastAPI and Python on the back, SQLite when it fits. I care about tools that feel fast and get out of the way.",
  ],
};

// Erasmus timeline
export const journey = [
  {
    period: "Winter 2024/25",
    title: "Erasmus — Rzeszów University of Technology",
    place: "Rzeszów, Poland",
    note: "Politechnika Rzeszowska. One semester abroad, first time living in Poland.",
  },
  {
    period: "Summer 2024/25",
    title: "Erasmus — Cracow University of Technology",
    place: "Kraków, Poland",
    note: "Politechnika Krakowska. Second semester abroad, still in Kraków.",
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
  { group: "Backend", items: ["Python", "FastAPI", "Node.js", "Express", "REST APIs"] },
  { group: "Data & tools", items: ["SQLite", "Git", "Linux", "Amadeus API", "GitHub Pages"] },
];
