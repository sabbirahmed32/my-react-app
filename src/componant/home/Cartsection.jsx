import { useState } from "react";

function Cartsection() {
   const [Price, setstate]= useState(0);

    let plus = () =>{
      let newPrice = Price + 1;
      setstate(newPrice);
    }

    let mynas = () =>{
      let newPrice = Price - 1;
      setstate(newPrice);
    }
  return (
    <div>
      <div className="card mt-4 mb-4 p-2">
        <h3 className="text-center">Price: {Price}</h3>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <button onClick={plus}>Increase</button>
        <button onClick={mynas}>Decrease</button>
      </div>
    </div>
  );
}
export default Cartsection;