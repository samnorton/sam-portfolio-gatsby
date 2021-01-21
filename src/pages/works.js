import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from 'gatsby-image'
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import SEO from '../components/SEO'

const getAllCategories = catData => {
	let tempItems = catData.map(cat => {
		return cat.category;
	});
	
	let tempCategories = new Set(tempItems);

	let categories = Array.from(tempCategories);
	return categories;
}

const filterByCategory = (category, works) => {
	let categoryItems = works.filter(items => {
       return items.category === category;
	})
	
	return categoryItems;
}


const Works = () => {

const data = useStaticQuery(query)
const { allStrapiWorks: { nodes:works } } = data
const [currentCategory, setCategory] = useState('web_development')
const allCategories = getAllCategories(works);
const selectItemsFromCategory = filterByCategory(currentCategory, works);

 return (
     <>
	<SEO title="Works" />
    <Layout>
    <PageBanner title="Works"/>

		<div className="project-section section-padding">
			<div className="container container-wide">
				<div className="project-wrapper row">

					<div className="col-lg-12 mb-30" data-aos="zoom-in">
						<ul className="nav justify-content-center" id="categories" role="tablist">

                {
				
				allCategories.map(cat => (
					<li className="nav-item">
					<a aria-controls={`aria-${cat}`} 
					   aria-selected="true" 
					   onClick={() => setCategory(cat)}
					   className={`nav-link show portfolio-nav ${cat === currentCategory ? 'active' : ''}`}
					   data-toggle="tab" 
					   data-work-tab={ cat.split('_').join(' ') }
					   href={ `#${cat.split('_').join(' ')}`}
					   role="tab">
						 { cat.split('_').join(' ') }</a>
					</li>	
				))}

					</ul>
					</div>

         
					<div className="col-lg-12">
						<div className="tab-content" id="catsContent">
						<div aria-labelledby="items" className="tab-pane fade show active" role="tabpanel">
							<div className="row">
                        {  selectItemsFromCategory.map(workItem => {
							const { id, featured_image, name, slug, stack } = workItem;
						
                            return (

									<div className="project col-xl-3 col-md-6 col-12">
										<div className="project-inner">
											<div className="project-image">
											<Link to={`/works/${slug}`} key={id}>
												<Image fluid={featured_image.childImageSharp.fluid} alt={name} /> 
												</Link>
											</div>
											<div className="project-content">
												<h3 className="title text-center mb-3">
												 <Link to={`/works/${slug}`} key={id}>{name}</Link>
											     </h3>
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

						})

						}

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
  {
    allStrapiWorks {
      nodes {
        id
        name
        slug
        category
        stack {
          stack_name
          id
        }
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


export default Works

