import './App.css'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import User from "./components/User"
import Skills from "./components/Skills"
import Profil from "./components/Profil"
import FormationsExperiences from "./components/FormationsExperiences"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Portfolio from "./components/Portfolio"
import dataPortfolio from "./datas/Portfolio"
import Footer from "./components/Footer"

function App() {

  function handleGenerateCv() {
    const contentRef = document.getElementById("cv");
  
    html2canvas(contentRef, { scale: 1 }).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(canvas.toDataURL("image/jpeg"), "JPEG", 0, 0, 220, 300);
      pdf.save("fcatusse-cv.pdf");
    });
  }

  return (
    <div className="App">
      <div className="grid__container" id="cv">
        <div className="sidebar">
          <div className="actions">
            <button onClick={ handleGenerateCv }><PictureAsPdfIcon /></button>
          </div>
          <User />
          <Skills />
        </div>
        <div className="main">
          <Profil />
          <FormationsExperiences />
          <Portfolio datas={dataPortfolio}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
