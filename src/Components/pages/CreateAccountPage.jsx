import React from 'react'
import {Link} from "react-router-dom"

const CreateAccountPage = () => {
  return (
   <>
    <div className="card">
      <div className="create-account">
        <h2>
          Create your <br />PopX account
        </h2>

        <form>
          <div className="input-box">
            <input type="+tel" name="fullName" placeholder="Enter your Name" required />
            <label>Full Name</label>
          </div>

          <div className="input-box">
            <input type="text" name="phone" placeholder="Enter your Phone Number" required />
            <label>Phone Number</label>
          </div>

          <div className="input-box">
            <input type="email" name="email" placeholder="Enter your Email" required />
            <label>Email Address</label>
          </div>

          <div className="input-box">
            <input type="password" name="password" placeholder="Enter your Password" required />
            <label>Password</label>
          </div>

          <div className="input-box">
            <input type="text" name="company" placeholder="Enter your Company Name" required />
            <label>Company Name</label>
          </div>

          <div className="radio-group">
            <h5>Are you an agency?</h5>

            <label>
              <input type="radio" name="agency" value="yes" />
              Yes
            </label>

            <label>
              <input type="radio" name="agency" value="no" />
              No
            </label>
          </div>
          <Link to="/accountsetting">
            <button className="create-btn" type="submit">Create Account</button>
          </Link> 
        </form>
      </div>
    </div>

   </>
  )
}

export default CreateAccountPage