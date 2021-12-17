import React from "react";

const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    padding: "2vh"
}

const buttonStyle = {
    margin:"2vh",
    height:"30px",
    width:"50px"
}

function CartItemCard(parameter)
{
    return (
            <div style={cardStyle}>
            <img style={{width:"10%",height:"auto",borderRadius:"15px"}}src={parameter.img} alt="avatarImage"/>
            <div>{parameter.name}</div>
            <div>{parameter.price}</div>
            <div>     
                <span><button style={buttonStyle}>+</button></span>
                <span>{parameter.quantity}</span>
                <span><button style={buttonStyle}>-</button></span>
            </div>
            </div>

    );
}

export default CartItemCard;