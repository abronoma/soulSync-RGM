
import React, { useState } from 'react';
import { Heart, Menu, X, UserPlus, Plus, FileText, Bell, PlusCircle, MessageSquare, Home, Play, Pause, ArrowLeft } from 'lucide-react';

// Sample data for soul records
const soulRecordsData = [
  {
    id: 1,
    name: "Eleanor Rigby",
    date: "2023-10-01",
    contactMethod: "Email",
    assignedTeam: "Aria Montgomery",
    status: "Pending",
    totalSpoken: 25,
    prayingAbout: 12,
    soulsWon: 8,
    followUps: 5
  },
  {
    id: 2,
    name: "Atticus Finch",
    date: "2023-10-02",
    contactMethod: "Phone",
    assignedTeam: "Ezra Fitz",
    status: "In Progress",
    totalSpoken: 40,
    prayingAbout: 20,
    soulsWon: 15,
    followUps: 8
  },
  {
    id: 3,
    name: "Hermione Granger",
    date: "2023-10-03",
    contactMethod: "SMS",
    assignedTeam: "Spencer Hastings",
    status: "Completed",
    totalSpoken: 60,
    prayingAbout: 30,
    soulsWon: 25,
    followUps: 12
  },
  {
    id: 4,
    name: "Gatsby Fitzgerald",
    date: "2023-10-04",
    contactMethod: "Email",
    assignedTeam: "Hanna Marin",
    status: "Pending",
    totalSpoken: 35,
    prayingAbout: 18,
    soulsWon: 10,
    followUps: 7
  },
  {
    id: 5,
    name: "Luna Lovegood",
    date: "2023-10-05",
    contactMethod: "Phone",
    assignedTeam: "Emily Fields",
    status: "Completed",
    totalSpoken: 50,
    prayingAbout: 25,
    soulsWon: 20,
    followUps: 10
  },
  {
    id: 6,
    name: "Sherlock Holmes",
    date: "2023-10-06",
    contactMethod: "SMS",
    assignedTeam: "Alison DiLaurentis",
    status: "Pending",
    totalSpoken: 30,
    prayingAbout: 15,
    soulsWon: 12,
    followUps: 6
  },
  {
    id: 7,
    name: "Katniss Everdeen",
    date: "2023-10-07",
    contactMethod: "Email",
    assignedTeam: "Toby Cavanaugh",
    status: "In Progress",
    totalSpoken: 45,
    prayingAbout: 22,
    soulsWon: 18,
    followUps: 9
  }
];

