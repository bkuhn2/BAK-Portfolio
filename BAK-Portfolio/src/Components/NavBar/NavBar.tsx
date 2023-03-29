import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css'
import StyledLink from '../StyledLinks/StyledLink'

const NavBar = () => {

  const categories = ['about', 'contact', 'projects', 'skills']
  const links = categories.map((category, index) => {
    return (
      <StyledLink section={category} key={index} />
    )
  })

  return (
    <nav
      className='bg-black bg-opacity-80 backdrop-blur-sm flex-col grid justify-items-center w-screen min-h-fit border-2 border-black shadow-xl'>
      <h1 className='text-center text-4xl md:text-5xl lg:text-6xl w-11/12 text-zinc-50 px-7 py-6 '>
        Brett Kuhn  //<span className='text-3xl md:text-4xl lg:text-5xl'>  Software Engineer</span>
      </h1>
      <section className='w-full flex-row flex justify-center'>
        {links}
      </section>
      <br />
    </nav>
  )
}

export default NavBar
