"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import allproducts from "../../../images/carousel/mini_slider/allproducts.png";
import image1 from "../../../images/carousel/mini_slider/raw_vegan _cake-009.jpg";
import image2 from "../../../images/carousel/mini_slider/raw_vegan _cake-010.jpg";
import image3 from "../../../images/carousel/mini_slider/raw_vegan _cake-0011.jpg";
import image4 from "../../../images/carousel/mini_slider/raw_vegan _cake-012.jpg";
import image5 from "../../../images/carousel/mini_slider/raw_vegan _cake-013.jpg";
import image6 from "../../../images/carousel/mini_slider/raw_vegan_cake-014.jpg";
import image7 from "../../../images/carousel/mini_slider/raw_vegan_cake-015.jpg";
import image8 from "../../../images/carousel/mini_slider/raw_vegan_cake-016.jpg";
import Card from "./Card";

const Carousel = () => {
  const categories = [
    {
      id: 1,
      title: "Our Products",
      image: allproducts,
      link: "/products",
      alternateText:"Raw Vegan Birthday Cakes Collage"
    },
    {
      id: 2,
      title: "New Products",
      image: image1,
      link: "/products/new_products",
      alternateText:"Raw Vegan Two Tier Choclate Birthday Cake"
    },
    {
      id: 3,
      title: "Best Sellers",
      image: image2,
      link: "/products/best_sellers",
      alternateText:"Raw Vegan Cherry Bakewell Tart Cake"
    },
    {
      id: 4,
      title: "Chocolate Cakes",
      image: image3,
      link: "/products/chocholate_cakes",
      alternateText:"Raw Vegan Chocolate Cake"
    },
    {
      id: 5,
      title: "Fruit Cakes",
      image: image4,
      link: "/products/fruit_cakes",
      alternateText:"Raw Vegan Fruit Cake"
    },
    {
      id: 6,
      title: "Coffee Cakes",
      image: image5,
      link: "/products/coffee_cakes",
      alternateText:"Raw Vegan Coffee Cake"

    },
    {
      id: 7,
      title: "Breakfast Bars",
      image: image6,
      link: "/products/breakfast_bars",
      alternateText:"Raw Vegan Breakfast Bars"

    },
    {
      id: 8,
      title: "Energy Bites",
      image: image7,
      link: "/products/energy_bites",
      alternateText:"Raw Vegan Energy Bites"

    },
    {
      id: 9,
      title: "Chocolate Bars",
      image: image8,
      link: "/products/chocholate_bars",
      alternateText:"Raw Vegan Chocolate Bars"

    },
    {
      id: 10,
      title: "Dog Treats",
      image: "/Landing-Page/Dog-Treats.jpg",
      link: "/products/dog-treats",
      alternateText:"Raw Vegan Dog Treats"
    },
  ];

  const scrollContainerRef = useRef(null);
  const forwardScrollBtnRef = useRef(null);
  const backwardScrollBtnRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const forwardScrollBtn = forwardScrollBtnRef.current;
    const backwardScrollBtn = backwardScrollBtnRef.current;

    backwardScrollBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: -270,
        behavior: "smooth",
      });
    });

    forwardScrollBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: 270,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <div
      // style={{ width: "calc(100vw - 100vw + 100%)" }}
      className="flex justify-center items-center mt-10 w-[calc(100vw-24px)] min-[1200px]:w-[calc(0vw+100%)] "
    >
      <div className="flex flex-col justify-center items-center w-full">
        <section className="w-full flex justify-center">
          <section
            className="flex items-center space-x-5 overflow-x-scroll scroll-smooth snap-x scrollbar-hide pb-3"
            ref={scrollContainerRef}
          >
            {categories.map((category, index) => {
              return (
                <div
                  key={category.id + index}
                  id={category.id}
                  className="flex-shrink-0 snap-center"
                >
                  <Card
                    title={category.title}
                    image={category.image}
                    link={category.link}
                    alternateText={category.alternateText}
                  />
                </div>
              );
            })}
          </section>
        </section>

        <section className="flex flex-col justify-center space-y-2 items-center w-full mt-5 ">
          <div className=" w-10 flex justify-center items-center space-x-2">
            <button
              className="p-3 text-[#C6CCD9] border-2 font-bold rounded-[9px] border-[#C6CCD9] bg-white text-[6a8d39] focus:border-[#8BBB39] focus:bg-[#8BBB39] focus:text-white"
              ref={backwardScrollBtnRef}
              title="Scroll Left"
            >
              <FaAngleLeft />
            </button>
            <button
              title="Scroll Right"
              className="p-3 text-[#C6CCD9] border-2 font-bold rounded-[9px] border-[#C6CCD9] bg-white text-[6a8d39] focus:border-[#8BBB39] focus:bg-[#8BBB39] focus:text-white"
              ref={forwardScrollBtnRef}
            >
              <FaAngleRight />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Carousel;
