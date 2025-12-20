import React from 'react'

function Singledata({singleData}) {
    const {name, price, stock, category, rating,image} = singleData;
  return (
    <div>
        <div className='border p-4'>
            <h4 className='text-success'>Name: {name}</h4>
            <h5 className='text-info'>Price: <span className='text-danger'>{price}</span></h5>
            <h6>Stock: {stock}</h6>
            <p>Category: {category}</p>
            <p>Rating: {rating}</p>
            <p>Image: {image}</p>
        </div>
    </div>
  ) 
}

export default Singledata