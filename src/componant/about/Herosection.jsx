import React from 'react'
import "../home/Hro.css"
function Herosection(props) {

    const aboutH = ()=> {
    const aboutSection = document.getElementById('abouutN');
    aboutSection.innerText=('Hello World');
    }

    console.log(props)

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
        </div>
      </div>
    </div>
  )
}

export default Herosection