import React from "react";

function SingleData({ singleData }) {
  const { name, email, address, phone, website } = singleData;
  return (
    <div className="border rounded p-3 mb-3">
      <h5>
        <strong className="text-6xl ">Name:</strong> {name}
      </h5>
      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Address:</strong> {address.street}, {address.suite},{" "}
        {address.city}, {address.zipcode}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
       <p>
        <strong>Website:</strong> {website}
      </p>
    </div>
  );
}

export default SingleData;
