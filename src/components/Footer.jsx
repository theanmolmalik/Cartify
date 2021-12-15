import React,{useState} from "react";
import logo from "../images/Logo.png";

const footerStyle = {
    color: "white",
    backgroundColor: "#28282B",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    borderRadius:"5px 5px 0px 0px"
}

const logoStyle = {
    paddingTop: "3vh"
}

const copyrightStyle = {
    fontSize: "larger", 
    paddingBottom: "3vh"
}

function Footer(){
    
    const currentYear = new Date().getFullYear();

    const [isMouseOver,setMouseOver] = useState(false);
    
    function handleMouseOver(){
        setMouseOver(true);
    }

    function handleMouseOut(){
        setMouseOver(false);
    }

    return (

        <div style={footerStyle}>

        <span>
            <img style={logoStyle} src={logo} alt="Logo"/>
        </span>
        
        <span>
            <button className="buttonStyle" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor: isMouseOver ? "white" : "#28282B",color: isMouseOver ? "#28282B":"white"}}>Connect Us</button>
        </span>
        
        <div style={copyrightStyle}>
            Copyright © {currentYear} All Rights Reserved
        </div>
        
        </div>

    );
}

export default Footer;