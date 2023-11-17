import { NextResponse } from "next/server";
import { validateCartItems } from "use-shopping-cart/utilities";
import { stripe } from "../../../lib/stripe";
// import { inventory } from "../../../config/inventory";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";

export async function POST(request) {
  const cartDetails = await request.json();
  const deliveryCharge = cartDetails["deliveryCharge"];
  const TotalProductsIds = cartDetails["totalProductsId"];
  delete cartDetails.deliveryCharge;
  delete cartDetails.totalProductsId;

  const fetchedProducts = await client.fetch(
    groq`*[_type == "product" && _id in [${TotalProductsIds.map(
      (id) => `"${id}"`
    ).join(",")}]]{
      ...,
      "id": _id,
    }`
  );
  const lineItems = validateCartItems(fetchedProducts, cartDetails);

  const origin = request.headers.get("origin");

  const lineItemsWithCents = lineItems;

  const session = await stripe.checkout.sessions.create({
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ["card"],
    phone_number_collection: {
      enabled: true,
    },
    line_items: lineItemsWithCents,
    billing_address_collection: "required",
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: deliveryCharge * 100,
            currency: "gbp",
          },
          display_name: "Delivery charge",
          delivery_estimate: {},
        },
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
  });
  return NextResponse.json(session);
}
