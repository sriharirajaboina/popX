import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <>
         <div className="card bg-[#F7F8F9]">
          <div className="card-details">
            <h2 className="card-header">Welcome to PopX</h2>
            <p className="card-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <Link to="/createaccount" className="login-account-btn">Create Account</Link>
            <Link to="/signin" className="login-registered-btn">Already Registered? Login</Link> 
          </div>
         </div>
    </>
   
  )
}

export default LoginPage