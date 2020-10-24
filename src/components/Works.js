import React from "react"
import { Link } from 'gatsby'
import Work from './Work'
import Title from './Title'

const Works = ({ id, title, works, showAllWorkLinks }) => {
  return (

	<div className="project-section section-padding bg-gray" id="works">
		<div className="container container-wide">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-title-two center mb-80">
                    <Title title={title} />
					</div>
				</div>
			</div>
			<div className="project-wrapper row">
          { works.map(work => {
            return <Work key={work.id} {...work} />
          })}
			</div>
			<div className="row">
				<div className="col">
					<div className="more-project-btn btn-group center" >
            {
                 showAllWorkLinks && <Link to="/works" data-wipe-normal="VIEW ALL WORKS">VIEW ALL WORKS</Link>
           }
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Works
