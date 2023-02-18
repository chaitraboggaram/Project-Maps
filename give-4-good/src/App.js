import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (

    <div>
      <Routes>
       <Route path="/home" element={<Home />} />
    </Routes>
    </div>

    // <div className="home-container">

    //   {/* LOGO */}
    //   <nav>
    //     <a href="#" class="logo">
    //       <h1> LOGO </h1>
    //     </a>

    //     {/* Pages */}
    //     <ul>
    //       <li class="nav-item">
    //         {/* <a href="#home" class="nav-link" id="nav-link" target="content">Home</a> */}
    //         <a href="#home" class="nav-link" id="nav-link" target="content">Home</a>
    //       </li>
    //       <li class="nav-item">
    //         <a href="#about" class="nav-link" id="nav-link" target="content">About</a>
    //       </li>
    //       <li class="nav-item">
    //         <a href="#map" class="nav-link" id="nav-link" target="content">Map</a>
    //       </li>
    //       <li class="nav-item">
    //         <a href="#ngo" class="nav-link" id="nav-link" target="content">NGO</a>
    //       </li>
    //     </ul>
    //   </nav>

    //   {/* Home Section */}
    //   {/* <section class="home">
    //     <div class="home-section">
    //       <h1>Home</h1>
    //     </div>
    //   </section> */}

    //   {/* About Section */}
    //   {/* <section class="about">
    //     <div class="about-section">
    //       <h1>About</h1>
    //     </div>
    //   </section> */}

    //   {/* Map Section */}
    //   <section class="map">
    //     <div class="map-section">
    //     </div>
    //   </section>


    // </div>

  );
}

export default App;
