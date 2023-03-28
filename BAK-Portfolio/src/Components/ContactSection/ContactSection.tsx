import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../ContactSection/ContactSection.css'
import NavBar from '../NavBar/NavBar'

const ContactSection = () => {

  const [message, setMessage] = useState('');
  const [email, setEmail] = useState(''); //how validate
  const [name, setName] = useState('');

  return (
    <>
      <NavBar /> 
      <section id='contactSection' className=' flex flex-col justify-center overflow-y-scroll'>
        <br />
        <h1 className='border-2 border-stone-300 bg-white text-2xl md:text-5xl bg-opacity-60 backdrop-blur-sm w-screen py-3 text-stone-800 font-bold text-center mb-10 drop-shadow-sm'>
          Contact</h1>
        <br />
        <div id='contactContainer' className='w-full flex flex-col justify-evenly items-center'>
          <div id='socialsContainer' className='flex flex-row justify-center content-evenly'>
            <div className='mb-5 text-lg md:text-3xl text-stone-800 font-bold text-center rounded-lg w-min flex border-2 border-stone-300 bg-stone-50 bg-opacity-70 backdrop-brightness-105 backdrop-blur-sm px-10 py-6'>
              <Link className='mx-4 w-32 md:w-48 flex flex-col hover:underline' to='https://www.linkedin.com/in/brett-kuhn/'>
                <img className='hover:scale-105 mb-4' src='./src/assets/In-Blue-72@2x.png'/>
                <p>LinkedIn</p>
              </Link>
              <Link className='mx-4 w-32 md:w-48 flex flex-col hover:underline' to='https://github.com/bkuhn2'>
                <img className='hover:scale-105 mb-4' src='./src/assets/github-mark.png'/>
                <p>GitHub</p>
              </Link>
            </div>
          </div>
          <br /><br />
          {/* COME BACK AND FINISH */}
          {/* <h2 className='border-2 border-stone-300 bg-white text-xl md:text-3xl bg-opacity-60 backdrop-blur-sm w-screen py-1 text-stone-800 font-bold text-center mb-7 drop-shadow-sm'>
            Or, Send Me A Message Directly</h2>
          <form id='messageContainer' className='flex flex-col items-center w-full ' autoComplete='off'>
            <input className='placeholder:text-stone-600 border-2 border-stone-300 rounded-md w-2/3 py-2 px-4 text-stone-900 text-md md:text-xl bg-white bg-opacity-30 backdrop-blur-md backdrop-brightness-125 backdrop-contrast-75 drop-shadow-md'
              name='name content'
              placeholder='Name'
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <br />
            <input className='placeholder:text-stone-600 border-2 border-stone-300 rounded-md w-2/3 py-2 px-4 text-stone-900 text-md md:text-xl bg-white bg-opacity-30 backdrop-blur-md backdrop-brightness-125 backdrop-contrast-75 drop-shadow-md'
              name='email content'
              placeholder='Email Address'
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <br />
            <textarea className='placeholder:text-stone-600 inline-block leading-normal align-text-top break-normal overflow-y-auto border-2 border-stone-300 rounded-md w-2/3 h-48 py-2 px-4 text-stone-900 text-md md:text-xl  bg-white bg-opacity-30 backdrop-blur-md backdrop-brightness-125 backdrop-contrast-75 drop-shadow-md'
              name='message content'
              placeholder='Message'
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
            <br />
            <button>Submit</button>
          </form>*/}
        </div> 
      </section>
    </>

  )
}

export default ContactSection
