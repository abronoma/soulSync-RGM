import React, { useState, useEffect } from 'react';
import {
  Heart, Plus, Bell, Menu, Search, Grid, UserPlus, FileText,
  PlusCircle, MessageSquare, X, User, ChevronRight
} from 'lucide-react';
import { Link } from "react-router-dom";

// Import the Sidebar component
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile && sidebarOpen) {
        setSidebarOpen(true);
      }
    };

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

  const chartData = [
    { name: 'Week 1', value: 20 },
    { name: 'Week 2', value: 35 },
    { name: 'Week 3', value: 25 },
    { name: 'Week 4', value: 40 },
    { name: 'Week 5', value: 30 },
    { name: 'Week 6', value: 45 },
    { name: 'Week 7', value: 35 },
  ];

  const barData = [
    { name: 'Jan', value: 250 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 350 },
    { name: 'Apr', value: 400 },
    { name: 'May', value: 380 },
    { name: 'Jun', value: 450 },
  ];

  const LineChart = ({ data, height = 120 }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    const width = 300;
    const points = data.map((d, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - (d.value / maxValue) * height;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="relative w-full overflow-x-auto">
        <svg width={width} height={height}>
          <polyline fill="none" stroke="#D946EF" strokeWidth="2" points={points} />
          {data.map((d, i) => {
            const x = (i / (data.length - 1)) * width;
            const y = height - (d.value / maxValue) * height;
            return <circle key={i} cx={x} cy={y} r="3" fill="#D946EF" />;
          })}
        </svg>
        <div className="flex justify-between text-xs text-[#9999B5] mt-2 w-[300px]">
          {data.map((d, i) => (
            <span key={i} className="w-10 text-center truncate">{d.name}</span>
          ))}
        </div>
      </div>
    );
  };

  const BarChart = ({ data, height = 120 }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    const barWidth = 300 / data.length - 10;

    return (
      <div className="relative w-full overflow-x-auto">
        <svg width="300" height={height}>
          {data.map((d, i) => {
            const barHeight = (d.value / maxValue) * height;
            const x = i * (300 / data.length) + 5;
            const y = height - barHeight;
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill="#D946EF"
                rx="2"
              />
            );
          })}
        </svg>
        <div className="flex justify-between text-xs text-[#9999B5] mt-2 w-[300px]">
          {data.map((d, i) => (
            <span key={i} className="w-10 text-center truncate">{d.name}</span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0E0E17] text-[#F5F5FF] flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md w-full">
        <div className="flex items-center gap-4">
          {/* Sidebar Toggle */}
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-md transition-all border border-white/10 ${
              sidebarOpen
                ? "bg-[#D946EF] text-white hover:bg-[#c026d3] shadow-lg shadow-[#D946EF]/30"
                : "text-[#9999B5] hover:bg-white/10 hover:text-white"
            }`}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
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

      <div className="flex-1 pt-16">
        <main className="p-6 bg-[#0E0E17]">
          {/* Overview Tabs */}
          <div className="flex space-x-6 border-b border-[#2A2A3F] mb-6">
            <button className="text-[#F5F5FF] border-b-2 border-[#D946EF] py-2">Overview</button>
            <button className="text-[#9999B5] hover:text-[#F5F5FF] py-2">Settings</button>
            <button className="text-[#9999B5] hover:text-[#F5F5FF] py-2">Analytics</button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Souls Spotted', value: 150, change: '+12%', icon: <User className="w-5 h-5" /> },
              { label: 'Praying About', value: 75, change: '+5%', icon: <Heart className="w-5 h-5" /> },
              { label: 'Souls Won', value: 50, change: '+8%', icon: <PlusCircle className="w-5 h-5" /> },
              { label: 'Follow-Ups Scheduled', value: 30, change: '+3%', icon: <MessageSquare className="w-5 h-5" /> }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#1E1E2A] p-5 rounded-lg border border-[#2A2A3F] hover:border-[#D946EF] transition-all shadow-lg hover:shadow-[0_0_15px_#D946EF33] group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-md bg-[#2A2A3F] text-[#D946EF] group-hover:bg-[#D946EF] group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                  <span className="text-xs bg-[#2A2A3F] px-2 py-1 rounded-full text-[#9999B5]">{card.change}</span>
                </div>
                <h4 className="text-[#9999B5] text-sm mb-1">{card.label}</h4>
                <p className="text-2xl font-bold text-white">{card.value}</p>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#1E1E2A] rounded-lg p-5 border border-[#2A2A3F] shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Weekly Activity</h3>
                <button className="text-[#9999B5] hover:text-[#D946EF] text-xs flex items-center">
                  View details <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="text-2xl font-bold text-white mb-1">100 Interactions</div>
              <div className="text-xs text-[#9999B5] mb-4">15% increase from last week</div>
              <LineChart data={chartData} height={120} />
            </div>

            <div className="bg-[#1E1E2A] rounded-lg p-5 border border-[#2A2A3F] shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Monthly Report</h3>
                <button className="text-[#9999B5] hover:text-[#D946EF] text-xs flex items-center">
                  View details <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="text-2xl font-bold text-white mb-1">7.7k Engagements</div>
              <div className="text-xs text-[#9999B5] mb-4">+2.1% from last month</div>
              <BarChart data={barData} height={120} />
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-[#1E1E2A] rounded-lg p-5 border border-[#2A2A3F] shadow-lg">
            <h3 className="text-lg font-medium text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: 'Added new soul', person: 'Sarah Johnson', time: '2 hours ago' },
                { action: 'Scheduled follow-up', person: 'Michael Chen', time: '5 hours ago' },
                { action: 'Recorded salvation', person: 'Emily Williams', time: '1 day ago' },
                { action: 'Assigned soul to team', person: 'David Miller', time: '2 days ago' }
              ].map((item, i) => (
                <div key={i} className="flex items-center p-3 rounded-lg bg-[#2A2A3F] hover:bg-[#D946EF]/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#D946EF] flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{item.action}</div>
                    <div className="text-sm text-[#9999B5]">{item.person}</div>
                  </div>
                  <div className="text-xs text-[#9999B5]">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;