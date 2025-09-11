import React, { useState, useEffect } from "react";
import { Search, Bell, Settings, User, Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AddSoul from "./addSoulPage";
import SoulTable from "./soulsTable";
import Reports from "./volunteerReport";
import Profile from "./profile";

const WelcomeDashboard = () => {
  const [activeSection, setActiveSection] = useState("welcome");
  const [userName] = useState("John");
  const [currentDate] = useState(
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  // FIX: Initialize isMobile state properly
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Close sidebar when switching to mobile if it's open
      if (mobile && sidebarOpen) {
        setSidebarOpen(true);
        document.body.style.overflow = "auto";
      }
    };

    // Call immediately to set initial state
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
    if (isMobile) {
      document.body.style.overflow = sidebarOpen ? "auto" : "hidden"; // Corrected overflow logic
    }
  };

  const handleMenuClick = (section) => {
    setActiveSection(section);
    if (isMobile) {
      setSidebarOpen(true);
      document.body.style.overflow = "auto";
    }
  };

  const scriptures = [
    {
      verse: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit",
      reference: "Matthew 28:19",
    },
  ];

  const todayScripture = scriptures[Math.floor(Math.random() * scriptures.length)];

  return (
    <div className="min-h-screen bg-[#0E0E17] text-white flex flex-col">
      {/* Header Component - Always visible */}
      <Header 
        isOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar} 
        userName={userName}
        isMobile={isMobile}
      />

      {/* Sidebar Component */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={handleMenuClick}
        isOpen={sidebarOpen}
        isMobile={isMobile}
        toggleSidebar={toggleSidebar}
      />

      {/* Mobile Overlay */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 pt-16 ${
          sidebarOpen && !isMobile ? "md:ml-64" : "md:ml-0"
        }`}
      >
        {/* Welcome Section */}
        {activeSection === "welcome" && (
          <div className="w-full h-full flex justify-center items-start px-4">
            <div className="max-w-4xl w-full space-y-6">
              {/* Welcome Card */}
              <div className="rounded-xl p-6 border border-white/10 bg-[#1A1A2C]/60 backdrop-blur-md shadow-lg hover:shadow-[#D946EF]/10 transition-shadow">
                <h1 className="text-2xl font-semibold">
                  Welcome back,{" "}
                  <span className="font-bold text-[#D946EF]">{userName}</span>!
                </h1>
                <p className="text-sm text-[#9999B5] mt-2">{currentDate}</p>

                {/* Quote */}
                <div className="mt-6 border-l-4 border-[#D946EF] pl-4">
                  <p className="text-[#E5E7EB] italic">
                    "If sinners be damned, at least let them leap to Hell over
                    our dead bodies. If they perish, let them perish with our
                    arms wrapped about their knees."
                  </p>
                  <p className="text-sm text-[#9999B5] mt-2 text-right">
                    — Charles Spurgeon
                  </p>
                </div>
              </div>

              {/* Scripture for Today */}
              <div className="rounded-xl p-6 border border-white/10 bg-[#1A1A2C]/60 backdrop-blur-md shadow-lg hover:shadow-[#D946EF]/10 transition-shadow">
                <h2 className="text-xl font-semibold mb-2">Scripture for Today</h2>
                <p className="italic text-[#E5E7EB]">"{todayScripture.verse}"</p>
                <p className="text-sm text-[#9999B5] mt-2 text-right">
                  — {todayScripture.reference}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Other Sections */}
        {activeSection === "addSoul" && <AddSoul />}
        {activeSection === "viewSouls" && <SoulTable />}
        {activeSection === "reports" && <Reports />}
        {activeSection === "profile" && <Profile />}
      </main>
    </div>
  );
};

export default WelcomeDashboard;