import { useState } from 'react'
import './App.css'
import HomePage from '../HomePage/HomePage'
import NavBar from '../NavBar/NavBar'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import SkillsPage from '../SkillsPage/SkillsPage'
import { Routes, Route } from 'react-router-dom'
import ScrollToHashElement from '../ScrollToHashElement'

function App() {

  return (
    <main>
      <NavBar />
      <ScrollToHashElement />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' >
          <Route index element={<ProjectsPage />} />
          {/* How handle modal? :projectName ?? */}
        </Route>
        <Route path='/skills' element={<SkillsPage />} />
      </Routes>
    </main>
  )
}

export default App
