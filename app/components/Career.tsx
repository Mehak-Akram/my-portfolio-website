"use client";
import { motion } from 'framer-motion';
import { FaRobot, FaCode } from 'react-icons/fa';

export default function Career() {
  const stats = [
    {
      icon: <FaRobot />,
      title: "Agentic AI",
      desc: "GIAIC Q4 Specialist",
      tag: "Specialized",
    },
    {
      icon: <FaCode />,
      title: "Full Stack",
      desc: "Next.js & FastAPI",
      tag: "Development",
    },
  ];

  return (
    <div className="relative mx-auto max-w-4xl py-2">
      <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-[#5DEBE2] via-white/30 to-[#5DEBE2]/20 sm:left-6" />
      {stats.map((stat, index) => (
        <div key={index} className="relative pl-14 pb-7 last:pb-0 sm:pl-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.12 }}
            className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border-[5px] border-[#102A32] bg-[#5DEBE2] text-sm text-[#102A32] shadow-[0_0_0_4px_rgba(93,235,226,0.15)] sm:left-1 sm:h-11 sm:w-11"
          >
            {stat.icon}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
            whileHover={{ y: -3 }}
            className="cursor-hover group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-white shadow-[0_14px_36px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-[#5DEBE2]/50 hover:bg-white/[0.09] hover:shadow-[0_20px_44px_rgba(0,0,0,0.18)] sm:p-7"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-[#5DEBE2]/70 transition-all duration-300 group-hover:w-1.5" />
            <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#5DEBE2] sm:text-2xl">
                  {stat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                  {stat.desc}
                </p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full border border-[#5DEBE2]/30 bg-[#5DEBE2]/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#5DEBE2]">
                {stat.tag}
              </span>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
