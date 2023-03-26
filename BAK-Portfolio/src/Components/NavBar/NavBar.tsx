import React from 'react'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'

const NavBar = () => {
  return (
    <nav className='flex-col grid justify-items-end w-full border-8 border-black'>
      <h1 className='border-4 border-green-600 text-right text-6xl w-fit '>
        Hi, I'm Brett Kuhn.
      </h1>
      <section className='w-full flex-row flex justify-around'>
        <button className='cursor-pointer border-8 border-indigo-500 w-52'>
          About Me
        </button>
        <button>
          Contact
        </button>
        <button>
          Resume
        </button>
        <button>
          Projects
        </button>
        <button>
          Skills
        </button>
        <Link to='/#about-section'>TEST</Link>
      </section>
    </nav>
  )
}

export default NavBar
