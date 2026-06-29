"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      title: "Autonomous AI Employee",
      description:
"Developed a production-ready autonomous AI employee that automates business operations by managing emails, monitoring social media, creating customers and leads in Odoo CRM, generating executive reports, and running 24/7 with health monitoring, alerts, and audit logging.",
      tags: [
        "Odoo",
        "AI Agents",
      ],
      github:
        "https://github.com/Mehak-Akram/hackathon-0-gold-tier.git",
      demo:
        "",
      status: "Active",
    },
    {
      title: "UAARN",
      description:
        "A next-generation autonomous AI platform that combines cloud computing, intelligent agents, and workflow automation to solve real-world business challenges.",
      tags: ["Agentic AI", "Python", "Cloud"],
      github: "https://github.com/maryamarif24/uaarn-v13.git",
      demo: "https://www.uaarn.com/",
      status: "Live",
    },
    {
       title: "Physical AI & Humanoid Robotics Textbook",
      description:
        "A web-based Physical AI & Humanoid Robotics Textbook featuring an AI-powered RAG chatbot that enables users to ask questions and receive accurate, context-aware answers from the textbook, making technical learning more interactive and accessible.",
      tags: ["Docusaurus", "RAG"],
      github:
        "https://github.com/Mehak-Akram/hackathon1.git",
      demo:
        "https://hackathon1-7k7o.vercel.app/",
      status: "Live",
    },
    {
       title: "Todo-AI",
      description:
        "An AI-powered productivity platform that combines a persistent To-Do List backed by Neon Database with a Retrieval-Augmented Generation (RAG) chatbot, enabling seamless task management and context-aware AI assistance.",
      tags: [
        "Hackathon",
        "TypeScript",
        "RAG",
      ],
      github:
        "https://github.com/Mehak-Akram/todo-phase-3.git",
      demo:
        "todo-phase-3-three.vercel.app",
      status: "Live",
    },
    {
      title: "Furniture-website",
      description:
        "A modern full-stack furniture e-commerce platform featuring product browsing, advanced search and filtering, secure user authentication, shopping cart functionality, order management, and a responsive user interface for a seamless online shopping experience.",
      tags: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
      ],
      github:
        "https://github.com/Mehak-Akram/hackathon-3.git",
      demo:
        "https://hackathon-3-ebon-gamma.vercel.app/",
      status: "Live",
    },
    {
      title: "25 python Projects",
      description:
        "Developed 25+ Python projects covering games, automation, image processing, and interactive applications. Projects include Tic Tac Toe, Snake Game, Pong Game, Mad Libs, Photo Manipulation, and more, demonstrating strong proficiency in Python programming, problem-solving, object-oriented programming, file handling, and GUI development",
      tags: ["Python"],
      github:
        "https://github.com/Mehak-Akram/assignment-4.git",
      demo:
        "",
      status: "Live",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060606] text-slate-200">
      {/* SAME BACKGROUND */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-[#cf5c36]/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-[#cf5c36]/10 blur-[150px] rounded-full" />

      <section className="relative z-10 max-w-7xl mx-auto py-32 px-6">
        {/* HEADER */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cf5c36] to-[#d97652]">
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed"
          >
            A collection of AI systems, full-stack
            applications, and innovative solutions
            I've built.
          </motion.p>
        </div>

        {/* PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-28">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -15,
              }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 min-h-[450px] flex flex-col transition-all duration-500 hover:shadow-[0_0_60px_rgba(207,92,54,0.15)]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#cf5c36]/10 to-transparent transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                {/* TOP */}
                <div className="flex justify-between items-start mb-8">
                  <span className="px-4 py-2 rounded-full text-sm bg-[#cf5c36]/10 border border-[#cf5c36]/20 text-[#cf5c36]">
                    {project.status}
                  </span>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#cf5c36] hover:bg-[#cf5c36]/10 transition-all"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#cf5c36] hover:bg-[#cf5c36]/10 transition-all"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#cf5c36] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-base mb-8">
                    {project.description}
                  </p>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-[#cf5c36]/10 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#cf5c36]/10 to-transparent" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Let's Build Something Amazing
            </h2>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              I specialize in turning complex ideas
              into production-ready solutions.
              Ready to start your next project?
            </p>

            <a href="/contact">
              <button className="group px-8 py-5 rounded-2xl bg-gradient-to-r from-[#cf5c36] to-[#d97652] text-white font-semibold transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(207,92,54,0.4)] flex items-center gap-3 mx-auto">
                Start a Conversation

                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Portfolio;