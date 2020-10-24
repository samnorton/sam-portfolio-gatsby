import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"
import JqueryLoad from "../components/JqueryLoad"
import Image from 'gatsby-image'
import Author from "../assets/images/blogs/sam-writer.jpg"
import Preloader from "../components/Preloader"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"

const SingleBlogTemplate = ({ data }) => {
const { content, title, full_image, published_date} = data.blog

 return (
     <>
     <JqueryLoad />
    <Preloader />
    <Layout>
    <PageBanner title={title} bannerLink="blogs" />

    <div className="blog-section section-padding">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-lg-10 mx-auto">
						<div className="single-blog-details">
							<div className="single-blog-head">
								<span className="date">{ published_date }</span>
								<h2 className="title">{ title }</h2>
							</div>
							<div className="single-blog-image">
                              <Image fluid={full_image.childImageSharp.fluid} alt={title} />
                            </div>
							<div className="single-blog-content" data-aos="fade-in">
								<p><ReactMarkdown source={content} /></p>
							</div>
							<div className="single-blog-footer" data-aos="fade-in">
								<div className="single-blog-share mx-auto">
									<h5>share:</h5>
									<div class="s9-widget-wrapper"></div>

								</div>
							</div>
						</div>
						<div className="author-box" data-aos="fade-in">
							<div className="author-image">
                               <img src={Author} alt="Sam Norton" />
                                </div>
							<div className="author-content">
								<h5>Sam Norton</h5>
								<p>Hello! I'm Sam Norton, a Full Stack Developer / Virtual Assistant based in Angeles City, Philippines. I enjoy creating meaningful and creative stuffs, whether that be websites, applications, graphics or anything technology related.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


        </Layout>
    </>
 )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
        id
        title
        content
        slug
        published_date(formatString: "MMMM DD, YYYY")
        full_image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
    }
  }
`

export default SingleBlogTemplate

