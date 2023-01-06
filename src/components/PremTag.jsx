import React from 'react'

const PremTag = ({tagTitle, color, right, left}) => {
  return (
    <span className="prem-tag" style={{ color: color, right: right,left: left }}>{tagTitle}</span>
  )
}
export default PremTag