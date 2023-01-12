import React from 'react'
import{MdOutlineCancel} from 'react-icons/md'
import {RiDeleteBin4Line} from 'react-icons/ri'
import {useStateContext} from '../context/ContextProvider.js'
const YourCart = () => {
  const {handleCartPopup} = useStateContext()
  return (
     <div className="cart-container">
      <div className="cart-box">
        <span className="cancel" onClick={handleCartPopup}>
          <MdOutlineCancel />
        </span>
        <div className="title">
          <h1>Your Cart</h1>
        </div>
        <div className="cart-detail row">
          <div className="col-6 detail">
            <div className="domain-info">
              <h2>DOMAINNAME.COM</h2>
              <p>Registration</p>
            </div>
            <div className="domain-addons">
              <h2>ADDVANCED SECURITY + PRIVACY</h2>
              <p>Includes: Whois Privacy Lock Plus, SSL certificate</p>
            </div>
          </div>
          <div className="col-3 period" >
            <select>
              <option value="1">1 Years</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
            </select>
          </div>
          <div className="col-3 price">
            <div className="amount-price">
              <p><del>$49.99</del><strong>$34.99</strong> <span><RiDeleteBin4Line /></span></p>
              <p><strong>$34.99</strong><span><RiDeleteBin4Line /></span></p> 
            </div>
            <div className="total-price">
              <p><span>Subtotal:</span><span>$54.98</span></p>
              <p><span>Savings:</span>-<span>$15.00</span></p>
              <p className="profit">(You save 27%)</p>
              <p><strong>Total: $39.98</strong></p>
            </div>
          </div>
        </div>
        <div className="next-step">
          <button className="slider-btns my-slider-btn"><a data-animation="fadeInLeft" data-delay="1s" class="btn radius-btn" href="/detail/1">NEXT STEP: LOGIN</a></button>
        </div>
      </div>
    </div>);
}

export default YourCart