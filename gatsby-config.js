/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Sam Norton | Full Stack Developer / Virtual Assistant",
    description: "This is WebDev Portfolio Site",
    author: "Sam Norton",
    twitterUsername: "@john_smilga",
    image: "/twitter-img.png",
    siteUrl: "http://www.niconorton.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    { 
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, 
        contentTypes: [`works`, `experiences`, `testimonials`, `blogs`]
        // singleTypes: [],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `500`, `600`, `700`, `800`, `900`],
          }
        ],
      },
    },
    {
    resolve: "gatsby-plugin-load-script",
        options: {
          id: "s9-sdk",
          async: true,
          defer: true,
          content: "001b6a3748634e3e8764bacc6336f97b",
          src: "//cdn.social9.com/js/socialshare.min.js"
        }
    }
  ],
}
