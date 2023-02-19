export default function About() {
    return(
        <div className="home-container">
        <nav>
        <a href="#" class="logo">
          <h1> LOGO </h1>
        </a>

        {/* Pages */}
          <ul>
          <li class="nav-item">
            <a href="#home" class="nav-link" id="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link" id="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#map" class="nav-link" id="nav-link">Map</a>
          </li>
          <li class="nav-item">
            <a href="#ngo" class="nav-link" id="nav-link">NGO</a>
          </li>
        </ul>
      </nav>

        <section class="about">
            <div class="about-section">
            <h1>About</h1>
            </div>
        </section>
    </div>
    
    );
}