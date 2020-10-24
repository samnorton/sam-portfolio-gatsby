// import React, { useState } from "react"
// import { graphql, withPrefix, Link, useStaticQuery } from "gatsby"
// import Helmet from "react-helmet"
// import Image from 'gatsby-image'
// import Preloader from "../components/Preloader"
// import Layout from "../components/Layout"
// import PageBanner from "../components/PageBanner"

// const getAllCategories = catData => {
// 	let tempItems = catData.map(cat => {
// 		return cat.category;
// 	});
	
// 	let tempCategories = new Set(tempItems);

// 	let categories = Array.from(tempCategories);
// 	return categories;
// }

// const filterByCategory = (category, works) => {
// 	let categoryItems = works.filter(items => {
//        return items.category === category;
// 	})
	
// 	return categoryItems;
// }


// const Works = (props) => {

//     const { currentPage, numPages } = props.pageContext

//     const isFirst = currentPage === 1
//     const isLast = currentPage === numPages
    
//     const nextPage = `/works/${currentPage+1}`
//     const prevPage = currentPage - 1 === 1 ? `/works` : `/works/${currentPage-1}`
    
//     const { data } = props

//     const dataAll = useStaticQuery(allQueries)
//     const { allWorks: { nodes:works } } = dataAll
//     const [currentCategory, setCategory] = useState('web_development')
//     const allCategories = getAllCategories(works);
//     const selectItemsFromCategory = filterByCategory(currentCategory, works);


// console.log(works)

//  return (
//      <>
//     <Preloader />
//     <Layout>
//       <Helmet>
//         <script src={withPrefix('jquery.min.js')} type="text/javascript" />
//         <script src={withPrefix('navscroll.min.js')} type="text/javascript" />
//         <script src={withPrefix('owl.carousel.min.js')} type="text/javascript" />
//         <script src={withPrefix('sticky-menu.js')} type="text/javascript" />
//         <script src={withPrefix('aos.js')} type="text/javascript" />
//         <script src={withPrefix('script.js')} type="text/javascript" />
//     </Helmet>
//     <PageBanner title="Works"/>
 
		
// 		<div className="project-section section-padding">
// 			<div className="container container-wide">
// 				<div className="project-wrapper row">

// 					<div className="col-lg-12 mb-30" data-aos="zoom-in">
// 						<ul className="nav justify-content-center" id="categories" role="tablist">

//                 {
				
// 				allCategories.map(cat => (
// 					<li className="nav-item">
// 					<a aria-controls={`aria-${cat}`} 
// 					   aria-selected="true" 
// 					   onClick={() => setCategory(cat)}
// 					   className={`nav-link show portfolio-nav ${cat === currentCategory ? 'active' : ''}`}
// 					   data-toggle="tab" 
// 					   data-work-tab={ cat.split('_').join(' ') }
// 					   href={ `#${cat.split('_').join(' ')}`}
// 					   role="tab">
// 						 { cat.split('_').join(' ') }</a>
// 					</li>	
// 				))}

// 					</ul>
// 					</div>

         
// 					<div className="col-lg-12">
// 						<div className="tab-content" id="catsContent">
// 						<div aria-labelledby="items" className="tab-pane fade show active" role="tabpanel">
// 							<div className="row">
//                         {  selectItemsFromCategory.map(workItem => {
// 							const { id, featured_image, name, slug, stack } = workItem;
						
//                             return (

// 									<div className="project col-xl-3 col-md-6 col-12">
// 										<div className="project-inner">
// 											<div className="project-image">
// 											<Link to={`/works/${slug}`} key={id}>
// 												<Image fluid={featured_image.childImageSharp.fluid} alt={name} /> 
// 												</Link>
// 											</div>
// 											<div className="project-content">
// 												<h3 className="title text-center mb-3">
// 												 <Link to={`/works/${slug}`} key={id}>{name}</Link>
// 											     </h3>
// 												 {
// 												stack.map(stackItem => {
// 												return <span data-tag={stackItem.stack_name} key={stackItem.id}>{stackItem.stack_name}</span>
// 												})
//           											}
// 											</div>
// 										</div>
// 									</div>
					
// 							)

// 						})

// 						}

// 						</div>
// 							</div>
// 						</div>
// 					</div>




// 				</div>
// 				<div className="row mt-50" data-aos="zoom-in">
// 					<div class="col">
// 						<ul className="pagination">
// 							<li>
// 								<a data-pagination="«" href="#">«</a>
// 							</li>
// 							<li>
// 								<a class="active" data-pagination="1" href="#">1</a>
// 							</li>
// 							<li>
// 								<a data-pagination="2" href="#">2</a>
// 							</li>
// 							<li>
// 								<a data-pagination="3" href="#">3</a>
// 							</li>
// 							<li>
// 								<a data-pagination="»" href="#">»</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 			</div>
// 		</div>




//     </Layout>
//     </>

//  )
// }


// export const allQueries = graphql`
// query getAllWorks($skip: Int!, $limit: Int!){
//     filteredWorks:allStrapiWorks(
//         skip: $skip, 
//         limit: $limit, 
//         sort: {fields: created_at, order: DESC}
//       ){
//         nodes {
//           id
//           name
//           slug
//           category
//           stack {
//             stack_name
//             id
//           }
//           featured_image {
//             childImageSharp {
//               fluid {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//       }
//   }
//   {
//    allWorks:allStrapiWorks{
//       nodes {
//         id
//         name
//         slug
//         category
//         stack {
//           stack_name
//           id
//         }
//         featured_image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export default Works

