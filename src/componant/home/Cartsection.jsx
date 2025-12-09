import { useState } from "react";

function Cartsection() {
   const[setproduct, newPrice] = useState(2);



  return (
    <div>
      <div className="card mt-4 mb-4 p-2">
        <h3 className="text-center">Price: {setproduct}</h3>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <button>Increase</button>
        <button>Decrease</button>
      </div>
    </div>
  );
}
export default Cartsection;