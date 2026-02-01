import React from 'react'

const SigninPage = () => {
  return (
    <>
        <div className="card">
            <div className="signin-card">
                <h2>Signin to your
                    <br/>PopX account
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <form action="#">
                    <div className="input-box">
                        <input type="email" 
                        placeholder="Enter Email address" required/>
                        <label>Email Address</label>
                    </div>
                    <div className="input-box">
                        <input type="password"
                        placeholder="Enter password" required/>
                        <label>Password</label>
                    </div>
                    
                    <button className="login-btn">Login</button>
                </form>
            </div> 
        </div>
    </>
  )
}

export default SigninPage