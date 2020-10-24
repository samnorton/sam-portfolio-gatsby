import React from "react"
import { Link } from 'gatsby'
import Title from './Title'
import Blog from './Blog'

const Blogs = ({ title, blogs, showAllBlogLinks}) => {
  return (
    <div className="blog-section section-padding bg-gray" id="blogs">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-title-two center">
						 <Title title={title} />
					</div>
				</div>
			</div>

			<div className="row">
				<div className="blog-slider owl-carousel">
            { blogs.map((blog) => {
              return <Blog key={blog.id} { ...blog} />
            })}
				</div>
			</div>


			<div className="row">
				<div className="col">
					<div className="more-project-btn btn-group center" data-aos="zoom-in">
            { showAllBlogLinks && <Link data-wipe-normal="VIEW ALL BLOGS" to="/blogs">VIEW ALL BLOGS</Link>}
					</div>
				</div>
			</div>


		</div>
	</div>

  )
}

export default Blogs
