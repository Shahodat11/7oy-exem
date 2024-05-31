import React from 'react'
import "./Empty.css"

const Empty = ({text}) => {
  return (
    <div className='empty'>
        <h2>{text}</h2>
        <p className='empty-p'>There may be an error in the product name or we don't have such a product yet</p>
    </div>
  )
}

export default Empty