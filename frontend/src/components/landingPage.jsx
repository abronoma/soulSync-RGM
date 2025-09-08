import React, { useState } from "react";
import { ChevronRight, Users, Target, Heart, Menu, X, Star, ArrowRight, BookOpen, BarChart3, MessageCircle, Shield } from "lucide-react";
import AuthModal from "../pages/Auth";

export const LandingPage = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Navigation - Transparent with blur */}
      <nav className="flex justify-between items-center px-6 py-5 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#D946EF] to-[#9333EA] flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">SoulSync</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-[#9999B5] hover:text-white transition-colors font-medium flex items-center">
            Features
          </a>
          <a href="#stats" className="text-[#9999B5] hover:text-white transition-colors font-medium flex items-center">
            Impact
          </a>
          <a href="#testimonials" className="text-[#9999B5] hover:text-white transition-colors font-medium flex items-center">
            Testimonials
          </a>
          <a href="#contact" className="text-[#9999B5] hover:text-white transition-colors font-medium flex items-center">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-full h-full bg-black/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col p-8 space-y-8 mt-20">
          <a 
            href="#features" 
            className="text-[#9999B5] hover:text-white transition-colors font-medium py-3 text-xl flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <ArrowRight className="mr-3 w-5 h-5" /> Features
          </a>
          <a 
            href="#stats" 
            className="text-[#9999B5] hover:text-white transition-colors font-medium py-3 text-xl flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <ArrowRight className="mr-3 w-5 h-5" /> Impact
          </a>
          <a 
            href="#testimonials" 
            className="text-[#9999B5] hover:text-white transition-colors font-medium py-3 text-xl flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <ArrowRight className="mr-3 w-5 h-5" /> Testimonials
          </a>
          <a 
            href="#contact" 
            className="text-[#9999B5] hover:text-white transition-colors font-medium py-3 text-xl flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <ArrowRight className="mr-3 w-5 h-5" /> Contact
          </a>
          <button
            onClick={() => {
              setAuthOpen(true);
              setMobileMenuOpen(false);
            }}
            className="bg-gradient-to-r from-[#D946EF] to-[#9333EA] px-6 py-4 rounded-lg text-lg font-semibold text-white flex items-center justify-center gap-2 mt-8"
          >
            Start Your Journey
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Hero Section with Background */}
      <section
        className="relative px-6 pt-32 pb-20 text-center min-h-screen flex items-center justify-center bg-cover bg-fixed bg-center"
        style={{ 
          backgroundImage: "url('rgm.png')", 
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-0"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: Math.random() * 20 + 5,
                height: Math.random() * 20 + 5,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: i % 3 === 0 ? '#D946EF' : i % 3 === 1 ? '#F59E0B' : '#60A5FA',
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${Math.random() * 10 + 15}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm text-white">Trusted by 1,289+ soul winners worldwide</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#9333EA]">Souls</span>
            <div className="mt-2">With Divine Precision</div>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-[#CCCCEE]">
            From first prayer to eternal salvation, manage your spiritual journey with purpose-built tools designed for modern evangelism.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setAuthOpen(true)}
              className="bg-gradient-to-r from-[#D946EF] to-[#9333EA] hover:from-[#c026d3] hover:to-[#7e22ce] px-8 py-4 rounded-lg text-lg font-semibold text-white flex items-center gap-2 group shadow-lg shadow-[#D946EF]/40 hover:shadow-[#D946EF]/60 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Journey
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg text-lg font-semibold text-white border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

        
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6 bg-[#0E0E17]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-[#1A1A2C] rounded-full px-4 py-2 mb-4 border border-[#2A2A3F]">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm text-[#9999B5]">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Everything You Need For Spiritual Growth</h2>
          <p className="text-lg text-[#9999B5] max-w-2xl mx-auto">
            Comprehensive tools designed for modern evangelism and spiritual mentorship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#1A1A2C] to-[#0E0E17] border border-[#2A2A3F] shadow-2xl hover:shadow-[0_0_30px_#D946EF20] transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#D946EF] to-[#9333EA] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Prayer Management</h3>
            <p className="text-[#9999B5] mb-6">
              Organize prayer lists, set reminders, and track progress for every soul you're interceding for.
            </p>
            <ul className="space-y-2 text-[#CCCCEE]">
              <li className="flex items-center"><div className="w-2 h-2 bg-[#D946EF] rounded-full mr-3"></div> Prayer tracking</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-[#D946EF] rounded-full mr-3"></div> Reminder system</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-[#D946EF] rounded-full mr-3"></div> Progress analytics</li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#1A1A2C] to-[#0E0E17] border border-[#2A2A3F] shadow-2xl hover:shadow-[0_0_30px_#F59E0B20] transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Contact Intelligence</h3>
            <p className="text-[#9999B5] mb-6">
              Advanced CRM features to document conversations, schedule follow-ups, and track spiritual milestones.
            </p>
            <ul className="space-y-2 text-[#CCCCEE]">
              <li className="flex items-center"><div className="w-2 h-2 bg-[#F59E0B] rounded-full mr-3"></div> Conversation logs</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-[#F59E0B] rounded-full mr-3"></div> Follow-up scheduling</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-[#F59E0B] rounded-full mr-3"></div> Milestone tracking</li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#1A1A2C] to-[#0E0E17] border border-[#2A2A3F] shadow-2xl hover:shadow-[0_0_30px_#EF444420] transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#EF4444] to-[#DC2626] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Victory Analytics</h3>
            <p className="text-[#9999B5] mb-6">
              Track salvations, generate insightful reports, and celebrate ministry growth with data.
            </p>
            <ul className="space-y-2 text-[#CCCCEE]">
              <li className="flex items-center"><div className="w-2 h-2 bg-[#EF4444] rounded-full mr-3"></div> Salvation tracking</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-[#EF4444] rounded-full mr-3"></div> Growth reports</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-[#EF4444] rounded-full mr-3"></div> Ministry analytics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-6 relative z-10 bg-gradient-to-b from-[#0E0E17] to-[#070711]">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Global Impact Statistics</h2>
          <p className="text-xl text-[#9999B5] mb-16 max-w-2xl mx-auto">
            Join thousands of soul winners making a difference worldwide
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl p-8 bg-gradient-to-b from-[#1A1A2C] to-[#0E0E17] border border-[#D946EF] shadow-lg hover:scale-105 transition-transform group">
              <div className="text-5xl font-bold mb-3 text-[#D946EF]">12,847</div>
              <div className="text-lg text-[#9999B5] mb-2">Souls Tracked</div>
              <div className="text-sm text-[#666687]">Across 45 countries</div>
            </div>

            <div className="rounded-2xl p-8 bg-gradient-to-b from-[#1A1A2C] to-[#0E0E17] border border-yellow-400 shadow-lg hover:scale-105 transition-transform group">
              <div className="text-5xl font-bold mb-3 text-yellow-400">4,328</div>
              <div className="text-lg text-[#9999B5] mb-2">Salvations Recorded</div>
              <div className="text-sm text-[#666687]">Lives transformed forever</div>
            </div>

            <div className="rounded-2xl p-8 bg-gradient-to-b from-[#1A1A2C] to-[#0E0E17] border border-[#60A5FA] shadow-lg hover:scale-105 transition-transform group">
              <div className="text-5xl font-bold mb-3 text-[#60A5FA]">1,289</div>
              <div className="text-lg text-[#9999B5] mb-2">Active Soul Winners</div>
              <div className="text-sm text-[#666687]">Making daily impact</div>
            </div>
          </div>
        </div>
      </section>

     
      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1A1A2C] to-[#0E0E17] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Ministry?</h2>
          <p className="text-xl text-[#9999B5] mb-10 max-w-2xl mx-auto">
            Join thousands of soul winners already using SoulSync to make an eternal impact.
          </p>
          <button
            onClick={() => setAuthOpen(true)}
            className="bg-gradient-to-r from-[#D946EF] to-[#9333EA] hover:from-[#c026d3] hover:to-[#7e22ce] px-8 py-4 rounded-lg text-lg font-semibold text-white flex items-center gap-2 group mx-auto shadow-lg shadow-[#D946EF]/40 hover:shadow-[#D946EF]/60 transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Journey Today
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
<footer id="contact" className="px-6 py-12 relative border-t border-white/10 bg-[#0A0A12]">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#D946EF] to-[#9333EA] flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">SoulSync</span>
        </div>
        <p className="text-[#9999B5] mb-4">
          Transforming lives, one soul at a time through divinely inspired technology.
        </p>
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.644.069-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.948 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
        <ul className="space-y-2">
          <li><a href="#features" className="text-[#9999B5] hover:text-white transition-colors">Features</a></li>
          <li><a href="#pricing" className="text-[#9999B5] hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#testimonials" className="text-[#9999B5] hover:text-white transition-colors">Testimonials</a></li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#about" className="text-[#9999B5] hover:text-white transition-colors">About</a></li>
          <li><a href="#blog" className="text-[#9999B5] hover:text-white transition-colors">Blog</a></li>
          <li><a href="#careers" className="text-[#9999B5] hover:text-white transition-colors">Careers</a></li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
        <ul className="space-y-2">
          <li><a href="#help" className="text-[#9999B5] hover:text-white transition-colors">Help Center</a></li>
          <li><a href="#privacy" className="text-[#9999B5] hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#terms" className="text-[#9999B5] hover:text-white transition-colors">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    
    <div className="pt-8 border-t border-white/10 text-center">
      <p className="text-[#9999B5]">
        &copy; {new Date().getFullYear()} SoulSync Tracker. All rights reserved.
      </p>
    </div>
  </div>
</footer>
      {/* Auth Modal */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
};

// Add this to your global CSS for the floating animation
const Play = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default LandingPage;