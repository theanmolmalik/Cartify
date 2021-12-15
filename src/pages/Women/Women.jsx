import React from "react";
import Card from "../../components/Card"; 

const headingStyle = {
    paddingTop:"5vh",
    marginTop:"5vh",
    textAlign:"center",
    color: "#28282B",
}

const itemStyle={
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2vh 5vh"
}

const tShirt = [
    {
        img:"https://images.pexels.com/photos/9558785/pexels-photo-9558785.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Women White Relaxed T-Shirt",
        price:"₹500"
    },
    {
        img:"https://images.pexels.com/photos/9558583/pexels-photo-9558583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name:"Women Black Relaxed T-Shirt",
        price:"₹500"
    },
    {
        img:"https://images.pexels.com/photos/9331224/pexels-photo-9331224.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Women Orange and Black Stripe T-Shirt",
        price:"₹1000"
    },
]

const jeans = [
    {
        img:"https://images.pexels.com/photos/2343661/pexels-photo-2343661.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Women Navy Blue Jeans",
        price:"₹1500"
    },
    {
        img:"https://images.pexels.com/photos/398078/pexels-photo-398078.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Women Light Blue Jeans",
        price:"₹1500"
    },
    {
        img:"https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Women Ripped Jeans",
        price:"₹1800"
    },
]

const shoes = [
    {
        img:"https://images.pexels.com/photos/2285500/pexels-photo-2285500.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Women Black Stiletto Shoes",
        price:"₹1200"
    },
    {
        img:"https://images.pexels.com/photos/6920122/pexels-photo-6920122.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Women Red Heels",
        price:"₹1500"
    },
    {
        img:"https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Women Black Heels",
        price:"₹2500"
    },
]

function Women()
{
    return (
        <div>

        <div>
            <h1 style={headingStyle}>WOMEN</h1>
        </div>

        <div style={itemStyle}>
            <Card
                img={tShirt[0].img}
                name={tShirt[0].name}
                price={tShirt[0].price}
            />
            <Card
                img={tShirt[1].img}
                name={tShirt[1].name}
                price={tShirt[1].price}
            />
            <Card
                img={tShirt[2].img}
                name={tShirt[2].name}
                price={tShirt[2].price}
            />
        </div>

        <div style={itemStyle}>
            <Card
                img={jeans[0].img}
                name={jeans[0].name}
                price={jeans[0].price}
            />
            <Card
                img={jeans[1].img}
                name={jeans[1].name}
                price={jeans[1].price}
            />
            <Card
                img={jeans[2].img}
                name={jeans[2].name}
                price={jeans[2].price}
            />
        </div>

        <div style={itemStyle}>
        <Card
                img={shoes[0].img}
                name={shoes[0].name}
                price={shoes[0].price}
            />
            <Card
                img={shoes[1].img}
                name={shoes[1].name}
                price={shoes[1].price}
            />
            <Card
                img={shoes[2].img}
                name={shoes[2].name}
                price={shoes[2].price}
            />
        </div>

        </div>

    );
}

export default Women;