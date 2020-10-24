import React from "react"
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import Image from "gatsby-image"

const Work = ({id, name, featured_image, stack, slug }) => {
  return (
    <div className="project col-xl-3 col-md-6 col-12">
    <div className="project-inner">
      <div className="project-image">
        <Link to={`/works/${slug}`} key={id}> { featured_image && <Image fluid={featured_image.childImageSharp.fluid} /> }</Link>
      </div>
      <div className="project-content">
        <h3 className="title text-center mb-2"><Link to={`/works/${slug}`} key={id}>{name}</Link></h3>
        <div className="d-flex justify-content-center align-content-center flex-wrap">
        {
            stack.map(stackItem => {
               return <span className="mt-2" data-tag={stackItem.stack_name} key={stackItem.id}>{stackItem.stack_name}</span>
            })
          }
          </div>
      </div>
    </div>
  </div>
  )
}

export default Work
