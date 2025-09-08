import React, { useState, useEffect } from "react";
import { Search, Bell, Settings, User, Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
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

  const [isMobile, setIsMobile] = useState(false);
const [sidebarCollapsed, setSidebarCollapsed] = useState(true); 

useEffect(() => {
  const handleResize = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (!mobile) {
      // Keep whatever state user already has, don’t force open
      document.body.style.overflow = "auto";
    }
  };
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const scriptures = [
    {
      verse:
        "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit",
      reference: "Matthew 28:19",
    },
    {
      verse:
        "The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field.",
      reference: "Matthew 9:37-38",
    },
    {
      verse: "How beautiful are the feet of those who bring good news!",
      reference: "Romans 10:15",
    },
    {
      verse:
        "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes",
      reference: "Romans 1:16",
    },
  ];

  const todayScripture =
    scriptures[Math.floor(Math.random() * scriptures.length)];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarCollapsed(false);
        document.body.style.overflow = "auto";
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      document.body.style.overflow = sidebarCollapsed ? "auto" : "hidden";
    }
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-[#0E0E17] text-white flex flex-col">
      {/* Header — glass, on-brand */}
      <header className="px-6 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
        <div className="flex items-center gap-4">
          {/* Sidebar Toggle */}
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-md transition-all border border-white/10 ${
              sidebarCollapsed
                ? "text-[#9999B5] hover:bg-white/10 hover:text-white"
                : "bg-[#D946EF] text-white hover:bg-[#c026d3] shadow-lg shadow-[#D946EF]/30"
            }`}
            aria-label="Toggle sidebar"
          >
            {sidebarCollapsed ? <Menu size={22} /> : <X size={22} />}
          </button>

          {/* Brand */}
          <div className="text-xl font-extrabold bg-gradient-to-r from-[#D946EF] to-yellow-400 bg-clip-text text-transparent">
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
        <div className="flex items-center gap-3">
          <Bell className="w-5 h-5 text-[#9999B5] cursor-pointer hover:text-[#D946EF] transition-colors" />
          <Settings className="w-5 h-5 text-[#9999B5] cursor-pointer hover:text-[#D946EF] transition-colors" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#D946EF] to-purple-600 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity border border-white/10">
            <User className="w-4 h-4" />
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          collapsed={sidebarCollapsed}
          isMobile={isMobile}
          toggleSidebar={toggleSidebar}
        />

        {/* Overlay on mobile */}
        {!sidebarCollapsed && isMobile && (
          <div
            className="fixed inset-0 bg-black/60 z-30 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarCollapsed ? "md:ml-20" : "md:ml-64"
          }`}
        >
          {/* Welcome Section */}
          {activeSection === "welcome" && (
            <div className="w-full h-full flex justify-center items-start pt-12">
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
    </div>
  );
};

export default WelcomeDashboard;
