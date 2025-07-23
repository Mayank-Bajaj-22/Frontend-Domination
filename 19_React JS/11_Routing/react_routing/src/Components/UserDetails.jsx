import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const GoBackHandler = () => {
    // code to submit form in the database
    // navigate("/User")
    navigate(-1)
  }
  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-5xl text-red-600 mb-2">User Details</h1>
      <h1 className="text-2xl mt-3">hi, {name}</h1>
      <button onClick={GoBackHandler} className="mt-5 text-white px-3 py-2 bg-green-400 rounded-md">
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;


//! agar humko userdetail ko user ke niche hi open karna ho jab