import React, { useState, useEffect } from 'react'
import * as Pages from './pages'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layouts'
//import { useToken } from "./contexts";
import useToken from './useToken';

import './assets/app.css';

function App() {
  //const {token, setToken} = useToken();
  //const [token, setToken] = useState(); //working
  //const token = getToken(); //working2
  const {token, setToken} = useToken();

  /*if(!token) {
    console.log("not token", token)
    return <Pages.LoginPage setToken={setToken}/>
}*/

  /*useEffect(() => {
    console.log("token", token)
    
    function checkAuth() {
    if(!token) {
        console.log("not token", token)
        return <Pages.LoginPage setToken={setToken}/>
    }
    }
    checkAuth();
}, [])*/

  return (
    <Routes>
      <Route path="/" element={<NavBar token={token}/>}>
        <Route index element={<Pages.HomePage/>}/>
        <Route path="/login" element={<Pages.LoginPage token={token} setToken={setToken}/>}/>
        <Route path="/register" element={<Pages.RegisterPage/>}/>
        <Route path="/dashboard" element={<Pages.DashboardPage token={token} setToken={setToken}/>}/>
        <Route path="/about" element={<Pages.AboutUsPage/>}/>
        <Route path="/french" element={<Pages.FrenchPage/>}/>
        <Route path="/spanish" element={<Pages.SpanishPage/>}/>
        <Route path="*" element={<Pages.NotFound/>}/>
      </Route>
    </Routes>
  )
}

/*function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}*/

export default App
