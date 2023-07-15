import React from 'react'
import About from "../Component/About";
import Contact from "../Component/Contact";
import Feedbacks from "../Component/Feedbacks";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import Services from "../Component/Services";
import Tech from "../Component/Tech";
import { StarsCanvas } from "../Component/canvas";
import Footer from '../Component/Footer';


const Home = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <Tech />
        <Feedbacks />
        <Contact />
        <StarsCanvas />
        <Footer />
      </div>
    </>
  )
}

export default Home
