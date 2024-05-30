import React from 'react'
import '../footer/footer.css'
import logo from '../../assets/FOOTER (8).svg'
import footer from '../../assets/BOTTOM.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer1">
                <div className="footer-nav1">
                    <img src={logo} alt="" />
                    <p className='footer-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                </div>
                <div className="footer-nav2">
                    <h5 className='footer-h5'>Follow Us</h5>
                    <p className='footer-p'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                </div>
                <div className="footer-nav2">
                    <h5 className='footer-h5'>Contact Us</h5>
                    <h6 className='footer-h6'>E-Comm, 4578</h6>
                    <h6 className='footer-h6'>Marmora Road, </h6>
                    <h6 className='footer-h6'>Glasgow D04 89GR</h6>
                </div>
            </div>
            <div className="footer2">
                <div className="footer-nav1">
                    <h5 className='footer-h5'>Infomation</h5>
                    <h6 className='footer-h6'>About Us</h6>
                    <h6 className='footer-h6'>Infomation</h6>
                    <h6 className='footer-h6'>Privacy Policy</h6>
                    <h6 className='footer-h6'>Terms & Conditions</h6>
                </div>
                <div className="footer-nav">
                    <h5 className='footer-h5'>Service</h5>
                    <h6 className='footer-h6'>About Us</h6>
                    <h6 className='footer-h6'>Infomation</h6>
                    <h6 className='footer-h6'>Privacy Policy</h6>
                    <h6 className='footer-h6'>Terms & Conditions</h6>
                </div>
                <div className="footer-nav">
                    <h5 className='footer-h5'>My Account</h5>
                    <h6 className='footer-h6'>About Us</h6>
                    <h6 className='footer-h6'>Infomation</h6>
                    <h6 className='footer-h6'>Privacy Policy</h6>
                    <h6 className='footer-h6'>Terms & Conditions</h6>
                </div>
                <div className="footer-nav">
                    <h5 className='footer-h5'>Our Offers</h5>
                    <h6 className='footer-h6'>About Us</h6>
                    <h6 className='footer-h6'>Infomation</h6>
                    <h6 className='footer-h6'>Privacy Policy</h6>
                    <h6 className='footer-h6'>Terms & Conditions</h6>
                </div>
            </div>
            <img className='footer-img' src={footer} alt="" />
        </div>
    </div>
  )
}

export default Footer