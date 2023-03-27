import React from 'react'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'

const NavBar = () => {

  //useNavigate? or NavLink, be active?
  //Navigate component?
  //Outlet Component?
  //use location?
  //generate path?

  return (
    <nav className=' fixed flex-col grid justify-items-end w-full border-8 border-black'>
      <h1 className='border-4 border-green-600 text-right text-6xl w-fit '>
        Hi, I'm Brett Kuhn.
      </h1>
      <section className='w-full flex-row flex justify-around'>
        <button className='cursor-pointer border-8 border-indigo-500 w-52'
          // onClick={}
        >
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
        <Link to='/#contactSection'>TEST</Link>
      </section>
    </nav>
  )
}

export default NavBar
