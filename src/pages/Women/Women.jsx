import React,{useState,useEffect} from "react";
import Card from "../../components/Card"; 
import axios from "axios";
import LoadingSpinner from "../Spinner/LoadingSpinner";

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
    const [products, setProducts]=useState([]);
    const [done,setDone]=useState(undefined);
    
    const getData = async() => {
      const data = await  axios.get('');
      setProducts(data.data);
    }
     useEffect(()=>{
       getData();
     },[]);

    useEffect(() => {
        setTimeout(() => {
          fetch("https://cartify-ecommerce-backend.herokuapp.com/products")
            .then((response) => response.json())
            .then((json) => {
              setProducts(json);
              setDone(true);
            });
        }, 100);
      }, []);

    return (
        <div>
            {done ?  
                <> 
                <div>
                    <h1 style={headingStyle}>TRENDING</h1>
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
            : <LoadingSpinner/>
            }
        </div>
    );
}

export default Women;
