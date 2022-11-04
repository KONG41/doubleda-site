import React from 'react';
import '../assets/tournest-master/assets/css/style.css';
import '../assets/tournest-master/assets/css/animate.css';
import '../assets/tournest-master/assets/css/responsive.css';
import { allPortfolio } from '../assets/data/portfolio';
import { Link } from 'react-router-dom';
const ITProject = () => {



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
    </>
  )
}

export default ITProject