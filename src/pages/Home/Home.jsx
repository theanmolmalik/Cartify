import React from "react";
import {Link} from "react-router-dom";

const homeStyle = {
    overflow: "hidden"
}

const head1Style = {
    position:"absolute",
    color:"yellow",
    fontSize:"4vh",
    padding:"20vh 0 0 10vh",
    textAlign:"center",
    zIndex:"1"
}

const head2Style = {
    position:"absolute",
    color:"#28282B",
    fontSize:"4vh",
    padding:"25vh 0 0 120vh",
    textAlign:"center",
    zIndex:"1",
}

function Home(){
    return (
        <div style={homeStyle}>
            <div style={{marginTop:"5vh"}}>
            <div style={head1Style}>
                <h1>Winter Carnival</h1>
                <h4 style={{color:"white"}}>Get the best offers of Winterwear</h4>
                <h1>40% - 70% OFF</h1>
            </div>
                <Link to="/men"><img src="https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Men Shopping"/></Link>
            </div>

            <div style={head2Style}>
                <h2 style={{color:"#DB3F40"}}>End Of The Year </h2>
                <h1 style={{letterSpacing:"3.5vh"}}>EXLUSIVE</h1>
                <h1>50% - 80% OFF</h1>
            </div>

            <div style={{marginTop:"-1vh",marginBottom:"-1vh",transform: "scaleX(-1)",zIndex:"-1"}}>
                <Link to="/women"><img src="https://images.pexels.com/photos/5868278/pexels-photo-5868278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="menPage"/></Link>
            </div>

        </div>
    );
}

export default Home;
