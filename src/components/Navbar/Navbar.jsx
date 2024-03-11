import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-scroll";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
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
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/images/icon_nav.svg" alt="" />

          <ul>
            <li>
              <Link
                activeClass="active"
                to="hero"
                smooth
                spy
                offset={-80}
                className="menu-item"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="skills"
                smooth
                spy
                offset={-120}
                className="menu-item"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="work-exp"
                smooth
                spy
                offset={-100}
                className="menu-item"
              >
                Work Experience
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="education"
                smooth
                spy
                offset={-100}
                className="menu-item"
              >
                Education
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="contact"
                smooth
                spy
                offset={-100}
                className="menu-item"
              >
                Contact Me
              </Link>
            </li>

            <button className="contact-btn" onClick={handleDownloadCv}>
              Download Cv
            </button>
          </ul>

          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
