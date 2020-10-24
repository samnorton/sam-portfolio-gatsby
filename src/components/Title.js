import React from "react"

const Title = ({ title }) => {
  return (
      <div className="section-title-two-inner center">
          <h3>{ title || 'default title' }</h3>
          <hr></hr>
     </div>
    )
}

export default Title
