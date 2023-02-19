import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Map from "./components/Map";
import NGO from "./components/ngo";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (

    <div className="home-container">
        <Routes>
          <Route path="/login" element = {<Login />}/>
          <Route exact path="/" element= {<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<Map />} />
          <Route path="/ngo" element={<NGO />} />
        </Routes>
    </div>

  );
}

export default App;
