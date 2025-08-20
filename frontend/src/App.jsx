import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/landingPage';
import AuthPage from './pages/Auth';
import Dashboard from './pages/Dashboard';
import AddSoul from './pages/addSoulPage';
import SoulTable from './pages/soulsTable';
import WelcomeDashboard from './pages/userDashboard';
import SoulAnalysis from './pages/volunteerReport';
import Profile from './pages/profile'; 


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/WelcomeDashboard" element={<WelcomeDashboard />} />
      <Route path="/add-soul" element={<AddSoul />} />
      <Route path="/souls-table" element={<SoulTable />} />
      <Route path="/analytics" element={<SoulAnalysis />} />
      <Route path="/profile" element={<Profile />} /> 
    </Routes>
  );
}
