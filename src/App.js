import Skills from "./components/Skills"
import Profil from "./components/Profil"
import FormationsExperiences from "./components/FormationsExperiences"
import Portfolio from "./components/Portfolio"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import dataPortfolio from "./datas/Portfolio"
import interests from "./datas/Interests"

function App() {

  return (
    <div className="m-10 md:m-20">
      <Profil />
      <Skills />
      <FormationsExperiences />
      <Portfolio datas={dataPortfolio}/>
      <Interests datas={interests} />
      <Footer />
    </div>
  );
}

export default App;
