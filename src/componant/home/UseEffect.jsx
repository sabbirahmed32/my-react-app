import { useEffect, useState } from "react";
import SingleData from "./SingleData";

function UseEffect() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <>
      <div>
        <h3>UseEffect</h3>
      </div>
      <div className="card mt-4 mb-4 p-2">
        <h3 className="text-center">Api data: {allData.length}</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {allData.map((singleData) => (
                <SingleData key={singleData.id} singleData={singleData} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UseEffect;
