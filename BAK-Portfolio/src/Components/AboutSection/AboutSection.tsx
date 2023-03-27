import React from 'react'
import '../AboutSection/AboutSection.css'

const AboutSection = () => {


  return (
    <section id='aboutSection' className='h-screen flex flex-col justify-center'>
      <br />
      <h1 className='text-5xl text-green-700 font-bold underline text-center mb-10'>About</h1>
      <br />
      <div className='flex justify-center'>
        <section className='w-11/12 border-8 border-orange-700 flex justify-center items-center'>
          <img className='border-8 border-black'/>
        </section>
        <section id='aboutTextSection' className='w-11/12 border-8 border-orange-700 flex flex-col justify-center items-center'>
          <h2 className='text-right'>Who I Am</h2>
          <p className='border-8 text-left w-4/5'>Hello! I'm Brett Kuhn, a software engineer who specializes in front end development and a recent graduate of 
            Turing School of Software and Design. I'm passionate about building applications and solving complex 
            problems, and I find great joy in new experiences and learning new things, both inside and outside of the 
            tech industry. Working as a part of a team is important to me, and I take pride in building a strong
            culture and fostering collaboration. When I'm not coding, you can find me traveling, rock climbing, playing
            music or building guitars.
    
          </p>
          <br />
          <h2>What I'm Working On</h2>
          <ul>
            <li>Building...</li>
            <li>Learning...</li>
          </ul>
        </section>
      </div>
    </section>
  )
}

export default AboutSection
