import React from 'react'
import {SlArrowRight} from 'react-icons/sl'
const PurchaseBtn = ({title, underLine}) => {
  return (
    <div className="purchase">
    <span className="add-to-card"><p style={underLine && { textDecoration:'underline' }}>{title} <span className="arrow-right"><SlArrowRight/></span></p></span>
  </div>
  )
}

export default PurchaseBtn