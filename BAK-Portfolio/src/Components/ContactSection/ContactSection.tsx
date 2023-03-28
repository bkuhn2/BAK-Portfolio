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
        <div id='contactContainer' className='w-full flex flex-col justify-evenly'>
          <div id='socialsContainer' className='flex flex-row justify-center content-evenly'>
            <div className='text-lg md:text-3xl text-stone-800 font-bold text-center rounded-lg w-min flex border-2 border-stone-300 bg-stone-50 bg-opacity-70 backdrop-brightness-105 backdrop-blur-sm p-10'>
              <Link className='mx-4 w-32 md:w-48 flex flex-col' to='https://www.linkedin.com/in/brett-kuhn/'>
                <img className='hover:scale-105 mb-4' src='./src/assets/In-Blue-72@2x.png'/>
                <p>LinkedIn</p>
              </Link>
              <Link className='mx-4 w-32 md:w-48 flex flex-col' to='https://github.com/bkuhn2'>
                <img className='hover:scale-105 mb-4' src='./src/assets/github-mark.png'/>
                <p>GitHub</p>
              </Link>
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
