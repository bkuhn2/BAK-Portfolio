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
      className='bg-stone-900 bg-opacity-90 backdrop-blur-sm flex-col grid justify-items-center w-screen min-h-fit border-2 border-black shadow-xl'>
      <h1 className='text-center text-5xl md:text-6xl w-fit text-zinc-50 px-7 py-6 '>
        Hi, I'm Brett Kuhn.
      </h1>
      <br />
      <section className='w-full flex-row flex justify-center'>
        {links}
      </section>
      <br />
    </nav>
  )
}

export default NavBar
