"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiFastapi,
  SiDocker,
  SiTypescript,
  SiPostgresql,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

import {
  FaBrain,
  FaTerminal,
  FaCode,
  FaServer,
  FaMicrochip,
} from "react-icons/fa";

const Skills = () => {
  const groups = [
    {
      title: "Intelligence Layer",
      icon: <FaBrain />,
      skills: [
        {
          name: "Agentic AI",
          icon: <FaMicrochip />,
          level: "Advanced",
        },
        {
          name: "Prompt Eng.",
          icon: <FaTerminal />,
          level: "Expert",
        },
      ],
    },
    {
      title: "Core Development",
      icon: <FaCode />,
      skills: [
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          level: "v15",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          level: "Strict",
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss />,
          level: "Advanced",
        },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: [
        {
          name: "FastAPI",
          icon: <SiFastapi />,
          level: "Python",
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs />,
          level: "Runtime",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
          level: "Database",
        },
      ],
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-32 bg-[#060606] text-slate-200"
      id="skills"
    >
      {/* SAME BACKGROUND AS ABOUT */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-[#cf5c36]/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-[#cf5c36]/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-24 text-center max-w-4xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6"
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cf5c36] to-[#d97652]">
              Tech Stack
            </span>
          </motion.h2>
        </div>

        {/* SAME SIZE PREMIUM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {groups.map((group, gIdx) => (
            <motion.div
              key={gIdx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: gIdx * 0.15,
              }}
              whileHover={{
                y: -15,
              }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 min-h-[450px] flex flex-col transition-all duration-500 hover:shadow-[0_0_60px_rgba(207,92,54,0.15)]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#cf5c36]/10 to-transparent transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                {/* CARD HEADER */}
                <div className="flex items-center gap-4 mb-10">
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    className="w-16 h-16 rounded-[22px] bg-gradient-to-br from-[#cf5c36]/20 to-[#cf5c36]/5 border border-[#cf5c36]/20 flex items-center justify-center text-2xl text-[#cf5c36]"
                  >
                    {group.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white">
                    {group.title}
                  </h3>
                </div>

                {/* SKILLS */}
                <div className="space-y-4 mt-auto">
                  {group.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{
                        x: 6,
                        scale: 1.02,
                      }}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:bg-[#cf5c36]/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl text-[#cf5c36]">
                          {skill.icon}
                        </div>

                        <span className="font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-sm text-slate-500">
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;