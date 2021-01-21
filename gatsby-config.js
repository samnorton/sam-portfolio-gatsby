/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Sam Norton | Full Stack Developer / Virtual Assistant",
    titleTemplate: "%s | Sam Norton",
    description: "I'm Sam Norton, a Full Stack Developer / Virtual Assistant based in Angeles City, Philippines. I enjoy creating meaningful and creative stuffs, whether that be websites, applications, graphics or anything technology related.",
    author: "Sam Norton",
    twitterUsername: "@sammie_norton",
    image: "src/assets/images/header/sam-img.png",
    siteUrl: "http://www.niconorton.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preload-fonts`,
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
        apiURL: `https://sam-portfolio-api.herokuapp.com`,
        queryLimit: 1000, 
        contentTypes: [`works`, `experiences`, `testimonials`, `blogs`]
        // singleTypes: [],
      }, 
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins`,
          `poppins\:300,400,500,600,700,800,900` 
        ],
        display: 'swap'
      }
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
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `www.niconorton.com`,
        short_name: `niconorton.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1abc9c`,
        display: `minimal-ui`,
        icon: `src/assets/favicons/favicon-16x16.png`,
        icons: [
          {
            src: `src/assets/favicons/android-icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `src/assets/favicons/android-icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `src/assets/favicons/android-icon-36x36.png`,
            sizes: `36x36`,
            type: `image/png`,
          },
          {
            src: `src/assets/favicons/android-icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `src/assets/favicons/android-icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },          
          {
            src: `src/assets/favicons/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/assets/favicons/apple-icon-180x180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ]
       }
      }, 
  ],
}
