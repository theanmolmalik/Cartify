import React,{useState} from "react";

const cardStyle = {
    padding: "20px",
    position:"relative",
    fontSize:"20px"
}

const imgStyle = {
    borderRadius:"25px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
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
        <span style={cardStyle}>
            <img style={imgStyle} src={parameter.image}  alt="avatarImage"/>
            <button className="cardButtonStyle" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor : isMouseOver ? "white" :"#28282B",color:isMouseOver?"#28282B":"white"}}>ADD TO CART</button>
            <div>
                <span>{parameter.name}</span>
                <span style={{float:"right"}}>₹{parameter.price}</span>
            </div>
        </span>
    );
}

export default Card;
