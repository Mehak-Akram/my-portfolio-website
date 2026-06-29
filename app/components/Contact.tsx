"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/mehak-akram-3859a830b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      color: "hover:text-[#0077b5]",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/Mehak-Akram",
      color: "hover:text-white",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      href: "https://x.com/MehakAkram597",
      color: "hover:text-[#1DA1F2]",
    },
  ];

  const contactInfo = [
    
    {
      label: "Location",
      value: "Available Worldwide",
      icon: <FaPaperPlane />,
    },
  ];

  return (
    <section className="relative overflow-hidden py-32 bg-[#060606] text-slate-200" id="contact">
      {/* Background Glows */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-[#cf5c36]/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-[#cf5c36]/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6"
          >
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cf5c36] to-[#d97652]">
              Connect
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed"
          >
            Have a project in mind or just want to chat? I'd love to hear from
            you. Let's build something amazing together.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 md:p-12 transition-all duration-500 hover:shadow-[0_0_60px_rgba(207,92,54,0.15)]">
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#cf5c36]/10 to-transparent transition-opacity duration-500" />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Send Me a Message
                </h3>
                <p className="text-slate-400 mb-10 leading-relaxed">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-300 mb-3"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#cf5c36]/50 focus:bg-white/10 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-300 mb-3"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#cf5c36]/50 focus:bg-white/10 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-300 mb-3"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#cf5c36]/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#cf5c36]/50 focus:bg-white/10 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-8 py-5 rounded-2xl font-semibold transition-all duration-500 flex items-center justify-center gap-3 ${
                      isSuccess
                        ? "bg-green-600 text-white"
                        : "bg-gradient-to-r from-[#cf5c36] to-[#d97652] text-white hover:scale-105 hover:shadow-[0_20px_50px_rgba(207,92,54,0.4)]"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <FaCheckCircle />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-7 transition-all duration-500 hover:shadow-[0_0_60px_rgba(207,92,54,0.15)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#cf5c36]/10 to-transparent transition-opacity duration-500" />

                <div className="relative z-10 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#cf5c36]/20 to-[#cf5c36]/5 border border-[#cf5c36]/20 flex items-center justify-center text-2xl text-[#cf5c36] flex-shrink-0">
                    {info.icon}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#cf5c36] font-bold mb-2">
                      {info.label}
                    </p>
                    <p className="text-slate-200 font-medium text-lg">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-7"
            >
              <h4 className="text-xl font-bold text-white mb-6">
                Connect With Me
              </h4>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-[#cf5c36]/20 transition-all duration-300 text-xl ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-lg font-bold text-white">
                  Available for Work
                </p>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                I'm currently accepting new projects and collaborations. Let's
                create something extraordinary.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
