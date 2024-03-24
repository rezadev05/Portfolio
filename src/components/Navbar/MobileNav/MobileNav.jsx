import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) toggleMenu();
    scroll.scrollTo(document.getElementById(sectionId).offsetTop - 80, {
      smooth: true,
      duration: 500,
    });
  };

  const handleDownloadCv = () => {
    const cvUrl = "/assets/images/cv_rezaheryana.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.target = "_blank";
    link.download = "cv_rezaheryana.pdf";
    link.click();
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/icon_nav.svg" alt="" />

          <ul>
            <li>
              <ScrollLink
                to="hero"
                smooth={true}
                onClick={() => handleScroll("hero")}
                className="menu-item"
              >
                Home
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="skills"
                smooth={true}
                onClick={() => handleScroll("skills")}
                className="menu-item"
              >
                Skills
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="work-exp"
                smooth={true}
                onClick={() => handleScroll("work-exp")}
                className="menu-item"
              >
                Experience
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="education"
                smooth={true}
                onClick={() => handleScroll("education")}
                className="menu-item"
              >
                Education
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="project"
                smooth={true}
                onClick={() => handleScroll("project")}
                className="menu-item"
              >
                Project
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                onClick={() => handleScroll("contact")}
                className="menu-item"
              >
                Contact
              </ScrollLink>
            </li>

            <button className="contact-btn" onClick={handleDownloadCv}>
              Download Cv
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
