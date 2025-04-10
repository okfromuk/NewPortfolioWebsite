import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaServer, FaAws } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

const stories = [
  {
    icon: <FaReact className="text-blue-500 text-4xl" />,
    title: "Boosting E-commerce Revenue with React & Redux",
    description: `
A growing fashion brand approached me with a slow and clunky website that led to high bounce rates.

I rebuilt the frontend using React and Redux, introducing a blazing-fast single-page interface with smoother product filters, cart management, and optimized lazy loading.

Within two months of deployment:
• 40% increase in user engagement
• 25% jump in conversions
• 3x better mobile performance

This helped them outperform their competitors during festive sales.`,
  },
  {
    icon: <FaServer className="text-green-600 text-4xl" />,
    title: "Scalable Backend for a SaaS Startup",
    description: `
A fast-growing SaaS startup faced backend crashes during peak hours.

I restructured their Node.js backend into modular services using Express, added PostgreSQL indexing and connection pooling, and secured it with JWT.

After AWS deployment:
• 5x user load handling
• 99.99% uptime
• Zero downtime client onboarding`,
  },
  {
    icon: <FaAws className="text-yellow-500 text-4xl" />,
    title: "Going Serverless with AWS for Cost Efficiency",
    description: `
A logistics firm had expensive, underutilized servers.

I migrated them to a fully serverless stack:
• AWS Lambda for compute
• S3 for static files
• API Gateway for routing

This reduced costs by 60%, improved shipping efficiency, and minimized manual errors.`,
  },
];

export default function SuccessStories() {
  return (
    <section
      className="py-24 px-4 sm:px-8 bg-gradient-to-b from-[#f0f4f8] to-[#e2e8f0]"
      id="success-stories"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-extrabold text-gray-800 mb-16 leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
            Success Stories
          </span>
        </motion.h2>

        {/* Scrollable container */}
        <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory pb-6 scrollbar-thin scrollbar-thumb-blue-400">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="min-w-[350px] md:min-w-[500px] snap-start bg-white/30 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white rounded-full p-3 shadow-inner">
                  {story.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {story.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-[17px] font-light tracking-wide">
                {story.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Want your story here next?
          </h3>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-medium rounded-xl transition"
          >
            Let’s Work Together <MdArrowForward className="text-2xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
