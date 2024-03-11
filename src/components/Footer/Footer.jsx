import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">© {currentYear} Rezadev05, Don't Forget Smile</div>
  );
};

export default Footer;
