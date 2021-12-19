import React,{useState,useEffect} from "react";
import Card from "../../components/Card"; 
import axios from "axios";

const headingStyle = {
    paddingTop:"5vh",
    marginTop:"5vh",
    textAlign:"center",
    color: "#28282B",
}

const itemStyle={
    display: "inline-grid",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "2vh 5vh",
}

function Women()
{
    const [products, setProducts]=useState([]) 
    
    const getData = async() => {
      const data = await  axios.get('http://localhost:4000/products');
      setProducts(data.data);

    }
    useEffect(()=>{
    getData();
    },[]);

    console.log(products);

    return (
        <div>
        {products ?  
            <> 
            <div>
                <h1 style={headingStyle}>WOMEN</h1>
            </div>

            {products.slice(9,18).map((product)=>{
            return (
                <span style={itemStyle}>
                    <Card
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                </span>
            );})}
            </>
        : <> Loading </> 
        }
    </div>
    );
}

export default Women;