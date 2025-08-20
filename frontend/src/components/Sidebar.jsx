import React from "react";
import {
  Plus,
  BarChart3,
  Eye,
  User,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const Sidebar = ({
  activeSection,
  setActiveSection,
  collapsed,
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
    <aside className={`
      bg-gray-800 border-r border-gray-700 flex flex-col
      transition-all duration-300 ease-in-out
      ${isMobile ? 'fixed z-40 h-full' : 'static'}
      ${collapsed ? 'w-0 md:w-20' : 'w-64'}
    `}>
      <div className="overflow-y-auto flex-1 flex flex-col">
        <h3 className={`text-xs uppercase tracking-wider text-gray-500 mt-6 px-4 mb-4 ${
          collapsed ? "hidden" : "block"
        }`}>
          Navigation
        </h3>
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
                transition-all ${collapsed ? "justify-center" : ""}
                ${
                  activeSection === item.key
                    ? "bg-pink-600 text-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }
              `}
            >
              <span>{item.icon}</span>
              {!collapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </button>
          ))}
        </nav>
        {!isMobile && (
          <button
            onClick={toggleSidebar}
            className="p-3 text-gray-400 hover:text-white border-t border-gray-700"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;