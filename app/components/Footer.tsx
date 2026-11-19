"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();

    const interval = setInterval(
      updateTime,
      1000
    );

    return () =>
      clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Mehak-Akram",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      link:
        "https://www.linkedin.com/in/mehak-akram-3859a830b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      link:
        "https://x.com/MehakAkram597",
      label: "Twitter",
    },
  ];

  return (
    <footer className="relative overflow-hidden w-full border-t border-white/10 pt-20 pb-10 px-6 bg-[#102A32] text-[#D1E5E3]">
      {/* SAME PREMIUM BACKGROUND */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-[#5DEBE2]/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-[#5DEBE2]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link
              href="/"
              className="cursor-hover inline-flex items-center gap-3 group"
            >
            

                  <span className="text-white font-bold tracking-tight text-lg">
                MEHAK
                <span className="text-[#5DEBE2]">
                  AKRAM
                </span>
              </span>
            </Link>

            <p className="text-[#D1E5E3] text-sm leading-relaxed max-w-md">
              Building intelligent systems
              and modern web applications.
              Specializing in AI agents and
              full-stack development.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(
                (social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      social.label
                    }
                    className="cursor-hover w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-[#5DEBE2] hover:text-[#102A32] hover:bg-[#5DEBE2] transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="cursor-hover text-[#D1E5E3] text-sm hover:text-[#5DEBE2] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#5DEBE2] group-hover:w-4 transition-all duration-300" />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6">
              Status
            </h4>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#D1E5E3]/75">
                  Local Time
                </span>

                <span className="text-xs text-[#D1E5E3] font-mono tabular-nums">
                  {time}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-[#D1E5E3]/75">
                  Status
                </span>

                <span className="text-xs text-[#5DEBE2] flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5DEBE2] opacity-75"></span>

                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5DEBE2]"></span>
                  </span>

                  Available
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-[#D1E5E3]/75">
                  Location
                </span>

                <span className="text-xs text-[#D1E5E3]">
                  Karachi, PK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#D1E5E3]/75 text-sm text-center">
            © {currentYear} Mehak
            Akram.{" "}
             All rights reserved.
          </p>

          <p className="text-[#D1E5E3]/70 text-xs">
            Designed & Developed with
            passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
