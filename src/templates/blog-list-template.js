import React from "react"
import { graphql, Link } from "gatsby"
import JqueryLoad from "../components/JqueryLoad"
import Image from 'gatsby-image'
import Preloader from "../components/Preloader"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"

const Blog = (props) => {

const { currentPage, numPages } = props.pageContext

const isFirst = currentPage === 1
const isLast = currentPage === numPages

const nextPage = `/blogs/${currentPage+1}`
const prevPage = currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage-1}`

const { data } = props

 return (
     <>
    <JqueryLoad />
    <Preloader />
    <Layout>
    <PageBanner title="Blogs" />
 
		<div className="blog-section section-padding">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-lg-12">
						<div className="row">
							
                            
                            { data.allStrapiBlogs.nodes.map(blog => {
                               const { id, featured_image, date_published, title, content, slug } = blog

                               return (
                                <div className="col-md-4 col-12 mb-30">
								<div className="blog-item">
									<div className="blog-item_img">
                                    <Link to={`/blogs/${slug}`} key={id}>
                                            <Image alt={title} className="full-width" fluid={featured_image.childImageSharp.fluid} />
                                            </Link>
									</div>
									<div className="blog-item_content">
										<p className="mb-10">{ date_published }</p>
										<h4 className="mb-10"><Link to={`/blogs/${slug}`} key={id}>{ title }</Link></h4>
                               <p className="mb-20 blog-item_text-preview">{ title.length > 48 ? content.substring(0,100) + '...' : content.substring(0,134) + '...' }</p>
                               <Link data-read-more="READ MORE" to={`/blogs/${slug}`} key={id}>READ MORE</Link>
									</div>
								</div>
                                </div>
                               )
                            })}


						</div>


						<div className="row mt-20" data-aos="zoom-in">
							<div className="col">
								<ul className="pagination">

                            
                            {
                                !isFirst && <li>
                                    <Link to={prevPage} data-pagination="«">«</Link>
                                 </li>
                            }

   
				                    { Array.from({ length:numPages }, (_, i) => {
                                        return (
                                            <li key={i}>
                                                <Link className={i+1 === currentPage ? 'active' : ''} data-pagination={i+1} to={`/blogs/${i === 0 ? '' : i + 1}`}>{i+1}</Link>
                                            </li>
                                        )
                                    })}


                             {
                                !isLast && <li>
                                <Link  to={nextPage} data-pagination="»">»</Link>
                                </li>
                            }               


								</ul>
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
    query getAllBlogs($skip: Int!, $limit: Int!){
    allStrapiBlogs(
        skip: $skip, 
        limit: $limit, 
        sort: {fields: published_date, order: DESC}
    ) {
      nodes {
        id
        title
        content
        slug
        published_date(formatString: "MMMM DD, YYYY")
        featured_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default Blog

