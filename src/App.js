// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedTours from './components/FeaturedTour';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedTours />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
