"use client";

import { motion } from "framer-motion"; // Import motion

export default function Map() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="location"
      className="py-20 bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#e9cb1d] mb-6">
            موقعنا على الخريطة
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            زورونا في مركزنا المتخصص - الرياض - حي الربيع - طريق الثمامة
          </p>
        </motion.div>
        <motion.div
          className="relative w-full h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#e9cb1d]"
          variants={itemVariants}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.9639625481304!2d46.6513125!3d24.7966875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3ea218827ad%3A0xfabb985837f538f0!2sXtreme%20nano!5e0!3m2!1sen!2seg!4v1754929684697!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="XTREME NANO Location - Riyadh Al Rabee Thumama Road"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
}
