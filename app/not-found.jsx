import Link from "next/link";
import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";

const Error404 = () => {
  return (
    <div className="mx-auto flex flex-col min-h-screen justify-center items-center gap-5">
      <BiSolidErrorAlt size={100} className="text-9xl text-primary" />
      <h1 className="text-3xl font-bold mt-4">Page Not Found</h1>
      <p className="mt-2">The page you are looking for does not exist.</p>
      <Link href={"/"} className="btn">
        Go to Home
      </Link>
    </div>
  );
};

export default Error404;
