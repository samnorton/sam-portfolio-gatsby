import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Image from "gatsby-image"
import Title from './Title'


const query = graphql`
  {
    allStrapiTestimonials {
      nodes {
        id
        name
        cite
        text
        photo {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Testimonials = ({ title }) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const data = useStaticQuery(query)
  const { allStrapiTestimonials: { nodes:testimonials } } = data


  return (
    <div className="testimonial-section section-padding" id="testimonial" data-aos="zoom-in">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-two center">
                <Title title={title} />
            </div>
          </div>
        </div>
  
        <div className="testimonial-wrap row">
 
        <div className="col-lg-8 mx-auto mt-5">

       <Carousel activeIndex={index} onSelect={handleSelect} id="testimonialCarousel" >

       { testimonials.map((item => {
     const { id, name, text, cite, photo } = item

return(

  <Carousel.Item key={id}>
    <Image fluid={photo.childImageSharp.fluid} alt={name} className="d-block mx-auto image-fluid" />
    <Carousel.Caption className="d-md-block">
      <p>{ text }</p>
      <h5>{ name } | { cite } </h5>
    </Carousel.Caption>
  </Carousel.Item>
   )

 }))

 }


         </Carousel>
         </div>
         </div>
   </Container>

   </div>

  )
}

export default Testimonials
