import React from "react";
import { products } from "../api/products";

const ProductList = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-500 px-150 py-10">Product List</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-4 mx-20 justify-center ">
      {products.slice(0, 6).map((product, index) => (
        <div key={index} className="product-card border border-gray-400 p-6 rounded-lg mx-10 py-1">
          <img src={product.image} alt={product.name} />
          <div className="flex">
          <h2 className="text-2xl font-bold gap-6">{product.name}</h2></div>
          <p className="gap-6">{product.brand}</p>
          <p>{product.category}</p>
          <p>{product.price}</p>
        </div>

      ))
      }
       </div>
    </div>
   
  );
};

export default ProductList;
