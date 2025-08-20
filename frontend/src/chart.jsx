import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Sample data for soul-winning analytics
const monthlyData = [
  { month: 'Jan', souls: 12, prayers: 45, conversations: 28 },
  { month: 'Feb', souls: 19, prayers: 52, conversations: 34 },
  { month: 'Mar', souls: 15, prayers: 48, conversations: 31 },
  { month: 'Apr', souls: 23, prayers: 61, conversations: 42 },
  { month: 'May', souls: 18, prayers: 55, conversations: 38 },
  { month: 'Jun', souls: 25, prayers: 68, conversations: 45 }
];

const salvationData = [
  { status: 'Saved', value: 45, color: '#ec4899' },
  { status: 'In Progress', value: 32, color: '#8b5cf6' },
  { status: 'Praying', value: 28, color: '#06b6d4' },
  { status: 'New Contact', value: 15, color: '#10b981' }
];

// Bar Chart Component
export const SoulsBarChart = ({ data = monthlyData, height = 300 }) => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis 
            dataKey="month" 
            stroke="#64748b"
            fontSize={12}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="#64748b"
            fontSize={12}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#0f172a',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              color: '#f1f5f9'
            }}
          />
          <Bar 
            dataKey="souls" 
            fill="#ec4899" 
            radius={[4, 4, 0, 0]}
            name="Souls Won"
          />
          <Bar 
            dataKey="conversations" 
            fill="#8b5cf6" 
            radius={[4, 4, 0, 0]}
            name="Conversations"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Line Chart Component
export const SoulsLineChart = ({ data = monthlyData, height = 300 }) => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis 
            dataKey="month" 
            stroke="#64748b"
            fontSize={12}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="#64748b"
            fontSize={12}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#0f172a',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              color: '#f1f5f9'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="souls" 
            stroke="#ec4899" 
            strokeWidth={3}
            dot={{ fill: '#ec4899', strokeWidth: 2, r: 4 }}
            name="Souls Won"
          />
          <Line 
            type="monotone" 
            dataKey="prayers" 
            stroke="#8b5cf6" 
            strokeWidth={3}
            dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
            name="Prayers"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Pie Chart Component
export const SoulsPieChart = ({ data = salvationData, height = 300 }) => {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={12}
        fontWeight="500"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: '#0f172a',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              color: '#f1f5f9'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

// Combined Analytics Component
export const SoulsAnalytics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Monthly Progress */}
      <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
        <h3 className="text-sm font-medium text-slate-300 mb-3">Monthly Progress</h3>
        <SoulsBarChart height={200} />
      </div>

      {/* Souls & Prayers Trend */}
      <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
        <h3 className="text-sm font-medium text-slate-300 mb-3">Souls & Prayers Trend</h3>
        <SoulsLineChart height={200} />
      </div>

      {/* Salvation Status */}
      <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 lg:col-span-2">
        <h3 className="text-sm font-medium text-slate-300 mb-3">Salvation Status Distribution</h3>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <SoulsPieChart height={250} />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <div className="space-y-3">
              {salvationData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-slate-300 text-sm">{item.status}</span>
                  <span className="text-white font-semibold ml-auto">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};