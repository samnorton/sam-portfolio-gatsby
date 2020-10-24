import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"


const Blog = ({ id, title,  content, published_date, featured_image, slug}) => {
  return (
    <div className="col">
    <div className="blog-item">
      <div className="blog-item_img">
        <Link to={`/blogs/${slug}`} key={id}>  
          <Image fluid={featured_image.childImageSharp.fluid} className="full-width" />
        </Link>
      </div>
      <div className="blog-item_content">
        <p className="mb-10">{published_date}</p>
        <h4 className="mb-10"> <Link to={`/blogs/${slug}`} key={id}> { title }</Link></h4>
        <p className="mb-20 blog-item_text-preview">{ title.length > 48 ? content.substring(0,100) + '...' : content.substring(0,134) + '...' }</p>
        <Link data-read-more="READ MORE" to={`/blogs/${slug}`} key={id}>READ MORE</Link>
      </div>
    </div>
  </div>
  )
}

export default Blog
