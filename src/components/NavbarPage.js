import React, { useEffect, useState } from "react"
import MainLogo from "../assets/images/logos/devnorton-logo.png"
import { useScrollPosition } from '../components/ScrollPosition'
import PageLinks from '../constants/linksPage'
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from 'gatsby'

const Navbar = () => {

      const [navBarClass, setNavBarClass]=useState("");
      const [scroll, setScroll]= useState(0);
    
     useScrollPosition(function setScrollPosition ({ currentPosition: { y: 
   currentVerticalYPosition } }) {
        setScroll(currentVerticalYPosition);
     });

      useEffect(()=>{
       if(scroll < -10){
         setNavBarClass("active")
       } else{
         setNavBarClass("")
       }
      }, [scroll])

  return (
	  <>
		<header className="header sticky-header">
    <nav id="nav-scroll-target" className={`navbar ${navBarClass} navbar-expand-lg fixed-top py-5`}>
        <div className="container container-wide">
        <Link to="/#home"><img src={MainLogo} alt="devnorton" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <GiHamburgerMenu className="text-light" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <PageLinks />
          </div>
      </div>
    </nav>
</header>
		</>
  )

}

export default Navbar
