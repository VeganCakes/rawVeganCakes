import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../../images/about/profile.jpg";
import signatureImg from "../../images/about/signature.jpg";

export const metadata = {
  title: "About | Egg Free Cakes | Plant Based Vegan Celebration Cakes",
  description:
    "I used to consume far too much refined sugar in my diet; my challenge was to cut this right down but still be able to enjoy a range of delicious cakes & deserts - this was the seed of my 'guilt-free' vegan indulgence business!",
};

const About = () => {
  return (
    <div className="mx-10 md:mx-32 py-10">
      <h3>ABOUT US</h3>

      <section className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start md:h-96 md:text-start text-center">
        <ul className="md:w-1/2 md:mt-0 my-10">
          <li>
            <a href="#begin" className="text-[#6a8d39]">
              How did it all begin?
            </a>
          </li>
          <li>
            <a href="#enquiries" className="text-[#6a8d39]">
              Questions or Enquiries
            </a>
          </li>
          <li>
            <a href="#delivery" className="text-[#6a8d39]">
              Deliver/Collection
            </a>
          </li>
        </ul>

        <div className="relative md:block h-1/2 md:h-full md:w-1/2 rounded-lg my-10  md:my-0">
          <Image
            src={profileImg}
            width={1000}
            height={1000}
            alt=""
            placeholder="blur"
            blurDataURL="/"
            className="h-full w-full object-cover rounded-lg"
          />
          <div className="flex justify-center md:justify-end absolute md:-bottom-[15%] md:-right-[3%] -bottom-[3%] -right-[1%]">
            <Image
              src={signatureImg}
              width={1000}
              height={1000}
              alt=""
              placeholder="blur"
              blurDataURL="/"
              className="h-40 w-40 overflow-clip object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      <div className="flex flex-col space-y-10 justify-start items-start text-center md:text-left py-10">
        <section id="history" className="scroll-my-10">
          <h4>How did it all begin?</h4>
          <section className="flex flex-col justify-start items-start text-center md:text-left space-y-5">
            <p>
              I've always loved baking and especially deserts! It all started
              back in 2016 in my kitchen in Barnet, north London although many
              of my recipes are inspired by places that I've visited; the
              Bajadera cake is inspired from my Balkan roots; the Coffee &
              Walnut cake from my birth town of Bitola, North Macedonia where
              the favourite passtime is to sit in one of the numerous cafes on
              the main thoroughfare (Shirok Sokak) sipping coffee and watching
              the World go by. The Lemon cake was actually inspired from my
              holiday on the beautiful Amalfi Coast in Italy whilst the Fig Bars
              were inspired from my travels in Turkey!
            </p>
            <p>
              As a family we try to lead a really healthy lifestyle with regular
              exercise and healthy food. I did however used to consume far too
              much refined sugar in my diet; my challenge was to cut this right
              down but still be able to enjoy a range of delicious cakes &
              deserts - this was the seed of my 'guilt-free' vegan indulgence
              business.
            </p>
            <p>
              Both friends & family loved sampling many of the products that I
              experimented with (although I've had my fair share of disasters
              along the way too!); it has been immensely challenging and equally
              rewarding to develop a range of raw vegan, gluten-free, no added
              sugar, dairy & soy free products simply using the vibrancy of
              flavour and colour to bring you super-healthy 'guilt-free'
              indulgent treats.
            </p>
          </section>
        </section>
        <section id="enquiries" className="scroll-my-10">
          <h4>Questions or Enquiries</h4>
          <section>
            <p>
              Do feel free to contact me to discuss any products. Perhaps your
              require a customised Birthday cake or Celebration cake? I'd be
              delighted to hear from you. Simply message me at
              info@rawvegancakes.co.uk and I'll get back right to you.
            </p>
          </section>
        </section>
        <section id="delivery" className="scroll-my-10">
          <h4>Delivery/Collection</h4>
          <section className="flex flex-col justify-start items-start space-y-5">
            <p>
              Most orders are available for collection within 3-5 working days.
              You will receive an email when your order is ready.
            </p>
            <h4>
              DELIVERY - Delivered to your doorstep for a small fee if you live
              within selected postcodes.
            </h4>

            <p>
              All raw vegan gluten-free cakes and products are made super-fresh
              to order with high quality ingredients. On the Checkout page, you
              can decide whether you would like your order delivered for a small
              fee (within selected postcodes) or whether you would like to
              collect it for free.
            </p>
            <section className="flex flex-col justify-start md:items-start items-center space-y-0.5 pt-10">
              <h4 className="">DELIVERY</h4>
              <p className="text-gray-500">
                raw vegan cake | gluten free cake | north London | Hertfordshire
              </p>
            </section>

            <p className="md:mx-0 mx-auto">
              Delivery is <span className="text-[#6a8d39]">£15</span> for the
              following postcodes:
            </p>
            <h5 className="md:mx-0 mx-auto">All AL postcodes</h5>
            <section className="py-5 md:mx-0 mx-auto">
              <p className="font-semibold">WD6 WD7 WD23 WD25</p>
              <p className="font-semibold">NW4 NW7 NW11</p>
              <p className="font-semibold">HA7 HA8</p>
              <p className="font-semibold">N2 N3 N10 N11 N12 N20</p>
            </section>
            <p>
              You may of course collect free of charge from{" "}
              <span className="text-[#6a8d39]">
                CakeMeHappyyy @ 37 Byng Road, Barnet EN5 4NW
              </span>
            </p>
            <p>
              Outside these postcodes, delivery is by arrangement only. Please
              contact me to discuss.
            </p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default About;
