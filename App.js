import "./App.css";
import AboutMe from "./Myportfolio/AboutMe/AboutMe.jsx";
import Contact from "./Myportfolio/Contact/Contact.jsx";
import Education from "./Myportfolio/Education/Education.jsx";
import Exp from "./Myportfolio/Experience/Exp.jsx";
import Header from "./Myportfolio/header/Header.jsx";
import Projects from "./Myportfolio/Projects/Projects.jsx";
import Skills from "./Myportfolio/Skills/Skills.jsx";
function App() {
  return (
    <div>
      <div className="appjsx">
        <Header />
        <Skills />
        <AboutMe />
        <Projects />
        <Education />
        <Exp />
        <Contact />
      </div>
    </div>
  );
}

export default App;
