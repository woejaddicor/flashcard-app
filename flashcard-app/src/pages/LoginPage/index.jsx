import React, { useState } from "react";
import { LoginForm, LoginRegisterButton } from "../../components";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../contexts";
import PropTypes from 'prop-types';

let dataHolder;

export default function LoginPage({token, setToken}) {
    //const {token, setToken} = useToken();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin() {
        console.log("handlelogin", username, password)
        //fetch request to db

        //dummy username and password
        let dummyUsername = "aa"
        let dummyPassword = "aa"

        if (username === dummyUsername && password === dummyPassword) {
            /*const getToken = getAuth({
                username,
                password
            });*/
            getToken()
            //getAuth(username, password)
            //console.log("token", token)
            //navigate("/dashboard");
        } else {
            alert("Login Failed!")
        }
    }

    const getToken = async () => {
        //e.preventDefault();
        console.log("gettoken", username, password)
        const generateToken = await getAuth({username, password});
        //console.log("token", token)
        //setToken(generateToken)
        //console.log("token", generateToken)
    }

    async function getAuth(credentials) { 
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify(credentials)
        }
    
        fetch("http://127.0.0.1:3000/auth", options)
            .then(data => data.json())
            .then(response => {
                console.log("data", response)
                //if (response.ok) {
                console.log("token", response)
                setToken(response)
                return response
                //}
            })
            //.then(messages => console.log("data", messages, "dh", dataHolder))
            .catch((err) => {
                console.log(err)
            })
    }

    return(
        <>
        <h1>Login Page</h1>
        <LoginForm username={username} setUsername={setUsername}
        password={password} setPassword={setPassword}/>

        <LoginRegisterButton handleLogin={getToken}/>
        </>
    )
}


/*headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}*/

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
  }