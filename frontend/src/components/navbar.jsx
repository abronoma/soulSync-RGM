// src/components/Navbar.jsx
import React, { useState } from "react";
import { Heart, Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import AuthModal from "../pages/Auth"; // Adjust path if needed
import { Link } from "react-router-dom"; // Optional if you have routing

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-4 sm:px-6 py-5 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-[#D946EF] to-[#9333EA] flex items-center justify-center">
            <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-lg sm:text-xl font-bold text-white">SoulSync</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <a href="#" className="text-[#9999B5] hover:text-white font-medium">Home</a>
          <button
            onClick={() => setAuthOpen(true)}
            className="text-[#9999B5] hover:text-white font-medium"
          >
            Dashboard
          </button>
          <a href="#stats" className="text-[#9999B5] hover:text-white font-medium">Statistics</a>
          <a href="#contact" className="text-[#9999B5] hover:text-white font-medium">Contact</a>

          {/* Dashboard link triggers auth modal */}
          
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-full h-full bg-black/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col p-6 sm:p-8 space-y-6 sm:space-y-8 mt-16 sm:mt-20">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-[#9999B5] hover:text-white text-lg flex items-center">
            <ArrowRight className="mr-3 w-4 h-4" /> Features
          </a>
          <a href="#stats" onClick={() => setMobileMenuOpen(false)} className="text-[#9999B5] hover:text-white text-lg flex items-center">
            <ArrowRight className="mr-3 w-4 h-4" /> Impact
          </a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-[#9999B5] hover:text-white text-lg flex items-center">
            <ArrowRight className="mr-3 w-4 h-4" /> Testimonials
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#9999B5] hover:text-white text-lg flex items-center">
            <ArrowRight className="mr-3 w-4 h-4" /> Contact
          </a>
          <button
            onClick={() => { setAuthOpen(true); setMobileMenuOpen(false); }}
            className="bg-gradient-to-r from-[#D946EF] to-[#9333EA] px-5 py-3 rounded-lg text-white flex items-center justify-center gap-2"
          >
            Start Your Journey
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
};

export default Navbar;
