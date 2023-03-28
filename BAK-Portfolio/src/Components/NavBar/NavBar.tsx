import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css'

const NavBar = () => {


  return (
    <nav className='bg-black-texture2 bg-no-repeat bg-cover bg-center bg-local fixed flex-col grid justify-items-end w-full min-h-fit border-8 border-black shadow-2xl'>
      <h1 className='border-4 border-green-600 text-right text-6xl w-fit text-zinc-50'>
        Hi, I'm Brett Kuhn.
      </h1>
      <section className='w-full flex-row flex justify-around'>
        <NavLink className='text-zinc-50 text-3xl border-2 border-zinc-500 shadow-lg rounded-lg w-48 px-7 py-2 text-center h-fit backdrop-blur-sm bg-neutral-50/10 hover:scale-105' to='/'
          style={({isActive}) => {
            return {
              background: isActive ? 'rgba(61, 207, 187, 0.22)' : '',
              backdropFilter: isActive ? 'blur(6px)' : '',
              color: isActive ? 'white' : '',
              textShadow: isActive ? '0 0 7px #E7E7E7 , 0 0 10px #000, 0 0 15px #000, 0 0 21px #1BFFDF, 0 0 42px #29EBED, 0 0 82px #29EBED, 0 0 151px #4AC19E' : '',
            }
          }}
        >ABOUT</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/skills'>SKills</NavLink>
      </section>
      <br /><br />
    </nav>
  )
}

export default NavBar
