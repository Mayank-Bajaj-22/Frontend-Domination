import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  const [filteredproducts, setfilteredproducts] = useState(null);
  const getproductscategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredproducts(data);
      // console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!filteredproducts || category == "undefined")
      setfilteredproducts(products);
    if (category != "undefined") {
      // getproductscategory();
      setfilteredproducts(products.filter((p)=> p.category == category))
    }
  }, [category, products]);

  return products ? (
    <>
      <Nav />

      <div className="w-[85%] h-full p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredproducts &&
          filteredproducts.map((p, i) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col items-center justify-center"
            >
              <div
                className="hover:scale-110 w-full mb-3 h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-500 text-sm font-semibold w-full truncate">
                {p.title}.
              </h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
