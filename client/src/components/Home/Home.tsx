import React from 'react';


import NavBar from '../NavBar/NavBar';
import AboutMe from '../About Me/About'
import Projects from '../Projects/Projects';
import Contact from '../Contact Me/Contact';
import SkillsAndKnowledges from '../SkillsAndKnowledges/SkillsAndKnowledges';

import {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';



import {useTranslation} from 'react-i18next'
import {styles, IStyles_Propertys } from '../Styles';


function Home(){
  const [t] = useTranslation("global")

  const contrast = useAppSelector((state)=>state.contrastSlice.contrast)

  let actualStyle : IStyles_Propertys

  contrast === false ? actualStyle = styles.regular : actualStyle = styles.higher_contrast
  
  const dispatch = useAppDispatch()
  useEffect(()=>{},[dispatch])


    return (
      <div className='bg-[#222831;] w-full h-[410vh] flex-col'>
        <div className={actualStyle.home_scroll_container}>{/*Scroll Container */}
          <div id='hi!' className='flex justify-center h-1/6 mt-16' >{/* container*/}
            <div className='w-[50%] flex-col items-center '>{/* caja izquierda*/}
              <h1 className={actualStyle.home_title}>
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