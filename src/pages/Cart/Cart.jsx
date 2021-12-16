import React from "react";
import CartItemCard from "../../components/CartItemCard";
import itemCount from "../../components/itemCount";

const cartSectionStyle = {
    padding:"5vh",
    color: "#28282B",
    fontSize:"large",
}

const headingStyle = {
    paddingTop:"5vh",
    marginTop:"5vh",
    textAlign:"center",
    color: "#28282B",
}

const emptyCart = {
    margin:"20vh 10vh 40vh 10vh",
    textAlign:"center",
    fontSize:"50px",
    color: "#28282B",
}

const itemStyle={
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign:"center",
    padding: "2vh 5vh"
}

const headStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    padding: "2vh",
    fontWeight:"bold"
}

const hLine = {
    width:"95%",
    height:"3px",
    background: "#28282B",
    margin:"auto"
}

function isCartEmpty() {
    if(itemCount===0)
    {
        return (
            <div>
                <h1 style={headingStyle}>CART</h1>

                <h1 style={emptyCart}>Your Cart is empty!</h1>
            </div>
        );
    }
    else
    {
        return (
            <div>
                <h1 style={headingStyle}>CART</h1>

                <div style={cartSectionStyle}>
                    <p>You have <span style={{fontWeight:"bold"}}>{itemCount.length}</span> Items in your Cart</p>
                </div> 

                <div style={hLine}></div>

                <div style={headStyle}>
                    <div>IMAGE</div>
                    <div>NAME</div>
                    <div>PRICE</div>
                    <div>Quantity</div>
                </div>

                <div style={hLine}></div>

                <div style={itemStyle}>
                    <CartItemCard
                        img={itemCount[0].img}
                        name={itemCount[0].name}
                        price={itemCount[0].price}
                        quantity={itemCount[0].quantity}
                    />
                </div>
                <div style={itemStyle}>
                <CartItemCard
                    img={itemCount[1].img}
                    name={itemCount[1].name}
                    price={itemCount[1].price}
                    quantity={itemCount[0].quantity}
                />
                </div>
                <div style={itemStyle}>
                <CartItemCard
                    img={itemCount[2].img}
                    name={itemCount[2].name}
                    price={itemCount[2].price}
                    quantity={itemCount[0].quantity}
                />
                </div>

            </div>
        );
    }
}

function Cart(){
    return (
        <div>
            {isCartEmpty()}
        </div>    
    );
}

export default Cart;
