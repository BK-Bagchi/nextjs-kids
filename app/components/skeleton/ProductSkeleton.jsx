import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="border border-gray-200 rounded-md p-3 flex gap-3 items-center bg-white animate-pulse">
      <div className="w-24 h-24 bg-gray-300 rounded-md shrink-0" />
      <div className="flex-1 min-w-0 flex flex-col gap-2">
        <div className="h-4 w-3/4 bg-gray-300 rounded" />
        <div className="h-4 w-1/3 bg-gray-300 rounded" />
        <div className="h-3 w-2/3 bg-gray-200 rounded" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-9 w-24 bg-gray-300 rounded-md" />
        <div className="h-9 w-24 bg-gray-300 rounded-md" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
