import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/home";
import Auction from "./Components/auction";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="main-panel">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auction" element={<Auction />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
