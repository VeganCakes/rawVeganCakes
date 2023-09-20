import { stripe } from "../../../lib/stripe";
import { NextResponse } from "next/server";
import { renderAsync } from "@react-email/render";
import ReactEmailTemplate from "./reactEmailTemplate";
import nodemailer from "nodemailer";

export async function POST(request) {
  const rawBody = await request.text();
  const signature = request.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    let responseMessage = JSON.stringify({
      messge: "Webhook Error " + err.message,
    });
    console.error(err.message);
    return new Response(responseMessage, {
      status: 400,
    });
  }

  const data = event.data.object;
  if (
    event.type !== "checkout.session.completed" &&
    event.type !== "checkout.session.async_payment_succeeded"
  ) {
    return new Response("", {
      status: 200,
    });
  }

  if (data.payment_status === "paid") {
    const result = await stripe.checkout.sessions.listLineItems(data.id);

    let filterOrderDetails = [];
    result.data.forEach((data) => {
      let filterData = {
        productName: data.description,
        productUnitAmount: data.price.unit_amount / 100,
        productQuantity: data.quantity,
        productTotalAmount: data.amount_total / 100,
      };
      filterOrderDetails.push(filterData);
    });

    let emailDetails = {
      orderId: data.id,
      customerName: data.customer_details.name,
      customerEmail: data.customer_details.email,
      customerPhoneNumber: data.customer_details.phone,
      customerCity: data.customer_details.address.city,
      customerAddress1: data.customer_details.address.line1,
      customerAddress2: data.customer_details.address.line2,
      customerPostalCode: data.customer_details.address.postal_code,
      orderDetails: filterOrderDetails,
      subtotalAmount: data.amount_subtotal / 100,
      deliveryAmount: data.total_details.amount_shipping / 100,
      totalAmount: data.amount_total / 100,
      orderLinkOnStripe: `https://dashboard.stripe.com/payments/${data.payment_intent}`,
    };

    const html = await renderAsync(<ReactEmailTemplate {...emailDetails} />, {
      pretty: true,
    });

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      auth: {
        user: process.env.BREVO_SMTP_PRIVATE_NAME,
        pass: process.env.BREVO_SMTP_PRIVATE_KEY,
      },
    });

    let mailTemplate = {
      from: "Raw Vegan Cakes<stripeinvoice@rawvegancakes.com.uk>",
      // to: "rawcake049@gmail.com",
      to: "sheikhfaiz546@gmail.com",
      subject: `Congrats! You've got a new Order🥳 --- ${new Date().toLocaleString(
        "en-GB",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          hour12: true,
          hourCycle: "h12",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Europe/London",
        }
      )}`,
      html,
    };
    try {
      await transporter.sendMail(mailTemplate);
      return NextResponse.json({ message: "Email sent Successfully" });
    } catch (err) {
      return NextResponse.json({ message: "Something went wrong" }).status(501);
    }
  }
}
