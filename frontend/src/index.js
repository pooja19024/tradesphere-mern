import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landling_page/home/HomePage";
import Signup from "./landling_page/signup/Signup";
import AboutPage from "./landling_page/about/AboutPage";
import ProductPage from "./landling_page/products/ProductPage";
import PricingPage from "./landling_page/pricing/PricingPage";
import SupportPage from "./landling_page/support/SupportPage";

import NotFound from "./landling_page/NotFound";
import Navbar from "./landling_page/Navbar";
import Footer from "./landling_page/Footer";
import Login from "./landling_page/login/Login";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
      <Routes>
      
       <Route path="/" element={<HomePage />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/products" element={<ProductPage />} />
       <Route path="/pricing" element={<PricingPage />} />
       <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
  </BrowserRouter>
);

