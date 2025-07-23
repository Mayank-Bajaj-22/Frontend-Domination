import React, { useEffect, useState } from "react";
import axios from '../utils/axios';

const Show = () => {
  const [products, setproducts] = useState([]);

  const getproducts = () => {

    axios
      .get("/products")
      .then((res) => {
        // console.log(res.data.products);
        setproducts(res.data.products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    getproducts();
  },[])

  return (
    <>
      {/* <button onClick={getproducts} className="rounded-md bg-red-300 px-5 py-2">
        Call API
      </button> */}
      <hr />
      <ul>
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id} className="rounded mb-2 p-5 bg-red-200">
              {p.title}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  );
};

export default Show;
