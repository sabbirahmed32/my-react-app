import React, { useEffect, useState } from 'react'
import Product from '../Product'

function Products() {
    const[products, setProducts]= useState([])
   
    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
  return (
    <>
        <div>Products</div>
            {
                products.map(product => <Product
                    key={product.id}
                    product = {product}
                ></Product>)
            }
    </>
  )
}

export default Products