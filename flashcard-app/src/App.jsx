import React from 'react'
import * as Pages from './pages'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layouts'

function App() {

  return (
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<Pages.HomePage/>}/>
        <Route path="/login" element={<Pages.LoginPage/>}/>
        <Route path="/register" element={<Pages.RegisterPage/>}/>
        <Route path="/dashboard" element={<Pages.DashboardPage/>}/>
        <Route path="/aboutus" element={<Pages.AboutUsPage/>}/>
        <Route path="/french" element={<Pages.FrenchPage/>}/>
        <Route path="/spanish" element={<Pages.SpanishPage/>}/>
        <Route path="*" element={<Pages.NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App
