import React from 'react'
import '../AboutPage/AboutPage.css'
import AboutSection from '../AboutSection/AboutSection'
import ContactSection from '../ContactSection/ContactSection'

const AboutPage = () => {
  return (
    <>
      <h1 className="text-5xl text-green-700 font-bold underline">ABOUT PAGE</h1>
      <AboutSection />
      <ContactSection />
    </>
    
  )
}

export default AboutPage
