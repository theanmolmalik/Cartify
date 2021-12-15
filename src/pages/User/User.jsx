import React,{useState} from "react";

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#28282B",
    borderRadius: "10px",
    margin: "25vh auto 25vh auto",
    padding: "3vh",
    width: "fit-content"
}

const textStyle = {
    color: "#ffe500",
    fontSize: "xx-large",
    paddingBottom: "2vh"
}

const upStyle = {
    borderRadius: "10px", 
    padding: "2vh", 
    margin: "2vh"
}

function User(){

    const [isMouseOver,setMouseOver] = useState(false);
    
    function handleMouseOver(){
        setMouseOver(true);
    }

    function handleMouseOut(){
        setMouseOver(false);
    }

    return(
        <div style={cardStyle}>

            <p style={textStyle}>Log In</p>

            <input style={upStyle} type="username" name="Username" id="Username" placeholder="Username"/>
            <input style={upStyle} type="password" name="Password" id="Password" placeholder="Password"/>
            <button className="buttonStyle" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor: isMouseOver ? "white" : "#28282B",color: isMouseOver ? "#28282B":"white",height:"50px",width:"125px",borderColor:isMouseOver?"#28282B":"white"}}>Log In</button>

            <p style={{color: "white"}}>First time Here? <span style={{color:"yellow",cursor:"pointer"}}> Sign Up</span> </p>

        </div>
    );
}

export default User;