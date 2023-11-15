"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import Carousel from "../../components/LandingPage/Crousel";
import Modal from "../../components/LandingPage/Modal/Modal";
import Logo from "../../images/cakeMeHappyNewLogo.svg";
import {
  BiSolidMap,
  BiSolidPhone,
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiSolidEnvelope,
  BiX,
} from "react-icons/bi";
import { HiArrowLongRight } from "react-icons/hi2";

import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <RawVeganCakes />
      <Recommendation />
      <CrouselSection />
      <ProteinRichCakes />
      <CelebrateWithUs />
      <LocationAndReview />
      <Footer />
      <DevInfo />
    </main>
  );
};

/* Sections */

const HeroSection = () => {
  return (
    <section className="hero-section lg:relative min-[2200px]:static">
      <div
        style={{ maxWidth: "1200px" }}
        className="px-3 pt-12 mx-auto flex flex-col gap-y-5 lg:flex-row  lg:min-h-[650px] lg:h-[calc(100vh-100px)] lg:max-h-[850px]  min-[2200px]:gap-x-8"
      >
        <div className="w-full lg:w-[64%] my-auto sm:px-10 md:px-16 lg:px-0 lg:pl-16 xl:pl-0 min-[2200px]:w-1/2 z-[1]">
          <h2 className="font-black text-[#9A684B] text-[32px] lg:text-5xl lg:leading-snug">
            The Home of Raw Vegan Celebration Cakes
          </h2>
          <p className="text-[#666666] mt-6 lg:text-xl lg:mt-10">
            Welcome to my Guilt-Free creations; a range of natural, super-fresh
            & healthy indulgent Raw Vegan Celebration cakes.
          </p>
          <p className="text-[#666666] mt-3 lg:text-xl lg:mt-5">
            Raw Vegan products are made from fresh uncooked ingredients so that
            all the natural goodness, vibrant flavours and colours are retained.
          </p>
          <p className="text-[#666666] mt-3 lg:text-xl lg:mt-5">
            All the products are made with the finest ingredients;they contain
            no added sugar (I only use dates as a sweetener) and are gluten, soy
            & dairy free.
          </p>
          <Link
            href="/products"
            className="flex w-max items-center gap-x-2 bg-[#8BBB39] rounded-lg text-white px-8 py-[6px] mt-5 lg:text-xl lg:mt-8"
          >
            Explore
            <span>
              <HiArrowLongRight />
            </span>
          </Link>
        </div>
        <div className="w-full relative h-96 lg:h-auto lg:absolute lg:right-0 lg:inset-y-0 lg:w-2/5 overflow-hidden max-w-[1611px] min-[2200px]:relative min-[2200px]:w-1/2 ">
          <div class=" infinite-scrolling-hero-section absolute inset-0"></div>
          <div class="infinite-wave-scrolling absolute left-0 inset-y-0 lg:w-40"></div>
          <div
            style={{ animationDelay: "200ms", animationDuration: "25s" }}
            class="infinite-wave-scrolling absolute left-0 inset-y-0 lg:w-40"
          ></div>
          <div
            style={{ animationDelay: "200ms", animationDuration: "20s" }}
            class="infinite-wave-scrolling absolute left-0 inset-y-0 lg:w-40"
          ></div>
          <div class="infinite-wave-scrolling rotate-180 absolute left-0 bottom-0 lg:hidden"></div>
          <div
            style={{ animationDelay: "250ms", animationDuration: "10s" }}
            class="rotate-180 infinite-wave-scrolling absolute bottom-0 left-0 lg:hidden"
          ></div>
          <div
            style={{ animationDelay: "100ms", animationDuration: "20s" }}
            class="rotate-180 infinite-wave-scrolling absolute bottom-0 left-0 lg:hidden"
          ></div>
        </div>
      </div>
    </section>
  );
};

