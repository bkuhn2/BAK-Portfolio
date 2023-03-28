import React from 'react'
import '../ProjectThumbnail/ProjectThumbnail.css'
import { Project } from '../../Helper/Interfaces'

type Prop = {
  project: Project
}

const ProjectThumbnail = ({project}: Prop) => {

  return (
    <div className='hover:cursor-pointer flex flex-col justify-between items-center p-2 h-full w-5/6 border-2 border-black rounded-lg bg-gradient-to-t from-neutral-900 to-stone-700 drop-shadow-lg'>
      <img 
        className='mx-4 md:mx-7 lg:mx-10 border-4 border-stone-800 rounded-lg shadow-inner contrast-75 brightness-75 hover:contrast-100 hover:brightness-110'
        src={project.img} 
        alt=''/>
      <p className='text-5xl my-5 text-amber-500 text-center underline decoration-red-600 decoration-4'>{project.name}</p>
  </div>
  )
}

export default ProjectThumbnail
