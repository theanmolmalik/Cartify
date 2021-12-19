import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import User from "../pages/User/User"
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women"
import {Routes,Route} from "react-router-dom";
import Checkout from "../pages/Checkout/Checkout";



function App(){
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/men" element={<Men/>}/>
                <Route path="/women" element={<Women/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;