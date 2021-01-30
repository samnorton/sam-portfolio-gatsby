import React from "react"
import { graphql } from "gatsby"
import Image from 'gatsby-image'
import Preloader from "../components/Preloader"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import SEO from '../components/SEO'

const SingleWorkTemplate = ({ data }) => {

    const { name, client, demo_url, description, full_image, stack } = data.work

 return (
     <>
    <SEO title={name} />
    <Preloader />
    <Layout>
    <PageBanner title={name} bannerLink="works" />

		<div className="project-section section-padding">
			<div className="container">
				<div className="row">
					<div className="project-details col-12">
						<div className="project-inner row">
							<div className="project-image col-12">
                                <Image fluid={full_image.childImageSharp.fluid} alt={name} />
                            </div>
							<div className="col-12">
								<div className="row">
									<div className="col-lg-6 col-12" data-aos="fade-right">
										<div className="project-info">
											<ul>
												<li><span className="font-weight-bold">Client:</span> { client }</li>
												<li>
													<span className="font-weight-bold">Demo:</span> <a href={demo_url} target="_blank">{demo_url}</a>
												</li>
												<li><span className="mr-2 font-weight-bold">Technologies:</span> 
                                                { stack.map(item => {
                                                    const { id, stack_name } = item 
                                                    return  <span key={id} className="mr-2 mb-2 align-middle justify-content-center" data-tag={stack_name}>{stack_name}</span> 
                                                })}
                                               
                                               
                                                 </li>
											</ul>
										</div>
									</div>
									<div className="col-lg-6 col-12" data-aos="fade-left">
										<div className="project-content">
											<h2 className="title">{ name } </h2>
                                             <p>{ description }</p>
										</div>
									</div>
								</div>
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
  query GetSingleWork($slug: String) {
    work: strapiWorks(slug: { eq: $slug }) {
        name
        client
        demo_url
        description
        stack {
            id
            stack_name
          }
        category
        slug
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


export default SingleWorkTemplate

