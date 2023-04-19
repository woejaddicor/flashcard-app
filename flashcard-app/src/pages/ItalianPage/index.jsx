import React from "react";
import LoginPage from "../LoginPage";

export default function ItalianPage({ token, setToken }) {

    if(!token) {
        return <LoginPage token={token} setToken={setToken}/>
    }

    return(
        <div>
            <h1>Italian Page</h1>
        </div>
    )
}
