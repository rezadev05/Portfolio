import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) toggleMenu();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
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
              <a onClick={() => handleScroll("hero")} className="menu-item">
                Home
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("skills")} className="menu-item">
                Skills
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("work-exp")} className="menu-item">
                Work Experience
              </a>
            </li>

            <li>
              <a
                onClick={() => handleScroll("education")}
                className="menu-item"
              >
                Education
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("contact")} className="menu-item">
                Contact Me
              </a>
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
