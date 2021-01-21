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
     <Navbar />
     { children}
     <Footer />
     </>
  )
  
}

export default Layout
