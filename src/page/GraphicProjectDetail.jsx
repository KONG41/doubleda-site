import { React, useEffect, useState, } from 'react';
import '../assets/satner-master/vendors/linericon/style.css';
import '../assets/satner-master/css/font-awesome.min.css';
import '../assets/satner-master/css/magnific-popup.css';
import '../assets/satner-master/vendors/nice-select/css/nice-select.css';
import '../assets/satner-master/css/style.css';
import useScript from '../appendScript/useScript';
import { useTranslation } from 'react-i18next';
import { allGraphicDesign } from '../assets/data/portfolio';
import { Titled } from 'react-titled';
import { Link } from 'react-router-dom';


const data_title = [
  {
    title: 'web_design',
    data_filter: '.web'
  },
  {
    title: 'logo_design',
    data_filter: '.logo'
  },
  {
    title: 'material_design',
    data_filter: '.material'
  },
  {
    title: 'mobile_app',
    data_filter: '.mobile'
  },
  {
    title: 'poster_design',
    data_filter: '.poster'
  }
]



const GraphicProjectDetail = () => {

  useScript("/satner-master/js/popper.js");
  useScript("/satner-master/js/stellar.js");
  // useScript("/satner-master/js/theme.js");

  const [popAll, setPopAll] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [])

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/satner-master/js/theme.js"
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }

  }, [popAll])

  return (
    <>
      <Titled title={title => `GraphicDesign | ${title}`} />
      <section className="home_banner_area">
        <div className="banner_inner" style={{ background: "linear-gradient(180deg, rgba(76,30,81,1) 0%, rgba(255,255,255,1) 75%)" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">

                  <h1 className="text-uppercase">{t('graphic.create_initiative')}</h1>
                  <h5 className="text-uppercase">{t('graphic.graphic_design')}</h5>
                  <div className="d-flex align-items-center">
                    <Link to="/it" className="primary_btn" href="#"><span>{t('graphic.portfolio')}</span></Link>
                    <Link to="/contact" className="primary_btn tr-bg"><span>{t('graphic.contact_us')}</span></Link>
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
              <li className="active" data-filter="*" onClick={() => setPopAll(true)}>{t('graphic.all_project')}</li>
              {
                data_title.map((item, index) => (
                  <li key={`${index}_li`} data-filter={item.data_filter} onClick={() => setPopAll(false)}>{t(`graphic.${item.title}`)}</li>
                ))
              }
            </ul>
          </div>
          <div className="filters-content">
            <div className="row portfolio-grid justify-content-center">
              {
                allGraphicDesign.map((item, index) => (
                  <div key={`${index}_item`} className={` filter-item col-lg-4 col-md-6 all ${item.filter}`} data-tag="all latest">
                    <div className="portfolio_box">
                      <div className="single_portfolio">
                        <img className="img-fluid w-100" src={require(`../assets/image/portfolio/${item.img}`)} alt="" />
                        <div className="overlay"></div>
                        <a href={require(`../assets/image/portfolio/${item.img}`)} id={popAll ? "alls" : `${item.filter}`} className="pop-gal">
                          <div className="icon">
                            <span className="lnr lnr-cross"></span>
                          </div>
                        </a>
                      </div>
                      <div className="short_info">
                        <h4><a>{t(`graphic.${item.title}`)}</a></h4>
                        <p>{t(`graphic.${item.type}`)}</p>
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