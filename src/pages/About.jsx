import React from 'react'
import Aboutimg from '../components/About/Aboutimg'
import TestimonialSlider from '../components/About/TestimonialSlider'
import MissionSection from '../components/About/MissionSection'
import CoreValues from '../components/About/CoreValues'
import ExpertDoctors from '../components/About/ExpertDoctors'
import FacilityGallery from '../components/About/FacilityGallery'

const About = () => {
  return (
    <div>
      <Aboutimg/>
      <TestimonialSlider/>
      <MissionSection />
      <CoreValues />
      <ExpertDoctors />
      <FacilityGallery />
    </div>
  )
}

export default About
