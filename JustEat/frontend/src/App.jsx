import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodCarousel from "./components/FoodCarousel";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import SignInModal from "./components/SignInSidebar";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  const [showSign, setShowSign] = useState(false);
  return (
    <>
      <Navbar onSignIn={() => setShowSign(true)} />
      <Hero />
      <FoodCarousel />
      <CTA />
      <WhyChooseUs/>
      <Footer />
      <SignInModal show={showSign} onClose={() => setShowSign(false)} />
    </>
  );
}
