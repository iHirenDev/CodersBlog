import React from 'react'
import logo from '../assets/cblogo.png'


function Logo({
  className = ''
}) {
  return (
    <div>
      <img src={logo} 
           alt="logo" 
           className={`${className} border border-white`}/>
    </div>
  )
}

export default Logo