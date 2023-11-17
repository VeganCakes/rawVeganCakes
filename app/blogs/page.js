import Link from "next/link";
import React from "react";
import Slider from "../../components/Slider";

const Blogs = () => {
  return (
    <>
      <div className="pt-20 mx-auto md:max-w-[1200px] px-3">
        <h2 className="text-3xl md:text-5xl font-black text-[#8BBB39] text-center">
          Our Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-16 justify-items-center">

          <div className="pt-8 relative max-w-[500px] sm:max-w-full">
            <span className="bg-[#8BBB39] text-base font-semibold rounded-t-2xl absolute top-0 left-0 px-4 py-1">
              23<sup>th</sup> Nov 2023
            </span>
            <div className="flex flex-col gap-5 bg-[#F3FFDE] border-[#8BBB39] border-2 rounded-lg rounded-tl-none px-5 py-6">
              <h3 className="text-[#6B922A] my-0">
                Vegan Birthday Cake Delivery
              </h3>
              <p className="text-[#666666] leading-normal my-0 line-clamp-3">
                The demand for exquisite, vegan-based treats is reaching new
                heights in a world where culinary inventiveness knows no
                limitations. As a devoted raw vegan cake maker, I've had the
                luxury of observing this progress
              </p>

              <Link
                href="/blogs/vegan-birthday-cake-delivery"
                className="bg-[#6B922A] w-fit text-[#fff]  border rounded-lg px-5 py-2 "
              >
                Read More
              </Link>
            </div>
          </div>
          
        </div>
      </div>
      <Slider />
    </>
  );
};

export default Blogs;
