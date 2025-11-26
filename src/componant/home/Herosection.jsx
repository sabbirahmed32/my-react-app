
import React from "react";
import "./Hro.css"
const Herosection = () =>{
    function update(){
      const  HeroTitle = document.getElementById('hero-title');
      HeroTitle.innerText = 'Hello I am Herro Section';
    }


    return (
    <div className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-6">
            <p className="tag">● Web Design Agency</p>
            <h4 id="hero-title" className="hero-title">
              The best solution <br /> for your website
            </h4>
            <button onClick={update} className="explore-btn">
              Explore More <span>→</span>
            </button>

            <div className="social-icons mt-4">
              <i className="bi bi-youtube"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-instagram"></i>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 text-center position-relative">
            {/* <img src={heroImg} className="hero-image" alt="hero" /> */}

            {/* ROI SMALL CARD */}
            <div className="chart-card">
              <p className="chart-text">ROI +200%</p>
              <div className="chart-line"></div>
            </div>

            {/* GOOGLE REVIEW CARD */}
            <div className="google-card">
              <div className="g-letter">G</div>
              <p className="g-title">Google reviews</p>
              <p className="g-subtitle">Rating 5, 24 reviews</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )


}

export default Herosection;