const RawVeganCakes = () => {
  const [displayModal, setModalDisplay] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleModalDisplay = () => {
    setModalDisplay((state) => !state);
  };

  let Details = {
    "Gluten Free": {
      imageSrc: "/Landing-Page/Gluten-Free.svg",
      title: "Gluten Free",
      desc: "All my products are Gluten-free, I even use gluten-free oats where oats are listed in the ingredients. Don't forget there's no flour used in any of the products, the closest alternative 'flour' I use is simply made from ground almonds. So if you have a Gluten intolerance, you're good to go!",
      navigationLink:
        "https://www.health.harvard.edu/staying-healthy/ditch-the-gluten-improve-your-health",
    },
    "No Refined Sugar": {
      imageSrc: "/Landing-Page/Sugar-Free.svg",
      title: "No Refined Sugar",
      desc: "All the products contain natural sugars only, no refined sugars are added to any of my recipes, so let's call then Guilt-Free! We don't even use maple or agave syrup. Most of the products are simply sweetened with dates & fresh fruit. There's nothing artificial added.",
      navigationLink: "https://www.healthline.com/nutrition/too-much-sugar",
    },
    "Dairy Free": {
      imageSrc: "/Landing-Page/Milk-Free.svg",
      title: "Dairy Free",
      desc: "None of my products contain Dairy; no milk, no butter, no eggs. We achieve delicious creamy dairy-free products using the creaminess which is derived from cashew nuts and coconut cream. Where a 'milk' is required, only plant-based alternatives are used such as organic almond and coconut milk.",
      navigationLink:
        "https://thebeet.com/is-milk-bad-for-you-7-reasons-why-dairy-is-unhealthy/",
    },
    "Soy Free": {
      imageSrc: "/Landing-Page/Soya-Free.svg",
      title: "Soy Free",
      desc: "If you have a soy allergy or prefer to cut soy from your diet, these products are 100% Soy-free! As only very few wholesome and natural products are used, we can assure very high standard of product integrity.",
      navigationLink:
        "https://www.cleaneatingkitchen.com/dangers-of-eating-soy/",
    },
  };

  useEffect(() => {
    if (modalContent !== "") {
      setModalDisplay(true);
    }
  }, [modalContent]);

  return (
    <section className="Raw-vegan-cakes pt-12 lg:pt-24">
      <h3 className="font-bold text-lg text-center text-[#9A684B] px-3">
        All of my cakes are made with Love!
        <span className="text-[#8BBB39] w-40 inline-block ">
          {" "}
          Raw Vegan Cakes
        </span>
      </h3>
      <div className="bg-[#9A684B] px-3 py-9 sm:px-10 md:px-16 xl:px-0">
        <div
          // style={{ maxWidth: "1200px" }}
          className="relative md:static max-w-[375px] md:max-w-[1200px] mx-auto flex flex-wrap gap-y-7 gap-x-5 items-start md:items-center justify-between"
        >
          <button onClick={() => setModalContent("Gluten Free")}>
            <Image
              src="/Landing-Page/Gluten-Free.svg"
              alt="Gluten Free Icon"
              className="aspect-square mx-auto max-[796px]:w-20"
              width="103"
              height="103"
            />
            <p className="text-center mt-3 text-white text-lg font-bold">
              Gluten Free
            </p>
          </button>

          <button
            onClick={() => setModalContent("No Refined Sugar")}
            className="order-3 md:order-none"
          >
            <Image
              src="/Landing-Page/Sugar-Free.svg"
              alt="Sugar Free Icon"
              className="aspect-square ml-auto max-[796px]:w-20 md:mx-auto"
              width="103"
              height="103"
            />
            <p className="text-center w-2/3 ml-auto md:w-auto md:ml-0  mt-3 text-white text-lg font-bold">
              No Refined Sugar
            </p>
          </button>

          <div className="invisible opacity-0 select-none pointer-events-none md:visible md:opacity-100 ">
            <Image
              className="mx-auto aspect-square max-[796px]:w-28 max-[370px]:w-20 "
              src="/Landing-Page/Raw-Vegan.svg"
              alt="Raw Vegan Icon"
              width="145"
              height="145"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  md:hidden">
            <Image
              className="mx-auto aspect-square max-[796px]:w-28 max-[370px]:w-20"
              src="/Landing-Page/Raw-Vegan.svg"
              alt="Raw Vegan Icon"
              width="145"
              height="145"
            />
          </div>

          <button onClick={() => setModalContent("Dairy Free")}>
            <Image
              src="/Landing-Page/Milk-Free.svg"
              alt="Milk Free Icon"
              className="aspect-square mx-auto max-[796px]:w-20"
              width="103"
              height="103"
            />
            <p className="text-center mt-3 text-white text-lg font-bold">
              Dairy Free
            </p>
          </button>

          <button onClick={() => setModalContent("Soy Free")}>
            <Image
              src="/Landing-Page/Soya-Free.svg"
              alt="Soy Free Icon"
              className="aspect-square mx-auto max-[796px]:w-20"
              width="103"
              height="103"
            />
            <p className="text-center mt-3 text-white text-lg font-bold">
              Soy Free
            </p>
          </button>
        </div>
      </div>
      <Modal.Container
        displayModal={displayModal}
        hideOnBlur={handleModalDisplay}
      >
        <Modal.Header>
          <button
            title="Close"
            onClick={handleModalDisplay}
            className={`absolute right-4 top-5 w-7 h-7 flex items-center justify-center rounded-full border-2 border-[#8BBB39]`}
          >
            <BiX size="28" className="fill-[#8BBB39]" />
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <div className="flex flex-col items-center gap-3 pt-4">
              <div className="relative">
                <span
                  style={{ animationDuration: "10s" }}
                  className="animate-spin absolute -inset-1 rounded-full border-[3px] border-dashed border-[#9A684B]"
                ></span>
                <Image
                  src={Details[modalContent]?.imageSrc}
                  alt={Details[modalContent]?.title + " Icon"}
                  className="aspect-square"
                  width="80"
                  height="80"
                />
              </div>
              <h3 className="text-center my-0 text-2xl font-bold text-[#9A684B]">
                {Details[modalContent]?.title}
              </h3>
              <p
                style={{ textAlignLast: "center" }}
                className="text-justify mt-2 leading-relaxed max-w-[325px]"
              >
                {Details[modalContent]?.desc}
              </p>
              <div>
                <Link
                  target="_blank"
                  href={Details[modalContent]?.navigationLink}
                  className="flex w-max items-center gap-x-2 bg-[#8BBB39] rounded-md text-white px-6 py-1 my-4 "
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal.Container>
    </section>
  );
};

