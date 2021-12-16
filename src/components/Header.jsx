import React from "react";
import {BsCartFill} from "react-icons/bs";
import {FaUserAlt} from "react-icons/fa";
import {Link} from "react-router-dom";
import itemCount from "./itemCount";

const headerItemStyle = {
    color: "white",
    fontSize: "1em",
    float:"right",
    margin: "7.5px 20px 7.5px 20px",
    textDecoration:"none"
};

const headerStyle = {
    overflow: "hidden",
    backgroundColor: "#28282B",
    margin: "0",
    position: "fixed",
    width: "100%",
    top: "0",
    padding: "10px",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
    zIndex:"5",
    borderRadius:"0px 0px 5px 5px"
}

const divStyle = {
    display: "flex",
    justifyContent:"space-between",
    fontSize:"20px"
}

const cartNotification = {
    position: "absolute",
    margin: "7px 20px 0px 0px",
    color: "#28282B",
    backgroundColor:"yellow",
    borderRadius:"50%",
    width:"10px",
    height:"10px",
    padding:"4px",
    fontSize:"9px",
    textAlign:"center"
}

function Header(){

    return (
        <header style={headerStyle}>
            
            <div style={divStyle}>
            
            <div>

            <Link to="/women" className="headerItemHover" style={headerItemStyle}>WOMEN</Link>

            <Link to="/men" className="headerItemHover" style={headerItemStyle}>MEN</Link>

            <Link to="/" className="headerItemHover" style={headerItemStyle}>HOME</Link> 
           
           </div>
           <div>

           <span >
                <Link to="/cart"><BsCartFill className="headerItemHover" style={{margin:"13px -10px 0 20px",color:"white"}}/></Link> 

                <span className="notificationHover" style={cartNotification}>{itemCount.length}</span>
           </span>

            <Link to="/user"><FaUserAlt className="headerItemHover" style={{margin:"13px 25px 0 20px",padding:"0 10px 0 20px",color:"white"}}/></Link>

            </div>
            </div>
            
        </header>
    )
}

export default Header;
