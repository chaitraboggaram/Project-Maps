import logo from "../images/logo.JPG";
import aboutImg from "../images/community-in-school-donations.jpeg";
export default function About() {
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
            <button onClick={event => window.location.href='/about'} class="nav-link"><u> About </u></button>
          </li>
          <li class="nav-item">
            <button onClick={event => window.location.href='/map'} class="nav-link">Map</button>
          </li>
          <li class="nav-item">
            <button onClick={event => window.location.href='/ngo'} class="nav-link">NGO</button>
          </li>
        </ul>
      </nav>

        {/* <section class="about">
          <div class="about-section">
            <div class="about-intro">
              <p> A B O U T  &ensp; U S </p>
              <div class="about_blurb"> <h4> Helping bridging the gap between those in need and the organizations that are dedicated to helping them</h4></div>
            </div>
            <div class="about-p">
              <p> Welcome to Give for Good, where we strive to connect homeless individuals with NGOs that can provide them with essential help and food. </p>
            </div>
          
            <div class="img_class">
              <img src={aboutImg} alt=""/>
            </div>
          </div>
        </section> */}

        <section className="about">
            <div className="about-section">
              <p> A B O U T  &ensp; U S </p>
              <div className="about_blurb"> <h4>We strive to connect the needy with NGOs that can provide them with food and basic necessities. We encourage you to explore our site and see what resources are available to you. </h4></div>
            </div>

           

            <div className="img_class">
              <img src={aboutImg} alt="image"/>
            </div>
        </section>
    </div>
    );
}
