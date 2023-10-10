export default async function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/about/",
        "/contact/",
        "/privacy-policy/",
        "/faqs/",
        "/products/",
      ],
      disallow: ["/success/", "/cart/"],
    },
    sitemap: "https://rawvegancakes.co.uk/sitemap.xml",
  };
}
