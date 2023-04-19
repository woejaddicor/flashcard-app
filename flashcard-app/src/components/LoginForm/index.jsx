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
                    <label className="label-text">Username</label><br></br>
                    <input className="form-field" type="text" name="username" 
                    onChange={handleUsername} placeholder="Enter Username"
                    data-testid="username-input"/>
                </div>
                <div className="password">
                    <label className="label-text">Password</label><br></br>
                    <input className="form-field" type="password" name="password" 
                    onChange={handlePassword} placeholder="Enter Password"
                    data-testid="password-input"/>
                </div>
            </form>
        </div>
    )

}