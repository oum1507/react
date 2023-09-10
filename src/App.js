
import './App.css';
import "./input.css";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gradient-to-b from-[#F5F5DC] to-[#F5DEB3] h-screen">
        <Navbar/>
        
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/details" element={<DetailsPage/>} />
            </Routes>
      </div>
    );
  }
 
  export default App;
