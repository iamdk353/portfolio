import git from "../assets/icon-git.svg";
import express from "../assets/icon-express.svg";
import next from "../assets/icon-nextjs.svg";
import js from "../assets/icon-javscript.svg";
import mongo from "../assets/icon-mongodb.svg";
import node from "../assets/icon-nodejs.svg";
import react from "../assets/icon-react.svg";
import tailwind from "../assets/icon-tailwindcss.svg";
import tsIcon from "../assets/typeIcon.svg";
import gitHub from "../assets/github-mark.png";
import cpp from "../assets/cpp.svg";
import c from "../assets/c.svg";
import py from "../assets/py.png";
import django from "../assets/django.svg";
import github from "../assets/github-mark.png";
import mail from "../assets/gmail.svg";
import linkedin from "../assets/linkedin.png";
const nav = [
  { href: "#Hero", name: "Intro" },
  { href: "#Skills", name: "Skills" },
  { href: "#About", name: "About Me" },
  { href: "#Projects", name: "Projects" },
];
const skillsItr = [
  {
    src: express,
    name: "Express",
    learning: false,
  },
  {
    src: js,
    name: "Javascript",
    learning: false,
  },
  {
    src: mongo,
    name: "MongoDB",
    learning: false,
  },
  {
    src: node,
    name: "Node",
    learning: false,
  },
  {
    src: tailwind,
    name: "Tailwind Css",
    learning: false,
  },
  {
    src: cpp,
    name: "C++",
    learning: false,
  },
  {
    src: c,
    name: "C",
    learning: false,
  },
  {
    src: py,
    name: "Python",
    learning: false,
  },
  {
    src: git,
    name: "GIT",
    learning: false,
  },
  {
    src: gitHub,
    name: "GitHub",
    learning: false,
  },
  {
    src: next,
    name: "Next",
    learning: true,
  },
  {
    src: react,
    name: "React",
    learning: false,
  },
  {
    src: tsIcon,
    name: "Type Script",
    learning: false,
  },
  {
    src: django,
    name: "Django",
    learning: true,
  },
];
interface Skill {
  src: string;
  name: string;
  learning: boolean;
}
const sortSkillsByLearning = (skills: Skill[]): Skill[] => {
  return skills.sort((a, b) => {
    if (a.learning === b.learning) {
      return a.name.localeCompare(b.name);
    }
    return a.learning ? 1 : -1;
  });
};

const links = [
  {
    src: github,
    to: "https://github.com/iamdk353",
  },
  {
    src: linkedin,
    to: "https://www.linkedin.com/in/dhanush-kumar-4a9b56247/",
  },
  {
    src: mail,
    to: "https://iamdk353@gmail.com",
  },
];
let sorted: Skill[] = sortSkillsByLearning(skillsItr);
export { sorted, links, nav };
