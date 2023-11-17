import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";

const ContentHeading = ({ heading = "" }) => {
  return (
    <h3 className="text-[#88C141] text-3xl mb-0 relative">
      {heading}
      <span className="absolute -inset-y-1 -left-5 w-1 bg-[#88C141]"></span>
    </h3>
  );
};

const BlogPage = () => {
  return (
    <div className="py-20 mx-auto md:max-w-[680px] px-3">
      {/* Blog Header  */}
      <div>
        <h2 className="text-[#9A684B] text-[40px] font-black mb-3">
          Vegan Birthday Cake Delivery
        </h2>
        <div className="flex items-center text-[#334155] gap-x-2 py-2 border-b  border-[#E0E3E5] mb-6">
          <span>5 min read</span>
          <BsDot />
          <span className="">
            23<sup>th</sup> Nov 2023
          </span>
        </div>
        <p className="text-[#666666] text-lg leading-normal">
          The demand for exquisite, vegan-based treats is reaching new heights
          in a world where culinary inventiveness knows no limitations. As a
          devoted{" "}
          <Link href="/products" className="underline text-[#8BBB39]">
            raw vegan cake maker
          </Link>
          , I've had the luxury of observing this progress
        </p>
      </div>

      {/* Blog Content */}
      <div className="pt-11 pl-3 space-y-10">
        <div>
          <ContentHeading heading="Embracing the Vegan Journey" />

          <div className="flex flex-col gap-y-4 mt-5">
            <p className="text-lg text-[#4F545E]">
              My foray into raw vegan cake making began with a simple question:
              "Can delicious, indulgent cakes be created without the use of
              animal products?" I soon learned that the response was a
              resounding YES! I set out on a mission to produce vegan cakes that
              rivalled their non-vegan counterparts, armed with an arsenal of
              plant-based ingredients and a desire to defy culinary traditions.
            </p>
          </div>
        </div>

        <div>
          <ContentHeading heading="The Art of Ingredients" />

          <div className="flex flex-col gap-y-4 mt-5">
            <p className="text-lg text-[#4F545E]">
              Central to my philosophy as a vegan cake maker and supplier is the
              belief that exceptional cakes start with exceptional ingredients.
              Every component, from the flour to the sweeteners, is carefully
              selected for its quality, taste, and ethical sourcing. Organic,
              non-GMO, and cruelty-free ingredients form the foundation of each
              cake, ensuring that every bite is a guilt-free indulgence.
            </p>
            <p className="text-lg text-[#4F545E]">
              One of the most difficult aspects of raw vegan cake making is
              achieving the richness and moistness that are generally associated
              with animal-based products. I've developed a harmonious blend of
              plant-based replacements that not only do this, but frequently
              exceed expectations, thanks to much research and experimenting.
              The end result? Moist, sweet, guilt-free completely enticing
              cakes.
            </p>
          </div>
        </div>

        <div>
          <ContentHeading heading="From Classic to Creative: A Diverse Palette" />
          <div className="flex flex-col gap-y-4 mt-5">
            <p className="text-lg text-[#4F545E]">
              The variety of flavours and patterns available is a defining
              feature of my vegan cake making and supply business. While I adore
              classic flavours like rich chocolate and velvety vanilla, I also
              relish the opportunity to push the envelope and introduce unusual,
              innovative concoctions.
            </p>
            <p className="text-lg text-[#4F545E]">
              Consider a zesty lemon-lavender cake, in which the citrusy
              brightness dances nicely with the relaxing perfume of lavender.
              Consider a delicious matcha-infused work of art that combines the
              earthy beauty of green tea with the sweet charm of exquisite
              frosting. These are the kinds of experiences I hope to provide
              with each cake that leaves my kitchen.
            </p>
          </div>
        </div>

        <div>
          <ContentHeading heading="A Celebration of Customisation" />
          <div className="flex flex-col gap-y-4 mt-5">
            <p className="text-lg text-[#4F545E]">
              I understand that every occasion is special, and every
              individual's taste is unique. That's why I take immense pride in
              offering a bespoke service that allows clients to bring their
              visions to life. From birthdays to weddings, from elegant soirées
              to casual gatherings, each cake is a canvas waiting to be adorned
              with personal touches.
            </p>
            <p className="text-lg text-[#4F545E]">
              I work closely with my clients to ensure that their cake not only
              meets but surpasses their expectations, whether it's a certain
              flavour combination, a favourite colour palette, or a specific
              theme. The joy in their eyes as they see their idea become a
              delightful reality feeds my passion for my craft.
            </p>
          </div>
        </div>

        <div>
          <ContentHeading heading="Delivering Sweet Moments" />

          <div className="flex flex-col gap-y-4 mt-5">
            <p className="text-lg text-[#4F545E]">
              Convenience is essential in a world where time is a valuable
              commodity. As a vegan cake maker, I realise the importance of
              providing a hassle-free experience for my customers. That is why I
              provide a convenient delivery service that takes these wonderful
              delicacies right to their door.
            </p>
            <p className="text-lg text-[#4F545E]">
              Each cake is meticulously wrapped to maintain its freshness and
              integrity while in transit. Whether it's a large party or a small
              gathering, my goal is to make every moment spent savouring these
              cakes one to remember.
            </p>
          </div>
        </div>
        <div>
          <ContentHeading heading="A Commitment to Conscious Living" />

          <div className="flex flex-col gap-y-4 mt-5">
            <p className="text-lg text-[#4F545E]">
              Beyond the wonderful flavours and eye-catching aesthetics, my
              company is motivated by a higher purpose: a commitment to
              conscious living. I purchase my ingredients ethically, preferring
              to support local, sustainable suppliers whenever feasible.
            </p>
            <p className="text-lg text-[#4F545E]">
              Clients who choose my cakes become part of a wider movement
              towards a more humane and sustainable world. We're not only
              indulging in delicious delicacies; we're also helping to shape a
              brighter, more conscious future.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-[#6B922A] text-[32px] mb-0 underline">
            Conclusion: A Sweet Invitation
          </h3>

          <div className="flex flex-col gap-y-4 mt-5">
            <p className="text-lg text-[#4F545E]">
              To those who seek not just a cake, but an experience, I extend an
              invitation to explore the world of my vegan cake making and
              supply. Together, let us celebrate the artistry of plant-based
              cake making, one delectable creation at a time.
            </p>
            <p className="text-lg text-[#4F545E]">
              Join me in savouring the joy that comes with every bite of a
              thoughtfully crafted, ethically sourced vegan cake. Together,
              let's embark on a journey of flavour, compassion, and celebration.
            </p>
            <p className="text-lg text-[#4F545E]">
              If you would like more information about the range of stunning{" "}
              <Link href="/products" className="underline text-[#8BBB39]">
                vegan birthday cakes
              </Link>{" "}
              I make and deliver, then please do not hesitate to{" "}
              <Link href="/contact" className="underline text-[#8BBB39]">
                get in touch
              </Link>{" "}
              and I look forward to speaking with you soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
