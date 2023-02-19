import React from "react";
import logo from "../images/logo.JPG";

export default function NGO() {
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
            <button onClick={event => window.location.href='/map'} class="nav-link">Map</button>
          </li>
          <li class="nav-item">
            <button onClick={event => window.location.href='/ngo'} class="nav-link">NGO</button>
          </li>
        </ul>
      </nav>

      <section class="NGO">
            <div class="NGO-section">
            <h1>NGO</h1>
            </div>
        </section>
    </div>
    );
}