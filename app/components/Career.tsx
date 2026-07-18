"use client";
import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaServer } from 'react-icons/fa';

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="cursor-hover group glass rounded-2xl p-8 transition-all duration-300 hover:bg-white/5 hover:scale-[1.02]"
        >
          {/* Icon & Tag */}
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#cf5c36]/20 to-[#cf5c36]/5 border border-[#cf5c36]/20 flex items-center justify-center text-2xl text-[#cf5c36] group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <span className="text-xs font-medium text-slate-500 group-hover:text-[#cf5c36] transition-colors">
              {stat.tag}
            </span>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#cf5c36] transition-colors">
              {stat.title}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {stat.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}