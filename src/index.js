import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const domain = "theanmolmalik.us.auth0.com";
const clientId = "3aOvrADK2RLnkm4vvToS2PFHFgd9QlFw";

ReactDOM.render(
    <BrowserRouter>
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        >
        <App/>
    </Auth0Provider>
    </BrowserRouter>
    ,document.getElementById('root')
);
