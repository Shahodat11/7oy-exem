import React from 'react'
import '../mainTop/mainTop.css'
import logo from '../../assets/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.svg'

function MainTop() {
  return (
    <>
    <div className="nav-link">
        <div className="container">
            <div className="nav-link2">
            <div className="nav1">
                <h6 className='mainTop__h6'>Adidas Men Running Sneakers</h6>
                <p className='mainTop__p'>Performance and design. Taken right to the edge.</p>
                <button className='mainTop__button'>SHOP NOW</button>
            </div>
            <img className='main-img' src={logo} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default MainTop