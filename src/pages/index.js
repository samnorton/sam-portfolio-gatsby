import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import About from '../components/About'
import Works from '../components/Works'
import Services from '../components/Services'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Blogs from '../components/Blogs'
import Map from '../components/Map'
import SEO from '../components/SEO'
import Helmet from "react-helmet"


export default function Home({ data }) {
  
  const { 
    allStrapiWorks: { nodes:works },
    allStrapiBlogs: { nodes:blogs },
  } = data

  return (
     <>
     <Helmet>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDf64CyWpOBCEocXjocJL_wZiW82hNtbTA&callback=initMap" async defer />
    </Helmet>
     <SEO />
    <div className="main-container">
      <Layout>
      <Header />
      <About titleSpan="About" title="me" />
      <Works works={works} title="Recent Works" showAllWorkLinks />
      <Services title="Services" />
      <Experience titleSpan="Work" title="Experience" />
      <Testimonials title="Testimonials" />
      <Blogs title="Latest Blogs" blogs={blogs} showAllBlogLinks/>
      <Map />
      </Layout>
    </div> 
    </>
  )
}

export const query = graphql`
  {
    allStrapiWorks(filter: {featured: {eq: true}}, limit: 4){
      nodes {
        id
        name
        slug
        stack {
          stack_name
          id
        }
        featured_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    allStrapiBlogs(filter: {featured: {eq: true}}, sort: {fields: published_date, order: DESC}, limit: 6) {
      nodes {
        id
        title
        content
        slug
        published_date(formatString: "MMMM DD, YYYY")
        featured_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

  }
`
