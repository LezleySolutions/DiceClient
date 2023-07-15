import React from 'react'
import Navbar from '../Component/Navbar'
import About from '../Component/About'
import Feedbacks from '../Component/Feedbacks'
import Tech from '../Component/Tech'
import Footer from '../Component/Footer'
import { StarsCanvas } from '../Component/canvas'

const AboutUs = () => {
  return (
    <>
    <div className="relative z-0 bg-primary">
      <Navbar/>
      <div className='pt-5'>
      <About />
      </div>
      <Tech />
      <Feedbacks />
      <StarsCanvas />
      <Footer />
    </div>
    </>
  )
}

export default AboutUs
