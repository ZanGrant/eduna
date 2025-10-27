import React from "react";
import "../styles/PromoBanner.css";
import gameIllu from "../assets/images/VideoGame.png";

export default function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="promo-inner">
        <div className="promo-text">
          <h2>
            Ayo mainkan games dari Eduna untuk<br />
            dapetin banyak keuntungan!
          </h2>

          <ul className="promo-list">
            <li>
              <span className="check">✓</span>
              <span>Point untuk dapetin promo</span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>Dapatkan informasi tentang destinasi</span>
            </li>
          </ul>
        </div>

        <div className="promo-illu">
          <img src={gameIllu} alt="Game illustration" />
        </div>
      </div>
    </section>
  );
}
