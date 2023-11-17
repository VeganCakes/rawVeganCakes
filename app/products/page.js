import CategoryCarousel from "../../components/Carousel/CategoryCarousel";
import ProductCart from "../../components/ProductCart";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import image1 from "../../images/carousel/chocholate_cakes/raw_vegan_cake_north_london-028.jpg";
import image2 from "../../images/carousel/chocholate_cakes/raw_vegan_cake_north_london-029.jpg";
import image3 from "../../images/carousel/chocholate_cakes/raw_vegan_cake_north_london-030.jpg";
import Slider from "../../components/Slider";
import Search from "../../components/Search";

export const metadata = {
  title: "All Products | Plant Based Vegan Celebration Cakes ",
  description:
    "At Raw Vegan Cakes, we are constantly developing the range of guilt-free no-refined-sugar, delicious & super-tasty raw vegan gluten-free birthday, celebration cakes and more. All the products are made with high quality natural ingredients to ensure they taste 100% yummy.",
};

export default async function AllProducts({ searchParams }) {
  const { search } = searchParams;
  const searchFilter = search ? `&& name match "${search}*"` : "";

  const products = await client.fetch(
    groq`*[_type == "product" ${searchFilter}]{
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

  const images = [
    { name: "Two Tier Chocolate Cake", image: image1 },
    { name: "Pistachio, Macha & Chocolate Tart", image: image2 },
    { name: "Chocolate & Vanilla Cake with Blueberries", image: image3 },
  ];
  const subTitle1 =
    "raw vegan cake | gluten free cake | North London | Hertfordshire";
  const subTitle2 = "raw vegan cake | gluten free cake SHOP";
  const description =
    "At Raw Vegan Cakes, we are constantly developing the range of guilt-free no-refined-sugar, delicious & super-tasty raw vegan gluten-free birthday, celebration cakes and more. All the products are made with high quality natural ingredients to ensure they taste 100% yummy.";
  const title = "All Products";

  return (
    <div className="flex flex-col justify-center items-center max-w-screen divide-y-4 divide-[#6a8d39]">
      <div className="flex justify-center md:justify-start items-center w-full h-[4px] bg-[#469635] "></div>
      <section className="flex flex-col py-5 px-5 md:px-32 w-[100vw]">
        <div className="flex flex-col justify-center items-center w-full  mb-6">
          <h2 className="text-xl md:mb-3 mr-6">{title}</h2>
          <p className="text-base w-[95vw] md:w-[60vw] text-center whitespace-normal">
            {description}
          </p>
          <Search />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-10 pt-4 md:w-[75%] w-[90%] mx-auto">
          {products.map((product) => (
            <ProductCart product={product} key={product._id} />
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-screen">
        <div className="flex justify-center md:justify-start items-center w-full h-[4px] bg-[#469635] "></div>
        <CategoryCarousel
          title={title}
          subTitle1={subTitle1}
          subTitle2={subTitle2}
          description={description}
          images={images}
        />
      </section>
      <Slider />
    </div>
  );
}
