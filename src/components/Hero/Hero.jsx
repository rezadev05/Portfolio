import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Hi, I`m Reza👋</h2>
        <p>
          Fullstack Developer | I graduated from a Vocational High School
          majoring in Computer and Network Engineering, I am very competent in
          the field of programming and networking.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <img src="./assets/images/imgHuman.png" alt="" />
        </div>

        <div className="tech-icons-container">
          <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img01.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img_next.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img_vue.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img_tailwind.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img_boostrap.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img_vite.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img_codeigniter.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img_php.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img_mysql.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img_mongodb.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img_vscode.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img_winbox.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
