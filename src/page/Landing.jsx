import React from 'react';
import ITProject from './ITProject';
import GraphicProject from './GraphicProject';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const Landing = () => {
  return (
    <>
      <div className="slider-area slider-bg ">
        <div className="slider-active">
          <div className="single-slider d-flex align-items-center slider-height ">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-5 col-lg-5 col-md-9 ">
                  <div className="hero__caption">
                    <span data-animation="fadeInLeft" data-delay=".3s">Design Evolution</span>
                    <h1 data-animation="fadeInLeft" data-delay=".6s ">Design Driven Development Your Web Products</h1>
                    <p data-animation="fadeInLeft" data-delay=".8s">Supercharge your WordPress hosting with detailed
                      website analytics, marketing tools, security, and data
                      backups all in one place.</p>
                    <div className="slider-btns">
                      <a data-animation="fadeInLeft" data-delay="1s" href="/#" className="btn radius-btn">get started</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="hero__img d-none d-lg-block f-right">
                    <Player
                      autoplay
                      loop
                      src="https://lottie.host/101c75f2-4686-4237-9911-43062ad13824/ybejxWjwbR.json"
                      // src="https://assets3.lottiefiles.com/packages/lf20_l3sfdi9x.json"

                      style={{ height: "100%", width: "100%" }}
                    >

                    </Player>
                    {/* <img src="ecohosting-main/assets/img/hero/hero_right.png" alt="" data-animation="fadeInRight" data-delay="1s" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-shape d-none d-lg-block">
          <img className="slider-shape1" src="ecohosting-main/assets/img/hero/top-left-shape.png" alt="" />
        </div>
      </div>
      {/* Domain-search start */}
      <div className="domain-search-area section-bg1">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <h2>Search new domain</h2>
              <p>Supercharge your WordPress hosting with detailed website analytics, marketing tools.</p>
            </div>
            <div className="col-xl-8 col-lg-7">
              <form action="#" className="search-box">
                <div className="input-form">
                  <input type="text" placeholder="Search for a domain" />

                  <div className="search-form">
                    <button><i className="ti-search"></i></button>
                  </div>

                  <div className="world-form">
                    <i className="fas fa-globe"></i>
                  </div>
                </div>
              </form>
              <div className="single-domain pt-30 pb-30">
                <ul>
                  <li><span>.com</span>
                    <p>$15.99</p>
                  </li>
                  <li><span>.net</span>
                    <p>$10.99</p>
                  </li>
                  <li><span>.rog</span>
                    <p>$10.99</p>
                  </li>
                  <li><span>.me</span>
                    <p>$10.99</p>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* Domain-search end */}
      {/* service start */}
      <section className="team-area section-bg1 section-padding40">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className=" single-cat">
                <div className="cat-icon">
                  <img src="ecohosting-main/assets/img/icon/services1.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5><a href="#">Web & App Development</a></h5>
                  <p>We design and build digital products with leading technology.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-cat">
                <div className="cat-icon">
                  <img src="ecohosting-main/assets/img/icon/services2.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5><a href="#">Blockchain & NFT</a></h5>
                  <p>We help you apply the latest blockchain technology to your business, such as blockchain platform development, NFT tokenization, payment solution,etc.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-cat">
                <div className="cat-icon">
                  <img src="ecohosting-main/assets/img/icon/services3.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5><a href="#">Design & Marketing</a></h5>
                  <p>We created magnificent designs that transform the standard of your business across various online and offline platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service end */}
      {/* card price start*/}
      <section className="pricing-card-area fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8">
              <div className="section-tittle text-center mb-90">
                <h2>Service for you.</h2>
                <p>We want to be part or your success. From branding to product development, we provide all-in-one service for your success.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 mb-5">
              <div className="single-card text-center h-100 d-flex flex-column justify-content-between">
                <div className="card-top pb-5">
                  <img src="ecohosting-main/assets/img/icon/price1.svg" alt="" />
                  <h4>System Development</h4>
                  <p>Architect robust and scalable backed solutions to offer the best experience, integrating and evolving existing systems, or building a custom solution from-scratch</p>
                </div>
                <div className="card-bottom"> <a href="/it" className="borders-btn ">Get Started</a></div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 mb-5">
              <div className="single-card text-center h-100 d-flex flex-column justify-content-between">
                <div className="card-top pb-5">
                  <img src="ecohosting-main/assets/img/icon/price1.svg" alt="" />
                  <h4>Web & Mobile Development</h4>
                  <p>A cross-platform solution is important. We provide an amazing visual experience for your products across all platforms.</p>

                </div>
                <div className="card-bottom"> <a href="/it" className="borders-btn ">Get Started</a></div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 mb-5">
              <div className="single-card text-center h-100 d-flex flex-column justify-content-between">
                <div className="card-top pb-5">
                  <img src="ecohosting-main/assets/img/icon/price1.svg" alt="" />
                  <h4>BlockChain & NFT Solution</h4>
                  <p>We provide blockchain development services to deliver reliable blockchain systems which allow for enhanced traceability, security and faster processing of data and transactions.</p>
                </div>
                <div className="card-bottom"> <a href="/blockchain_&_nft" className="borders-btn ">Get Started</a></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* card price end */}

      {/* about-1 area start */}
      <div className="about-area1 section-padding40">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-8 col-sm-10">

              <div className="about-img ">
                {/* <img src="ecohosting-main/assets/img/gallery/about1.png" alt="" /> */}
                <Player
                  autoplay
                  loop
                  src="https://assets10.lottiefiles.com/packages/lf20_w5hernhv.json"
                  style={{ height: "100%", width: "100%" }}
                >

                </Player>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="about-caption ">

                <div className="section-tittle section-tittle2 mb-30">
                  <h2>Doubleda means "Together"</h2>
                </div>
                <p className="mb-40">Doubleda is specialist in software design and engineering, offering complete services to deliver delightful software solutions.
                  We can help you transform an idea into a fully viable product, starting by defining the goals and building a roadmap to the best possible solution.</p>
                <div className="slider-btns">
                  <a data-animation="fadeInLeft" data-delay="1s" href="/gd" className="btn radius-btn">DoubleDa Together</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section-padding40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8">
              <div className="section-tittle text-center mb-90">
                <h2 style={{ color: '#4C1E51' }}>Development Project</h2>
                <p>We want to be part or your success. From branding to product development, we provide all-in-one service for your success.</p>
              </div>
            </div>
          </div>

          <ITProject />


        </div>
      </section>
      <section className="section-padding40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8">
              <div className="section-tittle text-center mb-90">
                <h2 style={{ color: '#4C1E51' }}>Graphic Design Project</h2>
                <p>We want to be part or your success. From branding to product development, we provide all-in-one service for your success.</p>
              </div>
            </div>
          </div>

          <GraphicProject />


        </div>
      </section>


    </>
  )
}

export default Landing