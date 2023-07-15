import React from 'react'
import Navbar from '../Component/Navbar'
import Contact from '../Component/Contact'
import Footer from '../Component/Footer'
import { StarsCanvas } from '../Component/canvas'

const ContactUs = () => {
  return (
    <>
     <div className="relative z-0 bg-primary">
      <Navbar />
      <div className='pt-5'>
      <Contact />
      </div> 
      <StarsCanvas />
      <Footer />
      </div> 
    </>
  )
}

export default ContactUs
