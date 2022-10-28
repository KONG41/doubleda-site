import { React, useState } from 'react';
import Helmet from 'react-helmet';
import '../assets/satner-master/vendors/linericon/style.css';
import '../assets/satner-master/css/font-awesome.min.css';
import '../assets/satner-master/css/magnific-popup.css';
import '../assets/satner-master/vendors/nice-select/css/nice-select.css';
import '../assets/satner-master/css/style.css';
import { useTranslation } from 'react-i18next';
import useScript from '../appendScript/useScript';


const data_title = [

  {
    title: 'web_design',
    filter: '.web'
  },
  {
    title: 'logo_design',
    filter: '.logo'
  },
  {
    title: 'material_design',
    filter: '.material'
  },
  {
    title: 'mobile_app',
    filter: '.mobile'
  },
  {
    title: 'poster_design',
    filter: '.poster'
  }
]

const data_item = [
  {
    img: 'p1.jpg',
    filter: 'all web'
  },
  {
    img: 'p2.jpg',
    filter: 'all logo'
  },
  {
    img: 'p3.jpg',
    filter: 'all web'
  }, {
    img: 'p4.jpg',
    filter: 'all logo'
  },
  {
    img: 'p5.jpg',
    filter: 'all material'
  },
  {
    img: 'p6.jpg',
    filter: 'all poster'
  },
  {
    img: 'p7.jpg',
    filter: 'all poster material'
  }, {
    img: 'p8.jpg',
    filter: 'all  material'
  },
  {
    img: 'p9.jpg',
    filter: 'all mobile'
  },
]

const GraphicProjectDetail = () => {
  const { t } = useTranslation();


  return (
    <>
      <Helmet>
        <script src="satner-master/js/popper.js"></script>
        <script src="satner-master/js/stellar.js"></script>
        <script src="satner-master/js/theme.js"></script>
      </Helmet>

      <section className="home_banner_area">
        <div className="banner_inner" style={{ background: "linear-gradient(180deg, rgba(76,30,81,1) 0%, rgba(255,255,255,1) 75%)" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">

                  <h1 className="text-uppercase">{t('graphic.create_initiative')}</h1>
                  <h5 className="text-uppercase">{t('graphic.graphic_design')}</h5>
                  <div className="d-flex align-items-center">
                    <a className="primary_btn" href="#"><span>{t('graphic.portfolio')}</span></a>
                    <a className="primary_btn tr-bg" href="/contact"><span>{t('graphic.contact_us')}</span></a>
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
                <h2>{t('graphic.graphic_design_project')}</h2>
              </div>
            </div>
          </div>
          <div className="filters portfolio-filter">
            <ul>
              <li className="active" data-filter="*">{t('graphic.all_project')}</li>
              {
                data_title.map((item, index) => (
                  <li key={`${index}_li`} data-filter={item.filter}>{t(`graphic.${item.title}`)}</li>
                ))
              }
            </ul>
          </div>
          <div className="filters-content">
            <div className="row portfolio-grid justify-content-center">
              {
                data_item.map((item, index) => (
                  <div keys={`${index}_item`} className={` filter-item col-lg-4 col-md-6 ${item.filter}`} data-tag="all latest">
                    <div className="portfolio_box">
                      <div className="single_portfolio">
                        <img className="img-fluid w-100" src={`satner-master/img/portfolio/${item.img}`} alt="" />
                        <div className="overlay"></div>
                        <a href={`satner-master/img/portfolio/${item.img}`} className="img-gal">
                          <div className="icon">
                            <span className="lnr lnr-cross"></span>
                          </div>
                        </a>
                      </div>
                      <div className="short_info">
                        <h4><a href="portfolio-details.html">portfolio</a></h4>
                        <p>{item.filter}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

      </section>
    </>



  )
}
export default GraphicProjectDetail;