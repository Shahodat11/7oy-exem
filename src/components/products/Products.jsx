import React from 'react'
import { Link } from 'react-router-dom'
import '../products/Products.css'
import Skeleton from '../../pages/skeleton/Skeleton'
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../context/wishlistSlice';
import { FaHeart } from 'react-icons/fa';
import { addToCart } from '../../context/cartSlice';

const Products = ({data, loading}) => {
  console.log(data);
let wishlist = useSelector(state => state.wishlist.value)

  const dispatch = useDispatch()


    let products = data?.map((el)=> <div className='cardd' key={el.id}>
    <Link to={`/single/${el.id}`}>
      <img src={el.image} width={250} height={250} alt="" />
    </Link>
    <button className='like' onClick={()=> dispatch(toggleLike(el))}>
         {
          wishlist?.some(item => item.id === el.id) ? 
          <FaHeart style={{color:"red"}}/> 
          :
          <FaRegHeart className='like-img'/>
        }
    </button>
    <button  onClick={()=> dispatch(addToCart(el))} className='cart-button'>
      <IoCartOutline className='cart-imgg' />
    </button>
    <p className='product-title' style={{padding: '13px 0'}}>{el.title}</p>
    <p className='rating'>Rating {el.rating.rate}</p>
    <div className="price">
      <h5 className='price-narx1'>$299,43</h5>
      <h5 className='price-skidka1'>$534,33</h5>
      <h5 className='price-foiz1'>24% Off</h5>
    </div>
  </div>)
  return (
    < >
    {loading?<Skeleton count={10}/>:<></>}
        <div className='cards1 container' style={{display: 'flex', gap: "16px", flexWrap: 'wrap'}}>{products}</div>
    </>
  )
}

export default Products