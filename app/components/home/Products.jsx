import React from "react";
import ProductCard from "../cards/ProductCard";
import { getProducts } from "@/app/actions/server/product";

const Products = async () => {
  const products = (await getProducts()) || [];
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-10">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
