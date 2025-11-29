import React from 'react'
import "../home/Hro.css"
function Herosection() {

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
        </div>
      </div>
    </div>
  )
}

export default Herosection