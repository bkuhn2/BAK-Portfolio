import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css'

const NavBar = () => {


  return (
    <nav className='h-1/4 bg-black-texture3 bg-no-repeat bg-cover bg-center bg-fixed fixed flex-col grid justify-items-end w-full border-8 border-black'>
      <h1 className='border-4 border-green-600 text-right text-6xl w-fit '>
        Hi, I'm Brett Kuhn.
      </h1>
      <section className='w-full flex-row flex justify-around'>
        <NavLink className='text-zinc-50 border-4 border-green-600' to='/'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/skills'>SKills</NavLink>
      </section>
    </nav>
  )
}

export default NavBar
