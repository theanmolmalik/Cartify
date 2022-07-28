import React from "react";

const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    padding: "2vh",
    fontSize:"20px"
};

const buttonStyle = {
    margin:"2vh",
    height:"30px",
    width:"50px"
};

const imgStyle = {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    width:"10%",
    height:"auto",
    borderRadius:"15px"
};

function CartItemCard(parameter)
{
    return (
            <div style={cardStyle}>
            <img style={imgStyle}src={parameter.img} alt="avatarImage"/>
            <div>{parameter.name}</div>
            <div>₹{parameter.price}</div>
            {/* <div>     
                <span><button style={buttonStyle}>+</button></span>
                <span>1</span>
                <span><button style={buttonStyle}>-</button></span>
            </div> */}
            </div>

    );
}

export default CartItemCard;