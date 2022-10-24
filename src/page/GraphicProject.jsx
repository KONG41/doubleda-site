import React from 'react'
import Helmet from 'react-helmet'
import '../assets/satner-master/css/bootstrap.css';
import '../assets/satner-master/vendors/linericon/style.css';
import '../assets/satner-master/css/font-awesome.min.css';
import '../assets/satner-master/css/magnific-popup.css';
import '../assets/satner-master/vendors/nice-select/css/nice-select.css';
import '../assets/satner-master/css/style.css';
import useScript from '../appendScript/useScript';
const GraphicProject = () => {
  useScript(
    "./satner-master/js/jquery-3.2.1.min.js"
  )
  useScript(
    "./satner-master/js/popper.js"
  )
  useScript(
    "./satner-master/js/bootstrap.min.js"
  )

  useScript(
    "./satner-master/js/stellar.js"
  )
  useScript(
    "./satner-master/js/jquery.magnific-popup.min.js"

  )
  useScript(
    "./satner-master/vendors/nice-select/js/jquery.nice-select.min.js"
  )
  useScript(
    "./satner-master/vendors/isotope/imagesloaded.pkgd.min.js"
  )
  useScript(
    "./satner-master/vendors/isotope/isotope-min.js"
  )

  useScript(
    "./satner-master/vendors/owl-carousel/owl.carousel.min.js"
  )
  useScript(
    "./satner-master/js/jquery.ajaxchimp.min.js"
  )
  useScript(
    "./satner-master/js/mail-script.js"
  )

  // useScript(
  //   "https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"
  // )
  useScript(
    "./satner-master/js/gmaps.min.js"
  )
  useScript(
    "./satner-master/js/theme.js"
  )
  return (
    <>
      <div className="filters-content">
        <div className="row portfolio-grid justify-content-center">
          <div className="col-lg-4 col-md-6 all latest">
            <div className="portfolio_box">
              <div className="single_portfolio">
                <img className="img-fluid w-100" src="satner-master/img/portfolio/p1.jpg" alt="" />
                <div className="overlay"></div>
                <a href="satner-master/img/portfolio/p1.jpg" className="img-gal">
                  <div className="icon">
                    <span className="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div className="short_info">
                <h4><a href="portfolio-details.html">minimal design</a></h4>
                <p>Animated, portfolio</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 all popular">
            <div className="portfolio_box">
              <div className="single_portfolio">
                <img className="img-fluid w-100" src="satner-master/img/portfolio/p2.jpg" alt="" />
                <div className="overlay"></div>
                <a href="satner-master/img/portfolio/p2.jpg" className="img-gal">
                  <div className="icon">
                    <span className="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div className="short_info">
                <h4><a href="portfolio-details.html">Paint wall</a></h4>
                <p>Animated, portfolio</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 all latest">
            <div className="portfolio_box">
              <div className="single_portfolio">
                <img className="img-fluid w-100" src="satner-master/img/portfolio/p3.jpg" alt="" />
                <div className="overlay"></div>
                <a href="satner-master/img/portfolio/p3.jpg" className="img-gal">
                  <div className="icon">
                    <span className="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div className="short_info">
                <h4><a href="portfolio-details.html">female light</a></h4>
                <p>Animated, portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default GraphicProject