import React from "react";

const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    padding: "5vh",
    width: "170vh",
    borderRadius:"25px",
    border: "2px",
    borderColor: "#28282B",
    borderStyle: "dashed",
    margin:"5vh auto 5vh auto"
}

function CartItemCard(parameter)
{
    return (
        <div style={cardStyle}>
            <img style={{width:"20%",height:"auto",borderRadius:"25px"}}src={parameter.img} alt="avatarImage"/>
            <div>
                <span>{parameter.name}</span>
                <div>{parameter.price}</div>
            </div>
            
            <div>     
                <span><button>+</button></span>
                <span>{parameter.quantity}</span>
                <span><button>-</button></span>
            </div>
        </div>
    );
}

export default CartItemCard;