import React, { useState } from 'react';
import "../styles/Explore1.css";
import { Search, Filter } from 'lucide-react';
import museumImg from "../assets/images/Museum.png";
import ranohImg from "../assets/images/RanohIsland.png";
import vietnamImg from "../assets/images/VietnamCamp.png"
import hutanImg from "../assets/images/HutanWisataMataKucing.png"
import batamzooImg from "../assets/images/BatamZooParadise.png"
import waterparkImg from "../assets/images/Waterpark.png"
import tamanrusaImg from "../assets/images/TamanRusa.png"
import megawisataImg from "../assets/images/MegaWisataOcarina.png"

const Explore = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const destinations = [
    {
      id: 1,
      name: 'Museum Raja Ali Haji Batam',
      category: 'Sejarah',
      image: museumImg,
      status: 'available',
      badge: 'Learning Available'
    },
    {
      id: 2,
      name: 'Kampung Vietnam',
      category: 'Sejarah',
      image: vietnamImg,
      status: 'coming-soon'
    },
    {
      id: 3,
      name: 'Ranoh Island Resort',
      category: 'Resort - Pantai',
      image: ranohImg,
      status: 'coming-soon'
    },
    {
      id: 4,
      name: 'Waterpark Top 100 Batu Aji',
      category: 'Waterpark',
      image: waterparkImg,
      status: 'coming-soon'
    },
    {
      id: 5,
      name: 'Hutan Wisata Mata Kucing',
      category: 'Hutan Wisata',
      image: hutanImg,
      status: 'coming-soon'
    },
    {
      id: 6,
      name: 'Taman Rusa Sekupang',
      category: 'Kebun Binatang - Taman',
      image: tamanrusaImg,
      status: 'coming-soon'
    },
    {
      id: 7,
      name: 'Mega Wisata Ocarina',
      category: 'Mega Wisata',
      image: megawisataImg,
      status: 'coming-soon'
    },
    {
      id: 8,
      name: 'Batam Zoo Paradise',
      category: 'Kebun Binatang',
      image: batamzooImg,
      status: 'coming-soon'
    }
  ];

  // 🔍 Filter destinasi berdasarkan tab & pencarian
  const filteredDestinations = destinations.filter((destination) => {
    // Filter berdasarkan tab aktif
    if (activeTab === 'learning' && !destination.badge) return false;
    if (activeTab === 'completed') return false; // ❌ Belum ada data completed
    if (!destination.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      {/* Search Bar */}
      <div className="search-container">
        <Search className="search-icon" size={20} />
        <input 
          type="text" 
          placeholder="Search Location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button 
          className={`tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button 
          className={`tab ${activeTab === 'learning' ? 'active' : ''}`}
          onClick={() => setActiveTab('learning')}
        >
          Learning
        </button>
        <button 
          className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </button>
        <button className="tab kategori">
          <Filter size={16} />
          Kategori
        </button>
      </div>

      {/* Destination Cards */}
      <div className="destination-grid">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="card-image">
                <img src={destination.image} alt={destination.name} />
                {destination.status === 'coming-soon' && (
                  <div className="coming-soon-badge">COMING SOON</div>
                )}
                {destination.badge && (
                  <div className="learning-badge">{destination.badge}</div>
                )}
              </div>
              <div className="card-content">
                <h3 className="card-title">{destination.name}</h3>
                <p className="card-category">{destination.category}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-result">No destinations found.</p>
        )}
      </div>
    </>
  );
};

export default Explore;
