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
    padding: "2vh 5vh"
}

function Men()
{
    const [products, setProducts]=useState([]) 
    
    const getData = async() => {
      const data = await  axios.get('http://cartify-ecommerce-backend.herokuapp.com/products');
      setProducts(data.data);
    }
     useEffect(()=>{
       getData();
     },[]);

    return (

        <div>
            {products ?  
                <> 
                <div>
                    <h1 style={headingStyle}>MEN</h1>
                </div>

                {products.slice(0,9).map((product)=>{
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

export default Men;
