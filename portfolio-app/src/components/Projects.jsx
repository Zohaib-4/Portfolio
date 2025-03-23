import React, { useEffect, useState } from "react";
import ProjectsSection from "./ProjectsSection";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetching projects dynamically
    fetch("https://api.example.com/projects") // Replace with actual API URL
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <ProjectsSection projects={projects} />
      </div>
    </section>
  );
};

export default Projects;