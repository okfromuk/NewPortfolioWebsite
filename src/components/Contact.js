import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50 to-cyan-100 min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-5xl font-extrabold text-slate-800 mb-4 drop-shadow">
          Let’s Connect
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          I’d love to hear from you — project ideas, questions, or just a friendly hello!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-lg p-4 sm:p-8 rounded-3xl shadow-2xl border border-slate-200"
      >
        <div className="w-full h-[900px] sm:h-[1000px] overflow-hidden rounded-xl shadow-xl">
          <iframe
            title="Contact Form"
            src="https://form.jotform.com/221511218293448" // ensure this is the latest clean version
            className="w-full h-full border-0 rounded-xl"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
