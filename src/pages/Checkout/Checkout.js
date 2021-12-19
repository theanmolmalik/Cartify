import React from 'react';
import './checkout.css';

const headingStyle = {
    marginTop:"5vh", 
    marginBottom:"5vh",
    textAlign:"center",
    color: "#28282B",
    fontSize: "50px"
}

const descriptionText = {
    fontSize:"xx-large"
}

const subHeadStyle = {
    fontSize:"large",    
    color:"#28282B",
    marginBottom:"3vh",
}

const checkoutStyle = {
    padding:"10vh",
    color: "#28282B",
    marginBottom:"3vh"
}

const inputStyle = {
    width: "99%",
    height: "40px",
    padding: "5px" ,
    fontSize: "20px",
    borderRadius: "8px",
    margin:"2vh 0 2vh 0"

}
const btnStyle={
    marginTop: "24%",
    marginLeft: "0.3%",
    height: "40px",
    borderRadius: "8px" ,
    padding: "5px",
}

export default function Checkout() {
    return (
        <div style={checkoutStyle}>
            <h1 style={headingStyle}>CHECKOUT</h1>
            
             <div style={descriptionText}>Hi, {JSON.parse(localStorage.getItem('loginData'))["name"]}</div>
             <div style={subHeadStyle}>Please fill following details to get your order  </div>
            <div style={inputStyle}>
             <input name="Name"  style={inputStyle} placeholder='Name '/> <br/>
             <input name="Email" style={inputStyle} placeholder="Email"/>  <br/>
             <input name="Phone Number"  style={inputStyle} placeholder='Phone Number'/> <br/>
             <input name="city" style={inputStyle}  placeholder='City'/> <br/>
             <input name="State"  style={inputStyle} placeholder='State'/> <br/>
            </div>
                <button className="buttonStyle" style={btnStyle}>Place Order</button>
                <br/>
                <br/><br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
    )
}
