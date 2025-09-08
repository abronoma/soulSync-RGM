import React from "react";
import { Plus, BarChart3, Eye, User } from "lucide-react";

const Sidebar = ({ activeSection, setActiveSection, collapsed, isMobile, toggleSidebar }) => {
  const menuItems = [
    { key: "welcome", label: "Dashboard", icon: <User size={20} /> },
    { key: "addSoul", label: "Add Soul", icon: <Plus size={20} /> },
    { key: "viewSouls", label: "View Souls", icon: <Eye size={20} /> },
    { key: "reports", label: "Reports", icon: <BarChart3 size={20} /> },
    { key: "profile", label: "Profile", icon: <User size={20} /> },
  ];

  return (
    <>
      {/* Mobile Overlay (closes sidebar when clicked) */}
      {isMobile && !collapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-black border-r border-gray-800 z-40
          flex flex-col transition-transform duration-300 ease-in-out
          ${collapsed ? "-translate-x-full" : "translate-x-0"}
          w-64
        `}
      >
        <div className="flex-1 flex flex-col overflow-y-auto pt-20"> 
          {/* push down so it doesn’t overlap navbar */}
          <h3 className="text-xs uppercase tracking-wider text-gray-400 mt-2 px-4 mb-4">
            Navigation
          </h3>

          {/* Menu */}
          <nav className="space-y-1 px-2 flex-1">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setActiveSection(item.key);
                  if (isMobile) toggleSidebar();
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all text-sm font-medium
                  ${
                    activeSection === item.key
                      ? "bg-fuchsia-500 text-white shadow-md shadow-fuchsia-500/30"
                      : "text-gray-400 hover:bg-gray-900 hover:text-white"
                  }
                `}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
