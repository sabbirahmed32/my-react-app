import React from 'react'
import "../home/Hro.css"
function Herosection(props) {

    const aboutH = ()=> {
    const aboutSection = document.getElementById('abouutN');
    aboutSection.innerText=('Hello World');
    }



  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h3 id='abouutN' className='pt-5'>About Section</h3>
            <button onClick={aboutH} className='explore-btn'>Submit</button>
          </div>
          <div className="col-md-6 mt-5">
            <div className='Aproduct'>
              <h5>Product</h5>
              <h5>Name: {props.Aproduct.name}</h5>
              <h5>Price: {props.Aproduct.price}</h5>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div>
              <h5>Name: {props.arrays[1]}</h5>
              <h5>Price: </h5>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div>
           
              <h5><span>Name: {props.producted[0].name}, <span>Price: {props.producted[0].price}</span></span></h5>

              <h5><span>Name: {props.producted[1].name}, <span>Price: {props.producted[1].price}</span></span></h5>
              <h5><span>Name: {props.producted[2].name}, <span>Price: {props.producted[2].price}</span></span></h5>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection