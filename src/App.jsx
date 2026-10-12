import "./App.css";
import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Title from "./components/header/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar/navbar";
import Icons from "./components/icons/icons";
import Description from "./components/header/description";
import About from "./components/about";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";

function Home() {
  return (
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
  );
}

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="page" id="page">
      <Navbar />
      <motion.main
        className="view"
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.main>
      <Footer />
    </div>
  );
}
