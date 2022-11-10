import { React } from 'react';
import Helmet from 'react-helmet';
import '../assets/satner-master/vendors/linericon/style.css';
import '../assets/satner-master/css/font-awesome.min.css';
import '../assets/satner-master/css/magnific-popup.css';
import '../assets/satner-master/vendors/nice-select/css/nice-select.css';
import '../assets/satner-master/css/style.css';
import { useTranslation } from 'react-i18next';
import { allGraphicDesign } from '../assets/data/portfolio';

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

const GraphicProjectDetail = () => {
  const { t } = useTranslation();


  return (
    <>
      <Helmet>
        <title>Graphic Design – DoubleDa. The Place.</title>
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
                allGraphicDesign.map((item, index) => (

                  <div key={`${index}_item`} className={` filter-item col-lg-4 col-md-6 ${item.filter}`} data-tag="all latest">
                    <div className="portfolio_box">
                      <div className="single_portfolio">
                        <img className="img-fluid w-100" src={require(`../assets/image/portfolio/${item.img}`)} alt="" />
                        <div className="overlay"></div>
                        <a href={require(`../assets/image/portfolio/${item.img}`)} className="img-gal">
                          <div className="icon">
                            <span className="lnr lnr-cross"></span>
                          </div>
                        </a>
                      </div>
                      <div className="short_info">
                        <h4><a href="portfolio-details.html">{t(`graphic.${item.title}`)}</a></h4>
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