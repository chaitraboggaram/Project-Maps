import React from "react";

export default function Map() {
    return(
        <div className="home-container">
        <nav>
        <a href="#" class="logo">
          <h1> LOGO </h1>
        </a>

        {/* Pages */}
          <ul>
          <li class="nav-item">
          <button onClick={event => window.location.href='/'} class="nav-link">Home</button>
          </li>
          <li class="nav-item">
            <button onClick={event => window.location.href='/about'} class="nav-link">About</button>
          </li>
          <li class="nav-item">
            <button onClick={event => window.location.href='/map'} class="nav-link">Map</button>
          </li>
          <li class="nav-item">
            <button onClick={event => window.location.href='/ngo'} class="nav-link">NGO</button>
          </li>
        </ul>
      </nav>

      <section class="map">
            <div class="map-section">
            </div>
            
        </section>
    </div>
    );
}