import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-xl font-bold mt-4">{project.title}</h3>
      <p className="text-gray-600 mt-2">{project.description}</p>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-500 hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
