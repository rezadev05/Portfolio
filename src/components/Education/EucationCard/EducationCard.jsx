import React from "react";
import "./EducationCard.css";

const EducationCard = ({ details }) => {
  // Menentukan logo berdasarkan nilai details.title
  const logoSrc =
    details.title === "Amaroossa Hotels."
      ? "./assets/images/logoAmaroossa.png"
      : "./assets/images/logoSmk.png";

  return (
    <div className="edu-card">
      <div className="edu-header">
        {/* Menampilkan logo sesuai dengan kondisi */}
        <img src={logoSrc} alt="Logo" className="edu-logo" />

        <div className="edu-details">
          <h6>{details.title}</h6>
          <div className="edu-duration">{details.date_major}</div>
          {details.title === "Amaroossa Hotels." && (
            <div className="edu-duration">Download Certificate</div>
          )}
        </div>
      </div>

      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
