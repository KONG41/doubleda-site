import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <>
      <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
          <div class="preloader-inner position-relative">
            <div class="preloader-circle"></div>
            <div class="preloader-img pere-text">
              <img src="ecohosting-main/assets/img/logo/loder.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <header>
        <div class="header-area header-transparent" style={{ position: 'absolute' }}>
          <div class="main-header ">
            <div class="header-bottom  header-sticky">
              <div class="container-fluid">
                <div class="row align-items-center">

                  <div class="col-xl-2 col-lg-2">
                    <div class="logo">
                      <a href="/"><img src="ecohosting-main/assets/img/logo/logo.png" alt="" /></a>
                    </div>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <div class="menu-wrapper d-flex align-items-center justify-content-end">
                      <div class="main-menu d-none d-lg-block">
                        <nav>
                          <ul id="navigation">
                            <li><a href="/it">Development</a>
                              <ul class="submenu">
                                <li><a href="/it">Portfolio</a></li>
                              </ul>
                            </li>
                            <li><a href="/gd">Graphic Design</a></li>
                            <li><a href="help.html">Blockghain & NFT</a></li>
                            <li><a href="#">Contact</a>
                              <ul class="submenu">
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="blog_details.html">Blog Details</a></li>
                                <li><a href="elements.html">Element</a></li>
                              </ul>
                            </li>
                            <li><a href="contact.html">Language</a>
                              <ul class="submenu">
                                <li><a href="blog.html">Khmer</a></li>
                                <li><a href="blog_details.html">English</a></li>
                                <li><a href="elements.html">Korea</a></li>
                                <li><a href="elements.html">India</a></li>
                              </ul>
                            </li>
                            <li class="button-header margin-left "><a href="/register"
                              class="btn">Sign Up</a></li>
                            <li class="button-header"><a href="/login" class="btn3">Sign In</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mobile_menu d-block d-lg-none"></div>
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
                          method="get" className="subscribe_form relative mail_part" novalidate="true">
                          <input type="email" name="EMAIL" id="newsletter-form-email"
                            placeholder=" Email Address " className="placeholder hide-on-focus"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Your email address'" />
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
    </>
  )
}
export default MainLayout