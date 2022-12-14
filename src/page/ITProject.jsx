import React from 'react';
import '../assets/tournest-master/assets/css/style.css';
import '../assets/tournest-master/assets/css/animate.css';
import '../assets/tournest-master/assets/css/responsive.css';
import { allPortfolio } from '../assets/data/portfolio';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const ITProject = () => {
  const { t } = useTranslation();


  return (
    <>
      <div className="packages-content">
        <div className="row">
          {
            allPortfolio.slice(0, 3).map((item, index) => (
              <div key={item.id} className="col-md-4 col-sm-6">
                <div className="single-package-item">
                  <img src={require(`../assets/image/portfolio/${item.img[0]}`)} alt="package-place" />
                  <div className="single-package-item-txt">
                    <h3>{t(`${item.title_id}.title`)} </h3>
                    {/* <span className="pull-right">$499</span> */}
                    <div className="packages-para">
                      <p><i className="fa fa-angle-right"></i> {t(`${item.title_id}.detail_title`)}</p>
                      <p><i className="fa fa-angle-right"></i>  {t(`${item.title_id}.release_date`)}</p>
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

                      <button className="slider-btns my-slider-btn" >
                        <Link to={{ pathname: `/detail/${index + 1}` }} data-animation="fadeInLeft" data-delay="1s" className="btn radius-btn">
                          Case Study
                        </Link>
                      </button>


                    </div>
                  </div>
                </div>
              </div>
            ))
          }


        </div>
        <div className="row">
          <div className="col-12 view-more-btn">
            <div className="card-bottom"> <Link to="/it" className="borders-btn ">View More Projects</Link></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ITProject