import React from "react";
import {Link} from "react-router-dom";

const homeStyle = {
    overflow: "hidden"
}

function Home(){
    return (
        <div style={homeStyle}>

            <div style={{marginTop:"5vh"}}>
                <Link to="/men"><img src="https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Men Shopping"/></Link>
            </div>

            <div style={{marginTop:"-1vh",marginBottom:"-1vh",transform: "scaleX(-1)",zIndex:"-1"}}>
                <Link to="/women"><img src="https://images.pexels.com/photos/5868278/pexels-photo-5868278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="menPage"/></Link>
            </div>

        </div>
    );
}

export default Home;