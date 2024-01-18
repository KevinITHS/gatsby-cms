/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config();
module.exports = {
  siteMetadata: {
    title: `cmslabb2`,
    siteUrl: `https://www.yourdomain.tld`,
    navLinks: [
      { location: "/", name: "Home" },
      { location: "/about", name: "About" },
      { location: "/contact", name: "Contact" },
      { location: "/portfolj", name: "Portfolio" },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        spaceId: process.env.SPACE_ID,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
