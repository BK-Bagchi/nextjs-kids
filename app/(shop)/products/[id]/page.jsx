import { getSingleProduct } from "@/app/actions/server/product";
import Cart from "@/app/components/buttons/Cart";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const ProductDetails = async ({ params }) => {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const product = (await getSingleProduct(id)) || {};

  //prettier-ignore
  const {title, image, price, discount, sold, ratings, reviews, description, info, qna}= product;
  const discountedPrice = price - (price * discount) / 100;
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={420}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={i < Math.floor(ratings) ? "" : "opacity-30"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">
            {ratings}({reviews} reviews | {sold} sold)
          </span>
        </div>
        <div className="mb-4">
          <span className="text-2xl font-bold mr-2">${discountedPrice}</span>
          {discount > 0 && (
            <span className="text-sm text-gray-400 line-through ml-3">
              ${price}
            </span>
          )}
        </div>
        <Cart product={product} />
        <div className="mt-8 space-y-4 text-gray-400 leading-relaxed">
          {description?.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
