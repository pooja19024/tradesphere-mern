import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;