import {
  amazonwebservices,
  apple,
  bash,
  bootstrap,
  c,
  css3,
  docker,
  express,
  git,
  html5,
  javascript,
  jquery,
  linux,
  materialui,
  mongodb,
  mysqL,
  nginx,
  nodejs,
  php,
  postgresql,
  rails,
  ruby,
  react,
  tailwindcss,
  windows8,
  spain,
  uk,
  phpmyadmin,
} from "../assets/icons/";

export const skills = [
	{
		id: "web",
		name: "Programming Languages",
		language: ["Ruby", "HTML", "CSS", "JavaScript", "C", "PHP"],
		icon: [ruby, html5, css3, javascript, c,  php],
	},
	{
		id: "lib",
		name: "Frameworks and Libraries",
		language: ["React", "TailwindCSS", "Node", "Ruby On Rails", "Bootstrap", "jquery"],
		icon: [react, tailwindcss, nodejs, rails, bootstrap, jquery],
	},
  {
    id: "db",
    name: "Databases",
    language: ["PostgreSQL", "MongoDB", "MySQL", "phpMyAdmin"],
		icon: [postgresql, mongodb, mysqL, phpmyadmin],
  },
  {
    id: "system",
    name: "Systems",
    language: ["Linux", "MacOS", "Windows"],
		icon: [linux, apple, windows8]
  },
  {
		id: "others",
		name: "Others",
		language: ["Git", "Shell / Bash", "Docker", "Nginx", "AWS"],
	  icon: [git, bash, docker, nginx, amazonwebservices],
	},
  {
    id: "languages",
    name: "Languages",
    language: ["Anglais", "Espagnol"],
    icon: [uk, spain]
  }
];