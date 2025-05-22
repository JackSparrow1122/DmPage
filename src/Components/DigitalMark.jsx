import React from 'react'
// import Hero from '../Components/DigitalMarketing/Hero'
import Event from './DigitalMarketing/Event'
import Branding from './DigitalMarketing/Branding'
import Tagline from '../Components/DigitalMarketing/Tagline'
import Testimonials from '../Components/DigitalMarketing/Testimonials'
import Circle from '../Components/DigitalMarketing/Img'
import Services from '../Components/DigitalMarketing/Services'
import WhyChoose from './DigitalMarketing/WhyChoose'
import WhyChoose2 from './DigitalMarketing/WhyChoose2'
import About from '../Components/DigitalMarketing/About'
import ProgressBar from '../Components/DigitalMarketing/ProgressBar'
import ImageGrid from '../Components/DigitalMarketing/ImgGride'
const DigitalMark = () => { 

  return (
    <div>
    <Tagline />
    <Circle />
    <ImageGrid/>
     <ProgressBar/>
    <Services />
    <Branding />
    <Testimonials />
    <Event />
    <WhyChoose2/>
     <About />
    <WhyChoose/>
   
    
    </div>
  )
}

export default DigitalMark
