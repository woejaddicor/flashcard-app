import React from "react";
import LoginPage from "../LoginPage";

export default function GermanPage({ token, setToken }) {

    if(!token) {
        return <LoginPage token={token} setToken={setToken}/>
    }

    return(
        <div>
            <h1>German Page</h1>
        </div>
    )
}
