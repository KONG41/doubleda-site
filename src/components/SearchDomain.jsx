import React, { useState } from "react";
import axios from "axios";
import keyface from '../assets/image/features/keyfacts.svg';
import googlebundleicon from '../assets/image/features/googlebundleicon.svg';
import identitydigitalicon from '../assets/image/features/identitydigitalicon.svg'
import PremTag from '../components/PremTag';
import { useTranslation } from "react-i18next";
import PurchaseBtn from "./PurchaseBtn";


const SearchDomain = () => {
  const { t } = useTranslation();
  const [domain, setDomain] = useState();
  const handleDomain = e => {
    let value = e.target.value;
    setDomain(value);
  };
  const handleSearchDomain = () => {
      
      axios.get('https://api.dnsimple.com/v2/whoami',{
        headers: {
            'Authorization': 'goPLEmgHfA7CVP3YHMSGF7xuI7tE8rdW',
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
          },
      })
        .then(response => {
          console.log("Response Is:", response.data);
        })
        .catch(error => {
          console.log(error);
        });
  };

  return (
    <>
     <div className="domain-search-area section-bg1">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5">
            <h2>
              {t("landing.search_new")}
            </h2>
            <p>
              {t("landing.supercharge_your")}
            </p>
          </div>
          <div className="col-xl-8 col-lg-7">
            <form className="search-box">
              <div className="input-form">
                <input type="text" placeholder={t("landing.search_for")} onChange={e => {
                    handleDomain(e);
                  }} />
                <div className="search-form">
                  <button type="button">
                    <i className="ti-search" onClick={() => {
                        handleSearchDomain();
                      }} />
                  </button>
                </div>

                <div className="world-form">
                  <i className="fas fa-globe" />
                </div>
              </div>
            </form>
            <div className="single-domain pt-30 pb-30">
              <ul>
                <li>
                  <span>.com</span>
                  <p>$15.99</p>
                </li>
                <li>
                  <span>.net</span>
                  <p>$10.99</p>
                </li>
                <li>
                  <span>.rog</span>
                  <p>$10.99</p>
                </li>
                <li>
                  <span>.me</span>
                  <p>$10.99</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col list-domain">
            <div className="row list-header">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <p>Domain Name</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <p>Features</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <p>Price</p>
              </div>
            </div>
            <div className="row list-body">
              <div className="col-12">
                <div className="row item-domain ">
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <PremTag tagTitle="premium" color="#3c1eaa" />Travel<strong className="domain">.net</strong>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <span>
                      <img src={keyface} className="keyface" />
                    </span>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 price-container">
                    <div className="domain-price">
                      <span className="discount"><del>6.98$</del> /</span>
                      <span className="price"><PremTag tagTitle="on sale" color="red" right="0" />$2.99</span>
                    </div>
                    <PurchaseBtn title="add to card" />
                  </div>
                </div>
                <div className="row item-domain ">
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    Travel<strong className="domain">.bio</strong>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <span>
                      <img src={keyface} className="keyface" />
                    </span>
                    <span className="tag">
                      <img src={googlebundleicon} /> <img src={identitydigitalicon} />
                    </span>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 price-container">
                    <div className="domain-price">
                      <span className="discount"><del>6.98$</del> /</span>
                      <span className="price"><PremTag tagTitle="on sale" color="red" right="0" />$2.99</span>
                    </div>
                  </div>
                </div>
                <div className="row item-domain">
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    Travel<strong className="domain">.travel</strong>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <span>
                      <img src={keyface} className="keyface" />
                    </span>
                    <span className="tag">
                      <img src={googlebundleicon} /> <img src={identitydigitalicon} />
                    </span>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 price-container">
                    <div className="domain-price">
                      <span className="discount"><del>6.98$</del> /</span>
                      <span className="price"><PremTag tagTitle="on sale" color="red" right="0" />$2.99</span>
                    </div>
                    <PurchaseBtn title="make offer" underLine={true}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
    </>
)};

export default SearchDomain;
