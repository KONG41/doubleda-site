import React from 'react'

const AlertInputError = ({ message, bgColor }) => {
  return (
    <div className="alert-box" style={{color: 'black', backgroundColor: `${bgColor}` }}>
      <p className="alert-message">{message}</p>
    </div>
  )
}

export default AlertInputError