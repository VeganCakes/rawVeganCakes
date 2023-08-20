import Stripe from "stripe";
import { buffer } from "micro";
// import emailjs from '@emailjs/browser';

// const sendEmail = (recipient, subject, message) => {
//   const emailParams = {
//     from_name: "ORDERS-RAW VEGAN CAKE",
//     to_email: recipient,
//     subject: subject,
//     message_html: message,
//   };

//   emailjs.send("service_9ey5sol", "template_keyya3g", emailParams)
//     .then((response) => {
//       console.log("Email sent:", response);
//     })
//     .catch((error) => {
//       console.error("Email error:", error);
//     });
// };

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = require('express')();

const bodyParser = require('body-parser');

const fulfillOrder = (session) => {
  // TODO: fill me in
  // const subject = "Order Completed";
  //       const message = `
  //         Order ID: ${session.id}
  //         Customer_name: ${session.customer_details.name}
  //         Customer_email: ${session.customer_details.email}
  //         Customer_adress: ${session.customer_details.address.line1} ${session.customer_details.address.postal_code} ${session.customer_details.address.city}
  //         Total Amount: ${session.amount_total / 100} ${session.currency.toUpperCase()}
  //       `;

  //       sendEmail("info@rawvegancakes.co.uk", subject, message);

  console.log("Fulfilling order", session);
}

app.post('/api/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
  const payload = request.body;
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      // Save an order in your database, marked as 'awaiting payment'
      createOrder(session);

      // Check if the order is paid (for example, from a card payment)
      //
      // A delayed notification payment will have an `unpaid` status, as
      // you're still waiting for funds to be transferred from the customer's
      // account.
      if (session.payment_status === "paid") {
        fulfillOrder(session);
      }

      break;
    }

    case "checkout.session.async_payment_succeeded": {
      const session = event.data.object;

      // Fulfill the purchase...
      fulfillOrder(session);

      break;
    }


    case "payment_intent.succeeded": {
      const session = event.data.object;

      // Fulfill the purchase...
      fulfillOrder(session);

      break;
    }
  }

  response.status(200).end();
});

app.listen(4242, () => console.log('Running on port 4242'));


// export default async function GET(req, res) {
//   if (req.method == "POST") {
//     let event;

//     try {
//       const rawBody = await buffer(req.body);
//       const signature = req.headers["stripe-signature"];

//       event = stripe.webhooks.constructEvent(
//         rawBody.toString(),
//         signature,
//         process.env.STRIPE_WEBHOOK_SECRET
//       );
//     } catch (err) {
//       console.log(`X Error message: ${err.message}`);
//       res.status(400).send(`Webhook Error: ${err.message}`);
//       return;
//     }

//     switch (event.type) {
//       case "checkout.session.completed": {
//         const session = event.data.object;
//         // Save an order in your database, marked as 'awaiting payment'
//         createOrder(session);

//         // Check if the order is paid (for example, from a card payment)
//         //
//         // A delayed notification payment will have an `unpaid` status, as
//         // you're still waiting for funds to be transferred from the customer's
//         // account.
//         if (session.payment_status === "paid") {
//           fulfillOrder(session);
//         }

//         break;
//       }

//       case "checkout.session.async_payment_succeeded": {
//         const session = event.data.object;

//         // Fulfill the purchase...
//         fulfillOrder(session);

//         break;
//       }

//       case "checkout.session.async_payment_failed": {
//         const session = event.data.object;

//         // Send an email to the customer asking them to retry their order
//         emailCustomerAboutFailedPayment(session);

//         break;
//       }

//       case "payment_intent.succeeded": {
//         const session = event.data.object;

//         // Fulfill the purchase...
//         fulfillOrder(session);

//         break;
//       }

//       case "payment_intent.payment_failed": {
//         const session = event.data.object;

//         // Send an email to the customer asking them to retry their order
//         emailCustomerAboutFailedPayment(session);

//         break;
//       }
//     }
//   }
// }
