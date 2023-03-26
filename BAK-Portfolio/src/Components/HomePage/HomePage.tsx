import React from 'react'
import '../HomePage/HomePage.css'
import AboutSection from '../AboutSection/AboutSection'
import ContactSection from '../ContactSection/ContactSection'

const HomePage = () => {
  return (
    <>
      <h1 className="text-5xl text-green-700 font-bold underline">ABOUT PAGE</h1>
      <AboutSection />
      <ContactSection />
    </>
    
  )
}

export default HomePage
