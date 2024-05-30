import React from 'react'
import '../card/card.css'
import card1 from '../../assets/img.png'
import card2 from '../../assets/img2.png'
import card3 from '../../assets/img3.png'

function Card() {
  return (
    <div className='container'>
        <div className="cards">
            <div className="card">
                <h2 className='name'>FS - QUILTED MAXI CROSS BAG</h2>
                <img className='name__img' src={card1} alt="" />
                <div className="name-price">
                    <h6 className='name-h6'>$534,33</h6>
                    <h6 className='name__h6'>24% Off</h6>
                </div>
                <h5 className='name-h5'>$299,43</h5>
            </div>
            <div className="card">
                <div className="name-nav">
                    <h2 className='name'>FS - Nike Air Max 270 React...</h2>
                    <h5 className='name-h5'>$299,43</h5>
                </div>
                <img className='name__img' src={card2} alt="" />
                <div className="name-price">
                    <h6 className='name-h6'>$534,33</h6>
                    <h6 className='name__h6'>24% Off</h6>
                </div>
            </div>
            <div className="card">
                <h2 className='name'>FS - Nike Air Max 270 React...</h2>
                <div className="name-price">
                    <h6 className='name-h6'>$534,33</h6>
                    <h6 className='name__h6'>24% Off</h6>
                </div>
                <img className='name__img' src={card3} alt="" />
                <h5 className='name-h5'>$299,43</h5>
            </div>
        </div>
        <div className="product__top">
            <h1 className='product-h1'>BEST SELLER</h1>
            <div className="product-h2">
                <h2 className='nav-h2'>All</h2>
                <h2 className='nav-h2'>Bags</h2>
                <h2 className='nav-h2'>Sneakers</h2>
                <h2 className='nav-h2'>Belt</h2>
                <h2 className='nav-h2'>Sunglasses </h2>
            </div>
        </div>
    </div>
  )
}

export default Card