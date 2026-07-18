"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaCode,
  FaCloud,
  FaArrowRight,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Agentic AI Solutions",
      icon: <FaRobot />,
      description:
        "Building autonomous systems that plan, reason, and self-correct. I implement advanced RAG pipelines and tool-use capabilities to turn static LLMs into active intelligent agents.",
      features: [
        "Task Autonomy",
        "Memory Management",
        "LLM Integration",
        "Tool Use",
      ],
    },
    {
      title: "Full Stack Development",
      icon: <FaCode />,
      description:
        "Developing robust web applications using modern frameworks. From server-side rendering to real-time streaming, I build fast, scalable, and user-friendly applications.",
      features: [
        "Next.js & React",
        "TypeScript",
        "API Development",
        "Responsive Design",
      ],
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060606] text-slate-200">
      {/* Background */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-[#cf5c36]/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-[#cf5c36]/10 blur-[150px] rounded-full" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* Header */}
        <div className="mb-24 text-center max-w-4xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6"
          >
            What I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cf5c36] to-[#d97652]">
              Offer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed"
          >
            I specialize in turning complex ideas
              into production-ready solutions.
              Ready to start your next project?
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-28">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -15,
              }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 min-h-[520px] flex flex-col transition-all duration-500 hover:shadow-[0_0_60px_rgba(207,92,54,0.15)]"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#cf5c36]/10 to-transparent transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-[#cf5c36]/20 to-[#cf5c36]/5 border border-[#cf5c36]/20 flex items-center justify-center text-4xl text-[#cf5c36] mb-8">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-lg mb-8 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 text-center hover:bg-[#cf5c36]/10 transition-all duration-300"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-12 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Ready to Start Your Project?
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's discuss how I can help bring your vision to life
            with cutting-edge technology and expert execution.
          </p>

          <a href="/contact">
            <button className="group px-8 py-5 rounded-2xl bg-gradient-to-r from-[#cf5c36] to-[#d97652] text-white font-semibold transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(207,92,54,0.4)] flex items-center gap-3 mx-auto">
              Get In Touch

              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </motion.div>
      </section>
    </main>
  );
}