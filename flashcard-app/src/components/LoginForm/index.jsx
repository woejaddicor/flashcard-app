import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import LoginRegisterButton from "../LoginRegisterButton";

export default function LoginForm({username, setUsername, password, setPassword}) {
    //const [username, setUsername] = useState('');
    //const [password, setPassword] = useState('');
    //const navigate = useNavigate();

    function handleUsername(e) {
        //console.log(e.target.value)
        setUsername(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    /*function handleUserLogin(username, password) {
        console.log(username, password)
        handleLogin(username, password)
    }*/

    return(
        <div>
            <form className="login-form">
                <div className="username">
                    <label className="label-text">Username</label><br></br>
                    <input className="form-field" type="text" name="username" 
                    onChange={handleUsername} placeholder="Enter Username"/>
                </div>
                <div className="password">
                    <label className="label-text">Password</label><br></br>
                    <input className="form-field" type="password" name="password" 
                    onChange={handlePassword} placeholder="Enter Password"/>
                </div>
            </form>
        </div>
    )

}