import React from "react"
import FooterLogo from "../assets/images/logos/devnorton-logo2.png"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
  <> 
	<footer className="footer-section bg-dark-gray footer-padding" id="contact">
		<div className="container container-wide">
			<div className="row">
				<div className="col-md-12">
					<div className="footer-content">
						<div className="footer-logo text-center"><img src={FooterLogo} alt="devnorton" /></div>
						<div className="email-box">
							<h2 className="text-center">Get In Touch</h2>
							<p className="text-center">I'm confident, naturally curious, and perpetually working on improving my skillset one step at a time.
								I’m always open to discussing product design and development work or freelancing opportunities. Feel free to contact me.
							</p>
						</div>
						<div className="footer-social text-center">
               <SocialLinks />
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	

	<div className="copyright bg-dark">
		<div className="container container-wide">
			<div className="row">
				<div className="col-md-12">
					<div className="copyright-content">
						<h4 className="mx-auto">Copyright © 2020 All Rights Reserved by <span><a href="#">Samuel Norton</a></span></h4>
					</div>
				</div>
			</div>
		</div>
	</div>
  </>
  )
}

export default Footer
