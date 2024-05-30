import React from 'react'
import { Link } from 'react-router-dom'
import '../products/Products.css'
import Skeleton from '../../pages/skeleton/Skeleton'

const Products = ({data, loading}) => {
// let wishlist = useSelector(state => state.wishlist.value)

//   const dispatch = useDispatch()

//   let productItems = data?.map(el =>(
//     <div key={el.id} className="card">
//       <img src={el.images[0]} alt="" />
//       <h3>{el.title}</h3>
//       <button onClick={()=> dispatch(toggleLike(el))}>
//         {
//           wishlist?.some(item => item.id === el.id) ? 
//           <FaHeart style={{color:"red"}}/> 
//           :
//           <FaRegHeart/>
//         }
//       </button>
//       <button onClick={()=> dispatch(addToCart(el))}>
//         <IoCartOutline/>
//       </button>
//     </div>
//   ) )

    let products = data?.map((el)=> <div className='cardd' key={el.id}>
    <Link to={`/single/${el.id}`}>
      <img src={el.image} width={250} height={250} alt="" />
    </Link>
    <p className='title' style={{padding: '13px 0'}}>{el.title}</p>
    <p className='rating'>Rating {el.rating.rate}</p>
    <div className="price">
      <h5 className='price-narx'>$299,43</h5>
      <h5 className='price-skidka'>$534,33</h5>
      <h5 className='price-foiz'>24% Off</h5>
    </div>
  </div>)
  return (
    < >
    {loading?<Skeleton count={10}/>:<></>}
        <div className='cards1 container' style={{display: 'flex', gap: "16px", flexWrap: 'wrap'}}>{products}</div>
        <button className='product-button'>LOAD MORE</button>
    </>
  )
}

export default Products