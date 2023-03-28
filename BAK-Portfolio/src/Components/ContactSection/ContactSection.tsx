import React from 'react'
import { Link } from 'react-router-dom'
import '../ContactSection/ContactSection.css'
import NavBar from '../NavBar/NavBar'

const ContactSection = () => {
  return (
    <>
      <NavBar /> 
      <section id='contactSection' className=' flex flex-col justify-center overflow-y-scroll'>
        <br />
        <h1 className='border-2 border-stone-300 bg-white text-2xl md:text-5xl bg-opacity-60 backdrop-blur-sm w-screen py-3 text-stone-800 font-bold text-center mb-10 drop-shadow-sm'>
          Contact</h1>
        <br />
        <div id='contactContainer' className='w-full border-8 flex justify-evenly'>
          <div id='socialsContainer' className='border-8 border-red-700 flex flex-col justify-end content-evenly'>
            <div className='flex border-2 border-blue-600'>
              <img />
              <Link to=''>LinkedIn</Link>
            </div>
            <div className='flex border-2 border-blue-600'>
              <img />
              <Link to=''>GitHub</Link>
            </div>
          </div>
          <form id='messageContainer' className='border-8 border-red-700'>
            <input />
            <input />
            <input />
          </form>
        </div>
    </section>
    </>

  )
}

export default ContactSection
