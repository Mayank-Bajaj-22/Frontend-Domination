import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/ProductActions";

const Products = () => {
  const { products } = useSelector((state) => state.ProductReducer);
  // console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, []);

  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className="text-2xl font-bold text-red-900">Product List</h1>
      <ul>
        {products &&
          products.map((products, index) => {
            return (
              <li key={index}>
                <h1>
                  {products.title}{" "}
                </h1>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Products;
