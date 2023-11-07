import "./globals.css";
import "../styles/style.css";
import { headers } from "next/headers";
// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { SiteHeader } from "../components/site-header";
import TawkMessengerReactLazyLoad from "../components/TawkMessengerReactLazyLoad";
import Providers from "../components/providers";
import { SiteFooter } from "../components/site-footer";
import InfoPopup from "../components/InfoPopup";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  title: "CakeMeHappyyy | Healthy Vegan Cakes | Raw Vegan Cakes",
  description:
    "Welcome to my Guilt-Free creations; a range of natural, super-fresh & healthy indulgent Raw Vegan Celebration cakes. All my products are made with the finest ingredients & contain no added sugar!",
  keywords: [
    "raw_vegan_cake",
    "gluten_free_cake",
    "raw_vegan_cake_north_london",
    "gluten_free_cake_north_london ",
    "raw_vegan_cake_hertfordshire ",
    "gluten_free_cake_hertfordshire",
  ],
  verification: {
    google: "aFq45ufd_9jw4nKFXzzwqDQrxiMGwp6wvV3c-1_Iwkg",
  },
  icons: "favicon-svg.svg",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className="layout-body">
          <link rel="icon" href="/favicon-svg.svg" sizes="32x32" />
          <Providers>
            <div className="layout-wrapper">
              <SiteHeader />
              <div className="flex-1">{children}</div>

              <TawkMessengerReactLazyLoad />

              <InfoPopup />
              <SiteFooter />
            </div>
          </Providers>
          <Analytics />

          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-RRBS5XXF57"
            strategy="beforeInteractive"
          />
          {/* <Script
            strategy="beforeInteractive"
            src="https://cookieconsent.popupsmart.com/src/js/popper.js"
          />
          <Script strategy="afterInteractive">{`
          window.start.init({Palette:"palette6",Mode:"banner bottom",Theme:"classic",Location:"https://rawvegancakes.co.uk/privacy-policy",Time:"5",})
          `}</Script> */}
          <Script strategy="beforeInteractive">
            {`
          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-RRBS5XXF57')`}
          </Script>
          <Script type="application/ld+json">
            {`
            
            {
              "@context": "http://www.schema.org",
              "@type": "LocalBusiness",
              "name": "CakeMeHappyyy By Mell",
              "telephone": "079 00 601365",
              "url": "https://rawvegancakes.co.uk/",
              "logo": "https://rawvegancakes.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcakeMeHappyNewLogo.e8d4373d.jpg&w=256&q=75",
              "image": "https://rawvegancakes.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcakeMeHappyNewLogo.e8d4373d.jpg&w=256&q=75",
              "description": "Welcome to my Guilt-Free creations; a range of natural, super-fresh & healthy indulgent Raw Vegan Celebration cakes. All my products are made with the finest ingredients & contain no added sugar!",
              "priceRange": "Competitive",
              "address": {
                 "@type": "PostalAddress",
                 "streetAddress": "37 Byng Road",
                 "addressLocality": "Barnet",
                 "addressRegion": "Barnet",
                 "postalCode": "EN5 4NW",
                 "addressCountry": "United Kingdom"
              },
              "hasMap": "https://goo.gl/maps/K4fNKNePVRNkjTfT7",
              "openingHours": ["Mo-Su 8:00-21:00"],
              "contactPoint": {
                 "@type": "ContactPoint",
                 "contactType": "Customer Service",
                 "telephone": "+44 79 00 601365"}
            }
             `}
          </Script>
        </body>
      </html>
    </>
  );
}
