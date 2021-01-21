import React, { useState } from "react"
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

export default function Home({ data }) {
  
  const [loader, setLoader] = useState(true)

  useEffect(()=>{
   setTimeout(()=> {
      setLoader(false)
   }, 400)
  }, [])

  const { 
    allStrapiWorks: { nodes:works },
    allStrapiBlogs: { nodes:blogs },
  } = data

  return (
     <>
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
