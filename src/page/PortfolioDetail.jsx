import React from 'react';
import { allPortfolio } from '../assets/data/portfolio.js';
import { useTranslation } from 'react-i18next';
const PortfolioDetail = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="discount-offer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="dicount-offer-content text-center pt-5">
                <h2> DigiNFT</h2>
                <h3> NFT Marketplace</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="packages">
        <div className="container detail_container">
          <div className="detail_left">
            <h1>App & System Development</h1>
            <div className="under_line"></div>
            <p>DigiNFT is the NFT marketplace app trading various NFT assets and providing NFT wallet, coin information</p>
            <div className="under_line"></div>
            <div className="client_tb">
              <div className="client-col">
                <span>CLIENT NAME</span>
                <p>DigiNFT</p>
              </div>
              <div className="client-col">
                <span>RELEASE DATE</span>
                <p>March 7, 2022</p>
              </div>
              <div className="client-col">
                <span>PROJECT TYPES</span>
                <p>System, App</p>
              </div>
            </div>
          </div>

          <div className="detail_right">
            right
          </div>
        </div>
      </section>


    </>
  )
}

export default PortfolioDetail