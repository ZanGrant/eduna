import React, { useState } from 'react';
import "../styles/Explore1.css";
import { Search, Filter } from 'lucide-react';

const Explore = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const destinations = [
    {
      id: 1,
      name: 'Museum Raja Ali Haji Batam',
      category: 'Sejarah',
      image: 'https://images.unsplash.com/photo-1564414734660-e308a95d6fdb?w=400',
      status: 'available',
      badge: 'Learning Available'
    },
    {
      id: 2,
      name: 'Kampung Vietnam',
      category: 'Sejarah',
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400',
      status: 'coming-soon'
    },
    {
      id: 3,
      name: 'Ranoh Island Resort',
      category: 'Resort - Pantai',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
      status: 'coming-soon'
    },
    {
      id: 4,
      name: 'Waterpark Top 100 Batu Aji',
      category: 'Waterpark',
      image: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=400',
      status: 'coming-soon'
    },
    {
      id: 5,
      name: 'Hutan Wisata Mata Kucing',
      category: 'Hutan Wisata',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400',
      status: 'coming-soon'
    },
    {
      id: 6,
      name: 'Taman Rusa Sekupang',
      category: 'Kebun Binatang - Taman',
      image: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=400',
      status: 'coming-soon'
    },
    {
      id: 7,
      name: 'Mega Wisata Ocarina',
      category: 'Mega Wisata',
      image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400',
      status: 'coming-soon'
    },
    {
      id: 8,
      name: 'Batam Zoo Paradise',
      category: 'Kebun Binatang',
      image: 'https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=400',
      status: 'coming-soon'
    }
  ];

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
        {destinations.map((destination) => (
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
        ))}
      </div>
    </>
  );
};

export default Explore;