const Recommendation = () => {
  return (
    <section className="recommendation pt-12 lg:pt-32">
      <div
        style={{ maxWidth: "1200px" }}
        className="px-3 mx-auto sm:px-10 md:px-16 xl:px-0 xl:relative"
      >
        <h3 className="w-fit text-[#8BBB39] text-2xl font-black lg:text-4xl">
          <HeadingDecorator />
          <span className="mt-5 block">Our Recommendations</span>
        </h3>
        <div className="mt-12 md:flex md:gap-x-6">
          <Link
            href="/products/two-tier-chocolate-cake"
            className="first-image flex-[0.9]"
          >
            <Image
              src="/Landing-Page/Recommendation-1.jpg"
              alt="Birthday Cake"
              className="mx-auto aspect-[22/20] sm:w-1/2 md:w-full object-cover w-full rounded-[9px] sm:rounded-2xl md:aspect-auto md:h-full "
              width="585"
              height="544"
            />
          </Link>
          <div className="flex-1">
            <div className="flex mt-6 md:mt-0">
              <Link
                href="/products/cherry-bakewell-tart"
                className="pr-3 w-full"
              >
                <Image
                  src="/Landing-Page/Recommendation-2.png"
                  alt="Birthday Cake"
                  className="aspect-[28/25] w-full object-cover rounded-[9px] sm:rounded-2xl"
                  width="280"
                  height="243"
                />
              </Link>
              <Link
                href="/products/coffee-and-walnut-cake"
                className="pl-3 w-full"
              >
                <Image
                  src="/Landing-Page/Recommendation-3.png"
                  alt="Birthday Cake"
                  className="aspect-[28/25] w-full object-cover rounded-[9px] sm:rounded-2xl"
                  width="280"
                  height="243"
                />
              </Link>
            </div>
            <div className="mt-6 p-4 bg-[#E7FFBF]  rounded-[9px] text-[#6B922A] md:p-6 sm:rounded-2xl">
              <p className="text-lg font-bold md:text-2xl lg:text-3xl">
                All my cakes are made with Love! Raw vegan cake, no added sugar
              </p>
              <p className="text-lg font-bold mt-3 md:text-2xl lg:text-3xl md:mt-10">
                All natural Birthday cakes & Celebration cakes. Full of goodness
                and guilt free.
              </p>
            </div>
          </div>
        </div>
        <Image
          className="absolute -right-32 -bottom-20 hidden xl:block"
          src="/Landing-Page/Decorator-1.png"
          alt="Smile Face PNG"
          width={93}
          height={65}
        />
      </div>
    </section>
  );
};

