import React from "react";
import { useState } from "react";
import axios from "axios";
import "./checkout.css";
import { useAuth0 } from "@auth0/auth0-react";

const descriptionText = {
    fontSize:"xx-large"
};

const subHeadStyle = {
    fontSize:"large",    
    color:"#28282B",
    marginBottom:"3vh",
};

const checkoutStyle = {
    padding:"10vh",
    color: "#28282B",
    marginBottom:"3vh"
};

const inputStyle = {
    width: "99%",
    height: "40px",
    padding: "5px" ,
    fontSize: "20px",
    borderRadius: "8px",
    margin:"2vh 0 2vh 0"

};

const btnStyle={
    padding:"1vh 2vh 1vh 2vh",
    fontSize:"20px",
    marginTop : "20%" ,
    marginBottom: "3%",
    marginRight:"4vh",
    backgroundColor: "#28282B",
    color:"white",
    borderRadius:"10px",
    borderColor:"white",
    cursor:"pointer",
};

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [address,setAddress]=useState("");
  const { user} = useAuth0();
  const makeRequest = async () => {
    let request = await axios({
      method: "post",
      url: "https://server.meowform.xyz/form/anmolmalik2001@gmail.com&cartify",
      data: {
        name,
        phno,
        email,
        address
      }
    });
    if (request.status === 200) {
      alert("Congratulations! Your Order has been placed");
    } else {
      alert("I think we got some Error!");
    }
  };

  function isValid(email)
  {
      const regexEmail=/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

      return regexEmail.test(email)?1:0;
  }

  const submit = () => {
    if (name === "" || email === "" || phno===""|| address === "") 
    {
      alert("You must fill all the feilds!");
    } else if(!isValid(email))
    {
        alert("Invalid Email!");
    }
    else if(!((phno.length===10 && phno.charAt(0)!=='0') || (phno.length===11 && phno.charAt(0)==='0')))
    {
        alert("Invalid Phone No!");
    }
    else if(address.length<15)
    {
        alert("Address can't be less than 15 characters!");
    }
     else {
      makeRequest();
      setName("");
      setEmail("");
      setPhno("");
      setAddress("");
    }
  };
  return (
    
    <div style={checkoutStyle}>
      <div>
      <h1 className="headingStyle">CHECKOUT</h1>
      <div style={descriptionText}>Hi, {user.name}</div>
        <div style={subHeadStyle}>Please fill following details to get your order  </div>
        <div style={inputStyle}>
        <input style={inputStyle}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br/>
        <input style={inputStyle}
          placeholder="Phone Number"
          value={phno}
          onChange={(e) => setPhno(e.target.value)}
          required
        /><br/>
        <input style={inputStyle}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/>
        <input style={inputStyle}
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        </div>
        <button style={btnStyle} onClick={submit}>Submit</button>
        
        {/* <button className="buttonStyle" style={btnStyle} onClick={submit}>Place Order</button> */}
                <br/>
                <br/><br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
      </div>
    </div>
  );
}