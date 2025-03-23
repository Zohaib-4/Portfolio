import { useState } from "react";

const DataEntryPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profilePicture: "",
    skills: "",
    interests: "",
    description: "",
    projects: [{ title: "", description: "", image: "", github: "" }],
    socialMedia: [{ name: "", url: "" }],
  });

  const handleChange = (e, index, type) => {
    const { name, value } = e.target;
    if (type === "project") {
      const updatedProjects = [...formData.projects];
      updatedProjects[index][name] = value;
      setFormData({ ...formData, projects: updatedProjects });
    } else if (type === "social") {
      const updatedSocials = [...formData.socialMedia];
      updatedSocials[index][name] = value;
      setFormData({ ...formData, socialMedia: updatedSocials });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { title: "", description: "", image: "", github: "" }],
    });
  };

  const addSocialMedia = () => {
    setFormData({
      ...formData,
      socialMedia: [...formData.socialMedia, { name: "", url: "" }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Enter Portfolio Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="bio"
          placeholder="Short Bio"
          value={formData.bio}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="profilePicture"
          placeholder="Profile Picture URL"
          value={formData.profilePicture}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="skills"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="interests"
          placeholder="Interests (comma separated)"
          value={formData.interests}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="description"
          placeholder="Detailed About Me"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <h3 className="text-xl font-bold">Projects</h3>
        {formData.projects.map((project, index) => (
          <div key={index} className="border p-4 rounded mb-2">
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={project.title}
              onChange={(e) => handleChange(e, index, "project")}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              name="description"
              placeholder="Project Description"
              value={project.description}
              onChange={(e) => handleChange(e, index, "project")}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="image"
              placeholder="Project Image URL"
              value={project.image}
              onChange={(e) => handleChange(e, index, "project")}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="github"
              placeholder="GitHub Link"
              value={project.github}
              onChange={(e) => handleChange(e, index, "project")}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
        <button type="button" onClick={addProject} className="bg-blue-500 text-white p-2 rounded">
          Add Project
        </button>

        <h3 className="text-xl font-bold">Social Media Links</h3>
        {formData.socialMedia.map((social, index) => (
          <div key={index} className="border p-4 rounded mb-2">
            <input
              type="text"
              name="name"
              placeholder="Social Media Name (e.g., LinkedIn, GitHub)"
              value={social.name}
              onChange={(e) => handleChange(e, index, "social")}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="url"
              placeholder="Social Media URL"
              value={social.url}
              onChange={(e) => handleChange(e, index, "social")}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
        <button type="button" onClick={addSocialMedia} className="bg-green-500 text-white p-2 rounded">
          Add Social Media
        </button>

        <button type="submit" className="bg-purple-500 text-white p-3 rounded w-full">
          Generate Portfolio
        </button>
      </form>
    </div>
  );
};

export default DataEntryPage;
