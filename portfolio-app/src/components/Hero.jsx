import React from "react";

const Hero = ({ name, bio }) => {
  return (
    <section id="home" className="bg-gray-900 text-white text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">{bio}</p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;