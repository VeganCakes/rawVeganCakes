import React from "react";
import Image from "next/image";
import Link from "next/link";
const Slide = ({ title, image, link }) => {
  return (
    <Link href={link}>
      <div className="flex flex-col justify-between w-60 relative">
        <Image
          blurDataURL={image}
          src={image}
          width={238}
          height={211}
          className="aspect-square rounded-3xl object-cover"
          alt={title}
        />
        <span className="absolute min-w-max bottom-3 left-1/2 -translate-x-1/2 bg-[#BBE670] rounded-full px-3 py-1 text-lg font-semibold text-black">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default Slide;
