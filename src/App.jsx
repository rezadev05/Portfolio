import ReactGA from "react-ga4";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import { Project } from "./components/Project/Project";


const App = () => {
  ReactGA.initialize("your GA measurement id");
  ReactGA.send("pageview");
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <Education />
        <Project />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
};

export default App;
