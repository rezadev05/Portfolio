import React from "react";
import "./Project.css";
import project from "../../utils/project.json";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const Project = () => {
  return (
    <section className="container-project" id="project">
      <h5>Project & Achievements🏅</h5>
      <div className="project">
        {project.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
