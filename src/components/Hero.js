import React from "react";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiRedux, SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[92vh] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex flex-col items-center justify-center px-6 py-20 text-white relative overflow-hidden">
      
      {/* Glowing Background Circles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-80 h-80 bg-fuchsia-500/20 rounded-full blur-3xl bottom-20 right-10 animate-pulse" />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 md:p-14 max-w-5xl text-center shadow-2xl"
      >

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg">
          Building Tech That Grows Your Business 🚀
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          I’m Omkar — a Full-Stack Developer helping founders & businesses build scalable web apps using React, Node, AWS, Redux, and PostgreSQL. Fast. Budget-friendly. Future-proof.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="#contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-500 hover:to-blue-600 transition-all text-white text-lg px-8 py-3 rounded-full shadow-xl font-semibold"
        >
          💬 Let’s Build Something Great Together
        </motion.a>
      </motion.div>

      {/* Tech Stack Icons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative z-10 flex flex-wrap justify-center gap-10 mt-14"
      >
        <TechIcon icon={<FaReact />} label="React" color="text-cyan-400" />
        <TechIcon icon={<SiRedux />} label="Redux" color="text-purple-400" />
        <TechIcon icon={<FaNodeJs />} label="Node.js" color="text-green-400" />
        <TechIcon icon={<FaAws />} label="AWS" color="text-yellow-300" />
        <TechIcon icon={<SiPostgresql />} label="PostgreSQL" color="text-blue-400" />
      </motion.div>

      {/* Scroll Down Indicator (Always visible) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [10, 0, 10] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 z-10 flex flex-col items-center left-1/2 -translate-x-1/2"
      >
        <span className="text-sm text-gray-300 mb-1">Scroll to see more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 animate-bounce text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25" />
        </svg>
      </motion.div>
    </section>
  );
}

function TechIcon({ icon, label, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className="flex flex-col items-center group transition-all duration-300"
    >
      <div className={`text-5xl ${color} mb-2 drop-shadow-md group-hover:scale-110`}>
        {icon}
      </div>
      <span className="text-sm text-gray-400 group-hover:text-white">{label}</span>
    </motion.div>
  );
}
