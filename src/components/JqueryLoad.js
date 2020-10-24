import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

const JqueryLoad = () => {
  return (
     <>
      <Helmet>
          <script src={withPrefix('jquery.min.js')} type="text/javascript" />
          <script src={withPrefix('owl.carousel.min.js')} type="text/javascript" />
          <script src={withPrefix('navscroll.js')} type="text/javascript" />
          <script src={withPrefix('sticky-menu.js')} type="text/javascript" />
          <script src={withPrefix('script.js')} type="text/javascript" />
        

        
      </Helmet>
     </>
  )
}

export default JqueryLoad
