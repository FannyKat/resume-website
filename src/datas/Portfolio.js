import {
  amazonwebservices,
  bootstrap,
  bulma,
  javascript,
  nginx,
  nodejs,
  postgresql,
  rails,
  ruby,
  react,
  tailwindcss,
  html5,
  wix,
  materialize
} from "../assets/icons/";

const dataPortfolio = [
  {
    id: 0,
    url: 'https://skate.rumahtaipei.com',
    image: "./rumah-site.png",
    description: "Registration for Rumah Skate Club",
    icon: [ruby, rails, bulma, javascript, postgresql]
  },
  {
    id: 1,
    url: 'https://www.ledonenligne.fr',
    image: "./ldl.png",
    description: "Online Donations Website",
    icon: [ruby, rails, materialize, javascript, postgresql]
  },
  {
    id: 2,
    url: 'https://www.art-coma.fr',
    image: "./coma-site.png",
    description: "Art Website in Ruby on Rails",
    icon: [amazonwebservices, bootstrap, ruby, rails, nginx, postgresql]
  },
  {
    id: 3,
    url: "https://www.yt-motors.com/",
    image: "./yt-motors.png",
    description: "Online Car Sale Platform",
    icon: [wix, html5, javascript]
  },
  // {
  //   id: 3,
  //   url: "https://github.com/FannyKat/",
  //   image: "./github-site.png",
  //   description: "Projects on Github",
  //   icon: [c, bash, php, docker]
  // },
  // {
  //   id: 4,
  //   url: "http://fannycatusse.online",
  //   image: "./website.png",
  //   description: "My Personal Website",
  //   icon: [react, tailwindcss, nodejs, javascript]
  // },
]

export default dataPortfolio