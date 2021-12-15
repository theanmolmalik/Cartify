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
        img:"https://images.pexels.com/photos/9558233/pexels-photo-9558233.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Men Black Relaxed T-Shirt",
        price:"₹500"
    },
    {
        img:"https://images.pexels.com/photos/9461263/pexels-photo-9461263.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Green Crew Neck T-Shirt",
        price:"₹800"
    },
    {
        img:"https://images.pexels.com/photos/9759713/pexels-photo-9759713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name:"Men White Relaxed T-Shirt",
        price:"₹500"
    },
]

const jeans = [
    {
        img:"https://images.pexels.com/photos/4100674/pexels-photo-4100674.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Men Grey Jeans",
        price:"₹1500"
    },
    {
        img:"https://images.pexels.com/photos/9801651/pexels-photo-9801651.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Men Blue Jeans",
        price:"₹1500"
    },
    {
        img:"https://images.pexels.com/photos/4234768/pexels-photo-4234768.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Men Black Jeans",
        price:"₹1800"
    },
]

const shoes = [
    {
        img:"https://images.pexels.com/photos/7502162/pexels-photo-7502162.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Men Black Leather Shoes",
        price:"₹1500"
    },
    {
        img:"https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Men Brown Nike Shoes",
        price:"₹1200"
    },
    {
        img:"https://images.pexels.com/photos/2180892/pexels-photo-2180892.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        name:"Men White Shoes",
        price:"₹1000"
    },
]

function Men()
{
    return (
        <div>

        <div>
            <h1 style={headingStyle}>MEN</h1>
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

export default Men;