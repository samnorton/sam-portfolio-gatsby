import React from "react"
import { Link } from 'gatsby'

const PageBanner = ({ title, bannerLink }) => {
  return (
    <div className="page-banner-section">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="page-banner">
                    <h2>{ title }</h2>
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        { bannerLink && <li><Link to={`/${bannerLink}/`}>{bannerLink}</Link></li>  }

                        <li>{title}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default PageBanner
