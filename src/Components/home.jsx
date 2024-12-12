import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="panel-header panel-header-lg">
      {/* Page Title Section */}
      <div className="content">
        <h1 className="title">Welcome to Fiesta Homes</h1>
        <h2 className="subtitle">Annual Sports Meet 2024-2025 Auction</h2>
      </div>

      {/* Auction Description Section */}
      <div className="auction-description">
        <p>
        Gear up for an electrifying auction experience as part of our Annual Sports Meet 2024-2025! <br /><br />
        This is your chance to step into the excitement of a live bidding war, much like an IPL auction. <br />
        Bid on exclusive players and claim the spotlight as you compete to make your mark. <br />
        Don't miss this once-in-a-lifetime opportunity to be part of this thrilling event!
        </p>
      </div>

      {/* Enter Auction Button */}
      <div className="button-container">
        <button className="enter-auction-button" onClick={() => navigate('/auction')}>
          Enter Auction
        </button>
      </div>
    </div>
  );
}

export default Home;
