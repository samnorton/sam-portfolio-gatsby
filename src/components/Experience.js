import React, { useState } from "react"
import TitleBlue from './TitleBlue'
import { graphql, useStaticQuery } from "gatsby"
import { FaBriefcase } from "react-icons/fa"


const query = graphql`
  {
    allStrapiExperiences(filter: {featured: {eq: true}}, limit: 9) {
      nodes {
		id
        company_name
        position
        start_date
        end_date
        featured
        job_description {
          id
          description
        }
      }
    }
  }
`


const Experience = ({ titleSpan, title }) => {
	
const data = useStaticQuery(query)
const { allStrapiExperiences: { nodes:experiences } } = data
const [value, setValue] = useState(0)
const { position, start_date, end_date, job_description } = experiences[value]

  return (
	<div className="experience-section section-padding bg-gray" id="experience">
		<div className="container container-wide">
			<div className="row">
				<div className="col-lg-5 col-12" data-aos="fade-right">
					<div className="sidebar">
						<div className="section-title-one sidebar__inner">
							<div className="section-title-one-inner">
							   <TitleBlue titleSpan={titleSpan} title={title} />
								<p>Since the beginning of my journey as a virtual assistant nearly 7 years ago, I've done different kinds of remote work for agencies, startups, and collaborated with talented individuals for business and consumer use. </p>
								
                                 <div className="row align-items-center text-center mt-20">
										<div className="col-lg-4 col-sm-12 client-logo-padding">
                                        <a href="https://designmodo.com/author/samuelnorton/" target="_blank" id="designmodo"></a>
										</div>

										<div className="col-lg-4 col-sm-12 client-logo-padding">
                                            <a href="https://speckyboy.com/author/samuel-norton/" target="_blank" id="speckyboy"></a>
										</div>

										<div className="col-lg-4 col-sm-12 client-logo-padding">
                                           <a href="https://pageresource.com/" target="_blank" id="pageresource"></a>
										</div>

										<div className="col-lg-4 col-sm-12 client-logo-padding">
                                            <a href="https://1stwebdesigner.com/tag/css/" target="_blank" id="firstwebdesigner"></a>
										</div>
										<div className="col-lg-4 col-sm-12 client-logo-padding">
                                            <a href="https://codegeekz.com/?s=sam+norton" target="_blank" id="codegeekz"></a>
										</div>
									
										<div className="col-lg-4 col-sm-12 client-logo-padding">
                                            <a href="https://www.webdesignerdepot.com/author/Samuel-Norton" target="_blank" id="webdesignerdepot"></a>
										</div>
									</div>
							</div>
						</div>
					</div>
				</div>

				
				<div className="col-lg-7 col-12" data-aos="fade-left">
					<div className="row">
						<div className="col-md-4">
							<div aria-orientation="vertical" className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist">
								{
									experiences.map((experience, index) => {
										return (
										<a key={experience.id} 
										   onClick={() => setValue(index)} 
										   aria-controls={`v-pills-${index}`}
										   aria-selected="true" 
										   className={`nav-link p-2 ${index === value && 'active'}`}
										   data-toggle="pill"
										   href={`#v-pills-${index}`}
										   role="tab">
											   <span className="font-weight-bold small tab-text">
												   { experience.company_name }
											</span>
										</a>
										)
									})
								}

							</div>
						</div>

						<div className="col-md-8">

							<div className="tab-content" id="v-pills-tabContent">
								<div aria-labelledby="v-pills-job1" className="tab-pane fade shadow rounded bg-white show active p-5" id="v-pills-job1" role="tabpanel">
							        <h4 className="title-job">{position}</h4>
									<h5 className="title-date">{start_date} - {end_date}</h5>
									<ul className="title-desc">
											{ 
											    job_description.map(descItem => {
												return (
												   <li key={descItem.id}>
															   <FaBriefcase className="mr-1"></FaBriefcase>
															    {descItem.description}
												   </li>
												)
											  })
										  }
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Experience
