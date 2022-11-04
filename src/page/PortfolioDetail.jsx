import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiCheckCircle } from 'react-icons/fi';
import { useLocation, Link } from 'react-router-dom';
const PortfolioDetail = () => {
  const { t } = useTranslation();
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <section className="portfolio-cover" style={{ backgroundImage: 'url(' + require(`../assets/image/portfolio/${state.items.img[0]}`) + ')' }} >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="dicount-offer-content text-center pt-5 detail-cover-title ">
                <h2 className="theme-gradient">{state.items.title}</h2>
                <p>{state.items.sub_title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="packages">
        <div className="container detail_container">
          <div className="detail_left">
            <h1>{state.items.detail_title}</h1>
            <div className="under_line"></div>
            <p>{state.items.detail_desc}</p>
            <div className="under_line"></div>
            <div className="client_tb">
              <div className="client-col">
                <span>CLIENT NAME</span>
                <p>{state.items.client_name}</p>
              </div>
              <div className="client-col">
                <span>RELEASE DATE</span>
                <p>{state.items.release_date}</p>
              </div>
              <div className="client-col">
                <span>PROJECT TYPES</span>
                <p>{state.items.project_type}</p>
              </div>
            </div>
          </div>

          <div className="detail_right">
            <div className="item-list">
              <h4>{state.items.title_1}</h4>
              <ul>
                {state.items.desc_1.map(item => (
                  <li key={item}><div className="check-icon"><FiCheck /></div> {item}</li>
                ))}
              </ul>
            </div>
            <div className="item-list">
              <h4>{state.items.title_2}</h4>
              <ul>
                {state.items.desc_2.map(item => (
                  <li><div className="check-icon"><FiCheckCircle /></div>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container image-container">
          {
            state.items.img.map(item => (
              <div className="image-box" key={item}>
                <img src={require(`../assets/image/portfolio/${item}`)} alt="" />
                {/* <div className="img" style={{ backgroundImage: `url(portfolio/${state.items.img})` }}></div> */}
              </div>
            ))
          }

        </div>
      </section>


    </>
  )
}

export default PortfolioDetail