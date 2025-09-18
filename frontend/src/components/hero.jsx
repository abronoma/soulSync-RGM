import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";

const Hero = ({ onAuthOpen }) => {
  return (
    <section className="relative z-10 min-h-screen flex items-center bg-gradient-to-b from-[#1f1f2e] to-[#070711] overflow-hidden">
      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          Transform{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#9333EA]">
            Souls
          </span>
          <div className="mt-1 sm:mt-2">With Divine Precision</div>
        </motion.h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto text-[#CCCCEE]">
          From first prayer to eternal salvation, manage your spiritual journey
          with purpose-built tools.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button
            onClick={onAuthOpen}
            className="bg-gradient-to-r from-[#D946EF] to-[#9333EA] px-6 py-3 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            Start Your Journey <ChevronRight className="w-4 h-4" />
          </button>
          <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg text-white flex items-center gap-2">
            <Play className="w-4 h-4" />
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};




export default HeroSection;
