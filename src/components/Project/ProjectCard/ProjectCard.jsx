import React from "react";
import "./ProjectCard.css";
import { getImageUrl } from "../../../utils/data";

export const ProjectCard = ({
  project: {
    title,
    imageSrc,
    description,
    skills,
    demo,
    source,
    button_1,
    button_2,
  },
}) => {
  return (
    <div className="project-card-container">
      <img src={getImageUrl(imageSrc)} alt={title} className="image-project" />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <ul className="skills-item">
        {skills.map((skill, id) => {
          return (
            <li key={id} className="skill-item">
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="links">
        <a href={demo} className="link">
          {button_1}
        </a>
        <a href={source} className="link">
          {button_2}
        </a>
      </div>
    </div>
  );
};
