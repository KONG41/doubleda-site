import React from 'react';
import useScript from '../appendScript/useScript';
import '../assets/tournest-master/assets/css/style.css';
import '../assets/tournest-master/assets/css/animate.css';
import '../assets/tournest-master/assets/css/responsive.css';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { allPortfolio } from '../assets/data/portfolio';
import { Link } from 'react-router-dom';
export default function ITProjectDetail(props) {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Development – DoubleDa. The Place.</title>
      </Helmet>
      <section className="discount-offer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="dicount-offer-content text-center pt-5">
                <h2> {t('development.our_portfolio')}</h2>
                <div className="campaign-timer">
                  <div id="timer">
                    <div className="time time-after" id="days">-1323<span className="camp">{t('development.day')}</span></div>
                    <div className="time time-after" id="hours">12<span className="camp">{t('development.hour')}</span></div>
                    <div className="time time-after" id="minutes">33<span className="camp">{t('development.minute')}</span></div>
                    <div className="time" id="seconds">35<span className="camp">{t('development.second')}</span></div>
                  </div>
                </div>
                <div className="about-btn">
                  <button className="about-view discount-offer-btn">
                    <a href="http://doubleda.net/?page_id=1239">{t('development.join_now')}</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pack" className="packages">
        <div className="container">
          <div className="gallary-header text-center">
            <h2>
              {t('development.our_portfolio')}
            </h2>
            <p>
              {t('development.portfolio_desc')}
            </p>
          </div>
          <div className="packages-content">
            <div className="row">
              {
                allPortfolio.map((item, index) => (
                  <div key={item.id} className="col-md-4 col-sm-6">
                    <div className="single-package-item">
                      <img src={`portfolio/${item.img[0]}`} alt="package-place" />
                      <div className="single-package-item-txt">
                        <h3>{item.title} </h3>
                        {/* <span className="pull-right">$499</span> */}
                        <div className="packages-para">
                          <p><i className="fa fa-angle-right"></i> {item.detail_title}</p>
                          <p><i className="fa fa-angle-right"></i>  {item.release_date}</p>
                        </div>
                        <div className="packages-review">
                          <p>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span>254 reviews</span>
                          </p>
                        </div>
                        <div className="about-btn p-0">
                          <Link to={{ pathname: `/detail/${item.id}` }} state={{ items: item }}>
                            <button className="about-view packages-btn" >
                              Case Study
                            </button>
                          </Link>

                        </div>
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
