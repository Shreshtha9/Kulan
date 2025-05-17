import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import EmailHero from "./components/EmailHero";
import DisplayAds from "./Pages/DisplayAds";
 
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email-hero" element={<EmailHero />} />
          <Route path="/about" element={<About />} />
          <Route path="/display-ads" element={<DisplayAds />} />
      </Routes>
    </Router>
  );
}

export default App;
