import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { FaStar } from "react-icons/fa"
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

  const data = useStaticQuery(query)
  const { allStrapiTestimonials: { nodes:testimonials } } = data

  return (
    <div className="testimonial-section section-padding" id="testimonial" data-aos="zoom-in">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-two center">
                <Title title={title} />
            </div>
          </div>
        </div>
  
        <div className="testimonial-wrap row">
          <div className="testimonial-slider owl-carousel">

              { testimonials.map(item => {
                    const { id, name, cite, text, photo } = item

                    return(
                      <div className="col-xl-8 col-lg-10 col-12 ml-auto mr-auto" key={id}>
                      <div className="testimonial-item mt-40">
                        <div className="testimonial_img">
                             <Image fluid={photo.childImageSharp.fluid} alt={name} style={{ position: "absolute", overflow: "visible", display: "block", width: "211px",  height: "207px" }}  />
                          </div>
                        <div className="testimonial_content xs-mt-40">
                          <div className="testimonial_content_item mb-30">
                            <div className="testimonial_content__pro">
                              <h4 className="mb-10">{ name }</h4>
                              <p>{ cite }</p>
                            </div>
                            <ul className="d-none d-sm-inline-block">
                              <li><FaStar></FaStar></li>
                              <li><FaStar></FaStar></li>
                              <li><FaStar></FaStar></li>
                              <li><FaStar></FaStar></li>
                              <li><FaStar></FaStar></li>
                            </ul>
                          </div>
                          <div>
                            <p>{ text } </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                })}

          </div>
        </div>
        </div>
        </div>
  )
}

export default Testimonials
