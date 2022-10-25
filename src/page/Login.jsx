import React from 'react';
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <body style={{
      position: "relative",
      fontSize: "14px",
      color: "#222222",
      background: "#fff",
      fontFamily: "'Poppins', sans-serif",
      maxWidth: "1920px",
      margin: " 0 auto"
    }}>
      <Helmet>
        {/* <link rel="stylesheet" href="ecohosting-main/assets/css/bootstrap.min.css" /> */}
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
        <form className="form-default" action="login-bg.mp4" method="POST">
          <div className="login-form">
            <div className="logo-login">
              <a href="index.html"><img src="ecohosting-main/assets/img/logo/loder.png" alt="" /></a>
            </div>
            <h2>Login Here</h2>
            <div className="form-input">
              <label for="name">Email</label>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-input">
              <label for="name">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="form-input pt-30">
              <input type="submit" name="submit" value="login" />
            </div>
            <a href="#" className="forget">Forget Password</a>
            <a href="/register" className="registration">Registration</a>
          </div>
        </form>
      </main>
    </body>
  )
}
export default Login
