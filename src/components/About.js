import React from "react";
import { motion } from "framer-motion";
import { FaAws, FaCode, FaRocket, FaUsers } from "react-icons/fa";
import profilePic from "../assets/omkar-profile.jpg"; // Ensure it's in src/assets

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-br from-[#f0f4ff] via-white to-[#eef1f8] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10 bg-white bg-opacity-70 backdrop-blur-xl rounded-3xl p-10 shadow-xl">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profilePic}
            alt="Omkar Karve"
            className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto object-cover border-4 border-white"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            Hey, I’m <strong className="text-blue-700">Omkar Karve</strong> — a
            detail-driven Full Stack Developer with <strong>4+ years</strong> of
            hands-on experience in building modern web applications using{" "}
            <strong>React, Redux, Node.js, AWS, and PostgreSQL</strong>.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            I blend intuitive UX with robust backend logic to create seamless
            experiences that deliver real business value.
          </p>

          {/* Why Work With Me */}
          <ul className="space-y-4 mb-6 text-gray-700">
            <li className="flex items-start gap-3">
              <FaUsers className="text-blue-500 mt-1" />
              <span>Client-focused approach with transparent communication</span>
            </li>
            <li className="flex items-start gap-3">
              <FaAws className="text-orange-500 mt-1" />
              <span>Hands-on deployment with AWS, CI/CD & Docker</span>
            </li>
            <li className="flex items-start gap-3">
              <FaRocket className="text-purple-500 mt-1" />
              <span>Full lifecycle ownership from planning to deployment</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCode className="text-green-600 mt-1" />
              <span>Clean, scalable code with future-proof architecture</span>
            </li>
          </ul>

          {/* CTA */}
          <a
            href="https://www.linkedin.com/in/omkar-karve"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-semibold rounded-xl shadow hover:scale-105 transform transition"
          >
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
