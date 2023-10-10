import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

export default async function sitemap() {
  let appUrl = "https://rawvegancakes.co.uk";

  const products = await client.fetch(
    groq`*[_type == "product"]{
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

  const productURL =
    products.map((product) => {
      return {
        url: `${appUrl}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      };
    }) ?? [];

  return [
    {
      url: appUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: appUrl + "/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: appUrl + "/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: appUrl + "/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: appUrl + "/faqs",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: appUrl + "/delivery_pickup",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.2,
    },
    {
      url: appUrl + "/products",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: appUrl + "/products/best_sellers",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: appUrl + "/products/breakfast_bars",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: appUrl + "/products/chocholate_bars",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: appUrl + "/products/chocholate_cakes",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: appUrl + "/products/coffee_cakes",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: appUrl + "/products/energy_bites",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: appUrl + "/products/fruit_cakes",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: appUrl + "/products/new_products",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...productURL,
  ];
}
