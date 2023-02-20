import React from "react";
import logo from "../images/logo.JPG";
import GoogleMapReact from 'google-map-react';

export default function Map() {

  const defaultProps = {
      center: {
        lat: 37.354107,
        lng: -121.955238
      },
      zoom: 15
    };

    return(
        <div className="home-container">
        <nav>
        <a href="#" class="logo">
          <div id="logo">
            <img src={logo}></img>
          </div>
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
            <button onClick={event => window.location.href='/map'} class="nav-link"><u> Map </u></button>
          </li>
          <li class="nav-item">
            <button onClick={event => window.location.href='/ngo'} class="nav-link">NGO</button>
          </li>
        </ul>
      </nav>

      <section class="map">
        <div class="map-section">
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
          </GoogleMapReact>
        </div>
        </div>
      </section>
    </div>
    );
}