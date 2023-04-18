import React from "react";

export default function LoginForm({username, setUsername, password, setPassword}) {
    function handleUsername(e) {
        setUsername(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    return(
        <div>
            <form className="login-form">
                <div className="username">
                    <input type="text" name="username" 
                    onChange={handleUsername} placeholder="Enter Username"/>
                </div>
                <div className="password">
                    <input type="password" name="password" 
                    onChange={handlePassword} placeholder="Enter Password"/>
                </div>
            </form>
        </div>
    )

}