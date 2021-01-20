import React, { useEffect } from "react"
import "../assets/css/bootstrap.min.css"
import "../assets/css/owl.carousel.min.css"
import "../assets/css/style.css"
import "../assets/css/aos.css"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {


  let AOS;
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
     <>
      <Helmet>
          <script src={withPrefix('owl.carousel.min.js')} type="text/javascript" />
          <script src={withPrefix('sticky-menu.js')} type="text/javascript" />
          <script src={withPrefix('script.js')} type="text/javascript" />
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDf64CyWpOBCEocXjocJL_wZiW82hNtbTA&callback=initMap" />
      </Helmet>
     <Navbar />
     { children }
     <Footer />
     </>
  )
  
}

export default Layout
