import React from 'react';
//import styles from './Home.module.css'

import NavBar from '../NavBar/NavBar';
import AboutMe from '../About Me/About'
import Projects from '../Projects/Projects';
import Contact from '../Contact Me/Contact';
import SkillsAndKnowledges from '../SkillsAndKnowledges/SkillsAndKnowledges';

import {useTranslation} from 'react-i18next'

function Home(){
  const [t] = useTranslation("global")

    return (
      <div className='bg-slate-200 w-full h-[400vh] flex-col'>
        <div className='h-full border-2 border-blue-700'>{/*Scroll Container */}
          <div id='hi!' className='flex justify-center h-1/6 mt-16' >{/* container*/}
            <div className='w-[50%] flex-col items-center '>{/* caja izquierda*/}
              <h1 className='text-6xl font-bold text-primary pt-[30vh] flex justify-center mb-[1.5%]'>
                {t("home.title")}
              </h1>
              <h2 className='text-3xl font-bold pb-10 flex justify-center'>
                {t("home.subtitle_1")} 
                  <span className='text-primary ml-2 mr-2'>{t("home.subtitle_and")}</span> 
                {t("home.subtitle_2")}
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