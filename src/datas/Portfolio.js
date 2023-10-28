import {
  amazonwebservices,
  bootstrap,
  c,
  javascript,
  nginx,
  nodejs,
  postgresql,
  rails,
  ruby,
  react,
  tailwindcss,
  bash,
  php,
  docker
} from "../assets/icons/";

const dataPortfolio = [
  {
    id: 1,
    url: 'http://www.art-coma.fr',
    image: "./coma-site.png",
    description: "Art Website in Ruby on Rails",
    icon: [amazonwebservices, bootstrap, ruby, rails, nginx, postgresql]
  },
  {
    id: 2,
    url: "https://github.com/FannyKat/",
    image: "./github-site.png",
    description: "Projects on Github",
    icon: [c, bash, php, docker]
  },
  {
    id: 3,
    url: "https://fannycatusse.online",
    image: "./website.png",
    description: "My Personal Website",
    icon: [react, tailwindcss, nodejs, javascript]
  }
]

export default dataPortfolio