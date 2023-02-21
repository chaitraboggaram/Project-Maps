import React from "react";
import logo from "../images/logo.JPG";

export default function Home() {

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
          <button onClick={event => window.location.href='/'} class="nav-link"> <u>Home</u></button>
          </li>
          <li class="nav-item">
            <button onClick={event => window.location.href='/about'} class="nav-link">About</button>
          </li>
          <li class="nav-item">
            <button onClick={event => window.location.href='http://127.0.0.1:5000/map.html'} class="nav-link">Map</button>
          </li>
          <li class="nav-item">
            <button onClick={event => window.location.href='/ngo'} class="nav-link">NGO</button>
          </li>
        </ul>
      </nav>
      <section class="home">
        <div class="home-section">
          <div class="donate">
            <h1>Give For Good</h1>
            <button id="donate-btn" onClick={event => window.location.href='http://127.0.0.1:5000/'}>Help Now</button>
          </div>
        </div>
      </section>
    </div>
    );
}