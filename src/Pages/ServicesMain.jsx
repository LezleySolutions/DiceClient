import React from 'react'
import Navbar from '../Component/Navbar'
import Services from '../Component/Services'
import Tech from '../Component/Tech'
import Feedbacks from '../Component/Feedbacks'
import Contact from '../Component/Contact'
import Footer from '../Component/Footer'
import { StarsCanvas } from '../Component/canvas'

const ServicesMain = () => {
  return (
    <>
     <div className="relative z-0 bg-primary">
      <Navbar />
      <div className='pt-5'>
      <Services />
      </div> 
      <Tech />
      <Feedbacks />
      <Contact />
      <StarsCanvas />
      <Footer />
      </div> 
    </>
  )
}

export default ServicesMain
