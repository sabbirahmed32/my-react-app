import React from 'react'

function Product({product}) {
   
    const {name, price, stock, category, rating, image} = product;

  return (
    <div>
        <h4>Name: {name}</h4>
    </div>
  )
}

export default Product