import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Button} from 'react-bootstrap';
import GoogleLogin from 'react-google-login';

function clickButton() {
        const responseGoogle = (response) => {
            console.log(response);
            // You can make an API call to your server with the response.tokenId to verify the user's identity.
        };

        return (
        <div className="App">
        <GoogleLogin
            clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
        </div>
        );
    }
  
export default function Login() {

    return(
        <div className="login-button">
            <button onClick={clickButton} className="login-btn">Login</button>
        </div>
    );
}