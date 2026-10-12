import "./App.css";
import Title from "./components/header/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar/navbar";
import Icons from "./components/icons/icons";
import Description from "./components/header/description";
import About from "./components/about";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";

export default function App() {
  return (
    <div className="page" id="page">
      <Navbar />
      <div className="intro-page">
        <div className="intro-left">
          <Title />
          <Description />
          <Icons />
        </div>
        <div className="intro-right">
          <Experience />
        </div>
      </div>
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
