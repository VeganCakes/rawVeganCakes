import React from "react";
import Image from "next/image";
import Link from "next/link";
const Slide = ({ title, image, slug }) => {
  return (
    <div className="flex flex-col justify-between rounded-md w-60 border shadow-xl">
      <Link href={`/products/${slug}`}>
        <Image
          blurDataURL={image}
          src={image}
          width={238}
          height={211}
          className="aspect-[238/211] rounded-t-md"
          alt={title}
        />
      </Link>

      <div className="p-4 flex flex-col justify-between">
        <Link href={`/products/${slug}`} className="text-[#6a8d39]">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {title}
          </h1>
        </Link>
        <p className="text-sm text-gray-600">
          raw vegan cake | gluten free cake
        </p>
      </div>
    </div>
  );
};

export default Slide;
