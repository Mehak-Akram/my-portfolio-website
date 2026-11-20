"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/about#skills" },
    { name: "Career Journey", href: "/#career" },
    { name: "Projects", href: "/portfolio" },
    { name: "What I Offer", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/mehak-akram-3859a830b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/Mehak-Akram",
      label: "GitHub",
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/MehakAkram597",
      label: "X / Twitter",
    },
  ];

  const expertise = [
    "Full-Stack Development",
    "Agentic AI",
    "AI Automation",
    "Web Development",
    "AI Agents",
    "Custom Software Development",
  ];

  return (
    <footer className="relative isolate mt-8 overflow-hidden rounded-t-[32px] bg-[#102A32] px-6 pb-7 pt-12 text-[#D1E5E3] sm:rounded-t-[44px] sm:px-8 sm:pt-14 lg:px-10">
      <div className="pointer-events-none absolute -left-32 -top-40 -z-10 h-96 w-96 rounded-full bg-[#5DEBE2]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-[#5DEBE2]/[0.06] blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-x-8 gap-y-9 pb-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-7"
        >
          {/* Personal branding */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-2 text-white">
              <span className="text-base font-semibold tracking-tight">
                MEHAK <span className="text-[#5DEBE2]">AKRAM</span>
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#5DEBE2] transition-transform duration-300 group-hover:scale-150" />
            </Link>

            <h2 className="mt-5 max-w-md font-serif text-[1.7rem] font-normal italic leading-[1.08] tracking-tight text-white sm:text-[2rem]">
              Building intelligent products for a more capable web.
            </h2>
            <p className="mt-4 max-w-md text-[13px] leading-[1.7] text-[#D1E5E3]/70 sm:text-sm">
              I’m Mehak Akram, a Full-Stack Web Developer and Agentic AI Engineer creating thoughtful digital experiences and autonomous systems.
            </p>

            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#102A32] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5DEBE2] hover:shadow-[0_12px_30px_rgba(93,235,226,0.18)]"
            >
              Get In Touch
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <div className="mt-7">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.15em] text-[#D1E5E3]/55">
                Connect & Share
              </p>
              <div className="flex gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-[#D1E5E3] transition-all duration-300 hover:-translate-y-1 hover:border-[#5DEBE2]/60 hover:bg-[#5DEBE2] hover:text-[#102A32]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-[#D1E5E3]/65">
              Menu
            </h3>
            <ul className="space-y-3">
              {menuLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.035 }}
                >
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[13px] text-[#D1E5E3]/75 transition-colors duration-200 hover:text-[#5DEBE2]"
                  >
                    <span className="h-px w-0 bg-[#5DEBE2] transition-all duration-300 group-hover:w-3" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-[#D1E5E3]/65">
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] text-[#D1E5E3]/75 transition-colors duration-200 hover:text-[#5DEBE2]"
                  >
                    {social.label}
                    <FaArrowRight className="text-[10px] opacity-50 transition-all duration-200 group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[13px] text-[#D1E5E3]/75 transition-colors duration-200 hover:text-[#5DEBE2]"
                >
                  Email & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="lg:col-span-4">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-[#D1E5E3]/65">
              Expertise
            </h3>
            <ul className="space-y-3">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[13px] leading-[1.55] text-[#D1E5E3]/75"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5DEBE2]/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="relative border-t border-white/10 py-5">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-[#D1E5E3]/60 sm:flex-row sm:text-left">
            <p>© {currentYear} Mehak Akram. All rights reserved.</p>
            <p>
              Designed & Built by <span className="text-[#D1E5E3]">Mehak Akram</span>
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none w-full select-none overflow-visible text-center text-[clamp(2.5rem,12.2vw,10rem)] font-black leading-[0.82] tracking-[-0.045em] text-white/[0.035]"
        >
          MEHAK AKRAM
        </div>
      </div>
    </footer>
  );
};

export default Footer;
