import React from 'react';
import { Mail, Phone, MapPin, Calendar, Users, Edit, BookOpen, Award } from 'lucide-react';

const Profile = () => {
  // Profile data
  const profileData = {
    name: "John Doe",
    role: "Senior Volunteer",
    email: "johndoe@example.com",
    phone: "+233 123 456 789",
    location: "Accra, Ghana",
    joinDate: "January 10, 2024",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    stats: {
      soulsWon: 42,
      followUps: 28,
      events: 12,
      teams: 3
    },
    scripture: {
      text: "He that winneth souls is wise",
      reference: "Proverbs 11:30"
    },
    testimony: "I gave my life to Christ in 2015 and have since dedicated myself to spreading the gospel. I believe in the power of one-on-one evangelism and have seen God work through every outreach I've joined. Last month alone, I led 5 people to Christ during our campus outreach program."
  };

  return (
    <div className="min-h-screen  text-white p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Profile Summary */}
          <div className="space-y-6">
            <div className="bg-[#1A1A27] rounded-xl p-6 flex flex-col items-center shadow-lg">
              <img
                src={profileData.avatar}
                alt="Profile"
                className="rounded-full w-32 h-32 mb-4 object-cover border-2 border-pink-500"
              />
              <h2 className="text-xl font-bold text-center">{profileData.name}</h2>
              <div className="flex items-center gap-1 text-pink-400 text-sm">
                <Award className="w-4 h-4" />
                <span>{profileData.role}</span>
              </div>
              <button className="mt-4 flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full text-sm transition-colors">
                <Edit className="w-4 h-4" />
                Edit Profile
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-[#1A1A27] rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-pink-400 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-[#2C1C33] p-3 rounded-lg text-center">
                  <div className="text-pink-400 font-bold text-xl">{profileData.stats.soulsWon}</div>
                  <div className="text-gray-400">Souls Won</div>
                </div>
                <div className="bg-[#2C1C33] p-3 rounded-lg text-center">
                  <div className="text-blue-400 font-bold text-xl">{profileData.stats.followUps}</div>
                  <div className="text-gray-400">Follow Ups</div>
                </div>
                <div className="bg-[#2C1C33] p-3 rounded-lg text-center">
                  <div className="text-green-400 font-bold text-xl">{profileData.stats.events}</div>
                  <div className="text-gray-400">Events</div>
                </div>
                <div className="bg-[#2C1C33] p-3 rounded-lg text-center">
                  <div className="text-yellow-400 font-bold text-xl">{profileData.stats.teams}</div>
                  <div className="text-gray-400">Teams</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Contact Info */}
            <div className="bg-[#1A1A27] rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-pink-400 mb-4">Contact Information</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-400">Email</div>
                    <div className="text-white">{profileData.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-400">Phone</div>
                    <div className="text-white">{profileData.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-400">Location</div>
                    <div className="text-white">{profileData.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-400">Member Since</div>
                    <div className="text-white">{profileData.joinDate}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Favorite Scripture */}
            <div className="bg-[#1A1A27] rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-pink-400 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Favorite Scripture
              </h3>
              <div className="bg-[#2C1C33] p-4 rounded-lg">
                <p className="italic text-gray-300 text-lg">"{profileData.scripture.text}"</p>
                <p className="text-right text-pink-400 mt-2">— {profileData.scripture.reference}</p>
              </div>
            </div>

            {/* Testimony */}
            <div className="bg-[#1A1A27] rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-pink-400 mb-4">Personal Testimony</h3>
              <p className="text-gray-300 leading-relaxed">
                {profileData.testimony}
              </p>
            </div>

            {/* Recent Activity */}
            <div className="bg-[#1A1A27] rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-pink-400 mb-4">Recent Activity</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-white">Led prayer with 3 new contacts</div>
                    <div className="text-gray-400 text-xs">Yesterday at 4:30 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-white">Follow-up meeting with Sarah</div>
                    <div className="text-gray-400 text-xs">2 days ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-white">Participated in campus outreach</div>
                    <div className="text-gray-400 text-xs">1 week ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;