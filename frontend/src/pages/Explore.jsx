import React from 'react';
import Navbar from "../components/Navbar";
import Explore1 from "../components/Explore1";
import Footer from "../components/Footer";

const Explore = () => {
  return (
    <div>
      <Navbar />

      <div className="explore-page">
        <Explore1 />
      </div>

      <Footer />
    </div>
  );
};

export default Explore;