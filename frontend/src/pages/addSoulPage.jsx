import React, { useState } from 'react';
import { Plus, User, Phone, Mail, MapPin, BookOpen, Users, ExternalLink } from 'lucide-react';

const AddSoul = () => {
  const [googleLocation, setGoogleLocation] = useState('');

  const openGoogleMaps = () => {
    const googleMapsUrl = "https://www.google.com/maps?output=search";
    const windowFeatures = "width=800,height=600,resizable=yes,scrollbars=yes";
    
    window.open(googleMapsUrl, "GoogleMaps", windowFeatures);
    
    setTimeout(() => {
      if (confirm("Please select a location in Google Maps, then come back and enter it manually.")) {
        const manualLocation = prompt("Please enter the location you selected:");
        if (manualLocation) {
          setGoogleLocation(manualLocation);
        }
      }
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E0E17] to-[#1A1A2C] text-[#F5F5FF] p-4 md:p-6">
      {/* Main Container that includes header and form */}
      <div className="bg-[#1A1A2C] rounded-xl border border-[#2A2A3F] overflow-hidden max-w-5xl mx-auto">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#D946EF] mb-4">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Log a New Soul</h1>
            <p className="text-[#9999B5]">Track spiritual connections with precision</p>
          </div>

          {/* Form Content */}
          <div className="space-y-8">
              {/* Personal Information Section */}
              <div className="bg-[#2A2A3F] p-5 rounded-lg border border-[#3A3A4F] space-y-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <User className="w-5 h-5 text-[#D946EF]" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#9999B5]">Full Name *</label>
                    <input
                      className="w-full rounded-lg bg-[#3A3A4F] border border-[#4A4A5F] px-4 py-3 text-white placeholder-[#666687] focus:border-[#D946EF] focus:outline-none"
                      placeholder="Enter full name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#9999B5]">Gender *</label>
                      <select className="w-full rounded-lg bg-[#3A3A4F] border border-[#4A4A5F] px-4 py-3 text-white focus:border-[#D946EF] focus:outline-none">
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#9999B5]">Age *</label>
                      <input
                        type="number"
                        className="w-full rounded-lg bg-[#3A3A4F] border border-[#4A4A5F] px-4 py-3 text-white placeholder-[#666687] focus:border-[#D946EF] focus:outline-none"
                        placeholder="Age"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="bg-[#2A2A3F] p-5 rounded-lg border border-[#3A3A4F] space-y-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#D946EF]" />
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#9999B5]">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#666687]" />
                      <input
                        type="tel"
                        className="w-full rounded-lg bg-[#3A3A4F] border border-[#4A4A5F] px-10 py-3 text-white placeholder-[#666687] focus:border-[#D946EF] focus:outline-none"
                        placeholder="+233 24 123 4567"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#9999B5]">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#666687]" />
                      <input
                        type="email"
                        className="w-full rounded-lg bg-[#3A3A4F] border border-[#4A4A5F] px-10 py-3 text-white placeholder-[#666687] focus:border-[#D946EF] focus:outline-none"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  
                  {/* Regular Location Field */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-[#9999B5]">General Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#666687]" />
                      <input
                        className="w-full rounded-lg bg-[#3A3A4F] border border-[#4A4A5F] px-10 py-3 text-white placeholder-[#666687] focus:border-[#D946EF] focus:outline-none"
                        placeholder="City"
                      />
                    </div>
                  </div>

                  {/* Google Maps Location Field */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-[#9999B5] flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Google Map Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#666687] z-10" />
                      <input
                        className="w-full rounded-lg bg-[#3A3A4F] border border-[#4A4A5F] px-10 py-3 text-white placeholder-[#666687] focus:border-[#D946EF] focus:outline-none pr-12"
                        placeholder="Click to select location or type manually"
                        value={googleLocation}
                        onChange={(e) => setGoogleLocation(e.target.value)}
                        onClick={openGoogleMaps}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#D946EF] hover:text-[#9333EA] z-20"
                        onClick={openGoogleMaps}
                        title="Open Google Maps"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-[#666687]">
                        Click to open Google Maps or type location manually
                      </p>
                      {googleLocation && (
                        <button
                          type="button"
                          onClick={() => setGoogleLocation('')}
                          className="text-xs text-[#D946EF] hover:text-[#9333EA]"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Outreach Status Section */}
              <div className="bg-[#2A2A3F] p-5 rounded-lg border border-[#3A3A4F] space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#D946EF]" />
                  Outreach Status
                </h3>
                
                <div className="flex justify-center">
                  <div className="flex flex-wrap gap-3 justify-center max-w-2xl">
                    {[
                     { 
                        label: "Prayed With", 
                        color: "from-[#D946EF] to-[#9333EA]",
                        icon: "🙏"
                      },
                      { 
                        label: "Gave Life to Christ", 
                        color: "from-[#7C3AED] to-[#6D28D9]",
                        icon: "✝️"
                      },
                      { 
                        label: "Born Again", 
                        color: "from-[#9333EA] to-[#7E22CE]",
                        icon: "✨"
                      }
                    ].map((status, i) => (
                      <button
                        key={i}
                        className={`
                          px-6 py-3 rounded-lg border border-[#4A4A5F]
                          bg-gradient-to-r ${status.color} text-white font-medium 
                          hover:scale-105 transition-all duration-200
                          flex items-center gap-2
                          text-sm
                        `}
                      >
                        <span className="text-lg">{status.icon}</span>
                        <span>{status.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="bg-[#2A2A3F] p-5 rounded-lg border border-[#3A3A4F] space-y-3">
                <label className="text-lg font-semibold text-white">Additional Notes</label>
                <textarea
                  className="w-full rounded-lg bg-[#3A3A4F] border border-[#4A4A5F] px-4 py-3 text-white placeholder-[#666687] focus:border-[#D946EF] focus:outline-none min-h-[120px] resize-none"
                  placeholder="Share any insights, prayer requests, or follow-up details..."
                />
              </div>

              {/* Volunteer Assignment */}
              <div className="bg-[#2A2A3F] p-5 rounded-lg border border-[#3A3A4F] space-y-3">
                <label className="text-lg font-semibold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#D946EF]" />
                  Assign to Volunteer
                </label>
                <select className="w-full rounded-lg bg-[#3A3A4F] border border-[#4A4A5F] px-4 py-3 text-white focus:border-[#D946EF] focus:outline-none">
                  <option value="">Select a volunteer...</option>
                  <option value="john">John Doe (Evangelism Team)</option>
                  <option value="jane">Jane Smith (Follow-up Team)</option>
                  <option value="mike">Mike Johnson (Prayer Team)</option>
                  <option value="sarah">Sarah Wilson (Discipleship Team)</option>
                </select>
              </div>

              {/* Form Actions */}
              <div className="flex justify-center pt-6 border-t border-[#3A3A4F]">
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg w-full">
                  <button className="flex-1 px-6 py-3 rounded-lg bg-[#3A3A4F] hover:bg-[#4A4A5F] text-white border border-[#4A4A5F] transition-colors">
                    Save as Draft
                  </button>
                  <button className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[#D946EF] to-[#9333EA] hover:from-[#c026d3] hover:to-[#7e22ce] text-white font-semibold transition-all shadow-lg">
                    Save Soul Record
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <p className="text-center text-[#666687] text-sm mt-6">
          All information is securely stored and used solely for spiritual guidance purposes.
        </p>
      </div>
    );
  };

export default AddSoul;