import React from "react";
import logo from "../images/logo.JPG";
import aah from "../images/aah.png";
import fa from "../images/fa.png";
import bftw from "../images/bftw.png";
import foodBank from "../images/food-bank.png";
import freedom from "../images/freedom.png";
import meals from "../images/meals.png"

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
            <button onClick={event => window.location.href='/ngo'} class="nav-link"><u> NGO </u></button>
          </li>
        </ul>
      </nav>

      <section class="NGO">
        <div class="NGO-section">
          <div className="NGO-title">
            <h1>We Work With the Best Partners</h1>
          </div>
          <table>
            <tr>
              <td>
                <div className="ngo-container">
                  <img src={aah} id="ngo-logo"></img>
                  <a href="https://www.actionagainsthunger.org/">Action Against Hunger</a>
                </div>
              </td>
              <td>
                <div className="ngo-container">
                  <img src={fa} id="ngo-logo"></img>
                  <a href="https://www.feedingamerica.org/">Feeding America</a>
                </div>
              </td>
              <td>
                <div className="ngo-container">
                  <img src={bftw} id="ngo-logo"></img>
                  <a href="https://www.foodbanknyc.org/">Food Bank For New York City</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="ngo-container">
                  <img src={foodBank} id="ngo-logo"></img>
                  <a href="https://www.actionagainsthunger.org/">Action Against Hunger</a>
                </div>
              </td>
              <td>
                <div className="ngo-container">
                  <img src={freedom} id="ngo-logo"></img>
                  <a href="https://www.freedomfromhunger.org/">Freedom from Hunger</a>
                </div>
              </td>
              <td>
                <div className="ngo-container">
                  <img src={meals} id="ngo-logo"></img>
                  <a href="https://www.mealsonwheelsamerica.org/">Meals on Wheels</a>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </section>
    </div>
    );
}