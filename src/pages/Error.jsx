import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Error.css'

function Error() {
    const navigate =useNavigate();
    const goToHomepage = () => { // func. for go back to homepage 
      navigate('/'); 
    }
  return (
    <div className='error-container'>Oops, Something went wrong :/ 
      <button className='error-button' onClick={goToHomepage}>Go back to homepage</button>
    </div>
    
  )
}

export default Error