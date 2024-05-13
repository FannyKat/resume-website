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
  wix,
  materialize,
  archlinux,
  ubuntu,
  debian,
  fr
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
		language: ["React", "TailwindCSS", "NodeJS", "Ruby On Rails", "Bootstrap", "jQuery", "MUI", "MaterializeCSS"],
		icon: [react, tailwindcss, nodejs, rails, bootstrap, jquery, materialui, materialize],
	},
  {
    id: "db",
    name: "Databases",
    language: ["PostgreSQL", "MongoDB", "MySQL", "phpMyAdmin"],
		icon: [postgresql, mongodb, mysqL, phpmyadmin],
  },
  {
    id: "system",
    name: "Systems & Distributions",
    language: ["ArchLinux", "Linux", "Ubuntu", "Debian", "MacOS", "Windows"],
		icon: [archlinux, linux, ubuntu, debian, apple, windows8]
  },
  {
		id: "others",
		name: "Others",
		language: ["Git", "Shell / Bash", "Docker", "Nginx", "AWS", "WiX"],
	  icon: [git, bash, docker, nginx, amazonwebservices, wix],
	},
  {
    id: "languages",
    name: "Languages",
    language: ["Français", "Anglais", "Espagnol"],
    icon: [fr, uk, spain]
  }
];