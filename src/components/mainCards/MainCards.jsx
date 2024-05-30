import React from 'react'
import '../mainCards/mainCards.css'
import card1 from '../../assets/shipping.svg'
import card2 from '../../assets/refund.svg'
import card3 from '../../assets/support.svg'
import img1 from '../../assets/Nike_logo_emblem_logotype 1.svg'
import img2 from '../../assets/figma-1-logo 1.svg'
import img3 from '../../assets/kronos-logo-1-1 1.svg'
import img4 from '../../assets/Vector (1).svg'
import rate from '../../assets/rate.svg'
import price from '../../assets/Group 17.svg'

function MainCards() {
  return (
    <div className='container'>
        <div className="mainCards">
            <div className="mainCard">
                <img className='mainCard-img' src={card1} alt="" />
                <h4 className='mainCard-h4'>FREE SHIPPING</h4>
                <p className='mainCard-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="mainCard">
                <img className='mainCard-img' src={card2} alt="" />
                <h4 className='mainCard-h4'>100% REFUND</h4>
                <p className='mainCard-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="mainCard">
                <img className='mainCard-img' src={card3} alt="" />
                <h4 className='mainCard-h4'>SUPPORT 24/7</h4>
                <p className='mainCard-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
        <div className="mainBottom">
            <h1 className='main-h1'>LATEST NEWS</h1>
            <div className="main">
                <div className="bottomCards">
                    <img className='card-img' src={img1} alt="" />
                    <div className="mainyozu">
                        <h3 className='buttom-h3'>01 Jan, 2015</h3>
                        <h4 className='buttom-h4'>Fashion Industry</h4>
                        <p className='buttom-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="bottomCards">
                    <img className='card-img' src={img2} alt="" />
                    <div className="mainyozu">
                        <h3 className='buttom-h3'>01 Jan, 2015</h3>
                        <h4 className='buttom-h4'>Fashion Industry</h4>
                        <p className='buttom-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="bottomCards">
                    <img className='card-img' src={img3} alt="" />
                    <div className="mainyozu">
                        <h3 className='buttom-h3'>01 Jan, 2015</h3>
                        <h4 className='buttom-h4'>Fashion Industry</h4>
                        <p className='buttom-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mainBottom">
            <h1 className='main-h1'>FEATURED PRODUCTS</h1>
            <div className="main">
                <div className="bottomCards">
                    <img className='card-img' src={img4} alt="" />
                    <div className="mainyozu">
                        <h4 className='buttom-h4'>Blue Swade Nike Sneakers</h4>
                        <img className='rate' src={rate} alt="" />
                        <img className='price' src={price} alt="" />
                    </div>
                </div>
                <div className="bottomCards">
                    <img className='card-img' src={img4} alt="" />
                    <div className="mainyozu">
                        <h4 className='buttom-h4'>Blue Swade Nike Sneakers</h4>
                        <img className='rate' src={rate} alt="" />
                        <img className='price' src={price} alt="" />
                    </div>
                </div>
                <div className="bottomCards">
                    <img className='card-img' src={img4} alt="" />
                    <div className="mainyozu">
                        <h4 className='buttom-h4'>Blue Swade Nike Sneakers</h4>
                        <img className='rate' src={rate} alt="" />
                        <img className='price' src={price} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainCards