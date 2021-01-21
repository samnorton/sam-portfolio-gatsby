import React from "react"
import { Link } from "gatsby"
import ErrorImg from "../assets/images/header/404.png"
import Layout from "../components/Layout"
import PageBanner from "../components/PageBanner"
import SEO from '../components/SEO'
import Preloader from '../components/Preloader'

const Error = () => {
   return (
      <>
      <SEO title="404 not found" />
      <Preloader />
      <Layout>
      <PageBanner title="404 Not Found" />
		<div class="blog-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img src={ErrorImg} className="d-block mx-auto" alt="404 not found" />
                        <h1 className="not-found text-center center-block mt-20">404 Not Found</h1>

                        <p className="text-center mt-20">It seems like you are lost. The page you were looking for doesn't exist, isn't available or was loading incorrectly. <br/>
                            Perhaps you can return back to the homepage and see if you can find what you are looking for. </p>

                            <div className="btn-group mt-30 d-flex justify-content-center align-content-center">
                                <Link data-wipe-normal="GO BACK TO HOMEPAGE" to="/">GO BACK TO HOMEPAGE</Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    </>
   )
}

export default Error
