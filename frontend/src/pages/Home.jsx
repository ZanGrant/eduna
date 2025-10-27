import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PromoBanner from "../components/PromoBanner";
import AboutUs from "../components/AboutUs";
import Recommendation from "../components/Recommendation"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PromoBanner />
      <AboutUs />
      <Recommendation />
      <Footer />
    </div>
  );
};

export default Home;
