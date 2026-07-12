import { languages } from "./data/languages.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import LanguageSection from "./components/LanguageSection.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      {languages.map((l) => (
        <LanguageSection language={l} key={l.key} />
      ))}
      <Footer />
    </>
  );
}

export default App;
