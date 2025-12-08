import { useState } from "react"

function Usestate(){
  const [price, setPrice] = useState(0);

  const increasHandal = () => {
    const newPrice = price + 1;
    setPrice(newPrice);
  }

  const decreseHandal = () =>{
    const newprice = price - 1;
    setPrice(newprice);
  }

    return(
        <>
        <div className="card mt-4 mb-4 p-2">
            <h3 className="text-center">Price: {price} </h3>
        </div>
     <div className="d-flex justify-content-center gap-3">
  <button onClick={increasHandal}>Increase</button>
  <button onClick={decreseHandal}>Decrease</button>
</div>

        </>
    )
    
}export default Usestate