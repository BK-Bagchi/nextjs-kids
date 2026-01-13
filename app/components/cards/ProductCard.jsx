"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgShoppingCart } from "react-icons/cg";

const ProductCard = ({ product = {}, onAddToCart = () => {} }) => {
  const { _id, title, image, price, sold, ratings, review } = product;

  return (
    <div className="border border-gray-200 rounded-md p-3 flex gap-3 items-center bg-white">
      <Image
        width={100}
        height={100}
        src={image}
        alt={title}
        className="w-24 h-24 object-cover rounded-md shrink-0"
      />

      <div className="flex-1 min-w-0">
        <h3 className="m-0 text-base text-gray-600 leading-tight truncate">
          {title}
        </h3>
        <div className="mt-1 font-bold text-emerald-600">{"$" + price}</div>
        <div className="mt-1 text-sm text-gray-500">
          Sold: {sold ?? 0} · {ratings ?? "0"}★ · {review ?? 0} reviews
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          href={`/products/${_id}`}
          className="inline-block text-sm px-3 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50"
          aria-label={`View details for ${title}`}
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-md border-0 hover:opacity-95"
          aria-label="Add to cart"
        >
          <CgShoppingCart className="h-4 w-4" />
          <span className="text-sm">Add</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
