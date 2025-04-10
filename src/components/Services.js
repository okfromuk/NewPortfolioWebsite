import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaCloud, FaCogs } from "react-icons/fa";

const services = [
  {
    category: "Frontend Development",
    icon: <FaCode className="text-pink-500 text-3xl" />,
    items: [
      "Build beautiful websites and apps that load fast and look great on every screen",
      "Create single-page applications (SPAs) using React.js for smooth user experience",
      "Use Tailwind CSS for pixel-perfect UI with modern designs",
      "Optimize your site for speed and SEO to attract more customers",
    ],
  },
  {
    category: "Backend Development",
    icon: <FaServer className="text-green-500 text-3xl" />,
    items: [
      "Develop powerful APIs that securely handle your business logic",
      "Use Node.js and Express to manage users, payments, forms, etc.",
      "Protect your system with secure login using JWT authentication",
      "Integrate PostgreSQL for organized and reliable data storage",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <FaCloud className="text-blue-500 text-3xl" />,
    items: [
      "Host your website on AWS for lightning-fast performance",
      "Use Serverless architecture to cut hosting costs",
      "Deploy updates automatically with CI/CD pipelines",
      "Dockerize apps so they work the same everywhere — development to production",
    ],
  },
  {
    category: "Full Stack Solutions",
    icon: <FaCogs className="text-yellow-500 text-3xl" />,
    items: [
      "Provide end-to-end development — from idea to live app",
      "Use Microservices to keep big systems simple and flexible",
      "Scale your app to handle more users without slowing down",
      "Offer technical guidance, code review, and growth advice",
    ],
  },
];

export default function Services() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-slate-50 py-16 px-6 sm:px-12 lg:px-28">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-slate-800 mb-4 drop-shadow-sm">
          How I Can Help Your Business
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Whether you're starting from scratch or need to upgrade an existing system — I provide full-stack solutions that are fast, reliable, and user-friendly.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="group rounded-3xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl hover:shadow-2xl p-8 transition-all duration-300 hover:scale-[1.015]"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-white shadow rounded-full">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 group-hover:text-blue-700 transition">
                {service.category}
              </h3>
            </div>
            <ul className="space-y-4 text-[17px] text-gray-700 leading-relaxed">
              {service.items.map((item, i) => (
                <li key={i} className="relative pl-5 before:content-['✓'] before:absolute before:left-0 before:text-blue-600">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
