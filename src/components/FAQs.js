import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "How much do you charge per hour?",
    answer:
      "My hourly rate typically ranges between $28 to $40 depending on the project complexity, timeline, and technical scope. For larger or long-term engagements, I offer milestone-based pricing as well."
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow an agile, feedback-driven approach that starts with understanding your goals, wireframing the UI/UX, building in short sprints, and sharing weekly milestones to ensure transparency and alignment throughout the project."
  },
  {
    question: "Do you also handle cloud deployment and infrastructure setup?",
    answer:
      "Yes, I manage everything from serverless deployments to full-stack architecture using AWS services like Lambda, EC2, S3, CloudFront, and even CI/CD pipeline setup for seamless DevOps workflows."
  },
  {
    question: "Can I track progress during the project?",
    answer:
      "Absolutely! I provide weekly updates, GitHub commits, live staging URLs, and video walkthroughs so you’re always in the loop and can give feedback early."
  },
  {
    question: "What industries have you worked with?",
    answer:
      "I've worked with clients from e-commerce, healthcare, logistics, ed-tech, and SaaS — helping both startups and established enterprises build scalable digital products tailored to their audience."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="py-24 px-6 sm:px-10 bg-gradient-to-b from-slate-100 to-slate-200 text-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-5xl font-extrabold mb-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-md transition-all duration-300 ${
                openIndex === index ? "ring-2 ring-blue-400/60" : ""
              }`}
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggle(index)}
              >
                <span className="text-lg sm:text-xl font-semibold text-slate-800">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="text-2xl text-blue-600" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-700 mt-4 text-[17px] leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
