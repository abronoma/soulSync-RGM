import React, { useState } from 'react';
import {
  Heart, Plus, Bell, Menu, Search, Grid, UserPlus, FileText,
  PlusCircle, MessageSquare, X, User
} from 'lucide-react';
 import { Link } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="min-h-screen bg-[#0E0E17] text-[#F5F5FF] flex">
      {/* Sidebar */}
      <aside className="bg-[#1A1A2C] w-64 p-4 border-r border-[#2A2A3F] hidden lg:block">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-[#F5F5FF]">SoulTrack</h2>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-3 p-3 bg-[#2A2A3F] rounded-lg mb-6">
          <User className="text-[#D946EF]" />
          <div>
            <p className="text-sm font-semibold">Welcome,</p>
            <p className="text-xs text-[#9999B5] truncate max-w-[140px]">evangelist.john@rgm.com</p>
          </div>
        </div>

        <nav className="space-y-3 text-sm">
          

<Link to="/add-soul" className="flex items-center gap-3">
  <Plus size={18} />
  <span>Add Soul</span>
</Link>

          <button className="flex items-center space-x-3 text-[#F5F5FF] hover:text-[#D946EF]">
            <MessageSquare size={18} /> <span>Add Follow-Up</span>
          </button>
          <button className="flex items-center space-x-3 text-[#F5F5FF] hover:text-[#D946EF]">
            <FileText size={18} /> <span>View Reports</span>
          </button>
          <button className="flex items-center space-x-3 text-[#F5F5FF] hover:text-[#D946EF]">
            <Bell size={18} /> <span>Notifications</span>
          </button>
          <button className="flex items-center space-x-3 text-[#F5F5FF] hover:text-[#D946EF]">
            <UserPlus size={18} /> <span>Add Team Member</span>
          </button>
          <button className="flex items-center space-x-3 text-[#F5F5FF] hover:text-[#D946EF]">
            <Grid size={18} /> <span>Assign/Reassign Soul</span>
          </button>
        </nav>
      </aside>

      <div className="flex-1">
        {/* Navbar */}
        <header className="flex items-center justify-between p-4 border-b border-[#2A2A3F] bg-[#1A1A2C]">
          <div className="flex items-center space-x-4">
            <Menu className="text-[#F5F5FF]" />
            <h1 className="text-xl font-semibold text-[#F5F5FF]">RGM Dashboard <span className="ml-2 bg-[#2A2A3F] px-2 py-1 rounded-full text-xs text-[#D946EF]">Active</span></h1>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((n, i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/40?img=${n}`}
                  alt="avatar"
                  className="w-6 h-6 rounded-full border-2 border-[#1A1A2C]"
                />
              ))}
              <span className="ml-2 text-xs text-[#9999B5]">+12 others</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="text-[#9999B5]" />
            <Bell className="text-[#9999B5]" />
            <Heart className="text-[#D946EF]" />
            <div className="flex flex-col items-center space-y-1">
              <img
                src="https://i.pravatar.cc/40?img=5"
                alt="User Avatar"
                className="w-8 h-8 rounded-full border-2 border-[#1A1A2C]"
              />
              <div className="text-xs text-[#9999B5]">evangelist.john@rgm.com</div>
            </div>
          </div>
        </header>

        <main className="p-6 bg-[#0E0E17]">
          {/* Overview Tabs */}
          <div className="flex space-x-6 border-b border-[#2A2A3F] mb-6">
            <button className="text-[#F5F5FF] border-b-2 border-[#D946EF] py-2">Overview</button>
            <button className="text-[#9999B5] hover:text-[#F5F5FF] py-2">Settings</button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total Souls Spotted', value: 150 },
              { label: 'Praying About', value: 75 },
              { label: 'Souls Won', value: 50 },
              { label: 'Follow-Ups Scheduled', value: 30 }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#1E1E2A] p-4 rounded-lg border border-[#D946EF] aspect-square">
                <h4 className="text-[#F5F5FF] text-sm truncate">{card.label}</h4>
                <p className="text-2xl font-bold text-[#F5F5FF]">{card.value}</p>
                <span className="text-xs text-[#9999B5] truncate">...</span>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-[#1E1E2A] rounded-lg p-4 border border-[#D946EF] shadow-[0_0_15px_#D946EF33]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[#E4E4F0]">Weekly Activity</h3>
                <button className="text-[#9999B5] hover:text-[#F5F5FF]">
                  <span className="text-xs">...</span>
                </button>
              </div>
              <div className="text-2xl font-bold text-[#F5F5FF] mb-1">100</div>
              <div className="text-xs text-[#9999B5] mb-4">15%</div>
              <LineChart data={chartData} height={100} />
            </div>

            <div className="bg-[#1E1E2A] rounded-lg p-4 border border-[#D946EF] shadow-[0_0_15px_#D946EF33]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[#E4E4F0]">Monthly Report</h3>
                <button className="text-[#9999B5] hover:text-[#F5F5FF]">
                  <span className="text-xs">...</span>
                </button>
              </div>
              <div className="text-2xl font-bold text-[#F5F5FF] mb-1">7.7k</div>
              <div className="text-xs text-[#9999B5] mb-4">+2.1% last mo</div>
              <BarChart data={barData} height={100} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
