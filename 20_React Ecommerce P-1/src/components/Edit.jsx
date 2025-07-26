import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const [products, setproducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setproduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });

  const changeHandler = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);
  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Each and every input must have atleast 4 characters");
      return;
    }

    const pi = products.findIndex((p) => p.id == id);
    const copyData = [...products];
    copyData[pi] = { ...products[pi], ...product };

    setproducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);
    toast.success("Product Edited Successfully");
  };
//   console.log(products);
  return (
    <form
      onSubmit={AddProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="text-3xl w-1/2 mb-5">Edit Product</h1>
      <input
        type="url"
        placeholder="image link"
        name="image"
        className="mb-3 text-1xl bg-zinc-100 rounded p-3 w-1/2"
        onChange={changeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="title"
        name="title"
        className="mb-3 text-1xl bg-zinc-100 rounded p-3 w-1/2"
        onChange={changeHandler}
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          name="category"
          placeholder="category"
          className="mb-3 text-1xl bg-zinc-100 rounded p-3 w-[46%]"
          onChange={changeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          className="mb-3 text-1xl bg-zinc-100 rounded p-3 w-[46%]"
          onChange={changeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        onChange={changeHandler}
        value={product && product.description}
        name="description"
        className="mb-3 text-1xl bg-zinc-100 rounded p-3 w-1/2"
        rows="10"
        placeholder="enter product description here ...."
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 px-5 border border-blue-300 text-blue-400 rounded">
          Edit Product
        </button>
      </div>
    </form>
  );
};

export default Create;
