import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const toggleMode = () => setIsLogin(!isLogin);
  
  const handleGoogleSignIn = () => {
    console.log("Google Sign In Triggered");
    // Simulate successful authentication
    navigate("/WelcomeDashboard");
    onClose();
  };
  
  const handleEmailAuth = (e) => {
    e.preventDefault();
    console.log(`${isLogin ? "Login" : "Signup"} with email`);
    // Simulate successful authentication
    navigate("/WelcomeDashboard");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-blend-color-burn bg-opacity-5 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-20 backdrop-blur-md border border-white border-opacity-20 p-8 rounded-xl max-w-md w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl hover:text-gray-300 transition-colors"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          {isLogin ? "Welcome Back" : "Join SoulSync"}
        </h2>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-white bg-opacity-95 text-dark py-3 rounded-lg font-semibold hover:bg-opacity-100 transition mb-6"
        >
          <FcGoogle className="w-5 h-5" />
          Continue with Google
        </button>

        <div className="text-white text-opacity-70 text-sm text-center mb-4">or</div>

        <form onSubmit={handleEmailAuth} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-md bg-black bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:border-opacity-50 focus:bg-opacity-30 transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 rounded-md bg-black bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:border-opacity-50 focus:bg-opacity-30 transition-all"
          />
          <button
            type="submit"
            className="btn-primary w-full py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-sm text-white text-opacity-70 text-center mt-6">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button onClick={toggleMode} className="text-white underline hover:text-opacity-80 transition-colors">
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={toggleMode} className="text-white underline hover:text-opacity-80 transition-colors">
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