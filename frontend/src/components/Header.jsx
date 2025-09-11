import React from "react";
import { Search, Bell, Settings, User, Menu, X } from "lucide-react";

const Header = ({ isOpen, toggleSidebar, userName = "John", isMobile }) => {
  return (
    <header className="px-6 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md w-full">
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle */}
        <button
          onClick={toggleSidebar}
          className={`p-2 rounded-md transition-all border border-white/10 ${
            isOpen
              ? "bg-[#D946EF] text-white hover:bg-[#c026d3] shadow-lg shadow-[#D946EF]/30"
              : "text-[#9999B5] hover:bg-white/10 hover:text-white"
          }`}
          aria-label="Toggle sidebar"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Brand */}
        <div className={`text-xl font-extrabold bg-gradient-to-r from-[#D946EF] to-yellow-400 bg-clip-text text-transparent ${isMobile && isOpen ? 'hidden' : 'block'}`}>
          SoulTrack
        </div>

        {/* Search (Desktop) */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-[#9999B5]" />
          <input
            type="text"
            placeholder="Search souls, analytics..."
            className="bg-transparent text-white placeholder-[#9999B5] outline-none"
          />
        </div>
      </div>

      {/* Right icons */}
      <div className={`flex items-center gap-3 ${isMobile && isOpen ? 'hidden' : 'flex'}`}>
        <Bell className="w-5 h-5 text-[#9999B5] cursor-pointer hover:text-[#D946EF] transition-colors" />
        <Settings className="w-5 h-5 text-[#9999B5] cursor-pointer hover:text-[#D946EF] transition-colors" />
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#D946EF] to-purple-600 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity border border-white/10">
          <User className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;