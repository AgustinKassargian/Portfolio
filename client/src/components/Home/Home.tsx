import React from 'react';
//import styles from './Home.module.css'
import NavBar from '../NavBar/NavBar';
import AboutMe from '../About Me/About'
import Projects from '../Projects/Projects';
import Contact from '../Contact Me/Contact';
import SkillsAndKnowledges from '../SkillsAndKnowledges/SkillsAndKnowledges';

function Home(){
    return (
      <div className='bg-slate-200 w-full h-[400vh] flex-col'>
        <div className='h-full border-2 border-blue-700'>{/*Scroll Container */}
          <div id='hi!' className='flex justify-center h-1/6 mt-16' >{/* container*/}
            <div className='w-[50%] flex-col items-center '>{/* caja izquierda*/}
              <h1 className='text-6xl font-bold text-primary pt-[30vh] flex justify-center'>Hi! I'm Agustin.</h1>
              <h2 className='text-3xl font-bold pb-10 flex justify-center'>Full Stack Web Developer 
                <span className='text-primary ml-2 mr-2'>&</span> 
                Web Designer
              </h2>
            </div>
            <div className='w-[50%]'>{/* caja derecha*/}
            <>Fotito</>
          </div>
            </div>
          <NavBar/>
          <AboutMe/>
          <SkillsAndKnowledges/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    );
  }

  export default Home