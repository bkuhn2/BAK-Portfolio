import { useState } from 'react'
import './App.css'
import NavBar from '../NavBar/NavBar'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import SkillsPage from '../SkillsPage/SkillsPage'
import { Routes, Route } from 'react-router-dom'
import AboutSection from '../AboutSection/AboutSection'
import ContactSection from '../ContactSection/ContactSection'

function App() {

  return (
    <main className='h-screen scroll-behavior: smooth bg-main7 bg-no-repeat bg-cover bg-bottom bg-fixed fixed overflow-auto'>
      <Routes>
        <Route path='/' element={<AboutSection />} />
        <Route path='/contact' element={<ContactSection />} />
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
