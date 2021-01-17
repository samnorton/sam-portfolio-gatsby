import React from "react"
import Title from "./Title"
import services from "../constants/services"


const Services = ({ title }) => {
  return (
<div className="service-section section-padding" id="services" data-aos="zoom-in">
		<div className="container container-wide">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-title-two center">
              <Title title={title} />
					</div>
				</div>
			</div>
			<div className="row">

{ services.map(service => {
 const { id, image, title, text } = service 
 return (
  <div className="col-lg-3 col-md-12" key={id}>
  <div className="blog-item services">
    <div className="blog-item_img">
        <img alt={title} className="full-width" src={image} />
      </div>
    <div className="blog-item_content text-center">
      <h4 className="mb-10">{title}</h4>
 <p className="mb-10 blog-item_text-preview">{text}</p>
    </div>
  </div>
</div>
 )

}) }
			</div>
		</div>
	</div>
  
  )
}

export default Services

