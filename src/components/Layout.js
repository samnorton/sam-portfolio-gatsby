import React, { useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "popper.js/dist/popper.min"
import "bootstrap/dist/js/bootstrap.min.js"
import "../assets/css/owl.carousel.min.css"
import "../assets/css/style.css"

import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
     <>
      <Helmet>
          <script src={withPrefix('jquery.min.js')} type="text/javascript" />
          <script src={withPrefix('owl.carousel.min.js')} type="text/javascript" />
          <script src={withPrefix('sticky-menu.js')} type="text/javascript" />
          <script src={withPrefix('script.js')} type="text/javascript" />
      </Helmet>
     <Navbar />
     { children }
     <Footer />
     </>
  )
  
}

export default Layout
