import React, { useEffect } from "react"
import "../assets/css/style.css"
import "../assets/css/aos.css"
import Navbar from '../components/Navbar'
import NavbarPage from '../components/NavbarPage'
import Footer from '../components/Footer'

const Layout = ({ children }) => {

  const url = typeof window !== 'undefined' ? window.location.href : ''
  const identify = url.split('/').filter(item => item.trim() !== '').filter(v=> !v.startsWith('#')).length


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
    
    { identify > 2 ? <NavbarPage /> : <Navbar /> }
     { children}
     <Footer />
     </>
  )
  
}

export default Layout
