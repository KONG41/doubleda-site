import { React, useEffect } from 'react';
import Helmet from 'react-helmet';
import '../assets/satner-master/css/bootstrap.css';
import '../assets/satner-master/vendors/linericon/style.css';
import '../assets/satner-master/css/font-awesome.min.css';
import '../assets/satner-master/css/magnific-popup.css';
import '../assets/satner-master/vendors/nice-select/css/nice-select.css';
import '../assets/satner-master/css/style.css';
import useScript from '../appendScript/useScript';
const GraphicProjectDetail = () => {
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

  useScript(
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"
  )
  useScript(
    "./satner-master/js/gmaps.min.js"
  )
  useScript(
    "./satner-master/js/theme.js"
  )
  return (
    <>
      {/* <Helmet>


        <script src="../assets/satner-master/js/jquery-3.2.1.min.js"></script>
        <script src="../assets/satner-master/js/popper.js"></script>
        <script src="../assets/satner-master/js/bootstrap.min.js"></script>
        <script src="../assets/satner-master/js/stellar.js"></script>
        <script src="../assets/satner-master/js/jquery.magnific-popup.min.js"></script>
        <script src="../assets/satner-master/vendors/nice-select/js/jquery.nice-select.min.js"></script>
        <script src="../assets/satner-master/vendors/isotope/imagesloaded.pkgd.min.js"></script>
        <script src="../assets/satner-master/vendors/isotope/isotope-min.js"></script>
        <script src="../assets/satner-master/vendors/owl-carousel/owl.carousel.min.js"></script>
        <script src="../assets/satner-master/js/jquery.ajaxchimp.min.js"></script>
        <script src="../assets/satner-master/js/mail-script.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script>
        <script src="../assets/satner-master/js/gmaps.min.js"></script>
        <script src="../assets/satner-master/js/theme.js"></script>
      </Helmet> */}

      <section className="home_banner_area">
        <div className="banner_inner" style={{ background: "linear-gradient(180deg, rgba(76,30,81,1) 0%, rgba(255,255,255,1) 75%)" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">

                  <h1 className="text-uppercase">Create Initiative</h1>
                  <h5 className="text-uppercase">Graphic Design</h5>
                  <div className="d-flex align-items-center">
                    <a className="primary_btn" href="#"><span>Portfolio</span></a>
                    <a className="primary_btn tr-bg" href="#"><span>Contact Us</span></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <img className="" src="satner-master/img/banner/home-right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio_area section_gap_top" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title text-left">
                <h2>Graphic Design Project</h2>
              </div>
            </div>
          </div>
          <div className="filters portfolio-filter">
            <ul>
              <li className="active" data-filter="*">all project</li>
              <li data-filter=".popular">web design</li>
              <li data-filter=".latest">logo design</li>
              <li data-filter=".following">material design</li>
              <li data-filter=".upcoming">mobile app</li>
              <li data-filter=".latest">poster design</li>
            </ul>
          </div>

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
              <div className="col-lg-4 col-md-6 all popular">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="satner-master/img/portfolio/p4.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="satner-master/img/portfolio/p4.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">fourth air</a></h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all following">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="satner-master/img/portfolio/p6.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="satner-master/img/portfolio/p5.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">together sign</a></h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all upcoming">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="satner-master/img/portfolio/p5.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="satner-master/img/portfolio/p6.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">multiply fowl</a></h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all upcoming following">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="satner-master/img/portfolio/p7.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="satner-master/img/portfolio/p7.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">green heaven</a></h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all following">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="satner-master/img/portfolio/p8.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="satner-master/img/portfolio/p8.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>fly male</h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all upcoming">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="satner-master/img/portfolio/p9.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="satner-master/img/portfolio/p9.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">season face</a></h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
export default GraphicProjectDetail;