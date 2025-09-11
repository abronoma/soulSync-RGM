import React, { useState } from 'react';
import { Plus, User, Phone, Mail, MapPin, BookOpen, Users, ExternalLink } from 'lucide-react';

const LocationField = () => {
  const [location, setLocation] = useState('');

  const openGoogleMaps = () => {
    // Open Google Maps with better parameters
    const googleMapsUrl = "https://www.google.com/maps?output=search";
    const windowFeatures = "width=800,height=600,resizable=yes,scrollbars=yes";
    
    window.open(googleMapsUrl, "GoogleMaps", windowFeatures);
    
    // Fallback: prompt user to enter location manually
    setTimeout(() => {
      if (confirm("Please select a location in Google Maps, then come back and enter it manually.")) {
        const manualLocation = prompt("Please enter the location you selected:");
        if (manualLocation) {
          setLocation(manualLocation);
        }
      }
    }, 3000);
  };

  const handleInputClick = () => {
    openGoogleMaps();
  };

  const handleManualInput = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="space-y-2 md:col-span-2">
      <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        Google Map Location
      </label>
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#666687] z-10" />
        <input
          className="w-full rounded-xl bg-[#2D1B46] px-10 py-3 text-white placeholder-[#666687] outline-none focus:ring-2 focus:ring-[#9333EA] border border-[#3E3E4D] pr-10"
          placeholder="Click to select location or type manually"
          value={location}
          onChange={handleManualInput}
          onClick={handleInputClick}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#D946EF] hover:text-[#9333EA]"
          onClick={handleInputClick}
          title="Open Google Maps"
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xs text-[#666687]">
          Click to open Google Maps or type location manually
        </p>
        {location && (
          <button
            type="button"
            onClick={() => setLocation('')}
            className="text-xs text-[#D946EF] hover:text-[#9333EA]"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

const AddSoul = () => {
  return (
    <div className="min-h-screen text-white bg-[#0F0F1A] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#D946EF] mb-4">
            <Plus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Log a New Soul</h1>
          <p className="text-[#9999B5]">Track spiritual connections with precision</p>
        </div>

        {/* Form Container */}
        <div className="bg-[#1A1A2E] rounded-2xl shadow-2xl border border-[#2D1B46] overflow-hidden">
          {/* Form Content */}
          <div className="p-6 space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <User className="w-5 h-5 text-[#D946EF]" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Full Name *</label>
                  <input
                    className="w-full rounded-xl bg-[#2D1B46] px-4 py-3 text-white placeholder-[#666687] outline-none focus:ring-2 focus:ring-[#9333EA] border border-[#3E3E4D] transition-all"
                    placeholder="Enter full name"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Gender *</label>
                    <select className="w-full rounded-xl bg-[#2D1B46] px-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#9333EA] border border-[#3E3E4D]">
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Age *</label>
                    <input
                      type="number"
                      className="w-full rounded-xl bg-[#2D1B46] px-4 py-3 text-white placeholder-[#666687] outline-none focus:ring-2 focus:ring-[#9333EA] border border-[#3E3E4D]"
                      placeholder="Age"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#D946EF]" />
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#666687]" />
                    <input
                      type="tel"
                      className="w-full rounded-xl bg-[#2D1B46] px-10 py-3 text-white placeholder-[#666687] outline-none focus:ring-2 focus:ring-[#9333EA] border border-[#3E3E4D]"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#666687]" />
                    <input
                      type="email"
                      className="w-full rounded-xl bg-[#2D1B46] px-10 py-3 text-white placeholder-[#666687] outline-none focus:ring-2 focus:ring-[#9333EA] border border-[#3E3E4D]"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                
                {/* Regular Location Field */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-300">General Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#666687]" />
                    <input
                      className="w-full rounded-xl bg-[#2D1B46] px-10 py-3 text-white placeholder-[#666687] outline-none focus:ring-2 focus:ring-[#9333EA] border border-[#3E3E4D]"
                      placeholder="City"
                    />
                  </div>
                </div>

                {/* Google Maps Location Field */}
                <LocationField />
              </div>
            </div>

            {/* Outreach Status Section */}
<div className="space-y-3">
  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
    <BookOpen className="w-5 h-5 text-[#D946EF]" />
    Outreach Status
  </h3>
  
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
    {[
      { 
        label: "Prayed With", 
        color: "from-[#3B82F6] to-[#1D4ED8]",
        icon: "🙏"
      },
      { 
        label: "Gave Life to Christ", 
        color: "from-[#10B981] to-[#059669]",
        icon: "✝️"
      },
      { 
        label: "Born Again", 
        color: "from-[#8B5CF6] to-[#7C3AED]",
        icon: "✨"
      }
    ].map((status, i) => (
      <button
        key={i}
        className={`
          p-2 sm:p-3 rounded-lg border border-[#3E3E4D] 
          bg-gradient-to-r ${status.color} text-white font-medium 
          hover:scale-105 transition-all duration-200
          flex items-center justify-center gap-2
          min-h-[60px] sm:min-h-[70px]
          text-xs sm:text-sm
        `}
      >
        <span className="text-xl">{status.icon}</span>
        <span className="text-center leading-tight">{status.label}</span>
      </button>
    ))}
  </div>
</div>

            {/* Additional Notes */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300">Additional Notes</label>
              <textarea
                className="w-full rounded-xl bg-[#2D1B46] px-4 py-3 text-white placeholder-[#666687] outline-none focus:ring-2 focus:ring-[#9333EA] border border-[#3E3E4D] min-h-[120px] resize-none"
                placeholder="Share any insights, prayer requests, or follow-up details..."
              />
            </div>

            {/* Volunteer Assignment */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#D946EF]" />
                Assign to Volunteer
              </label>
              <select className="w-full rounded-xl bg-[#2D1B46] px-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#9333EA] border border-[#3E3E4D]">
                <option value="">Select a volunteer...</option>
                <option value="john">John Doe (Evangelism Team)</option>
                <option value="jane">Jane Smith (Follow-up Team)</option>
                <option value="mike">Mike Johnson (Prayer Team)</option>
                <option value="sarah">Sarah Wilson (Discipleship Team)</option>
              </select>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#3E3E4D]">
              <button className="flex-1 px-6 py-3 rounded-xl bg-[#2D1B46] text-white border border-[#3E3E4D] hover:bg-[#3E3E4D] transition-colors">
                Save as Draft
              </button>
              <button className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white font-semibold hover:from-[#6D28D9] hover:to-[#C026D3] transition-all shadow-lg hover:shadow-[#D946EF]/30">
                Save Soul Record
              </button>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <p className="text-center text-[#666687] text-sm mt-6">
          All information is securely stored and used solely for spiritual guidance purposes.
        </p>
      </div>
    </div>
  );
};

export default AddSoul;