import React from "react"
import { FaCheck } from "react-icons/fa"
import AvatarImage from '../assets/images/header/avatar.jpg'
import { Link } from 'gatsby'
import TitleBlue from './TitleBlue'

const About = ({ titleSpan, title }) => {
  return(
		<div className="about-section section-padding" id="about" name="about">
			<div className="container container-wide">
				<div className="about-wrapper row">
					<div className="col-sm-12 col-lg-6 mr-5" data-aos="fade-right">
						<div className="about-content section-title-one">
							<div className="section-title-one-inner">
								<TitleBlue titleSpan={titleSpan} title={title} />
								<p>Hello! I'm Sam Norton, a Full Stack Developer / Virtual Assistant based in Angeles City, Philippines.</p>
								<p>I enjoy creating meaningful and creative stuffs, whether that be websites, applications, graphics or anything technology related. 
								</p>
								<p>Here are a few technologies that I have inside my toolbox:</p>
								<div className="row mt-3">
									<div className="col-lg-3 col-md-12">
										<ul>
											<li><FaCheck /> HTML/CSS</li>
											<li><FaCheck /> JavaScript</li>
											<li><FaCheck /> jQuery</li>
											<li><FaCheck /> Ruby</li>
										</ul>
									</div>
									<div className="col-lg-3 col-md-12">
										<ul>
											<li><FaCheck /> Ruby on Rails</li>
											<li><FaCheck /> WordPress</li>
											<li><FaCheck /> Node.js</li>
											<li><FaCheck /> React</li>
										</ul>
									</div>
									<div className="col-lg-3 col-md-12">
										<ul>
										    <li><FaCheck /> Express.js</li>
											<li><FaCheck /> Gatsby.js</li>
											<li><FaCheck /> Graphql</li>
											<li><FaCheck /> Strapi.js</li>
										</ul>
									</div>
								</div>
								<div className="btn-group">
                                    <Link to="/" data-wipe-normal="DOWNLOAD MY CV">DOWNLOAD MY CV</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 ml-5 col-lg-3" data-aos="fade-left">
						<div className="photo"><img className="about-image" src={AvatarImage} alt="Sam Norton"/></div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default About
