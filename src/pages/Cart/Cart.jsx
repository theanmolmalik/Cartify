import React from "react";
import CartItemCard from "../../components/CartItemCard";
import { useGlobalState } from "../util/util";
import {Link} from "react-router-dom";

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
    padding:"5vh 15vh"
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

const totalStyle = {
    padding: "3vh 22vh 3vh 0",
    fontWeight:"bold",
    textAlign:"right",
    color:"#28282B",
    fontSize:"25px"
}

const checkoutButton = {
    padding:"1vh 2vh 1vh 2vh",
    fontSize:"20px",
    textDecoration: "none",
    marginLeft: "83%",
    marginTop : "2%" ,
    marginBottom: "3%",
    marginRight:"5vh",
    backgroundColor: "#28282B",
    color:"white",
    overflow: "hidden",
    borderRadius:"10px",
}

function Cart(){
    const state = useGlobalState();
    
    const price = () => {
        let price = 0;
      const items = JSON.parse(localStorage.getItem('price'))  ;
      items.reverse();
      for(var i=0 ;i<state.get().value.length ;i++){
          console.log(items[i]);
          price += items[i];
      }          
    
          return price;
        }
    
        /* var count = {}; */
      

    if(state.get().value.length === 0){
        return(
            <div>
            <h1 style={headingStyle}>CART</h1>

            <h1 style={emptyCart}>Your Cart is empty!</h1>
            </div> 
        )
    }


    return (
       
        <div>
            <h1 style={headingStyle}>CART</h1>

            <div style={cartSectionStyle}>
                <p>You have <span style={{fontWeight:"bold"}}>{state.get().value.length}</span> Items in your Cart</p>
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
                {
                    state.get().value.map(x=>(
                        <CartItemCard
                            img={x.data.image}
                            name={x.data.name}
                            price={x.data.price}
                        />
                    ))
                }
            </div>
        

            <div style={hLine}></div>

            <div style={totalStyle}>
            ₹{price()}
            </div>

            <button style={checkoutButton}><Link to="/checkout" style={{textDecoration: "none",color:"white",cursor:"pointer",borderColor: "white"}}>CHECKOUT</Link></button>
        </div>
    );
}

export default Cart;