import React from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import LoginPage from './Components/pages/LoginPage'
import SigninPage from './Components/pages/SigninPage'
import CreateAccountPage from './Components/pages/CreateAccountPage'
import AccountSettingPage from './Components/pages/AccountSettingPage'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/signin" element={<SigninPage/>}/>
      <Route path="/createaccount" element={<CreateAccountPage/>}/>
      <Route path="/accountsetting" element={<AccountSettingPage/>}/>
    </Routes> 
    </>
  )
}

export default App
