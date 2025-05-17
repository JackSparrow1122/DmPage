import React from 'react'
import Hero from '../Components/DigitalMarketing/Hero'
import Event from './DigitalMarketing/Event'
import Branding from './DigitalMarketing/Branding'
// import Tagline from '../Components/DigitalMarketing/Tagline'
// import Testimonials from '../Components/DigitalMarketing/Testimonials'
import Circle from '../Components/DigitalMarketing/Img'
import Services from '../Components/DigitalMarketing/Services'
import WhyChoose from './DigitalMarketing/WhyChoose'
// import About from '../Components/DigitalMarketing/About'
// import ProgressBar from '../Components/DigitalMarketing/ProgressBar'
const DigitalMark = () => { 

  return (
    <div>
    <Hero />
    <Circle />
    <Services />
    {/* <Tagline /> */}
    <Branding />
    
    <WhyChoose/>
    <Event />
    {/* <ProgressBar/> */}
    {/* <About /> */}
    {/* <Testimonials /> */}
    </div>
  )
}

export default DigitalMark
