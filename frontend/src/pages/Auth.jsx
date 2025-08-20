import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Manage form state
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  if (!isOpen) return null;

  const toggleMode = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign In Triggered");
    navigate("/WelcomeDashboard");
    onClose();
  };

  const handleEmailAuth = (e) => {
    e.preventDefault();
    console.log(
      `${isLogin ? "Login" : "Signup"} with data:`,
      formData
    );
    navigate("/WelcomeDashboard");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-30 backdrop-blur-md border border-white border-opacity-20 p-8 rounded-2xl max-w-md w-full relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl hover:text-gray-300 transition-colors"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          {isLogin ? "Welcome Back" : "Join SoulSync"}
        </h2>

        {/* Google Sign-in */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition mb-6"
        >
          <FcGoogle className="w-5 h-5" />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <hr className="flex-1 border-white border-opacity-30" />
          <span className="text-white text-opacity-70 text-sm">or</span>
          <hr className="flex-1 border-white border-opacity-30" />
        </div>

        {/* Email/Signup Form */}
        <form onSubmit={handleEmailAuth} className="space-y-4">
          {/* Full Name (only for signup) */}
          {!isLogin && (
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-black bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-opacity-30 transition-all"
              required
            />
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-black bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-opacity-30 transition-all"
            required
          />

          {/* Phone (only for signup) */}
          {!isLogin && (
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-black bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-opacity-30 transition-all"
              required
            />
          )}

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-black bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-opacity-30 transition-all"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="text-sm text-white text-opacity-80 text-center mt-6">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={toggleMode}
                className="text-purple-400 underline hover:text-purple-300 transition-colors"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={toggleMode}
                className="text-purple-400 underline hover:text-purple-300 transition-colors"
              >
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
