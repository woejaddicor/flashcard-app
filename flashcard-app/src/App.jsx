import React, { useState, useEffect } from 'react'
import * as Pages from './pages'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layouts'
//import { useToken } from "./contexts";
import useToken from './useToken';

import './assets/app.css';

function App() {
  const {token, setToken} = useToken();

  return (
    <Routes>
      <Route path="/" element={<NavBar token={token}/>}>
        <Route index element={<Pages.HomePage/>}/>
        <Route path="/login" element={<Pages.LoginPage token={token} setToken={setToken}/>}/>
        <Route path="/register" element={<Pages.RegisterPage/>}/>
        <Route path="/dashboard" element={<Pages.DashboardPage token={token} setToken={setToken}/>}/>
        <Route path="/flashcardcreate" element={<Pages.FlashcardCreate token={token} setToken={setToken}/>}/>
        <Route path="/flashcardupdate" element={<Pages.FlashcardUpdate token={token} setToken={setToken}/>}/>
        <Route path="/flashcardview" element={<Pages.FlashcardView token={token} setToken={setToken}/>}/>
        <Route path="/about" element={<Pages.AboutUsPage/>}/>
        <Route path="/french" element={<Pages.FrenchPage token={token} setToken={setToken}/>}/>
        <Route path="/spanish" element={<Pages.SpanishPage token={token} setToken={setToken}/>}/>
        <Route path="*" element={<Pages.NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App