const CrouselSection = () => {
  return (
    <section className="Slider pt-12 lg:pt-32 ">
      <div style={{ maxWidth: "1200px" }} className="px-3 mx-auto">
        <h3 className="w-fit text-[#8BBB39] text-2xl font-black lg:text-4xl">
          <HeadingDecorator />
          <span className="mt-5 block">Cake Me Happyyy</span>
        </h3>
        <div className="mt-12">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

const ProteinRichCakes = () => {
  return (
    <section className="recommendation pt-12 lg:pt-24">
      <div
        style={{ maxWidth: "1200px" }}
        className="px-3 mx-auto sm:px-10 md:px-16 xl:px-0 xl:relative xl:isolate"
      >
        <div className="md:flex md:gap-x-8 md:items-center lg:items-end">
          <div className="md:flex-[1.5]">
            <h3 className="w-fit text-[#9A684B] text-2xl font-black lg:text-4xl">
              <HeadingDecorator variant="secondary" />
              <span className="mt-5 block">Protein Rich Cakes</span>
            </h3>
            <div className="mt-12">
              <p className="bg-[#FFE8DB] rounded-2xl p-3 leading-6 md:p-4">
                One of the benefits of using such high-quality raw ingredients
                in my products is that they are full of wonderful natural
                goodness and packed with protein.
              </p>
              <p className="bg-[#FFE8DB] rounded-2xl p-3 leading-6 mt-5 md:p-4">
                Most of the protein is derived from nuts; hazelnuts, cashew nuts
                and in some recipes - peanuts. High protein snacks also help you
                feel fuller for longer.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12 md:flex-1">
            <Image
              src="/Landing-Page/ProteinRichCake-1.png"
              alt="Heart Muscle"
              className="aspect-[2/1] w-[90%] max-w-[400px] object-contain md:w-full "
              width="421"
              height="214"
            />
          </div>
        </div>
        <Image
          className="absolute -left-72 -top-52 -z-[1] object-contain hidden xl:block"
          src="/Landing-Page/Decorator-2.webp"
          alt="Star Plate Enery Bites"
          width={268}
          height={268}
        />
      </div>
    </section>
  );
};

const CelebrateWithUs = () => {
  return (
    <section className="recommendation pt-12 lg:pt-32">
      <div
        style={{ maxWidth: "1200px" }}
        className="px-3 mx-auto sm:px-10 md:px-16 xl:px-0 xl:relative xl:isolate"
      >
        <h3 className="w-fit text-[#8BBB39] text-2xl font-black lg:text-4xl">
          <HeadingDecorator />
          <span className="mt-5 block">Celebrate with us</span>
        </h3>
        <div className="mt-12">
          <div className="lg:flex">
            <div className="flex mt-6 lg:mt-0 lg:pr-2">
              <Link
                href="/products/chocolate-and-cherry-bakewell-double-decker-cake"
                className="pr-[6px] pb-[6px] relative lg:pb-0 lg:pr-2"
              >
                <Image
                  src="/Landing-Page/Celebration-1.webp"
                  alt="Birthday Cake"
                  className="aspect-[111/116] rounded-lg sm:rounded-2xl"
                  width="286"
                  height="299"
                />
                <h4 className="uppercase font-bold py-1 text-center text-white absolute left-0 right-[6px] bottom-[6px] lg:bottom-0 rounded-b-lg  mb-0 bg-gradient-to-r from-[#A2CC5A] to-[#6B922A] lg:right-[8px] sm:py-3 sm:rounded-b-2xl">
                  BIRTHDAY
                </h4>
              </Link>
              <Link
                href="/products/organic-chocolate-bar-peanut-butter"
                className="pl-[6px] pb-[6px] relative lg:pb-0 lg:pl-2"
              >
                <Image
                  src="/Landing-Page/Celebration-2.webp"
                  alt="Birthday Cake"
                  className="aspect-[111/116] rounded-lg sm:rounded-2xl"
                  width="286"
                  height="299"
                />
                <h4 className="uppercase font-bold py-1 text-center text-white absolute left-[6px] right-0 bottom-[6px] lg:bottom-0 rounded-b-lg mb-0 bg-gradient-to-r from-[#A2CC5A] to-[#6B922A] lg:left-[8px] sm:py-3 sm:rounded-b-2xl">
                  THANK YOU
                </h4>
              </Link>
            </div>

            <div className="flex lg:pl-2 justify-end">
              <Link
                href="/products/organic-chocolate-bar-hazelnut"
                className="pr-[6px] pt-[6px] relative lg:pt-0 lg:pr-2"
              >
                <Image
                  src="/Landing-Page/Celebration-3.webp"
                  alt="Birthday Cake"
                  className="aspect-[111/116] rounded-lg sm:rounded-2xl"
                  width="286"
                  height="299"
                />
                <h4 className="uppercase font-bold py-1 text-center text-white absolute left-0 right-[6px] bottom-0 rounded-b-lg  mb-0 bg-gradient-to-r from-[#A2CC5A] to-[#6B922A] lg:right-[8px] sm:py-3 sm:rounded-b-2xl">
                  NEW JOB
                </h4>
              </Link>

              <div className="pl-[6px] pt-[6px] relative lg:pt-0 lg:pl-2">
                <Image
                  src="/Landing-Page/Celebration-3.webp"
                  alt="Birthday Cake"
                  className="invisible aspect-[111/116] rounded-lg sm:rounded-2xl"
                  width="286"
                  height="299"
                  quality={2}
                />
                <div className="bg-[#E7FFBF] border-2 border-[#6B922A] px-3 flex flex-col justify-center absolute inset-0 top-[6px] left-[6px] rounded-lg sm:rounded-2xl sm:px-8 lg:top-0 lg:left-[8px] ">
                  <p className="font-bold text-center text-[#6B922A] text-base mt-auto sm:text-lg">
                    Checkout Our
                  </p>
                  <p className="font-black text-center text-[#6B922A] text-xl mt-1 sm:text-2xl">
                    More Products
                  </p>
                  <Link
                    href="/products"
                    className="flex items-center gap-x-2 justify-center w-full text-center bg-[#6B922A] text-sm rounded-lg text-white px-8 py-[6px] mt-auto mb-6 sm:text-base"
                  >
                    Explore
                    <span>
                      <HiArrowLongRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="absolute -right-64 -bottom-28 -z-[1] object-contain hidden xl:block"
          src="/Landing-Page/Decorator-3.webp"
          alt="Dry Fruits cake Slice"
          width={335}
          height={212}
        />
      </div>
    </section>
  );
};

const LocationAndReview = () => {
  return (
    <section className="location-and-review pt-12 md:pt-32">
      <div
        style={{ maxWidth: "1200px" }}
        className="px-3 mx-auto md:flex md:gap-x-8 sm:px-10 md:px-16 xl:relative xl:isolate xl:px-0"
      >
        <div className="md:flex-1">
          <h3 className="w-fit text-[#8BBB39] text-2xl font-black lg:text-4xl">
            <HeadingDecorator />
            <span className="mt-5 block">Location</span>
          </h3>
          <div className="mt-12">
            {/* Google Map iframe */}
            <div className="relative w-full aspect-[37/20] mb-2 md:h-full overflow-hidden rounded-2xl border-4 border-[#6B922A]">
              <Iframe
                title="Our Location on Google Map"
                loading="lazy"
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.206575372047!2d-0.2137229230729649!3d51.656054099832325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876171fd566b3e3%3A0xcf3eed8bd8fbf0e5!2sCakeMeHappyyy%20by%20Mell!5e0!3m2!1sen!2srs!4v1688303762334!5m2!1sen!2srs"
                width="100%"
                height="100%"
                display="block"
                style={{ border: "0" }}
                allowfullscreen=""
                referrerpolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 w-full h-full outline-none overflow-hidden"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:flex-1">
          <h3 className="w-fit text-[#8BBB39] text-2xl font-black lg:text-4xl">
            <HeadingDecorator />
            <span className="mt-5 block">Reviews</span>
          </h3>
          <div className="mt-12">
            {/* Google Map iframe */}
            <div className="relative w-full aspect-[37/20] mb-2 md:h-full overflow-hidden rounded-2xl border-4 border-[#6B922A]">
              <Iframe
                title="Our Recent Reviews By Google"
                loading="lazy"
                url="https://widgets.sociablekit.com/google-reviews/iframe/161414"
                frameborder="0"
                width="100%"
                height="100%"
                style={{ border: "0" }}
              />
            </div>
          </div>
        </div>
        <Image
          className="absolute -left-1/4 -top-20 -z-[1] object-contain hidden xl:block"
          src="/Landing-Page/Decorator-4.webp"
          alt="Kiwi cake Slice"
          width={303}
          height={355}
        />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <section className="Footer mt-12 lg:mt-24">
      <div className="py-[10px] bg-[#E7FFBF] lg:py-10 lg:flex lg:gap-x-4">
        <div className="lg:flex-[1] ">
          <Image
            src="/Landing-Page/Footer-1.jpg"
            alt="RawVeganCakes Collage"
            className="w-full h-52 object-cover lg:h-full"
            width="585"
            height="544"
          />
        </div>

        <div className="px-3 pt-12 pb-4 lg:flex-[1.5] lg:py-4 sm:px-10 md:px-16 xl:px-0 ">
          <Image
            src={Logo}
            alt="Footer Logo"
            className="w-40 aspect-[74/24] object-contain md:w-52"
            width="215"
            height="71"
          />

          <div className="mt-10 sm:flex sm:flex-wrap sm:items-start md:justify-between lg:w-max">
            <div className="sm:flex-1 sm:min-w-[300px] sm:max-w-[350px]">
              <h4 className="font-bold text-2xl text-[#8BBB39]">Contact</h4>
              <ul className="list-none m-0">
                <li className="flex items-center gap-x-2">
                  <BiSolidMap size={20} color="#6B922A" />
                  <Link
                    target="_blank"
                    href="https://maps.app.goo.gl/B1Lm4qN9gmDKibAV6"
                    className="text-[#666666] text-sm"
                  >
                    37 Byng Road Barnet EN5 4NW
                  </Link>
                </li>
                <li className="flex items-center gap-x-2">
                  <BiSolidPhone size={20} color="#6B922A" />
                  <Link
                    target="_blank"
                    href="tel:07900601365"
                    className="text-[#666666] text-sm"
                  >
                    07900 601365
                  </Link>
                </li>
                <li className="flex items-center gap-x-2">
                  <BiSolidEnvelope size={20} color="#6B922A" />
                  <Link
                    target="_blank"
                    href="mailto:info@rawvegancakes.co.uk"
                    className="text-[#666666] text-sm"
                  >
                    info@rawvegancakes.co.uk
                  </Link>
                </li>
                <li className="flex items-center gap-x-2">
                  <BiLogoFacebookCircle size={20} color="#6B922A" />
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/cakemehappyyybymell"
                    className="text-[#666666] text-sm"
                  >
                    @cakemehappyyybymell
                  </Link>
                </li>
                <li className="flex items-center gap-x-2">
                  <BiLogoInstagramAlt size={20} color="#6B922A" />
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/cakemehappyyybymell"
                    className="text-[#666666] text-sm"
                  >
                    @cakemehappyyybymell
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-5 sm:mt-0 sm:flex-1  sm:min-w-[150px] sm:max-w-[200px]">
              <h4 className="font-bold text-2xl text-[#8BBB39]">Links</h4>
              <ul className="list-none m-0">
                <li className="leading-normal flex ">
                  <Link href="/products" className="text-[#666666] text-sm">
                    Products
                  </Link>
                </li>
                <li className="leading-normal flex">
                  <Link
                    href="/delivery_pickup"
                    className="text-[#666666] text-sm"
                  >
                    Delivery/Pick-up
                  </Link>
                </li>
                <li className="leading-normal flex">
                  <Link href="/about" className="text-[#666666] text-sm">
                    About us
                  </Link>
                </li>
                <li className="leading-normal flex">
                  <Link href="/contact" className="text-[#666666] text-sm">
                    Contact us
                  </Link>
                </li>
                <li className="leading-normal flex">
                  <Link
                    href="/privacy-policy"
                    className="text-[#666666] text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="leading-normal flex">
                  <Link href="/blogs" className="text-[#666666] text-sm">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-5 w-2/3 min-w-[220px] sm:max-w-[300px] md:flex-1 md:mt-0 ">
              <h4 className="font-bold text-2xl text-[#8BBB39] lg:text-2xl">
                Thank you
              </h4>
              <p className="text-[#666666]">
                Thank you to explore our Raw Vegan and Gluten-free Birthday cake
                and Celebration cake website! We hope you&apos;ll find your
                delicious guilt-free, indulgent treats here.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="w-fit text-[#8BBB39] text-2xl font-black lg:text-4xl">
              <HeadingDecorator />
              <span className="mt-5 block">
                Cake Me Happyyy by <span className="text-[#9A684B]">Mell</span>
              </span>
            </h3>
            <h4 className="text-lg font-bold text-[#9A684B] mt-6 lg:text-2xl">
              Raw vegan cake | Gluten free cake
            </h4>
            <p className="text-[#666666] mt-6 w-3/4 min-w-[220px] max-w-[640px] lg:text-lg">
              It has been immensely challenging and equally rewarding to develop
              a range of raw vegan, gluten-free, no added sugar, dairy & soy
              free products simply using the vibrancy of flavour and colour to
              bring you super-healthy 'guilt-free' indulgent treats
            </p>
          </div>
          <p className="text-[#6B922A] text-sm text-center mt-10 sm:text-left lg:text-base">
            © 2023 Raw Vegan Cake | Gluten Free Cake by CakeMeHappyyy
          </p>
        </div>
      </div>
    </section>
  );
};

const DevInfo = () => {
  return (
    <p className="text-[#6B922A] bg-[#E7FFBF] text-sm text-center py-5 font-medium sm:text-base sm:text-right sm:pr-28">
      This Page is Design and Developed by <br className="md:hidden" />
      <Link
        href="https://github.com/Al-Faiz-Ahmed"
        target="_blank"
        className="text-[#213B12]"
      >
        Al Faiz Ahmed
      </Link>
    </p>
  );
};

/* Decorator */

function HeadingDecorator({ variant }) {
  return (
    <div className="relative h-[6px] w-1/2">
      <span
        className={`${
          variant === "secondary" ? "bg-[#FFD7C0]" : "bg-[#E7FFBF]"
        } rounded-full  absolute inset-0 w-[calc(100%+40px)]`}
      ></span>
      <span
        className={`${
          variant === "secondary" ? "bg-[#D8B49F]" : "bg-[#BBE670]"
        } rounded-full  absolute inset-0 w-[calc(100%+30px)]`}
      ></span>
      <span
        className={`${
          variant === "secondary" ? "bg-[#B48062]" : "bg-[#8BBB39]"
        } rounded-full  absolute inset-0 w-[calc(100%+20px)]`}
      ></span>
      <span
        className={`${
          variant === "secondary" ? "bg-[#9A684B]" : "bg-[#6B922A]"
        } rounded-full  absolute inset-0`}
      ></span>
    </div>
  );
}

export default HomePage;
