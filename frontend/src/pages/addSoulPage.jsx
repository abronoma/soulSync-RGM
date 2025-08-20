import React from 'react';
import { Plus } from 'lucide-react';

const AddSoul = () => {
  return (
    <div className="min-h-screen text-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#1A1A27] rounded-xl shadow-lg overflow-hidden">
        {/* Form Header */}
        <div className="bg-[#2C1C33] p-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold flex items-center gap-2">
           
            Log a New Soul
          </h2>
          <div className="text-sm text-gray-400">All fields are required</div>
        </div>

        {/* Form Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div className="space-y-5">
            {/* Personal Info */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Personal Information</label>
              <input 
                className="w-full rounded-lg bg-[#2C1C33] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D946EF]" 
                placeholder="Full Name" 
              />
              <div className="grid grid-cols-2 gap-3">
                <input 
                  className="w-full rounded-lg bg-[#2C1C33] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D946EF]" 
                  placeholder="Gender" 
                />
                <input 
                  className="w-full rounded-lg bg-[#2C1C33] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D946EF]" 
                  placeholder="Age" 
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Contact Information</label>
              <input 
                className="w-full rounded-lg bg-[#2C1C33] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D946EF]" 
                placeholder="Phone Number" 
              />
              <input 
                className="w-full rounded-lg bg-[#2C1C33] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D946EF]" 
                placeholder="Email" 
              />
              <input 
                className="w-full rounded-lg bg-[#2C1C33] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D946EF]" 
                placeholder="Location" 
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-5">
            {/* Outreach Status */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Outreach Status</label>
              <div className="grid grid-cols-2 gap-2">
                {["Prayed With", "Gave Life to Christ", "Was born again"].map((status, i) => (
                  <button
                    key={i}
                    className="px-3 py-2 rounded-lg border border-[#3E3E4D] text-sm text-white hover:bg-[#D946EF] hover:border-[#D946EF] transition-colors text-center"
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Notes</label>
              <textarea 
                className="w-full rounded-lg bg-[#2C1C33] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D946EF] min-h-[100px]" 
                placeholder="Any additional information..."
              />
            </div>

            {/* Volunteer Assignment */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Assign to Volunteer</label>
              <select className="w-full rounded-lg bg-[#2C1C33] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D946EF]">
                <option value="">Select Volunteer</option>
                <option value="john">John Doe</option>
                <option value="jane">Jane Smith</option>
                <option value="mike">Mike Johnson</option>
              </select>
            </div>

            {/* Save Button */}
            <button className="w-full bg-[#D946EF] hover:bg-[#f472d0] text-white py-3 rounded-lg text-sm font-semibold mt-4 transition-colors">
              Save Soul Record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSoul;