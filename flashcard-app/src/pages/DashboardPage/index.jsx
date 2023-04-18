import React, { useEffect } from "react";
import { useToken } from "../../contexts";
import LoginPage from "../LoginPage";
import { Link } from "react-router-dom";

export default function DashboardPage({ token, setToken }) {

    // console.log("tokendash", token)
    // if(!token) {
    //     console.log("not token", token)
    //     return <LoginPage token={token} setToken={setToken}/>
    // }
    

    return (
        <div>
            <h1>Dashboard Page</h1>
            <Link to="/french">French</Link>
            <Link to="/spanish">Spanish</Link>
        </div>
    );
}


