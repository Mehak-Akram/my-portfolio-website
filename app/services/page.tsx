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
    <main className="relative min-h-screen overflow-hidden bg-[#FFFFFF] text-[#102A32]">
      {/* Background */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-[#5DEBE2]/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-[#5DEBE2]/10 blur-[150px] rounded-full" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-32">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center max-w-4xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-[#102A32] leading-[1.05] mb-6"
          >
            What I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5DEBE2] to-[#5DEBE2]">
              Offer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#102A32]/75 leading-relaxed"
          >
            I specialize in turning complex ideas
              into production-ready solutions.
              Ready to start your next project?
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20 md:mb-24 max-w-5xl mx-auto items-stretch">
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
              whileHover={{ y: -8 }}
              className="group relative isolate overflow-hidden rounded-[30px] border border-[#102A32]/10 bg-white p-7 md:p-9 min-h-[460px] flex flex-col shadow-[0_16px_45px_rgba(16,42,50,0.07)] transition-all duration-300 hover:border-[#5DEBE2]/70 hover:shadow-[0_24px_55px_rgba(16,42,50,0.12)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5DEBE2] to-[#5DEBE2]/20" />
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#5DEBE2]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col flex-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#102A32] border border-[#5DEBE2]/35 flex items-center justify-center text-2xl text-[#5DEBE2] mb-7 shadow-lg shadow-[#102A32]/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-[1.7rem] leading-tight font-bold text-[#102A32] mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#102A32]/70 leading-7 text-base md:text-[1.05rem] mb-8 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-[#102A32]/[0.08] bg-[#F5FBFA] px-4 py-3 text-sm font-medium text-[#102A32]/80 text-left sm:text-center hover:border-[#5DEBE2]/60 hover:bg-[#5DEBE2]/10 transition-all duration-300"
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
          className="relative overflow-hidden rounded-[32px] border border-[#5DEBE2]/20 bg-[#102A32] p-8 md:p-12 lg:p-14 text-center shadow-[0_22px_55px_rgba(16,42,50,0.13)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#5DEBE2]/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Ready to Start Your Project?
          </h2>

          <p className="text-base md:text-lg text-white/75 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Let's discuss how I can help bring your vision to life
            with cutting-edge technology and expert execution.
          </p>

          <a href="/contact">
            <button className="group px-7 py-4 rounded-xl bg-[#5DEBE2] text-[#102A32] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(93,235,226,0.25)] flex items-center gap-3 mx-auto">
              Get In Touch

              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
