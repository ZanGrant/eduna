import React from 'react';
import "../styles/Recommendation.css";
import museumImg from "../assets/images/Museum.png";
import ranohImg from "../assets/images/RanohIsland.png";
import vietnamImg from "../assets/images/VietnamCamp.png"
import hutanImg from "../assets/images/HutanWisataMataKucing.png"


const RecommendationExplore = () => {
  const locations = [
    {
      id: 1,
      title: "Museum Batam Raja Ali Haji",
      category: "Heritage Tourism",
      image: museumImg,
      comingSoon: false
    },
    {
      id: 2,
      title: "Ranoh Island Resort",
      category: "Nature Tourism",
      image: ranohImg,
      comingSoon: true
    },
    {
      id: 3,
      title: "Vietnam Camp, Galang Island",
      category: "Heritage Tourism",
      image: vietnamImg,
      comingSoon: true
    },
    {
      id: 4,
      title: "Hutan Wisata Mata Kucing",
      category: "Nature Tourism",
      image: hutanImg,
      comingSoon: true
    }
  ];

  return (
    <div className="recommendation-explore">
      <div className="pattern-background"></div>

      <div className="container">
        {/* Header */}
        <h2 className="heading">
          <span className="heading-gradient">Recommended Location to Explore!</span>
        </h2>

        {/* Cards Grid */}
        <div className="cards-grid">
          {locations.map((location) => (
            <div key={location.id} className="location-card">
              {/* Image Container */}
              <div className="image-container">
                <img
                  src={location.image}
                  alt={location.title}
                  className="location-image"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop`;
                  }}
                />
                
                {/* Coming Soon Badge */}
                {location.comingSoon && (
                  <div className="coming-soon-overlay">
                    <span className="coming-soon-badge">COMING SOON</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="card-content">
                <h3 className="location-title">{location.title}</h3>
                <p className="location-category">{location.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationExplore;