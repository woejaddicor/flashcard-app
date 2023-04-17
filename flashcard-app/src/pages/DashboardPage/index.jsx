import React, { useEffect } from "react";
import { useToken } from "../../contexts";
import LoginPage from "../LoginPage";

export default function DashboardPage() {
    const {token, setToken} = useToken();

    useEffect(() => {
        console.log("token", token)
        if(!token) {
            console.log("not token", token)
            return <LoginPage/>
          }
    }, [])

    return(
        <div>
            <h1>Dashboard Page</h1>
        </div>
    )
}