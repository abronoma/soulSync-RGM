import React, { useState } from 'react';
import {
  Heart, Plus, Bell, Menu, Search, Grid, UserPlus, FileText,
  PlusCircle, MessageSquare, X, User, ChevronRight
} from 'lucide-react';
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#D946EF]">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#D946EF]">SoulSync</span>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-3 p-3 bg-[#2A2A3F] rounded-lg mb-6">
          <div className="w-10 h-10 rounded-full bg-[#D946EF] flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Welcome, John</p>
            <p className="text-xs text-[#9999B5] truncate max-w-[140px]">evangelist.john@rgm.com</p>
          </div>
        </div>

        <nav className="space-y-3 text-sm">
          <Link 
            to="/add-soul" 
            className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#D946EF]/20 to-transparent border border-[#D946EF]/30 text-white hover:from-[#D946EF]/30 hover:to-transparent transition-all"
          >
            <Plus size={18} />
            <span>Add Soul</span>
          </Link>

          <button className="flex items-center space-x-3 p-3 rounded-lg text-[#9999B5] hover:text-white hover:bg-[#2A2A3F] transition-all w-full text-left">
            <MessageSquare size={18} /> 
            <span>Add Follow-Up</span>
          </button>
          
          <button className="flex items-center space-x-3 p-3 rounded-lg text-[#9999B5] hover:text-white hover:bg-[#2A2A3F] transition-all w-full text-left">
            <FileText size={18} /> 
            <span>View Reports</span>
          </button>
          
          <button className="flex items-center space-x-3 p-3 rounded-lg text-[#9999B5] hover:text-white hover:bg-[#2A2A3F] transition-all w-full text-left">
            <Bell size={18} /> 
            <span>Notifications</span>
          </button>
          
          <button className="flex items-center space-x-3 p-3 rounded-lg text-[#9999B5] hover:text-white hover:bg-[#2A2A3F] transition-all w-full text-left">
            <UserPlus size={18} /> 
            <span>Add Team Member</span>
          </button>
          
          <button className="flex items-center space-x-3 p-3 rounded-lg text-[#9999B5] hover:text-white hover:bg-[#2A2A3F] transition-all w-full text-left">
            <Grid size={18} /> 
            <span>Assign/Reassign Soul</span>
          </button>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/70"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <div className="absolute left-0 top-0 h-full w-64 bg-[#1A1A2C] p-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#D946EF]">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-[#D946EF]">SoulSync</span>
              </div>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="text-white" />
              </button>
            </div>
            
            {/* Mobile navigation items (same as desktop) */}
            <nav className="space-y-3 text-sm">
              <Link 
                to="/add-soul" 
                className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#D946EF]/20 to-transparent border border-[#D946EF]/30 text-white hover:from-[#D946EF]/30 hover:to-transparent transition-all"
                onClick={() => setSidebarOpen(false)}
              >
                <Plus size={18} />
                <span>Add Soul</span>
              </Link>

              <button className="flex items-center space-x-3 p-3 rounded-lg text-[#9999B5] hover:text-white hover:bg-[#2A2A3F] transition-all w-full text-left">
                <MessageSquare size={18} /> 
                <span>Add Follow-Up</span>
              </button>
              
              <button className="flex items-center space-x-3 p-3 rounded-lg text-[#9999B5] hover:text-white hover:bg-[#2A2A3F] transition-all w-full text-left">
                <FileText size={18} /> 
                <span>View Reports</span>
              </button>
              
              <button className="flex items-center space-x-3 p-3 rounded-lg text-[#9999B5] hover:text-white hover:bg-[#2A2A3F] transition-all w-full text-left">
                <Bell size={18} /> 
                <span>Notifications</span>
              </button>
              
              <button className="flex items-center space-x-3 p-3 rounded-lg text-[#9999B5] hover:text-white hover:bg-[#2A2A3F] transition-all w-full text-left">
                <UserPlus size={18} /> 
                <span>Add Team Member</span>
              </button>
              
              <button className="flex items-center space-x-3 p-3 rounded-lg text-[#9999B5] hover:text-white hover:bg-[#2A2A3F] transition-all w-full text-left">
                <Grid size={18} /> 
                <span>Assign/Reassign Soul</span>
              </button>
            </nav>
          </div>
        </div>
      )}

      <div className="flex-1">
        {/* Navbar */}
        <header className="flex items-center justify-between p-4 border-b border-[#2A2A3F] bg-[#1A1A2C]">
          <div className="flex items-center space-x-4">
            <button 
              className="lg:hidden text-[#F5F5FF]"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-semibold text-[#F5F5FF]">RGM Dashboard <span className="ml-2 bg-[#2A2A3F] px-2 py-1 rounded-full text-xs text-[#D946EF]">Active</span></h1>
            <div className="hidden md:flex items-center -space-x-2">
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
            <Search className="text-[#9999B5] hover:text-[#D946EF] cursor-pointer" />
            <Bell className="text-[#9999B5] hover:text-[#D946EF] cursor-pointer" />
            <Heart className="text-[#D946EF]" />
            <div className="hidden md:flex flex-col items-end">
              <div className="text-sm text-white">John Doe</div>
              <div className="text-xs text-[#9999B5]">evangelist.john@rgm.com</div>
            </div>
            <img
              src="https://i.pravatar.cc/40?img=5"
              alt="User Avatar"
              className="w-8 h-8 rounded-full border-2 border-[#D946EF]"
            />
          </div>
        </header>

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