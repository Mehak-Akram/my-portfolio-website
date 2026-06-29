"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: "GIAIC Peer",
      role: "AI Developer",
      text: "Mehak's work on the UAARN AI Agent was impressive. Her understanding of autonomous workflows and FastAPI is far ahead of the curve."
    },
    {
      name: "Hackathon Lead",
      role: "Full Stack Engineer",
      text: "Collaborating on FocusFlow was a great experience. Mehak's ability to handle complex TypeScript logic while maintaining a clean UI is remarkable."
    },
    {
      name: "Open Source Contributor",
      role: "Backend Specialist",
      text: "I reviewed her Todo CLI project; the code structure and handling of CORS issues showed a very professional approach to development."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-3xl">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cf5c36] to-[#d97652]">Say</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="cursor-hover group glass rounded-3xl p-8 transition-all duration-300 hover:bg-white/5"
            >
              <FaQuoteLeft className="text-[#cf5c36] text-3xl mb-6 opacity-50" />
              <p className="text-slate-400 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-white font-bold mb-1">{review.name}</h4>
                <p className="text-[#cf5c36] text-sm">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;