import CategoryCarousel from "../../../components/Carousel/CategoryCarousel";
import ProductCart from "../../../components/ProductCart";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import image1 from "../../../images/carousel/chocholate_cakes/raw_vegan_cake_north_london-028.jpg";
import image2 from "../../../images/carousel/chocholate_cakes/raw_vegan_cake_north_london-029.jpg";
import image3 from "../../../images/carousel/chocholate_cakes/raw_vegan_cake_north_london-030.jpg";
import Slider from "../../../components/Slider";
export const revalidate = 10;

export const metadata = {
  title: "Best Sellers | Guilt Free Vegan Birthday Cakes | Healthy Vegan Cakes",
  description:
    "A condensed selection of our most popular guilt-free no-refined-sugar, delicious & super-tasty raw vegan gluten-free cakes. These are made with intention and care for your special day, enjoy looking through a range of different Celebration cakes and treats that Raw Vegan Cakes have in store for you.",
};

const page = async () => {
  const products = await client.fetch(
    groq`*[ _type == "product" && bestseller == true ]{
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
        undefined, { cache: 'no-store' }
  );

  const images = [
    { name: "Two Tier Chocolate Cake", image: image1 },
    { name: "Pistachio, Macha & Chocolate Tart", image: image2 },
    { name: "Chocolate & Vanilla Cake with Blueberries", image: image3 },
  ];
  const subTitle1 =
    "raw vegan cake | gluten free cake | North London | Hertfordshire";
  const subTitle2 = "raw vegan cake | gluten free cake SHOP";
  const description =
    "A condensed selection of our most popular guilt-free no-refined-sugar, delicious & super-tasty raw vegan gluten-free cakes. These are made with intention and care for your special day, enjoy looking through a range of different Celebration cakes and treats that Raw Vegan Cakes have in store for you.";
  const title = "Best Sellers";

  return (
    <div className="flex flex-col justify-center items-center max-w-screen divide-y-4 divide-[#6a8d39]">
      <div className="flex justify-center md:justify-start items-center w-full h-[4px] bg-[#469635] "></div>
      <section className="flex flex-col py-5 px-5 md:px-32 w-[100vw]">
        <div className="flex flex-col justify-center items-center w-full mb-6">
          <h2 className="text-xl">{title}</h2>
          <p className="text-base w-[95vw] md:w-[60vw] text-center whitespace-normal">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 md:w-[75%] w-[90%] mx-auto">
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
};

export default page;
