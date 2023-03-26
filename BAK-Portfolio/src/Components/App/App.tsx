import { useState } from 'react'
import './App.css'
import AboutPage from '../AboutPage/AboutPage'
import NavBar from '../NavBar/NavBar'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import SkillsPage from '../SkillsPage/SkillsPage'

function App() {

  return (
    <>
      <NavBar />
      <AboutPage />
      <ProjectsPage />
      <SkillsPage />
    </>
  )
}

export default App
