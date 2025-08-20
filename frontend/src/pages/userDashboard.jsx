import React, { useState, useEffect } from "react";
import {
  Search,
  Bell,
  Settings,
  User,
  Menu,
  X,
  Plus,
  Target,
  Calendar,
  BookOpen
} from "lucide-react";
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState();
  const [isMobile, setIsMobile] = useState(false);

  

  const scriptures = [
    {
      verse: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit",
      reference: "Matthew 28:19",
    },
    {
      verse: "The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field.",
      reference: "Matthew 9:37-38",
    },
    {
      verse: "How beautiful are the feet of those who bring good news!",
      reference: "Romans 10:15",
    },
    {
      verse: "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes",
      reference: "Romans 1:16",
    },
  ];

  const todayScripture = scriptures[Math.floor(Math.random() * scriptures.length)];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      document.body.style.overflow = sidebarCollapsed ? 'auto' : 'hidden';
    }
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-md transition-all ${
              sidebarCollapsed 
                ? "text-gray-400 hover:bg-gray-700 hover:text-white" 
                : "bg-pink-600 text-white"
            }`}
          >
            {sidebarCollapsed ? <Menu size={24} /> : <X size={24} />}
          </button>
          <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            SoulTrack
          </div>
          <div className="hidden md:flex items-center gap-2 bg-gray-700 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search souls, analytics..."
              className="bg-transparent text-white placeholder-gray-400 outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-pink-400" />
          <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-pink-400" />
          <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:bg-pink-700">
            <User className="w-4 h-4" />
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Component */}
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          collapsed={sidebarCollapsed}
          isMobile={isMobile}
          toggleSidebar={toggleSidebar}
        />

        {/* Mobile Overlay */}
        {!sidebarCollapsed && isMobile && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Main Content */}
        <main className={`
          flex-1 transition-all duration-300
          ${sidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}
        `}>
          {/* Welcome Section */}
          {activeSection === "welcome" && (
            <div className="w-full h-full flex justify-center items-start pt-12">
              <div className="max-w-4xl w-full space-y-6">
                {/* Welcome Card */}
                <div className="bg-gray-800 rounded-xl shadow p-6">
                  <h1 className="text-2xl text-white font-semibold">
                    Welcome back, <span className="text-pink-400 font-bold">{userName}</span>!
                  </h1>
                  <p className="text-sm text-gray-400 mt-2">{currentDate}</p>

               

                  {/* Quote */}
                  <div className="mt-6 border-l-4 border-pink-500 pl-4">
                    <p className="text-gray-300 italic">
                      "If sinners be damned, at least let them leap to Hell over our dead bodies. If they perish, let them perish with our arms wrapped about their knees."
                    </p>
                    <p className="text-sm text-gray-500 mt-2 text-right">— Charles Spurgeon</p>
                  </div>
                </div>

                {/* Scripture for Today Card */}
                <div className="bg-gray-800 rounded-xl shadow p-6">
                  <h2 className="text-xl text-white font-medium mb-2">Scripture for Today</h2>
                  <p className="text-gray-300 italic">
                    "{todayScripture.verse}"
                  </p>
                  <p className="text-sm text-gray-500 mt-2 text-right">— {todayScripture.reference}</p>
                </div>
              </div>
            </div>
          )}

          {/* Dynamic Sections */}
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