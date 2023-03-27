import React from 'react'
import { Link } from 'react-router-dom'
import '../ContactSection/ContactSection.css'

const ContactSection = () => {
  return (
    <section id='contactSection' className='h-screen flex flex-col justify-center'>
      <br />
      <h1 className="text-5xl text-green-700 font-bold underline text-center mb-10">Contact</h1>
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
  )
}

export default ContactSection
