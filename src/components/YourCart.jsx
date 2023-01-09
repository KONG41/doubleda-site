import React from 'react'

const YourCart = () => {
  return (
    <div className="cart-container">
      <span>X</span>
      <div className="cart-box">
        <div className="title"><h1>Your Cart</h1></div>
        <div className="cart-detail row">
          <div className="col-4 detail"> detail</div>
          <div className="col-4 period"> period</div>
          <div className="col-4 price">price</div>
        </div>
      </div>
    </div>
  )
}

export default YourCart