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
<<<<<<< HEAD
import ReactGA from "react-ga4";
=======
>>>>>>> e77411bbe9def9290fa8d5b143eae9960531a0b8

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
