import React from "react";
import LoginPage from "../LoginPage";

export default function SpanishPage({ token, setToken }) {

    if(!token) {
        return <LoginPage token={token} setToken={setToken}/>
    }

    return(
        <div>
            <h1>Spanish Page</h1>
        </div>
    )
}