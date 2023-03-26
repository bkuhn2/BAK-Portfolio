import React from 'react'
import '../NavBar/NavBar.css'

const NavBar = () => {
  return (
    <nav className='flex-col flex justify-end w-full border-8 border-black'>
      <h1 className='border-4 border-green-600 text-right text-6xl'>
        Hi, I'm Brett Kuhn.
      </h1>
      <section className='w-full flex-row flex justify-around'>
        <button className='cursor-pointer border-8 border-indigo-500'>
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
      </section>
    </nav>
  )
}

export default NavBar
