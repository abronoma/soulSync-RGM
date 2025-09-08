import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';

const SoulAnalysis = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Sample data for the line chart
  const lineData = [
    { month: 'Jan', value: 1200 },
    { month: 'Feb', value: 1100 },
    { month: 'Mar', value: 1300 },
    { month: 'Apr', value: 1250 },
    { month: 'May', value: 1400 },
    { month: 'Jun', value: 1500 },
  ];

  // Sample data for the bar chart
  const barData = [
    { month: 'Jan', value: 400 },
    { month: 'Feb', value: 600 },
    { month: 'Mar', value: 700 },
    { month: 'Apr', value: 800 },
    { month: 'May', value: 850 },
    { month: 'Jun', value: 900 },
  ];

  const keyMetrics = [
    { label: 'Total Soul Won This Month', value: '1200', change: '+12%' },
    { label: 'Total Follow-Up', value: '900', change: '+8%' },
    { label: 'Active Outreach', value: '1500', change: '+15%' },
    { label: 'Pending Follow-up', value: '700', change: '-5%' },
  ];

  return (
    <div className="min-h-screen  text-white">
      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Soul-Winning Analytics
              </h1>
              <p className="text-gray-400">Track souls won, follow-ups & outreach performance</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors shadow-md">
                <MoreHorizontal className="w-5 h-5 text-gray-300" />
              </button>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Line Chart */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-pink-400">Souls Contacted</h3>
                <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
              <div className="text-3xl font-bold mb-2">1500 <span className="text-sm text-green-400">+15%</span></div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#EC4899" 
                      strokeWidth={3}
                      dot={{ r: 5, fill: "#EC4899" }}
                      fill="url(#gradient)"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#EC4899" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#EC4899" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-purple-400">Follow-Ups Completed</h3>
                <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
              <div className="text-3xl font-bold mb-2">900 <span className="text-sm text-green-400">+8%</span></div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Bar dataKey="value" fill="url(#barGradient)" radius={[6, 6, 0, 0]} />
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#A855F7" stopOpacity={0.9} />
                        <stop offset="100%" stopColor="#EC4899" stopOpacity={0.7} />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Key Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {keyMetrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-md hover:shadow-pink-500/30 transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{metric.label}</span>
                    <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
                  </div>
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className={`text-sm ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Filters</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Dashboard</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white">
                  <option>Select From Groups</option>
                  <option>Group 1</option>
                  <option>Group 2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Location</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white">
                  <option>Select Location</option>
                  <option>Location 1</option>
                  <option>Location 2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Date Window</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white">
                  <option>Select Time Range</option>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SoulAnalysis;
