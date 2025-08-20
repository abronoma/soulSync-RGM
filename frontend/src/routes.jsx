import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import AddSoul from "./pages/AddSoul"; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/add-soul" element={<AddSoul />} /> 
      </Routes>
    </Router>
  );
}

export default App;
