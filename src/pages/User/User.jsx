import React,{useState} from "react";
import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#28282B",
    borderRadius: "10px",
    margin: "25vh auto 25vh auto",
    padding: "25px",
    width: "fit-content"
};

const textStyle = {
    color: "#ffe500",
    fontSize: "xx-large",
};

const upStyle = {
    borderRadius: "7.5px", 
    padding: "2vh", 
    margin: "2vh"
} ;

const imgStyle = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:"50%",
    width:"50%",
    height:"auto"
};

const descriptionText = {
    color:"white",
    fontSize:"xx-large"
};


function User(){

    const [isMouseOver,setMouseOver] = useState(false);
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    
    
    function handleMouseOver(){
        setMouseOver(true);
    }

    function handleMouseOut(){
        setMouseOver(false);
    }


    return(
        <div>
            { isAuthenticated? (
                <div style={cardStyle}>
                    <img style={imgStyle} src={user.picture} alt="ProfilePicture"/>
                    <div  style={{color:"white",fontSize:"large",marginTop:"15px"}}>Hi,</div>
                    <div style={descriptionText} >{user.name}</div>
                    <div style={{paddingTop:"2vh",paddingBottom:"2vh"}}>
                        <LogoutButton/>
                    </div>
                </div>
            )

            : (
                <div style={cardStyle}>
                    <p style={textStyle}>Log In</p>

                    <input style={upStyle} type="username" name="Username" id="Username" placeholder="Username"/>
                    <input style={upStyle} type="password" name="Password" id="Password" placeholder="Password"/>
                    <button className="buttonStyle" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor: isMouseOver ? "white" : "#28282B",color: isMouseOver ? "#28282B":"white",height:"50px",width:"125px",borderColor:isMouseOver?"#28282B":"white"}}>Log In</button>
                    <div style={textStyle}>
                        or
                    </div>
                    <div style={{paddingTop:"2vh",paddingBottom:"2vh"}} >
                        <LoginButton/>
                    </div>
                </div>
                )
            }      
        </div>
    )
}

export default User;

// 