// import { Heading } from '@react-email/heading';
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Body } from "@react-email/body";
import { Text } from "@react-email/text";
import { Button } from "@react-email/button";
import { Row } from "@react-email/row";
import { Column } from "@react-email/column";
import { Section } from "@react-email/section";
import { Tailwind } from "@react-email/tailwind";
import { Preview } from "@react-email/preview";

const ReactEmailTemplate = (props) => {
  let date = new Date();
  return (
    <Html lang="en">
      <Head>
        <title>Congrats! You've got a new Order🥳</title>
      </Head>
      <Preview>Hurry up, we have to prepare Vegan-Cakes</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                "primary-100": "#F0FCE4",
                "primary-200": "#E5EECC",
                "primary-250": "#CDD7B2",
                primary: "#727A4F",
                secondary: "#865D42",
                black: "#474747",
              },
            },
          },
        }}
      >
        <Body className="font-sans p-0 m-0 box-border">
          <Section
            width="100%"
            className="max-w-[600px] pt-8 mx-auto table table-fixed"
          >
            <Row className="mb-8 table-fixed px-3">
              <Column valign="top">
                <Text className="text-secondary underline text-xl font-bold m-0">
                  You have a new Order!
                </Text>
              </Column>
              <Column className="w-24">
                <Row className="text-right">
                  <Column>
                    <Text className="mx-0 my-0 text-primary text-xs font-bold italic">
                      {date.toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        timeZone: "Europe/London",
                      })}
                    </Text>
                  </Column>
                </Row>
                <Row className="text-right">
                  <Column>
                    <Text className="mx-0 my-0 text-primary text-xs font-bold italic">
                      {date.toLocaleString("en-GB", {
                        hour: "2-digit",
                        hour12: true,
                        hourCycle: "h12",
                        minute: "2-digit",
                        timeZone: "Europe/London",
                      })}
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Row>
            <Label title="Order Id #" desc={props.orderId} />
            <Label title="Customer Name" desc={props.customerName} />
            <Label title="Customer Email" desc={props.customerEmail} />
            {props.customerPhoneNumber && (
              <Label
                title="Customer Phone"
                desc={props.customerPhoneNumber}
                type="phone"
              />
            )}
            <Text className="text-secondary font-bold mb-3 mx-0 mt-0 pt-2 px-3">
              Address
            </Text>
            <Label title="City" desc={props.customerCity} />
            <Label
              title={props.customerAddress2 ? "Address 1" : "Customer Address"}
              desc={props.customerAddress1}
            />
            {props.customerAddress2 && (
              <Label title="Address 2" desc={props.customerAddress2} />
            )}
            {props.customerPostalCode && (
              <Label title="Postal Code" desc={props.customerPostalCode} />
            )}
            <Text className="text-secondary font-bold mb-3 mx-0 mt-0 pt-2 px-3">
              Order Summary
            </Text>

            {/* Price Table */}
            <Section className="bg-primary-200 p-3">
              <Row className="table-fixed text-black text-sm mb-4">
                <Column valign="top" className="pr-2">
                  Product Name
                </Column>
                <Column valign="top" width={60}>
                  Price <span className="font-bold">£</span>
                </Column>
                <Column valign="top" width={30}>
                  Qty
                </Column>
                <Column valign="top" width={55} className="pl-2">
                  Total <span className="font-bold">£</span>
                </Column>
              </Row>

              {props.orderDetails.map((data, index) => (
                <Row
                  key={data.productName + index}
                  className={`table-fixed text-primary text-sm mb-2 ${
                    props.orderDetails.length - 1 !== index &&
                    "border-b-[0.2px] border-b-primary border-solid pb-2"
                  }`}
                >
                  <Column
                    valign="top"
                    className="pr-2 break-words font-bold text-xs"
                  >
                    {data.productName}
                  </Column>
                  <Column valign="top" width={60}>
                    {data.productUnitAmount}.00
                  </Column>
                  <Column valign="top" width={30}>
                    x{data.productQuantity}
                  </Column>
                  <Column valign="top" width={55} className="pl-2 font-bold">
                    {data.productTotalAmount}.00
                  </Column>
                </Row>
              ))}
            </Section>

            <Section className="bg-primary mb-2 py-3">
              <Row className="mb-1 table-fixed text-white text-sm font-bold py-1 px-3">
                <Column valign="top">
                  <Text className="m-0">Subtotal</Text>
                </Column>
                <Column valign="top" className="w-24">
                  <Text className="m-0 text-right">
                    {props.subtotalAmount}.00 £
                  </Text>
                </Column>
              </Row>

              <Row className="mb-3 table-fixed text-white text-sm font-bold px-3">
                <Column valign="top">
                  <Text className="m-0">Delivery charges</Text>
                </Column>
                <Column valign="top" className="w-24">
                  <Text className="m-0 text-right">
                    {props.deliveryAmount === 0
                      ? "Free"
                      : props.deliveryAmount + ".00 £"}
                  </Text>
                </Column>
              </Row>

              <Row className="table-fixed text-white text-sm font-bold pb-1 pt-3 px-3 border-t-[0.4px] border-t-primary-100 border-solid">
                <Column valign="top">
                  <Text className="m-0">Total Amount Charged</Text>
                </Column>
                <Column valign="top" className="w-24">
                  <Text className="m-0 text-right">
                    {props.totalAmount}.00 £
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section className="px-3 my-4 mx-auto max-w-[500px]">
              <Button
                className="bg-[#625AFA] text-white rounded-md text-center w-full py-2"
                href={props.orderLinkOnStripe}
              >
                Checkout Order on Stripe
              </Button>
            </Section>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

const Label = ({ title = "", desc = "", type = "" }) => {
  return (
    <Section className="mb-3 table-fixed px-3">
      <Text className="text-sm leading-tight mx-0 my-0 mb-[3px] text-black font-bold break-all">
        {title}
      </Text>
      {type === "phone" ? (
        <Button
          className="text-sm leading-tight mx-0 my-0 text-primary break-all font-medium"
          href={"tel:" + desc}
        >
          {desc}
        </Button>
      ) : (
        <Text className="text-sm leading-tight mx-0 my-0 text-primary break-all font-medium">
          {desc}
        </Text>
      )}
    </Section>
  );
};

export default ReactEmailTemplate;
