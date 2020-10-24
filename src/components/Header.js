import React from "react"
import { Link } from 'gatsby'

const Header = () => {
  return (
    <div className="hero-section hero-section-two" id="home">
    <div className="container container-wide">
      <div className="hero-content-two">
        <div className="hero-content-two-inner">
          <h4>Hello folks! I am</h4>
          <h1 className="name mb-20">Sam Norton</h1>
          <p>I help businesses and small agencies grow through my diverse and dynamic skillset. I am passionate about building excellent products and resources that improves the lives of those around me. 
            </p>
          <div className="btn-group">
            <Link to="/" data-wipe="GET IN TOUCH">GET IN TOUCH</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header
