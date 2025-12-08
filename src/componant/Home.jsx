
import React from "react";
import Herosection from "./home/Herosection";
import Daynamic from "./home/Daynamic";
import Usestate from "./home/Usestate";

function Home() {

      const explordata = {
        border: '2px solid red',
        padding: '10px 10px',
        backgroundColor: 'aqua',
        marginTop: '20px',
    }


  return (
  
     <>
     <Herosection></Herosection>
     <div className="container">
      <div className="row">
          <div className="col-md-3">
            <div style={explordata}>
              <Daynamic name='Abull' age='35'></Daynamic>
            </div>
          </div>
           <div className="col-md-3">
            <div style={explordata}>
              <Daynamic name='Kabull' age='35'></Daynamic>
            </div>
          </div>
           <div className="col-md-3">
            <div style={explordata}>
              <Daynamic name='Habull' age='35'></Daynamic>
            </div>
          </div>
           <div className="col-md-3">
            <div style={explordata}>
              <Daynamic name='Tabull' age='35'></Daynamic>
            </div>
          </div>
      </div>

    <div className="row">
      <div className="col-md-3">
        <Usestate></Usestate>
      </div>
    </div>




     </div>
     

     </>
  
  )
}

export default Home;