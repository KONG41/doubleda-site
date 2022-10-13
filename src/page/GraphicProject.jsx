import React from 'react'
// import '../assets/satner-master/css/bootstrap.css';
import '../assets/satner-master/vendors/linericon/style.css';
import '../assets/satner-master/css/font-awesome.min.css';
import '../assets/satner-master/css/magnific-popup.css';
import '../assets/satner-master/vendors/nice-select/css/nice-select.css';
import '../assets/satner-master/css/style.css';

const GraphicProject = () => {
  return (
    <>
      <div class="filters-content">
        <div class="row portfolio-grid justify-content-center">
          <div class="col-lg-4 col-md-6 all latest">
            <div class="portfolio_box">
              <div class="single_portfolio">
                <img class="img-fluid w-100" src="satner-master/img/portfolio/p1.jpg" alt="" />
                <div class="overlay"></div>
                <a href="satner-master/img/portfolio/p1.jpg" class="img-gal">
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4><a href="portfolio-details.html">minimal design</a></h4>
                <p>Animated, portfolio</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 all popular">
            <div class="portfolio_box">
              <div class="single_portfolio">
                <img class="img-fluid w-100" src="satner-master/img/portfolio/p2.jpg" alt="" />
                <div class="overlay"></div>
                <a href="satner-master/img/portfolio/p2.jpg" class="img-gal">
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4><a href="portfolio-details.html">Paint wall</a></h4>
                <p>Animated, portfolio</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 all latest">
            <div class="portfolio_box">
              <div class="single_portfolio">
                <img class="img-fluid w-100" src="satner-master/img/portfolio/p3.jpg" alt="" />
                <div class="overlay"></div>
                <a href="satner-master/img/portfolio/p3.jpg" class="img-gal">
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
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