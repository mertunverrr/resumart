import { useState } from "react";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume-builder" element={<Information />} />
      </Routes>
    </Router>
  );
}

export default App;
