import React, { useState } from "react";
import { Search, Grid, ChevronDown, ChevronUp } from "lucide-react";

const mockData = [
  { id: 1, name: "Eleanor Rigby", date: "2023-10-01", contact: "Email", team: "Aria Montgomery", status: "Pending" },
  { id: 2, name: "Atticus Finch", date: "2023-10-02", contact: "Phone", team: "Ezra Fitz", status: "In Progress" },
  { id: 3, name: "Hermione Granger", date: "2023-10-03", contact: "SMS", team: "Spencer Hastings", status: "Completed" },
  { id: 4, name: "Gatsby Fitzgerald", date: "2023-10-04", contact: "Email", team: "Hanna Marin", status: "Pending" },
  { id: 5, name: "Luna Lovegood", date: "2023-10-05", contact: "Phone", team: "Emily Fields", status: "Completed" },
  { id: 6, name: "Sherlock Holmes", date: "2023-10-06", contact: "SMS", team: "Alison DiLaurentis", status: "Pending" },
  { id: 7, name: "Katniss Everdeen", date: "2023-10-07", contact: "Email", team: "Toby Cavanaugh", status: "In Progress" },
  { id: 8, name: "Frodo Baggins", date: "2023-10-08", contact: "Phone", team: "Caleb Rivers", status: "In Progress" },
  { id: 9, name: "Arya Stark", date: "2023-10-09", contact: "SMS", team: "Mona Vanderwaal", status: "Completed" },
];

const statusColors = {
  Pending: "text-[#FBBF24]",
  "In Progress": "text-[#3B82F6]",
  Completed: "text-[#10B981]",
};

export default function SoulTable() {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#0E0E17] text-white">
      {/* Header */}
      <header className="bg-[#1A1A27] p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold">Soul Records</h1>
        <div className="flex items-center space-x-4">
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-[#332F41]">
            <thead className="text-left text-[#A1A1AA]">
              <tr>
                <th className="py-3 px-4 font-medium">Name</th>
                <th className="py-3 px-4 font-medium">Date</th>
                <th className="py-3 px-4 font-medium">Contact Method</th>
                <th className="py-3 px-4 font-medium">Assigned Team</th>
                <th className="py-3 px-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#332F41]">
              {mockData.map((soul) => (
                <tr key={soul.id} className="hover:bg-[#1A1A27] transition-colors">
                  <td className="py-4 px-4 text-[#F5F5FF]">{soul.name}</td>
                  <td className="py-4 px-4 text-[#F5F5FF]">{soul.date}</td>
                  <td className="py-4 px-4 text-[#F5F5FF]">{soul.contact}</td>
                  <td className="py-4 px-4 text-[#F5F5FF]">{soul.team}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full font-medium bg-[#4B4453] ${statusColors[soul.status]}`}>
                      <span className={`w-2 h-2 rounded-full ${statusColors[soul.status]} bg-current`}></span>
                      {soul.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {mockData.map((soul) => (
            <div 
              key={soul.id} 
              className="bg-[#1A1A27] rounded-lg p-4 shadow"
              onClick={() => toggleRow(soul.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-[#F5F5FF]">{soul.name}</h3>
                  <p className="text-sm text-[#A1A1AA]">{soul.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[soul.status]} bg-[#4B4453]`}>
                    {soul.status}
                  </span>
                  {expandedRow === soul.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              
              {expandedRow === soul.id && (
                <div className="mt-3 pt-3 border-t border-[#332F41] space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-[#A1A1AA]">Contact:</span>
                    <span className="text-sm text-[#F5F5FF]">{soul.contact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-[#A1A1AA]">Assigned To:</span>
                    <span className="text-sm text-[#F5F5FF]">{soul.team}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6 text-sm">
          <button className="px-4 py-2 rounded-md bg-[#2C1C33] text-[#F5F5FF] hover:bg-[#3B2A42]">
            Previous
          </button>
          <span className="text-[#A1A1AA]">Page 1 of 3</span>
          <button className="px-4 py-2 rounded-md bg-[#2C1C33] text-[#F5F5FF] hover:bg-[#3B2A42]">
            Next
          </button>
        </div>
      </main>
    </div>
  );
}