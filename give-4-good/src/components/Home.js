import React from "react";

export default function Home() {

    return(
        <div className="home-container">
        <nav>
        <a href="#" class="logo">
          {/* <div className="logo"></div> */}
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

      <section class="home">
        <div class="home-section">
          <div class="donate">
            <button id="donate-btn" onClick={event => window.location.href='/login'}>Help Now</button>
          </div>
        </div>
      </section>
    </div>
    );
}