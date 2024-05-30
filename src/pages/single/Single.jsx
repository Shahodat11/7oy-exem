import axios from '../../api'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../single/single.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import colors from '../../assets/colors.svg'
import narx from '../../assets/Group 7.svg'

function Single() {
  const {id}=useParams()
  const [product,setProduct]=useState(null)

  useEffect(()=>{
    axios
      .get(`/products/${id}`)
      .then(res=>setProduct(res.data))
      .catch(err=>console.log(err))
  },[id])

  
  return (
    <>
    <div className='container'>
      <Navbar/>
      <Header/>
      <div className="nav-linkk">
          <div className="hero">
            <h5 className='hero-h5'>Home/</h5>
            <h5 className='hero-h5'>Hot Deal/</h5>
            <h6 className='hero-h6'>Nike Airmax 270 React</h6>
          </div>
        <div className="nav-link5">
          <div className="navs5">
            <div className="navv">
              <div>
                <img className='single__imgg' src={product?.image} alt="" />
                <div className="singleImg">
                  <img className='single__img' src={product?.image} alt="" />
                  <img className='single__img' src={product?.image} alt="" />
                  <img className='single__img' src={product?.image} alt="" />
                  <img className='single__img' src={product?.image} alt="" />
                </div>
              </div>
              <div className="navv1">
                <h2 className='title__h2'>{product?.title}</h2>
                <p className='rating__p'>Rating {product?.rating.rate}</p>
                  <div className="price1">
                    <h5 className='price-narx1'>$299,43</h5>
                    <h5 className='price-skidka'>$534,33</h5>
                    <h5 className='price-foiz'>24% Off</h5>
                  </div>
                  <div className="h">
                    <div className="nav-h1">
                      <h4 className='nav-h'>Availability:</h4>
                      <h4 className='nav-h'>Category</h4>
                      <h4 className='nav-h'>Free shipping</h4>
                    </div>
                    <div className="nav-h1">
                      <h4 className='nav-h'>In stock</h4>
                      <h4 className='nav-h'>Accessories</h4>
                    </div>
                  </div>
                  <div className="color">
                    <h3 className='colors'>Select Color:</h3>
                    <img src={colors} alt="" />
                  </div>
                  <div className="size">
                    <h3 className='sizes'>Size</h3>
                    <select className='XS' name="XS" id="XS">
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="X">X</option>
                      <option value="X">XL</option>
                      <option value="X">XXL</option>
                    </select>
                  </div>
              </div>
              <div className="rasm">
                <img className='single__img1' src={product?.image} alt="" />
                <p className='product-rating'>Rating {product?.rating.rate}</p>
                <img className='product-narx' src={narx} alt="" />
              </div>
            </div>
            <div className="nav-linkss">
              <div className="nav-link6">
                <h4>Description</h4>
                <h4>Additional info</h4>
                <h4>Vendor</h4>
                <h4>Reviews (3)</h4>
              </div>
              <p className='top__p'>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
              </p>
              <p className='top__p'>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
                </p>
                <p className='top__p'>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
                  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Single