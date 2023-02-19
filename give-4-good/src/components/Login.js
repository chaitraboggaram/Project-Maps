import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Button} from 'react-bootstrap';


function clickButton() {
    alert('You clicked me!');
  }
  
export default function Login() {

    return(
        <div className="login-button">
            <button onClick={clickButton} className="login-btn">Login</button>
        </div>
    );
}