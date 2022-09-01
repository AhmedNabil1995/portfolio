import React, { useState } from 'react'
import './working.css';
const Working = ({setDispaly}) => {
  return (
    <div className='working'>
        <div className='wrapper'>
        <div className='close' onClick={()=>setDispaly(false)}>X</div>
        <span>still working on it</span>
        </div>
    </div>
  )
}

export default Working