import React from "react";
import { Plus, BarChart3, Eye, User } from "lucide-react";
import Header from "./Header";

const Sidebar = ({ 
  activeSection, 
  setActiveSection, 
  isOpen, 
  isMobile, 
  toggleSidebar
}) => {
  const menuItems = [
    { key: "welcome", label: "Dashboard", icon: <User size={20} /> },
    { key: "addSoul", label: "Add Soul", icon: <Plus size={20} /> },
    { key: "viewSouls", label: "View Souls", icon: <Eye size={20} /> },
    { key: "reports", label: "Reports", icon: <BarChart3 size={20} /> },
    { key: "profile", label: "Profile", icon: <User size={20} /> },
  ];

  return (
    <>
      {/* Sidebar Navigation - Only this part should be hidden/shown */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-gradient-to-b from-[#0F0F23] to-[#1A1A2E] border-r border-[#2D1B46] z-40
          flex flex-col transition-all duration-300 ease-in-out shadow-2xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          w-64
        `}
      >
        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-6 mt-16">
          <nav className="space-y-2 px-4">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setActiveSection(item.key);
                  if (isMobile) toggleSidebar();
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl
                  transition-all duration-200 text-sm font-medium
                  ${
                    activeSection === item.key
                      ? "bg-gradient-to-r from-[#D946EF] to-[#9333EA] text-white shadow-lg"
                      : "text-[#9999B5] hover:bg-[#2D1B46] hover:text-white"
                  }
                `}
              >
                <span className="flex items-center justify-center w-5">
                  {item.icon}
                </span>
                <span className="flex-1 text-left">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;