// Main App Component with Routing Logic
const SoulRecordsApp = () => {
  const [currentView, setCurrentView] = useState('records'); // 'records' or 'dashboard'
  const [selectedSoul, setSelectedSoul] = useState(null);

  // Navigation functions
  const navigateToDashboard = (soul) => {
    setSelectedSoul(soul);
    setCurrentView('dashboard');
  };

  const navigateToRecords = () => {
    setCurrentView('records');
    setSelectedSoul(null);
  };

  // Soul Records List Component
  const SoulRecordsList = () => {
    const getStatusColor = (status) => {
      switch (status) {
        case 'Pending': return 'bg-yellow-600';
        case 'In Progress': return 'bg-blue-600';
        case 'Completed': return 'bg-green-600';
        default: return 'bg-gray-600';
      }
    };

    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Soul Records</h1>
          </div>
        </div>

        {/* Table Container */}
        <div className="p-6">
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700 border-b border-gray-600">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Contact Method</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Assigned Team</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {soulRecordsData.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4">
                        <button
                          onClick={() => navigateToDashboard(record)}
                          className="text-white hover:text-pink-400 font-medium transition-colors cursor-pointer"
                        >
                          {record.name}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{record.date}</td>
                      <td className="px-6 py-4 text-gray-300">{record.contactMethod}</td>
                      <td className="px-6 py-4 text-gray-300">{record.assignedTeam}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(record.status)}`}>
                          {record.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Individual Soul Dashboard Component
  const SoulDashboard = ({ soul }) => {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={navigateToRecords}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Soul Records</span>
              </button>
            </div>
           
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Header with Name and Avatar */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center border-4 border-gray-700">
                <span className="text-white font-bold text-lg">{soul.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">{soul.name}</h1>
            <h2 className="text-lg font-medium text-gray-300">Status</h2>
          </div>

          {/* Status Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-800 rounded-lg p-1 space-x-1">
              <button className="px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md">
                New ❤
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white">
                Prayed With
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white">
                Won
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white">
                Discarded
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white">
                Received
              </button>
            </div>
          </div>

          {/* Upcoming Follow-Ups Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4">Upcoming Follow-Ups</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Scheduled */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Scheduled</span>
                  <button className="text-gray-500 hover:text-gray-400">
                    <span className="text-xs">...</span>
                  </button>
                </div>
                <div className="text-2xl font-bold text-white">5</div>
              </div>

              {/* Completed */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Completed</span>
                  <button className="text-gray-500 hover:text-gray-400">
                    <span className="text-xs">...</span>
                  </button>
                </div>
                <div className="text-2xl font-bold text-white">3</div>
              </div>

              {/* Pending */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Pending</span>
                  <button className="text-gray-500 hover:text-gray-400">
                    <span className="text-xs">...</span>
                  </button>
                </div>
                <div className="text-2xl font-bold text-white">2</div>
              </div>

              {/* Overdue */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Overdue</span>
                  <button className="text-gray-500 hover:text-gray-400">
                    <span className="text-xs">...</span>
                  </button>
                </div>
                <div className="text-2xl font-bold text-white">1</div>
              </div>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 mb-6">
            <h3 className="text-lg font-medium text-white mb-6">Contact Details</h3>
            
            <div className="space-y-6">
              {/* Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold">{soul.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium mb-1">Phone</div>
                  <input 
                    type="text" 
                    placeholder="+1 (234) 567-8901" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Communication Preferences */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 mb-6">
            <h3 className="text-lg font-medium text-white mb-6">Communication Preferences</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-400 text-sm">Receive updates via email</div>
                </div>
                <div className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only" defaultChecked />
                  <div className="block bg-pink-500 w-12 h-6 rounded-full cursor-pointer"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform translate-x-6"></div>
                </div>
              </div>

              {/* SMS */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">SMS</div>
                  <div className="text-gray-400 text-sm">Receive updates via SMS</div>
                </div>
                <div className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only" />
                  <div className="block bg-gray-600 w-12 h-6 rounded-full cursor-pointer"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Call</div>
                  <div className="text-gray-400 text-sm">Receive updates via call</div>
                </div>
                <div className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only" />
                  <div className="block bg-gray-600 w-12 h-6 rounded-full cursor-pointer"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">WhatsApp</div>
                  <div className="text-gray-400 text-sm">Receive updates via WhatsApp</div>
                </div>
                <div className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only" defaultChecked />
                  <div className="block bg-pink-500 w-12 h-6 rounded-full cursor-pointer"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform translate-x-6"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-white font-medium block mb-2">LandMark</label>
              <input 
                type="google map link" 
                placeholder="google map link" 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-white font-medium block mb-2">Notes</label>
              <textarea 
                placeholder="Add any relevant notes here..." 
                rows="3"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none resize-none"
              />
            </div>
          </div>
          
          {/* Additional Info Section */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-medium text-white mb-6">Additional Info</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-white font-medium block mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="elara.zephyr@example.com" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-white font-medium block mb-2">Notes</label>
                <textarea 
                  placeholder="Add any notes here..." 
                  rows="3"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {currentView === 'records' ? (
        <SoulRecordsList />
      ) : (
        <SoulDashboard soul={selectedSoul} />
      )}
    </div>
  );
};

export default SoulRecordsApp;