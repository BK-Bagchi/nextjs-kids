"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Cart = ({ product }) => {
  const isLoggedIn = false;
  const router = useRouter();
  const path = usePathname();

  const addToCart = () => {
    if (!isLoggedIn) {
      router.push(`/login?callbackUrl=${path}`);
      return;
    }
  };
  return (
    <button onClick={addToCart} className="btn btn-primary btn-wide flex gap-2">
      <FaCartPlus />
      Add to cart
    </button>
  );
};

export default Cart;
