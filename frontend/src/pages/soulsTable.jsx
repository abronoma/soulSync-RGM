import React, { useState } from "react";
import { ChevronDown, ChevronUp, User, Phone, Mail, MessageSquare, Calendar, MapPin, ArrowLeft, Smartphone, Book, Video, Send } from "lucide-react";

const SoulTable = () => {
  const [souls, setSouls] = useState([
    { 
      id: 1, 
      name: "Michael Johnson", 
      age: 28, 
      gender: "Male", 
      status: "New", 
      location: "Accra",
      contact: "+233 24 123 4567",
      email: "michael.j@example.com",
      notes: "Interested in learning more about faith. Met at community event."
    },
    { 
      id: 2, 
      name: "Sarah Owusu", 
      age: 34, 
      gender: "Female", 
      status: "Followed Up", 
      location: "Kumasi",
      contact: "+233 20 987 6543",
      email: "sarah.owusu@example.com",
      notes: "Previously attended church service. Asked about baptism."
    },
    { 
      id: 3, 
      name: "Kwame Mensah", 
      age: 22, 
      gender: "Male", 
      status: "Discipled", 
      location: "Takoradi",
      contact: "+233 27 555 1234",
      email: "kwame.m@example.com",
      notes: "Regular attendee. Showing strong interest in leadership training."
    },
  ]);

  const [selectedSoul, setSelectedSoul] = useState(null);
  const [currentView, setCurrentView] = useState("table");
  const [followUpType, setFollowUpType] = useState("");
  const [showFollowUpDropdown, setShowFollowUpDropdown] = useState(false);
  const [techFormData, setTechFormData] = useState({
    platform: "",
    message: "",
    scheduledDate: "",
    resources: []
  });
  const [nonTechFormData, setNonTechFormData] = useState({
    method: "",
    date: "",
    time: "",
    location: "",
    materials: ""
  });

  // Navigation
  const navigateToDashboard = (soul) => {
    setSelectedSoul(soul);
    setCurrentView("dashboard");
  };

  const handleFollowUpSelect = (type) => {
    setFollowUpType(type);
    setShowFollowUpDropdown(false);
  };

  const handleTechFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setTechFormData(prev => ({
          ...prev,
          resources: [...prev.resources, value]
        }));
      } else {
        setTechFormData(prev => ({
          ...prev,
          resources: prev.resources.filter(item => item !== value)
        }));
      }
    } else {
      setTechFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleNonTechFormChange = (e) => {
    const { name, value } = e.target;
    setNonTechFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitFollowUp = () => {
    alert(`Follow-up planned for ${selectedSoul.name} via ${followUpType} method`);
    setFollowUpType("");
    // Reset form data
    setTechFormData({ platform: "", message: "", scheduledDate: "", resources: [] });
    setNonTechFormData({ method: "", date: "", time: "", location: "", materials: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E0E17] to-[#1A1A2C] text-[#F5F5FF] p-4 md:p-6">
      {currentView === "table" && (
        <div className="bg-[#1A1A2C] shadow-lg rounded-xl overflow-hidden border border-[#2A2A3F]">
          <div className="p-4 md:p-6 bg-gradient-to-r from-[#1A1A2C] to-[#2A2A3F] border-b border-[#2A2A3F]">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Soul Records</h1>
            <p className="text-[#9999B5]">Manage and track all souls in your care</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#2A2A3F]">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#9999B5]">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#9999B5] hidden md:table-cell">Age</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#9999B5] hidden lg:table-cell">Gender</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#9999B5]">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#9999B5] hidden lg:table-cell">Location</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#9999B5]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A2A3F]">
                {souls.map((soul) => (
                  <tr
                    key={soul.id}
                    className="hover:bg-[#2A2A3F]/50 transition-colors cursor-pointer"
                    onClick={() => navigateToDashboard(soul)}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#D946EF] to-[#9333EA] flex items-center justify-center mr-3">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-white">{soul.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell text-[#9999B5]">{soul.age}</td>
                    <td className="px-4 py-3 hidden lg:table-cell text-[#9999B5]">{soul.gender}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          soul.status === "New"
                            ? "bg-[#D946EF] text-white"
                            : soul.status === "Followed Up"
                            ? "bg-yellow-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        {soul.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell text-[#9999B5]">{soul.location}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateToDashboard(soul);
                        }}
                        className="text-[#D946EF] hover:text-[#c026d3] font-medium text-sm bg-[#2A2A3F] hover:bg-[#3A3A4F] px-3 py-1 rounded-lg transition-colors"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {currentView === "dashboard" && selectedSoul && (
        <div className="bg-[#1A1A2C] rounded-xl border border-[#2A2A3F] overflow-hidden">
          {/* Header */}
          <div className="p-4 md:p-6 bg-gradient-to-r from-[#1A1A2C] to-[#2A2A3F] border-b border-[#2A2A3F]">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => setCurrentView("table")}
                  className="mr-4 text-[#9999B5] hover:text-white p-2 rounded-lg hover:bg-[#2A2A3F] transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">{selectedSoul.name}'s Dashboard</h2>
                  <p className="text-[#9999B5]">Track and manage follow-up activities</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedSoul.status === "New"
                    ? "bg-[#D946EF] text-white"
                    : selectedSoul.status === "Followed Up"
                    ? "bg-yellow-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {selectedSoul.status}
              </span>
            </div>
          </div>

          <div className="p-4 md:p-6">
            {/* Soul Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#2A2A3F] p-4 rounded-lg border border-[#3A3A4F]">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-[#D946EF]" />
                  Personal Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#9999B5]">Age:</span>
                    <span className="text-white">{selectedSoul.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9999B5]">Gender:</span>
                    <span className="text-white">{selectedSoul.gender}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9999B5]">Location:</span>
                    <span className="text-white flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-[#D946EF]" />
                      {selectedSoul.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#2A2A3F] p-4 rounded-lg border border-[#3A3A4F]">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-[#D946EF]" />
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#9999B5]">Phone:</span>
                    <span className="text-white flex items-center">
                      <Phone className="w-4 h-4 mr-1 text-[#D946EF]" />
                      {selectedSoul.contact}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9999B5]">Email:</span>
                    <span className="text-white flex items-center">
                      <Mail className="w-4 h-4 mr-1 text-[#D946EF]" />
                      {selectedSoul.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-[#2A2A3F] p-4 rounded-lg border border-[#3A3A4F] mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">Notes</h3>
              <p className="text-[#CCCCEE]">{selectedSoul.notes}</p>
            </div>

            {/* Follow Up Section */}
            <div className="bg-[#2A2A3F] p-4 rounded-lg border border-[#3A3A4F]">
              <h3 className="text-lg font-semibold text-white mb-4">Plan Follow Up</h3>
              
              {/* Dropdown for follow-up type */}
              <div className="relative mb-6">
                <button
                  onClick={() => setShowFollowUpDropdown(!showFollowUpDropdown)}
                  className="w-full bg-[#3A3A4F] border border-[#4A4A5F] rounded-lg px-4 py-3 text-left flex items-center justify-between text-white hover:bg-[#4A4A5F] transition-colors"
                >
                  <span>{followUpType || "Select follow-up method"}</span>
                  {showFollowUpDropdown ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                
                {showFollowUpDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-[#3A3A4F] border border-[#4A4A5F] rounded-lg shadow-lg overflow-hidden">
                    <button
                      onClick={() => handleFollowUpSelect("Tech-inclined")}
                      className="w-full px-4 py-3 text-left text-white hover:bg-[#4A4A5F] flex items-center transition-colors"
                    >
                      <Smartphone className="w-5 h-5 mr-2 text-[#D946EF]" />
                      Tech-inclined
                    </button>
                    <button
                      onClick={() => handleFollowUpSelect("Non-tech inclined")}
                      className="w-full px-4 py-3 text-left text-white hover:bg-[#4A4A5F] flex items-center transition-colors"
                    >
                      <Book className="w-5 h-5 mr-2 text-[#D946EF]" />
                      Non-tech inclined
                    </button>
                  </div>
                )}
              </div>

              {/* Tech-inclined Form */}
              {followUpType === "Tech-inclined" && (
                <div className="bg-[#3A3A4F] p-4 rounded-lg border border-[#4A4A5F] mb-4">
                  <h4 className="text-md font-semibold text-white mb-4 flex items-center">
                    <Smartphone className="w-5 h-5 mr-2 text-[#D946EF]" />
                    Tech Follow-up Plan
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#9999B5] mb-1">Platform</label>
                      <select
                        name="platform"
                        value={techFormData.platform}
                        onChange={handleTechFormChange}
                        className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white focus:border-[#D946EF] focus:outline-none"
                      >
                        <option value="">Select platform</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Email">Email</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Video Call">Video Call</option>
                        <option value="SMS">SMS</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#9999B5] mb-1">Message</label>
                      <textarea
                        name="message"
                        value={techFormData.message}
                        onChange={handleTechFormChange}
                        rows="3"
                        placeholder="Type your message here..."
                        className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white placeholder-[#666687] focus:border-[#D946EF] focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#9999B5] mb-1">Schedule Date & Time</label>
                      <input
                        type="datetime-local"
                        name="scheduledDate"
                        value={techFormData.scheduledDate}
                        onChange={handleTechFormChange}
                        className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white focus:border-[#D946EF] focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#9999B5] mb-2">Resources to Share</label>
                      <div className="space-y-2">
                        {["E-book", "Video", "Podcast", "Article", "Online Event"].map(resource => (
                          <label key={resource} className="flex items-center">
                            <input
                              type="checkbox"
                              value={resource}
                              checked={techFormData.resources.includes(resource)}
                              onChange={handleTechFormChange}
                              className="rounded border-[#4A4A5F] text-[#D946EF] focus:ring-[#D946EF] bg-[#2A2A3F]"
                            />
                            <span className="ml-2 text-white">{resource}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Non-tech inclined Form */}
              {followUpType === "Non-tech inclined" && (
                <div className="bg-[#3A3A4F] p-4 rounded-lg border border-[#4A4A5F] mb-4">
                  <h4 className="text-md font-semibold text-white mb-4 flex items-center">
                    <Book className="w-5 h-5 mr-2 text-[#D946EF]" />
                    Non-Tech Follow-up Plan
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#9999B5] mb-1">Method</label>
                      <select
                        name="method"
                        value={nonTechFormData.method}
                        onChange={handleNonTechFormChange}
                        className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white focus:border-[#D946EF] focus:outline-none"
                      >
                        <option value="">Select method</option>
                        <option value="In-person Visit">In-person Visit</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="Letter">Letter</option>
                        <option value="Group Meeting">Group Meeting</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#9999B5] mb-1">Date</label>
                        <input
                          type="date"
                          name="date"
                          value={nonTechFormData.date}
                          onChange={handleNonTechFormChange}
                          className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white focus:border-[#D946EF] focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-[#9999B5] mb-1">Time</label>
                        <input
                          type="time"
                          name="time"
                          value={nonTechFormData.time}
                          onChange={handleNonTechFormChange}
                          className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white focus:border-[#D946EF] focus:outline-none"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#9999B5] mb-1">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={nonTechFormData.location}
                        onChange={handleNonTechFormChange}
                        placeholder="Enter location"
                        className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white placeholder-[#666687] focus:border-[#D946EF] focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#9999B5] mb-1">Materials to Bring</label>
                      <input
                        type="text"
                        name="materials"
                        value={nonTechFormData.materials}
                        onChange={handleNonTechFormChange}
                        placeholder="Bible, brochures, etc."
                        className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white placeholder-[#666687] focus:border-[#D946EF] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              {followUpType && (
                <button
                  onClick={submitFollowUp}
                  className="w-full bg-gradient-to-r from-[#D946EF] to-[#9333EA] hover:from-[#c026d3] hover:to-[#7e22ce] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Schedule Follow-up
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SoulTable;