import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeB from "./Pages/CECCIC/Home/HomeB";
import About from "./Pages/CECCIC/About/About";
import ContactoB from "./Pages/CECCIC/Contacto/ContactB";
import Programa from "./Pages/CECCIC/Programa/Programa";
import Palestrantes from "./Pages/CECCIC/Palestrantes/Palestrantes";
import Footer from './components/Footer/Footer';
import "./index.css"


// Componente de proteção de rota

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div id="homeB">
                  <HomeB />
                </div>
                <div id="AboutSection">
                  <About />
                </div>
                <div id="Programa">
                  <Programa />
                </div>
                <div id="Palestrantes">
                  <Palestrantes />
                </div>
                <div id="contactob">
                  <ContactoB />
                </div>
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
