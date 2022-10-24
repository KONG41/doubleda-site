import React from 'react'
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { Helmet } from "react-helmet";
import useScript from '../appendScript/useScript'

const MainLayout = ({ children }) => {

  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (

    <div>
      <Helmet>
        {/* link from landing page */}
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
        <link rel="stylesheet" href="ecohosting-main/assets/scss/style.css" />
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
      <header>
        <div className="header-area header-transparent" >
          <div className="main-header ">
            <div className="header-bottom  header-sticky">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2">
                    <div className="logo">
                      <a href="/"><img src="ecohosting-main/assets/img/logo/logo.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-xl-10 col-lg-10">
                    <div className="menu-wrapper d-flex align-items-center justify-content-end">
                      <div className="main-menu d-none d-lg-block">
                        <nav>
                          <ul id="navigation">
                            <li><a href="/it">{t('development.dev')}</a>
                              <ul className="submenu">
                                <li><a href="/it">{t('development.portfolio')}</a></li>
                              </ul>
                            </li>
                            <li><a href="/gd">{t('graphic_design')}</a></li>
                            <li><a href="/blockchain_&_nft">{t('blockchain')}</a></li>
                            <li><a href="/contact">{t('contact')}</a>
                            </li>
                            <li><a href="#">{t("lang.lng")}</a>
                              <ul className="submenu">
                                <li><a href="#" onClick={() => changeLanguage('kh')}>{t("lang.kh")}</a></li>
                                <li><a href="#" onClick={() => changeLanguage('eng')}>{t("lang.eng")}</a></li>
                                <li><a href="#" onClick={() => changeLanguage('kr')}>{t("lang.kr")}</a></li>
                                <li><a href="#" onClick={() => changeLanguage('ind')}>{t("lang.ind")}</a></li>
                              </ul>
                            </li>
                            <li className="button-header margin-left "><a href="/register"
                              className="btn">Sign Up</a></li>
                            <li className="button-header"><a href="/login" className="btn3">Sign In</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className="footer-wrappr" style={{ backgroundImage: "url(" + "ecohosting-main/assets/img/gallery/footer-bg.png" + ")" }}>
          <div className="footer-area footer-padding ">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="single-footer-caption mb-50">

                    <div className="footer-logo mb-25">
                      <a href="index.html"><img src="ecohosting-main/assets/img/logo/logo2_footer.png" alt="" /></a>
                    </div>
                    <div className="footer-tittle mb-50">
                      <p>Subscribe our newsletter to get updates about our services</p>
                    </div>
                    <div className="footer-form">
                      <div id="mc_embed_signup">
                        <form target="_blank"
                          action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                          method="get" className="subscribe_form relative mail_part" noValidate={true}>
                          <input type="email" name="EMAIL" id="newsletter-form-email"
                            placeholder=" Email Address " className="placeholder hide-on-focus"
                            onFocus={() => this.placeholder = ''}
                            onBlur={() => this.placeholder = 'Your email address'} />
                          <div className="form-icon">
                            <button type="submit" name="submit" id="newsletter-submit"
                              className="email_icon newsletter-submit button-contactForm">
                              Subscribe
                            </button>
                          </div>
                          <div className="mt-10 info"></div>
                        </form>
                      </div>
                    </div>
                    <div className="footer-social mt-50">
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-pinterest-p"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Company</h4>
                      <ul>
                        <li><a href="#">Why choose us</a></li>
                        <li><a href="#"> Review</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Carrier</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Products</h4>
                      <ul>
                        <li><a href="#">Why choose us</a></li>
                        <li><a href="#"> Review</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Carrier</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Support</h4>
                      <ul>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#"> Products</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Quality</a></li>
                        <li><a href="#">Sales geography</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- footer-bottom area --> */}
          <div className="footer-bottom-area">
            <div className="container">
              <div className="footer-border">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="footer-copy-right text-center">
                      <p>
                        Copyright &copy;<script>
                          document.write(new Date().getFullYear());
                        </script> All rights reserved | This template is made with <i
                          className="fa fa-heart" aria-hidden="true"></i> by <a
                            href="https://colorlib.com" target="_blank">Colorlib</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Scroll Up --> */}
      <div id="back-top">
        <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
      </div>
    </div>
  )
}
export default MainLayout