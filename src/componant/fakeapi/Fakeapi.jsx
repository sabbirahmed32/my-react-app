import React, { useEffect, useState } from 'react';
import Singledata from './Singledata';
import "./Fake.css"

function Fakeapi() {
  const [fakeData, setFakedata] = useState([]);
 
  useEffect(() => {
    fetch('/fakeApi.json')
      .then(res => res.json())
      .then(data => setFakedata(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Fake API Data</h2> 

        <h1 className='text-center'> Data Length: {fakeData.length}</h1>
        <div className='user-container'>
          {
            fakeData.map(singleData => <Singledata
                key = {singleData.id}
                singleData = {singleData}
            ></Singledata>)
           }
        </div>
      
    </div>
  );
}

export default Fakeapi;
