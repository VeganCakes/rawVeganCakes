import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import React from "react";
import Product from "../../../components/Product";
import Slider from "../../../components/Slider";

export async function generateMetadata({ params }) {
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == "${params.slug}"][0]{
      _id,
      "id": _id,
      categories,
      image,
      price,
      name,
      size,
      ingredients,
      description,
      "slug": slug.current,
    }`,
        undefined, { cache: 'no-store' });

  return {
    title:
      product.name + " | Plant Based Vegan Cakes | Gluten Free Vegan Cakes",
    description: product.description,
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
  };
}

const Page = async ({ params }) => {
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == "${params.slug}"][0]{
      _id,
      "id": _id,
      categories,
      image,
      price,
      name,
      size,
      ingredients,
      description,
      "slug": slug.current,
    }`
  );

  return (
    <main className="w-screen">
      <div className="flex justify-center items-center w-full md:w-full h-[4px]  bg-[#469635] "></div>
      <div className="mx-auto max-w-[80%] py-10">
        <Product product={product} />
      </div>
      <Slider />
    </main>
  );
};

export default Page;
