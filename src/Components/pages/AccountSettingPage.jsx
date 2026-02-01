import React from 'react'
import profile from "../../assets/profile.png"
import camera from "../../assets/camera.png"

const AccountSettingPage = () => {
  return (
    <>
    <div className="account-setting">
        <div className="account-header">
                <h3>Account Setting</h3>
            </div>
        <div className="account-profile">
            <div className="profile-details">
                <img src={profile} alt="img" className="profile-img"/>
                <img src={camera} alt="camera" className="camera"/>
            </div>
            <div className="profile-detail">
                <h4>Marry Doe</h4>
                <h5>Marry@Gmail.Com</h5>
            </div>
        </div>
        <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr. Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquayam Erat,Sed Diam</p>
    </div>
    </>
    
  )
}

export default AccountSettingPage