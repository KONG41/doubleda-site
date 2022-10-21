import React from 'react';

import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <>
      <Helmet>
        {/* link from register page */}
        <link rel="stylesheet" href="ecohosting-main/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="ecohosting-main/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="ecohosting-main/assets/css/slicknav.css" />
        <link rel="stylesheet" href="ecohosting-main/assets/css/flaticon.css" />
        <link rel="stylesheet" href="ecohosting-main/assets/css/progressbar_barfiller.css" />
        <link rel="stylesheet" href="ecohosting-main/assets/css/gijgo.css" />
        <link rel="stylesheet" href="ecohosting-main/assets/css/animate.min.css" />
        <link rel="stylesheet" href="ecohosting-main/assets/css/animated-headline.css" />
        <link rel="stylesheet" href="ecohosting-main/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="ecohosting-main/assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="ecohosting-main/assets/css/themify-icons.css" />
        <link rel="stylesheet" href="ecohosting-main/assets/css/slick.css" />
        <link rel="stylesheet" href="ecohosting-main/assets/css/nice-select.css" />
        <link rel="stylesheet" href="ecohosting-main/assets/css/style.css" />
      </Helmet>

      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src="ecohosting-main/assets/img/logo/loder.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <main className="login-body" data-vide-bg="ecohosting-main/assets/img/login-bg.mp4">
        {/* <div style={{ position: "absolute", zIndex: " -1", inset: " 0px", overflow: " hidden", backgroundSize: "cover", backgroundColor: "transparent", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%", backgroundImage: " none" }}>
          <video autoplay="" loop="" muted="" style={{ margin: "auto", position: "absolute", zIndex: " -1", top: "50%", left: " 50%", transform: " translate(-50%, -50%)", visibility: "visible", opacity: "1", width: "1922px", height: "auto" }}>
            <source src="ecohosting-main/assets/img/login-bg.mp4" type="video/mp4" /><source src="ecohosting-main/assets/img/login-bg.webm" type="video/webm" /><source src="ecohosting-main/assets/img/login-bg.ogv" type="video/ogg" />
          </video>
        </div> */}
        <form className="form-default" action="login-bg.mp4" method="POST">
          <div className="login-form">
            <div className="logo-login">
              <a href="index.html"><img src="ecohosting-main/assets/img/logo/loder.png" alt="" /></a>
            </div>
            <h2>Registration Here</h2>
            <div className="form-input">
              <label for="name">Full name</label>
              <input type="text" name="name" placeholder="Full name" />
            </div>
            <div className="form-input">
              <label for="name">Email Address</label>
              <input type="email" name="email" placeholder="Email Address" />
            </div>
            <div className="form-input">
              <label for="name">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="form-input">
              <label for="name">Confirm Password</label>
              <input type="password" name="password" placeholder="Confirm Password" />
            </div>
            <div className="form-input pt-30">
              <input type="submit" name="submit" value="Registration" />
            </div>
            <a href="/login" className="registration">login</a>
          </div>
        </form>
      </main>

    </>
  )
}

export default Register