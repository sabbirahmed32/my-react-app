import React from 'react'

function Singledata({singleData}) {
    const {name, username, email, phone, address} = singleData;
  return (
    <div>
        <div className='border'>
            <h4>Name: {name}</h4>
            <h5>Username: {username}</h5>
            <h6>Email: {email}</h6>
            <p>Phone: {phone}</p>
            <p>Address: {address.street}, {address.city}, {address.zip}, {address.country}</p>
        </div>
    </div>
  ) 
}

export default Singledata