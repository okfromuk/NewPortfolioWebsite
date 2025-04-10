import React from "react";

const projects = [
  {
    title: "Global Project Tracker",
    description: "A project tracking tool for global teams.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    image: "https://via.placeholder.com/600x300"
  },
  {
    title: "Cloud File Uploader",
    description: "Secure file uploads with AWS S3 and Lambda.",
    tech: ["AWS", "React", "Node.js"],
    link: "#",
    image: "https://via.placeholder.com/600x300"
  },
  {
    title: "E-Commerce Backend",
    description: "Robust backend for a custom e-commerce site.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    link: "#",
    image: "https://via.placeholder.com/600x300"
  }
];


export default function Portfolio() {
    return (
      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  <p className="text-sm text-gray-500 mb-2">Tech: {project.tech.join(", ")}</p>
                  <a href={project.link} className="text-blue-600 hover:underline text-sm">View Demo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }