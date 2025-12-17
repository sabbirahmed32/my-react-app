import React, { useState } from 'react'

function Cartsection() {
  const [count, setCount]= useState(0);

  let plus = () =>{
    let newCount = count + 1;
    setCount(newCount);
  }
  let mynas =()=>{
    let newCount = count-1;
    setCount(newCount);
  }
  return (
    <>
    <div className="card mt-5">
      <h4 className='text-center'>price quantity: {count}</h4>
       </div>
      <div className="d-flex justify-content-center gap-3 pt-4">
        <button onClick={plus}>+</button>
        <button onClick={mynas}>-</button>
      </div>
   
    </>
  )
}

export default Cartsection