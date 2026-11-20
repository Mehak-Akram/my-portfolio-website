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
    <main className="relative min-h-screen overflow-hidden bg-[#FFFFFF] text-[#102A32]">
      {/* SAME BACKGROUND */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-[#5DEBE2]/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-[#5DEBE2]/10 blur-[150px] rounded-full" />

      <section className="relative z-10 max-w-7xl mx-auto py-32 px-6">
        {/* HEADER */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-[#102A32] leading-[1.05] mb-6"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5DEBE2] to-[#5DEBE2]">
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#102A32]/75 leading-relaxed"
          >
            A collection of AI systems, full-stack
            applications, and innovative solutions
            I've built.
          </motion.p>
        </div>

        {/* PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6 mb-24 items-stretch">
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
              whileHover={{ y: -6 }}
              className="group relative flex min-h-[400px] flex-col overflow-hidden rounded-[28px] border border-[#102A32]/10 bg-white p-6 shadow-[0_14px_40px_rgba(16,42,50,0.06)] transition-all duration-300 hover:border-[#5DEBE2]/70 hover:shadow-[0_22px_50px_rgba(16,42,50,0.12)] sm:p-7 lg:min-h-[430px]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5DEBE2] to-[#5DEBE2]/15 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <span className="rounded-full border border-[#5DEBE2]/40 bg-[#5DEBE2]/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#102A32]">
                    {project.status}
                  </span>

                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#102A32]/10 text-sm text-[#102A32]/65 transition-all duration-300 hover:border-[#5DEBE2] hover:bg-[#5DEBE2]/15 hover:text-[#102A32]"
                    >
                      <FaGithub />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo.startsWith("http") ? project.demo : `https://${project.demo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live demo`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#102A32]/10 text-sm text-[#102A32]/65 transition-all duration-300 hover:border-[#5DEBE2] hover:bg-[#5DEBE2]/15 hover:text-[#102A32]"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="mb-4 text-[1.45rem] font-semibold leading-[1.2] tracking-[-0.035em] text-[#102A32] transition-colors duration-300 group-hover:text-[#17434c] sm:text-[1.6rem]">
                    {project.title}
                  </h3>

                  <p className="mb-7 text-sm leading-6 text-[#102A32]/70 sm:text-[15px] sm:leading-[1.7]">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 pr-12">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-[#5DEBE2]/35 bg-[#5DEBE2]/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#102A32]/80 transition-colors duration-200 hover:border-[#5DEBE2] hover:bg-[#5DEBE2]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.demo ? (project.demo.startsWith("http") ? project.demo : `https://${project.demo}`) : project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#102A32] text-lg text-white transition-all duration-300 hover:scale-105 hover:bg-[#5DEBE2] hover:text-[#102A32] group-hover:rotate-[-35deg]"
                >
                  <FaArrowRight />
                </a>
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
          className="relative overflow-hidden rounded-[40px] border border-[#102A32]/10 bg-white backdrop-blur-2xl p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#5DEBE2]/10 to-transparent" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#102A32] mb-5">
              Let's Build Something Amazing
            </h2>

            <p className="text-lg text-[#102A32]/75 max-w-2xl mx-auto mb-10 leading-relaxed">
              I specialize in turning complex ideas
              into production-ready solutions.
              Ready to start your next project?
            </p>

            <a href="/contact">
              <button className="group px-8 py-5 rounded-2xl bg-gradient-to-r from-[#5DEBE2] to-[#5DEBE2] text-[#102A32] font-semibold transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(93,235,226,0.4)] flex items-center gap-3 mx-auto">
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
