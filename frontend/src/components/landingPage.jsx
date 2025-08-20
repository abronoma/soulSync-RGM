import React, { useState } from "react";
import { ChevronRight, Users, Target, Heart } from "lucide-react";
import AuthModal from "../pages/Auth";

export const LandingPage = () => {
  const [authOpen, setAuthOpen] = useState(false); 

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-dark">
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-secondary blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gold blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-magenta blur-3xl opacity-20"></div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 relative z-10 border-b border-white border-opacity-10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-fuchsia-600">SoulSync</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-secondary hover:text-white transition-colors font-medium">Features</a>
          <a href="#about" className="text-secondary hover:text-white transition-colors font-medium">About</a>
          <a href="#contact" className="text-secondary hover:text-white transition-colors font-medium">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 bg-darker text-center">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Track Every <span className="text-fuchsia-500">Soul</span>
            <div className="mt-2">You're Called to Reach</div>
          </h1>
          <p className="text-md md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-secondary">
            From prayer to conversation to salvation, manage your soul-winning
            journey with purpose and precision through our professional
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setAuthOpen(true)} // 👈 Trigger modal
              className="btn-primary shadow-magenta group text-lg font-semibold flex items-center gap-2"
            >
              Start Your Journey
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-secondary px-8 py-4 rounded-lg text-lg font-semibold border border-gray hover:border-light-gray transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-dark relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Soul-Winning Tools</h2>
            <p className="text-2xl text-secondary max-w-2xl mx-auto">
              Comprehensive features designed for modern evangelism and spiritual mentorship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-professional p-8 hover:translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-secondary">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Prayer Management</h3>
              <p className="text-secondary leading-relaxed">
                Organize prayer lists with detailed tracking, set reminders, and
                monitor spiritual progress for each soul you're interceding for.
              </p>
            </div>

            <div className="card-professional p-8 hover:translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gold">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Contact Intelligence</h3>
              <p className="text-secondary leading-relaxed">
                Advanced CRM features for documenting conversations, scheduling
                follow-ups, and tracking spiritual milestones and breakthroughs.
              </p>
            </div>

            <div className="card-professional p-8 hover:translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-magenta">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Victory Analytics</h3>
              <p className="text-secondary leading-relaxed">
                Celebrate salvations with comprehensive analytics, track your
                spiritual impact, and generate meaningful reports for ministry
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-darker relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Global Impact Statistics</h2>
          <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
            Join thousands of soul winners making a difference worldwide
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl p-8 bg-card backdrop-blur-sm shadow-card hover:scale-105 transition-transform border border-accent">
              <div className="text-4xl font-bold mb-3 text-accent">12,847</div>
              <div className="text-lg text-secondary mb-2">Souls Tracked</div>
              <div className="text-sm text-muted">Across 45 countries</div>
            </div>

            <div className="rounded-xl p-8 bg-card backdrop-blur-sm shadow-card hover:scale-105 transition-transform border border-gold">
              <div className="text-4xl font-bold mb-3 text-gold">4,328</div>
              <div className="text-lg text-secondary mb-2">Salvations Recorded</div>
              <div className="text-sm text-muted">Lives transformed forever</div>
            </div>

            <div className="rounded-xl p-8 bg-card backdrop-blur-sm shadow-card hover:scale-105 transition-transform border border-magenta">
              <div className="text-4xl font-bold mb-3 text-magenta">1,289</div>
              <div className="text-lg text-secondary mb-2">Active Soul Winners</div>
              <div className="text-sm text-muted">Making daily impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 relative border-t border-white border-opacity-10 bg-dark">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-fuchsia-500">SoulSync</span>
          </div>
          <p className="text-muted mb-4">
            &copy; {new Date().getFullYear()} SoulSync Tracker. Transforming lives, one soul at a time.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-secondary">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#support" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
};
