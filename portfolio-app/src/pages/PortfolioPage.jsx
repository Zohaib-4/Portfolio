import React from "react";

const PortfolioPage = ({ data }) => {
  if (!data) return <p className="text-center text-gray-500">No data available.</p>;

  return (
    <div className="container mx-auto p-6">
      {/* Profile Section */}
      <div className="text-center mb-8">
        {data.profilePicture && (
          <img
            src={data.profilePicture}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full border-4 border-gray-300"
          />
        )}
        <h1 className="text-3xl font-bold mt-4">{data.name}</h1>
        <p className="text-gray-600">{data.bio}</p>
      </div>

      {/* Skills & Interests */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Skills</h2>
        <p className="text-gray-700">{data.skills}</p>
        <h2 className="text-xl font-semibold mt-4">Interests</h2>
        <p className="text-gray-700">{data.interests}</p>
      </div>

      {/* About Me */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">About Me</h2>
        <p className="text-gray-700">{data.description}</p>
      </div>

      {/* Projects */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.projects.map((project, index) => (
            <div key={index} className="border p-4 rounded shadow-md">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded"
                />
              )}
              <h3 className="text-lg font-bold mt-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-2 inline-block"
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Connect with Me</h2>
        <div className="flex space-x-4 mt-2">
          {data.socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
