import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Tools from "./Components/Tool";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Tools/>
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
