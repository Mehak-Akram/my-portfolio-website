"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaDownload,
  FaDatabase,
  FaTools,
  FaServer,
  FaBrain,
  FaMicrochip,
  FaTerminal,
} from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiFastapi, SiNodedotjs, SiPostgresql, SiMongodb, SiMysql, SiFirebase, SiLangchain, SiGit, SiDocker, SiVercel, SiOpenai } from "react-icons/si";

const About = () => {
  const infoItems = [
    { label: "Status", value: "GIAIC Q5 Student" },
    { label: "Experience", value: "1+ Year in Web Dev" },
  ];

  const skillGroups = [
    {
      category: "Frontend",
      description: "Modern, responsive interfaces",
      icon: <SiReact />,
      items: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      category: "Backend",
      description: "Reliable APIs and services",
      icon: <SiFastapi />,
      items: [
        { name: "Python", icon: <SiPython /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "REST APIs", icon: <FaServer /> },
      ],
    },
    {
      category: "AI & Agentic AI",
      description: "Intelligent systems and workflows",
      icon: <FaBrain />,
      items: [
        { name: "Agentic AI", icon: <FaMicrochip /> },
        { name: "LangChain", icon: <SiLangchain /> },
        { name: "Prompt Engineering", icon: <FaTerminal /> },
        { name: "Machine Learning", icon: <FaBrain /> },
      ],
    },
    {
      category: "Databases",
      description: "Data storage and persistence",
      icon: <FaDatabase />,
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      category: "Tools & Platforms",
      description: "Build, ship, and collaborate",
      icon: <FaTools />,
      items: [
        { name: "Git", icon: <SiGit /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "OpenAI", icon: <SiOpenai /> },
      ],
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FFFFFF] text-[#102A32]">
      {/* Background Glow Effects */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-[#5DEBE2]/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-[#5DEBE2]/10 blur-[150px] rounded-full" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-[1.1] text-[#102A32]"
          >
            About {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5DEBE2] to-[#5DEBE2]">
              Me
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-xl text-[#102A32]/75 leading-relaxed max-w-2xl"
          >
            I'm a full-stack web developer passionate about
            creating intelligent systems that make a difference.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 group perspective"
          >
            <div className="relative rounded-[32px] border border-[#5DEBE2]/35 bg-[#102A32] text-white backdrop-blur-2xl p-7 shadow-[0_20px_55px_rgba(16,42,50,0.16)] transition-all duration-500 hover:-translate-y-3 hover:rotate-1">
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#5DEBE2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-[28px] aspect-square mb-7">
                <Image
                  src="/mehak.png"
                  alt="Mehak Akram"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102A32]/70 via-transparent to-transparent" />

                {/* Floating Effect */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="absolute top-5 right-5 w-20 h-20 rounded-full bg-[#5DEBE2]/20 blur-2xl"
                />
              </div>

              <h2 className="text-3xl font-bold text-white mb-2">
                Mehak Akram
              </h2>

              <p className="text-[#5DEBE2] font-medium mb-8 text-lg">
                Full-Stack Developer
              </p>

              {/* Socials */}
              <div className="flex gap-4 mb-7">
                {[
                  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mehak-akram-3859a830b?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                  { Icon: FaGithub, href: "https://github.com/Mehak-Akram" },
                  { Icon: FaTwitter, href: "https://x.com/MehakAkram597" },
                ].map(({ Icon, href }, i) => (
                  <motion.a
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={i}
                    href={href}
                    className="flex-1 h-14 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-[#5DEBE2] hover:text-[#102A32] transition-all duration-300"
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                ))}
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#5DEBE2] to-[#5DEBE2] text-[#102A32] font-semibold flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(93,235,226,0.4)] hover:shadow-[0_15px_50px_rgba(93,235,226,0.55)] transition-all duration-300"
              >
                <FaDownload />
                Download CV
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="rounded-[32px] border border-[#102A32]/10 bg-[#102A32] text-white backdrop-blur-2xl p-8 shadow-[0_20px_55px_rgba(16,42,50,0.14)]"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Quick Info
              </h3>

              <div className="grid md:grid-cols-2 gap-5">
                {infoItems.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -6,
                      rotateX: 4,
                      rotateY: 4,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-5 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-br from-[#5DEBE2]/10 to-transparent transition-opacity duration-300" />

                    <p className="text-xs uppercase tracking-widest text-[#5DEBE2] font-bold mb-3 relative z-10">
                      {item.label}
                    </p>

                    <p className="text-white font-medium text-lg relative z-10">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* About Card */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="rounded-[32px] border border-[#102A32]/10 bg-white backdrop-blur-2xl p-8 shadow-[0_16px_40px_rgba(16,42,50,0.07)]"
            >
              <h3 className="text-2xl font-bold text-[#102A32] mb-6">About</h3>

              <p className="text-[#102A32]/75 leading-relaxed text-lg mb-5">
                Currently specializing in{" "}
                <span className="text-[#102A32] font-semibold">
                  Agentic AI
                </span>{" "}
                at GIAIC, I focus on building autonomous systems that can
                reason, plan, and execute complex tasks.
              </p>

              <p className="text-[#102A32]/75 leading-relaxed text-lg">
                My work bridges the gap between cutting-edge AI research and
                practical, scalable web applications. I'm passionate about
                creating solutions that are not just technically impressive,
                but genuinely useful.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Skills */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#102A32]/60 mb-3">What I work with</p>
              <h3 className="text-4xl md:text-5xl font-black text-[#102A32]">
                Skills & <span className="text-[#5DEBE2]">Technologies</span>
              </h3>
            </div>
            <p className="max-w-md text-[#102A32]/65 leading-relaxed">
              A toolkit spanning thoughtful interfaces, dependable systems, and agentic AI.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {skillGroups.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-[#102A32]/10 bg-white p-6 sm:p-7 shadow-[0_14px_38px_rgba(16,42,50,0.06)] transition-all duration-300 hover:border-[#5DEBE2]/70 hover:shadow-[0_20px_45px_rgba(16,42,50,0.11)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5DEBE2] to-[#5DEBE2]/20" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#102A32] text-xl text-[#5DEBE2] shadow-md shadow-[#102A32]/15 transition-transform duration-300 group-hover:scale-105">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#102A32]">{skill.category}</h4>
                      <p className="mt-1 text-sm text-[#102A32]/60">{skill.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {skill.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex min-h-11 items-center gap-2.5 rounded-xl border border-[#102A32]/[0.07] bg-[#F5FBFA] px-3 py-2 text-sm font-medium text-[#102A32] transition-all duration-200 hover:border-[#5DEBE2]/60 hover:bg-[#5DEBE2]/10"
                      >
                        <span className="text-base text-[#102A32]/70">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
