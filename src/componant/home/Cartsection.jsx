import { useState } from "react";

function Cartsection() {
   const[setproduct, setState] = useState(1);

   const plus =()=>{
    const newPrice = setproduct + 1;
    setState(newPrice);
   }
   const mynas = () =>{
    const newPrice = setproduct - 1;
    setState(newPrice);
   }



  return (
    <div>
      <div className="card mt-4 mb-4 p-2">
        <h3 className="text-center">Price: {setproduct}</h3>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <button onClick={plus}>Increase</button>
        <button onClick={mynas}>Decrease</button>
      </div>
    </div>
  );
}
export default Cartsection;