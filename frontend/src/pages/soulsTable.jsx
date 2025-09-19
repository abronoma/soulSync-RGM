import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  User,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  MapPin,
  ArrowLeft,
  Smartphone,
  Book,
  Video,
  Send,
  Eye,
  Edit,
  Trash2
} from "lucide-react";

const SoulTable = () => {
  const [souls, setSouls] = useState([
    { id: 1, name: "Michael Johnson", age: 28, gender: "Male", status: "New", location: "Accra", GPS: "Accra", contact: "+233 24 123 4567", email: "michael.j@example.com", notes: "Interested in learning more about faith." },
    { id: 2, name: "Sarah Owusu", age: 34, gender: "Female", status: "Followed Up", location: "Kumasi", GPS: "Kumasi", contact: "+233 20 987 6543", email: "sarah.owusu@example.com", notes: "Previously attended church service." },
    { id: 3, name: "Kwame Mensah", age: 22, gender: "Male", status: "Discipled", location: "Takoradi", GPS: "Takoradi", contact: "+233 27 555 1234", email: "kwame.m@example.com", notes: "Showing strong interest in leadership training." },
    { id: 4, name: "Ama Serwah", age: 30, gender: "Female", status: "New", location: "Cape Coast", GPS: "Cape Coast", contact: "+233 56 789 0123", email: "ama.serwah@example.com", notes: "Interested in joining a community group." },
    { id: 5, name: "Kofi Asante", age: 45, gender: "Male", status: "Followed Up", location: "Tema", GPS: "Tema", contact: "+233 50 123 4567", email: "kofi.asante@example.com", notes: "Asked for more information about church activities." },
    { id: 6, name: "Abena Owusu", age: 27, gender: "Female", status: "Discipled", location: "Accra", GPS: "Accra", contact: "+233 22 555 6789", email: "abena.owusu@example.com", notes: "Regular volunteer at church events." },
    { id: 7, name: "Yaw Boateng", age: 40, gender: "Male", status: "New", location: "Sunyani", GPS: "Sunyani", contact: "+233 30 123 4567", email: "yaw.boateng@example.com", notes: "New to the area." },
    { id: 8, name: "Esi Nkrumah", age: 35, gender: "Female", status: "Followed Up", location: "Koforidua", GPS: "Koforidua", contact: "+233 40 987 6543", email: "esi.nkrumah@example.com", notes: "Interested in Bible study groups." },
    { id: 9, name: "Kwesi Appiah", age: 29, gender: "Male", status: "Discipled", location: "Bolgatanga", GPS: "Bolgatanga", contact: "+233 29 555 1234", email: "kwesi.appiah@example.com", notes: "Wants to participate in leadership training." },
    { id: 10, name: "Nana Yaw", age: 50, gender: "Male", status: "New", location: "Ho", GPS: "Ho", contact: "+233 15 123 6789", email: "nana.yaw@example.com", notes: "Looking for spiritual guidance." },
    { id: 11, name: "Ama Kyei", age: 32, gender: "Female", status: "New", location: "Winneba", GPS: "Winneba", contact: "+233 59 123 4567", email: "ama.kyei@example.com", notes: "New attendee interested in church activities." },
    { id: 12, name: "Kwame Osei", age: 38, gender: "Male", status: "Followed Up", location: "Berekum", GPS: "Berekum", contact: "+233 61 987 6543", email: "kwame.osei@example.com", notes: "Asked about baptism." }
  ]);

  const [selectedSoul, setSelectedSoul] = useState(null);
  const [currentView, setCurrentView] = useState("table");
  const [followUpType, setFollowUpType] = useState("");
  const [showFollowUpDropdown, setShowFollowUpDropdown] = useState(false);
  const [techFormData, setTechFormData] = useState({ platform: "", message: "", scheduledDate: "", resources: [] });
  const [nonTechFormData, setNonTechFormData] = useState({ method: "", date: "", time: "", location: "", materials: "" });
  const [page, setPage] = useState(1);
  const limit = 10;
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({});

  // Calculate the current souls to display based on pagination
  const currentSouls = souls.slice((page - 1) * limit, page * limit);
  const totalPages = Math.ceil(souls.length / limit);

  const navigateToDashboard = (soul) => {
    setSelectedSoul(soul);
    setCurrentView("dashboard");
    setIsEditing(false);
  };

  const handleFollowUpSelect = (type) => {
    setFollowUpType(type);
    setShowFollowUpDropdown(false);
  };

  const handleTechFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setTechFormData((prev) => ({ ...prev, resources: [...prev.resources, value] }));
      } else {
        setTechFormData((prev) => ({ ...prev, resources: prev.resources.filter((item) => item !== value) }));
      }
    } else {
      setTechFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNonTechFormChange = (e) => {
    const { name, value } = e.target;
    setNonTechFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitFollowUp = () => {
    alert(`Follow-up planned for ${selectedSoul.name} via ${followUpType} method`);
    setFollowUpType("");
    setTechFormData({ platform: "", message: "", scheduledDate: "", resources: [] });
    setNonTechFormData({ method: "", date: "", time: "", location: "", materials: "" });
  };

  const startEditing = (soul) => {
    setEditFormData({ ...soul });
    setIsEditing(true);
  };

  const saveEdit = () => {
    const updatedSouls = souls.map(soul => 
      soul.id === selectedSoul.id ? { ...editFormData } : soul
    );
    setSouls(updatedSouls);
    setSelectedSoul(editFormData);
    setIsEditing(false);
    alert("Soul information updated successfully!");
  };

  const deleteSoul = (id) => {
    if (window.confirm("Are you sure you want to delete this soul record?")) {
      const updatedSouls = souls.filter(soul => soul.id !== id);
      setSouls(updatedSouls);
      if (selectedSoul && selectedSoul.id === id) {
        setCurrentView("table");
        setSelectedSoul(null);
      }
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E0E17] to-[#1A1A2C] text-[#F5F5FF] p-4 md:p-6">
      {/* Welcome + Summary */}
      {currentView === "table" && (
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Welcome back, John 👋</h1>
          <p className="text-[#9999B5] mt-2">
            You have added <span className="text-[#D946EF]">{souls.length}</span> souls so far.
          </p>
        </div>
      )}

      {/* Soul Table */}
      {currentView === "table" && (
        <div className="bg-[#1A1A2C] shadow-lg rounded-xl overflow-hidden border border-[#2A2A3F]">
          <div className="p-4 md:p-6 bg-gradient-to-r from-[#1A1A2C] to-[#2A2A3F] border-b border-[#2A2A3F]">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Soul Records</h1>
            <p className="text-[#9999B5]">Manage and track all souls in your care</p>
          </div>

          {/* Mobile Cards View */}
          <div className="md:hidden">
            <div className="space-y-3 p-4">
              {currentSouls.map((soul) => (
                <div
                  key={soul.id}
                  className="bg-[#2A2A3F] rounded-lg p-4 border border-[#3A3A4F] hover:border-[#D946EF] transition-colors cursor-pointer"
                  onClick={() => navigateToDashboard(soul)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D946EF] to-[#9333EA] flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{soul.name}</h3>
                        <p className="text-sm text-[#9999B5]">
                          {soul.age} • {soul.gender}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        soul.status === "New"
                          ? "bg-[#D946EF] text-white"
                          : soul.status === "Followed Up"
                          ? "bg-yellow-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {soul.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center text-[#9999B5]">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="truncate">{soul.location}</span>
                    </div>
                    <div className="flex items-center text-[#9999B5]">
                      <Phone className="w-4 h-4 mr-1" />
                      <span className="truncate">{soul.contact}</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateToDashboard(soul);
                    }}
                    className="w-full mt-3 bg-[#3A3A4F] hover:bg-[#4A4A5F] text-[#D946EF] hover:text-[#c026d3] font-medium py-2 rounded-lg transition-colors"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full min-w-full">
              <thead className="bg-[#2A2A3F]">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#9999B5]">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#9999B5]">Age</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#9999B5]">Gender</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#9999B5]">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#9999B5]">Location</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#9999B5]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A2A3F]">
                {currentSouls.map((soul) => (
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
                    <td className="px-4 py-3 text-[#9999B5]">{soul.age}</td>
                    <td className="px-4 py-3 text-[#9999B5]">{soul.gender}</td>
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
                    <td className="px-4 py-3 text-[#9999B5]">{soul.location}</td>
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

          {/* Pagination Controls - FIXED THIS SECTION */}
          <div className="flex justify-between items-center p-4 border-t border-[#2A2A3F]">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="bg-[#3A3A4F] text-white px-4 py-2 rounded-lg disabled:opacity-50 hover:bg-[#4A4A5F] transition-colors"
            >
              Previous
            </button>
            <span className="text-white">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="bg-[#3A3A4F] text-white px-4 py-2 rounded-lg disabled:opacity-50 hover:bg-[#4A4A5F] transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}

 {/* Dashboard View for Selected Soul */}
      {currentView === "dashboard" && selectedSoul && (
        <div className="bg-[#1A1A2C] rounded-xl border border-[#2A2A3F] overflow-hidden">
          {/* Dashboard Header */}
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
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${selectedSoul.status === "New" ? "bg-[#D946EF] text-white" : selectedSoul.status === "Followed Up" ? "bg-yellow-500 text-white" : "bg-green-500 text-white"}`}>
                  {selectedSoul.status}
                </span>
                <button
                  onClick={() => startEditing(selectedSoul)}
                  className="text-blue-400 hover:text-blue-300 p-2 rounded-lg hover:bg-[#2A2A3F] transition-colors"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => deleteSoul(selectedSoul.id)}
                  className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-[#2A2A3F] transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Soul Information Section */}
          <div className="p-4 md:p-6">
            {isEditing ? (
              <div className="bg-[#2A2A3F] p-4 rounded-lg border border-[#3A3A4F] mb-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Edit className="w-5 h-5 mr-2 text-[#D946EF]" />
                  Edit Soul Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#9999B5] mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditFormChange}
                      className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white focus:border-[#D946EF] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#9999B5] mb-1">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={editFormData.age}
                      onChange={handleEditFormChange}
                      className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white focus:border-[#D946EF] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#9999B5] mb-1">Gender</label>
                    <select
                      name="gender"
                      value={editFormData.gender}
                      onChange={handleEditFormChange}
                      className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white focus:border-[#D946EF] focus:outline-none"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#9999B5] mb-1">Status</label><select
                      name="status"
                      value={editFormData.status}
                      onChange={handleEditFormChange}
                      className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white focus:border-[#D946EF] focus:outline-none"
                    >
                      <option value="New">New</option>
                      <option value="Followed Up">Followed Up</option>
                      <option value="Discipled">Discipled</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#9999B5] mb-1">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={editFormData.location}
                      onChange={handleEditFormChange}
                      className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white focus:border-[#D946EF] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#9999B5] mb-1">GPS</label>
                    <input
                      type="text"
                      name="GPS"
                      value={editFormData.GPS}
                      onChange={handleEditFormChange}
                      className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white focus:border-[#D946EF] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#9999B5] mb-1">Contact</label>
                    <input
                      type="text"
                      name="contact"
                      value={editFormData.contact}
                      onChange={handleEditFormChange}
                      className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white focus:border-[#D946EF] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#9999B5] mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditFormChange}
                      className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white focus:border-[#D946EF] focus:outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#9999B5] mb-1">Notes</label>
                    <textarea
                      name="notes"
                      value={editFormData.notes}
                      onChange={handleEditFormChange}
                      rows="3"
                      className="w-full bg-[#2A2A3F] border border-[#4A4A5F] rounded-lg px-3 py-2 text-white focus:border-[#D946EF] focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-3 mt-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-[#3A3A4F] text-white px-4 py-2 rounded-lg hover:bg-[#4A4A5F] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveEdit}
                    className="bg-gradient-to-r from-[#D946EF] to-[#9333EA] hover:from-[#c026d3] hover:to-[#7e22ce] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="bg-[#2A2A3F] p-4 rounded-lg border border-[#3A3A4F]">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <User className="w-5 h-5 mr-2 text-[#D946EF]" />
                      Personal Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-[#9999B5]">Name:</span>
                        <span className="text-white">{selectedSoul.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#9999B5]">Age:</span>
                        <span className="text-white">{selectedSoul.age}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#9999B5]">Gender:</span>
                        <span className="text-white">{selectedSoul.gender}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#9999B5]">Status:</span>
                        <span className="text-white">{selectedSoul.status}</span>
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
                      <div className="flex justify-between">
                        <span className="text-[#9999B5]">Location:</span>
                        <span className="text-white flex items-center">
                          <MapPin className="w-4 h-4 mr-1 text-[#D946EF]" />
                          {selectedSoul.location}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#9999B5]">GPS:</span>
                        <span className="text-white flex items-center">
                          <MapPin className="w-4 h-4 mr-1 text-[#D946EF]" />
                          {selectedSoul.GPS}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes Section */}
                <div className="bg-[#2A2A3F] p-4 rounded-lg border border-[#3A3A4F] mb-6 md:mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">Notes</h3>
                  <p className="text-[#CCCCEE]">{selectedSoul.notes}</p>
                </div>
              </>
            )}

            {/* Follow Up Section */}
            <div className="bg-[#2A2A3F] p-4 rounded-lg border border-[#3A3A4F]">
              <h3 className="text-lg font-semibold text-white mb-4">Plan Follow Up</h3>

              {/* Dropdown for follow-up type */}
              <div className="mb-6">
                <button
                  onClick={() => setShowFollowUpDropdown(!showFollowUpDropdown)}
                  className="w-full bg-[#3A3A4F] border border-[#4A4A5F] rounded-lg px-4 py-3 text-left flex items-center justify-between text-white hover:bg-[#4A4A5F] transition-colors"
                >
                  <span>{followUpType || "Select follow-up method"}</span>
                  {showFollowUpDropdown ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>

                {showFollowUpDropdown && (
                  <div className="mt-2 w-full bg-[#3A3A4F] border border-[#4A4A5F] rounded-lg shadow-lg overflow-hidden flex flex-col">
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

              {/* Display both forms but conditionally show based on selection */}
              <div className="space-y-4">
                {/* Tech-inclined Form */}
                <div className={`bg-[#3A3A4F] p-4 rounded-lg border border-[#4A4A5F] ${followUpType !== "Tech-inclined" ? 'hidden' : ''}`}>
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {["E-book", "Video", "Podcast", "Article", "Online Event"].map(resource => (
                          <label key={resource} className="flex items-center">
                            <input
                              type="checkbox"
                              value={resource}
                              checked={techFormData.resources.includes(resource)}
                              onChange={handleTechFormChange}
                              className="rounded border-[#4A4A5F] text-[#D946EF] focus:ring-[#D946EF] bg-[#2A2A3F]"
                            />
                            <span className="ml-2 text-white text-sm">{resource}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Non-tech inclined Form */}
                <div className={`bg-[#3A3A4F] p-4 rounded-lg border border-[#4A4A5F] ${followUpType !== "Non-tech inclined" ? 'hidden' : ''}`}>
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
              </div>

              {/* Submit Button */}
              {followUpType && (
                <button
                  onClick={submitFollowUp}
                  className="w-full mt-4 bg-gradient-to-r from-[#D946EF] to-[#9333EA] hover:from-[#c026d3] hover:to-[#7e22ce] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300"
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