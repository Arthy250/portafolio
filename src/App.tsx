import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Portafolio from "./components/portafolio";
import Servicios from "./components/servicios";
import Skills from "./components/skills";
import "./styles/main.scss";

function App() {

  const [modal, setModal] = useState(false);

  return (
    <div>
      <Header />
      <div className="contenedor">
        <div className="mainContent">
          <Hero/>

         

          <Portafolio/>
          <Servicios/>
          <Skills/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
