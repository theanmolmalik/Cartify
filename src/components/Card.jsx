import React,{useState} from "react";

const cardStyle = {
    padding: "5vh",
    position:"relative",
    display:"inline-block",
}

function Card(parameter)
{
    const [isMouseOver,setMouseOver] = useState(false);
    
    function handleMouseOver(){
        setMouseOver(true);
    }

    function handleMouseOut(){
        setMouseOver(false);
    }

    return (
        <div style={cardStyle}>
            <img style={{borderRadius:"25px"}} src={parameter.img} alt="avatarImage"/>
            <button className="cardButtonStyle" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor : isMouseOver ? "white" :"#28282B",color:isMouseOver?"#28282B":"white"}}>ADD TO CART</button>
            <div>
                <span>{parameter.name}</span>
                <span style={{float:"right"}}>{parameter.price}</span>
            </div>
        </div>
    );
}

export default Card;