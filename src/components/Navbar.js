import React from "react"
import { Link } from 'gatsby'
import PageLinks from "../constants/links"
import MainLogo from "../assets/images/logos/devnorton-logo.png"

const Navbar = () => {
  return (
		<header className="header sticky-header">
			<div className="container container-wide">
				<div className="row">
					<div className="d-flex flex-wrap align-items-center col-lg-12">
						<div className="header-logo mr-auto order-1">
							<Link to="/"><img src={MainLogo} alt="devnorton" /></Link>
						</div>
						<nav className="main-nav order-2">
							<button className="mobile-nav-toggle d-block d-lg-none"><span>mobile toggle</span></button>
					     <PageLinks />
						</nav>
					</div>
				</div>
			</div>
		</header>
  )
}

export default Navbar
