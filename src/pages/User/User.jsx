import React,{useState} from "react";
import {GoogleLogin,GoogleLogout} from 'react-google-login';

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
}

const textStyle = {
    color: "#ffe500",
    fontSize: "xx-large",
}

const upStyle = {
    borderRadius: "7.5px", 
    padding: "2vh", 
    margin: "2vh"
} 

const imgStyle = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:"50%",
    width:"50%",
    height:"auto"
}

const descriptionText = {
    color:"white",
    fontSize:"xx-large"
}

const clientId = "1074729844749-32k3i3marl59q25sg577akjfvfj5pij9.apps.googleusercontent.com";

function User(){

    const [isMouseOver,setMouseOver] = useState(false);
    const [loginData,setLoginData]=useState(localStorage.getItem('loginData')? JSON.parse(localStorage.getItem('loginData')): null);
    /* const [user, setUser] = useState(); */
    /* const [password , setPasswrd] = useState(); */
    const onLoginSuccess = async(googleData) => {
        console.log('Login Success:', googleData.profileObj);
        const res = await fetch('/api/google-login', {
        method: 'POST',
        body: JSON.stringify({
            token: googleData.tokenId,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        });

        const data = await res.json();
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));
    };

    const onLoginFailure = (googleData) => {
        console.log('Login Failed:', googleData);
    };

    const onSignoutSuccess = () => {
        console.clear();
        localStorage.removeItem('loginData');
        setLoginData(null);
    };
    
    function handleMouseOver(){
        setMouseOver(true);
    }

    function handleMouseOut(){
        setMouseOver(false);
    }

    console.log(loginData);
    /* console.log(user); */

    return(
        <div>
            { loginData ? (
                <div style={cardStyle}>
                    <img style={imgStyle} src={loginData.picture} alt="ProfilePicture"/>
                    <div  style={{color:"white",fontSize:"large",marginTop:"15px"}}>Hi,</div>
                    <div style={descriptionText}>{loginData.name}</div>
                    <div style={{paddingTop:"2vh",paddingBottom:"2vh"}}>
                        <GoogleLogout
                            clientId={clientId}
                            buttonText="Sign Out from Google"
                            onLogoutSuccess={onSignoutSuccess}
                        /> 
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
                    <div style={{paddingTop:"2vh",paddingBottom:"2vh"}}>
                        <GoogleLogin 
                        clientId={clientId}
                        buttonText="Sign In with Google"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                        />
                    </div>
                </div>
                )
            }      
        </div>
    )
}

export default User;