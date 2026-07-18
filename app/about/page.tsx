"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";

const About = () => {
  const infoItems = [
    { label: "Status", value: "GIAIC Q5 Student" },
    { label: "Experience", value: "1+ Year in Web Dev" },
  ];

  const skills = [
    {
      category: "AI & ML",
      items: [
        "Agentic AI",
        "LangChain",
        "Prompt Engineering",
        "Machine Learning",
      ],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Python", "FastAPI", "Node.js", "REST APIs"],
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060606] text-slate-200">
      {/* Background Glow Effects */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-[#cf5c36]/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-[#cf5c36]/10 blur-[150px] rounded-full" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-[1.1] text-white"
          >
            About {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cf5c36] to-[#d97652]">
              Me
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-xl text-slate-400 leading-relaxed max-w-2xl"
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
            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-7 shadow-[0_0_80px_rgba(207,92,54,0.08)] transition-all duration-500 hover:-translate-y-3 hover:rotate-1">
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#cf5c36]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Floating Effect */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="absolute top-5 right-5 w-20 h-20 rounded-full bg-[#cf5c36]/20 blur-2xl"
                />
              </div>

              <h2 className="text-3xl font-bold text-white mb-2">
                Mehak Akram
              </h2>

              <p className="text-[#cf5c36] font-medium mb-8 text-lg">
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
                    className="flex-1 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-[#cf5c36]/20 transition-all duration-300"
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                ))}
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#cf5c36] to-[#d97652] text-white font-semibold flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(207,92,54,0.4)] hover:shadow-[0_15px_50px_rgba(207,92,54,0.55)] transition-all duration-300"
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
              className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 shadow-[0_0_80px_rgba(255,255,255,0.03)]"
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
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-br from-[#cf5c36]/10 to-transparent transition-opacity duration-300" />

                    <p className="text-xs uppercase tracking-widest text-[#cf5c36] font-bold mb-3 relative z-10">
                      {item.label}
                    </p>

                    <p className="text-slate-200 font-medium text-lg relative z-10">
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
              className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 shadow-[0_0_80px_rgba(255,255,255,0.03)]"
            >
              <h3 className="text-2xl font-bold text-white mb-6">About</h3>

              <p className="text-slate-400 leading-relaxed text-lg mb-5">
                Currently specializing in{" "}
                <span className="text-white font-semibold">
                  Agentic AI
                </span>{" "}
                at GIAIC, I focus on building autonomous systems that can
                reason, plan, and execute complex tasks.
              </p>

              <p className="text-slate-400 leading-relaxed text-lg">
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
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <h3 className="text-4xl font-bold text-white mb-12">
            Skills & Technologies
          </h3>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -10,
                  rotateX: 6,
                  rotateY: 6,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-7 transition-all duration-500 hover:shadow-[0_0_60px_rgba(207,92,54,0.15)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#cf5c36]/10 to-transparent transition-opacity duration-500" />

                <h4 className="relative z-10 text-xl font-bold text-white mb-6">
                  {skill.category}
                </h4>

                <div className="relative z-10 flex flex-wrap gap-3">
                  {skill.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 hover:bg-[#cf5c36]/20 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
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