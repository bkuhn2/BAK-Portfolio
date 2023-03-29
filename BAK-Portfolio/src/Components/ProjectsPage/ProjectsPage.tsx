import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import '../ProjectsPage/ProjectsPage.css'
import { brettProjects } from '../../data/brettProjectsData'
import { Project } from '../../Helper/Interfaces'
import ProjectThumbnail from '../ProjectThumbnail/ProjectThumbnail'

const ProjectsPage = () => {

  const [allProjects, setProjects] = useState<Project[]>();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('');
    
  useEffect(()=> {
    setProjects(brettProjects)
  }, []);

  const thumbnails = allProjects ? allProjects.map((project, index) => {
    return (
      <ProjectThumbnail project={project} key={index}/>
    )
  }) : '';


  return (
    <>
      <NavBar />
      <section className='flex flex-col items-center'>
        <br />
        <h1 className='sticky top-0 z-40 border-2 border-stone-300 bg-white text-2xl md:text-5xl bg-opacity-60 backdrop-blur-sm w-screen py-3 text-stone-800 font-bold text-center mb-10 drop-shadow-sm'>
          Projects</h1>
        <br />
        <form className='border-2 border-red-500'>
          <p>Type in a language or technology to find any projects that match.</p>
          <input />
        </form>
        <br /><br />
        <section className='w-full grid grid-cols-2 gap-y-10 md:gap-y-20 justify-items-center justify-evenly p-1 mb-16'>
          {/*Make conditional .. loading, no results, etc */}
          {(!searchResults && !thumbnails) && <h2>wtf mate</h2>}
          {(!searchResults && thumbnails) && thumbnails}
        </section>
      </section>
    </>
  )
}

export default ProjectsPage
