import React from 'react'
import '../HomePage/HomePage.css'
import AboutSection from '../AboutSection/AboutSection'
import ContactSection from '../ContactSection/ContactSection'

const HomePage = () => {
  return (
    <main className='overflow-y-auto'>
      <AboutSection />
      <ContactSection />
    </main>

  )
}

export default HomePage