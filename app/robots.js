export default async function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/success/", "/cart/"],
    },
    sitemap: "https://rawvegancakes.co.uk/sitemap.xml",
  };
}
