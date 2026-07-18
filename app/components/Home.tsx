"use client";

import { motion } from "framer-motion";
import Career from "../components/Career";

export default function Home() {
  const techStack = [
    "AI & ML",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060606] text-slate-200 selection:bg-[#cf5c36] selection:text-white">
      {/* SAME BACKGROUND AS ABOUT */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-[#cf5c36]/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-[#cf5c36]/10 blur-[150px] rounded-full" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28">
        {/* TOP SMALL INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-between gap-6 mb-16"
        >
         

         
        </motion.div>

        {/* HUGE CENTER HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          
        </motion.div>

        {/* NEW SPLIT LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-24">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <p className="text-2xl text-slate-400 leading-relaxed mb-6 max-w-3xl">
              Hi, I'm{" "}
              <span className="text-white font-semibold">
                 Mehak Akram  
              </span>{" "}
               A Full-Stack Web Developer and {" "} <br />Co-Founder of <span className="text-blue-600 font-bold" >Nexe-Agent </span>, passionate about building intelligent, scalable, and impactful digital solutions.
            </p>

            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
              From autonomous AI agents to modern web applications,
              I transform complex challenges into elegant solutions.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">
              <a
                href="/portfolio"
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-[#cf5c36] to-[#d97652] text-white font-semibold transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(207,92,54,0.4)] flex items-center gap-3"
              >
                Explore My Work
              </a>

              <a
                href="/contact"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* RIGHT FLOATING CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative h-[420px]"
          >
            {/* BIG CARD */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute right-0 top-0 w-[320px] rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8"
            >
              <p className="text-[#cf5c36] text-sm uppercase tracking-widest mb-4">
                Specialization
              </p>

              <h3 className="text-3xl font-bold text-white leading-tight">
                Autonomous AI Agents
              </h3>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="absolute left-0 top-32 w-[260px] rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6"
            >
              <h4 className="text-white text-xl font-bold mb-2">
                Full Stack Developer
              </h4>

              <p className="text-slate-400 text-sm">
                Building scalable modern web apps.
              </p>
            </motion.div>

            {/* CARD 3 */}
            
          </motion.div>
        </div>

        {/* TECH STRIP */}
        <div className="flex flex-wrap justify-center gap-4 mb-28">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-sm text-slate-300 hover:bg-white/10 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CAREER */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-sm uppercase tracking-[0.25em] text-slate-500 font-semibold">
              Career Journey
            </h2>

            <div className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
          </div>

          <div className="rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 md:p-12">
            <Career />
          </div>
        </section>
      </section>
    </main>
  );
}