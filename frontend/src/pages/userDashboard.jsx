// src/pages/WelcomeDashboard.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
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

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeForm, setActiveForm] = useState(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const handleMenuClick = (section) => {
    setActiveSection(section);
    if (isMobile) setSidebarOpen(false);
  };

  const openPanel = (form) => {
    setActiveForm(form);
    setPanelOpen(true);
  };

  const closePanel = () => {
    setActiveForm(null);
    setPanelOpen(false);
  };

  const scriptures = [
    {
      verse:
        "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit",
      reference: "Matthew 28:19",
    },
  ];

  const todayScripture =
    scriptures[Math.floor(Math.random() * scriptures.length)];

  return (
    <div className="min-h-screen bg-[#0E0E17] text-white flex flex-col">
      {/* Header */}
      <Header
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        userName={userName}
        isMobile={isMobile}
      />

      {/* Sidebar - restored to previous working version */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={handleMenuClick}
        isOpen={sidebarOpen}
        isMobile={isMobile}
        toggleSidebar={toggleSidebar}
      />

      {/* Mobile overlay for sidebar */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-50 pt-16 ${
          sidebarOpen && !isMobile ? "md:ml-64" : "md:ml-0"
        } scrollable`}
      >
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

              {/* Scripture Card */}
              <div className="rounded-xl p-6 border border-white/10 bg-[#1A1A2C]/60 backdrop-blur-md shadow-lg hover:shadow-[#D946EF]/10 transition-shadow">
                <h2 className="text-xl font-semibold mb-2">
                  Scripture for Today
                </h2>
                <p className="italic text-[#E5E7EB]">
                  "{todayScripture.verse}"
                </p>
                <p className="text-sm text-[#9999B5] mt-2 text-right">
                  — {todayScripture.reference}
                </p>
              </div>

              {/* Form Buttons */}
              <div className="flex flex-col md:flex-row gap-2 mt-6">
                <button
                  onClick={() => openPanel("quarterly")}
                  className="w-48 py-2 px-4 bg-[#D946EF] hover:bg-[#bb38d8] rounded font-medium transition-colors text-white"
                >
                  Quarterly Retreat
                </button>
                <button
                  onClick={() => openPanel("weekly")}
                  className="w-48 py-2 px-4 bg-[#f7e928b9] hover:bg-[#dfee0f] rounded font-medium transition-colors text-white"
                >
                  Weekly Report
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other Sections */}
        {activeSection === "addSoul" && <AddSoul />}
        {activeSection === "viewSouls" && <SoulTable />}
        {activeSection === "reports" && <Reports />}
        {activeSection === "profile" && <Profile />}

        {/* Slide-over Panel */}
        {panelOpen && (
          <>
            {/* Panel overlay */}
            <div
              className="fixed inset-0 bg-black/50 z-45"
              onClick={closePanel}
            />
            <div
              className={`fixed top-0 right-0 h-full bg-[#1A1A2C]/95 backdrop-blur-lg shadow-xl transform transition-transform duration-75 ease-out
    ${isMobile ? "w-full" : "w-[550px]"} z-50 translate-x-0`}
            >
              <div className="p-4 flex justify-between items-center border-b border-white/20">
                <h2 className="text-lg font-semibold text-white">
                  {activeForm === "quarterly"
                    ? "Quarterly Retreat Form"
                    : "Weekly Report Form"}
                </h2>
                <button
                  onClick={closePanel}
                  className="text-white hover:text-[#D946EF]"
                >
                  X
                </button>
              </div>
              <div className="p-4 h-full scrollable relative">
  {!iframeLoaded && (
    <div className="absolute inset-0 flex items-center justify-center bg-[#1A1A2C]">
      <p className="text-white">Loading form...</p>
    </div>
  )}
  <iframe
    src={activeForm === "quarterly" ? "https://forms.gle/tStDBDNQs7MSojSp8" : "https://forms.gle/axrjVfbc6RDEVhUQA"}
    width="100%"
    height="1500"
    className="rounded-lg"
    onLoad={() => setIframeLoaded(true)}
    title="Form"
  />
</div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default WelcomeDashboard;
