import React from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import LandingPage from './Components/pages/LandingPage'
import LoginPage from './Components/pages/LoginPage'
import SignupPage from './Components/pages/SignupPage'
import Profile from './Components/pages/Profile'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes> 
    </>
  )
}

export default App
