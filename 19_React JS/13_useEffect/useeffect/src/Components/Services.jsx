import React, { useEffect, useState } from "react";

const Services = () => {
  const [first, setFirst] = useState("this is normal data");
  const [second, setSecond] = useState("this is large data");
  useEffect(() => {
    console.log("Service component is created!");

    return () => {
      console.log("Component deleted!");
    };

  },[]);
  return (
  <div>
    <h1>{first}</h1>
    <button onClick={() => setFirst("Normal data has been changed")} className="px-3 py-2 bg-red-300 rounded m-2 mb-15">Change normal Data</button>
    <h1>{second}</h1>
    <button onClick={() => setSecond("Large data has been changed")} className="px-3 py-2 bg-blue-300 rounded m-2">Change normal Data</button>
  </div>);
};

export default Services;