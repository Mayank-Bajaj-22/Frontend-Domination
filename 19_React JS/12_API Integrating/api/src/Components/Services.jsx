import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    console.log("Service component is created!");

    return () => {
        console.log("Component deleted!")
    }
  });
  return <div>Services</div>;
};

export default Services;
