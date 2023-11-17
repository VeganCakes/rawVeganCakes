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
        "/blogs",
        "/products/",
      ],
      disallow: ["/success/", "/cart/"],
    },
    sitemap: "https://rawvegancakes.co.uk/sitemap.xml",
  };
}
