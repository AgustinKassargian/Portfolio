import HeroSlider, { Slide, Nav } from 'hero-slider';

import { useAppSelector } from '../Redux/hooks'
import { projects } from './projects'
import { LinkIcon, CodeBracketIcon } from "@heroicons/react/24/solid"


import {useTranslation} from 'react-i18next'
import {styles, IStyles_Propertys} from '../Styles'


export default function Projects(){
    
    const [t] = useTranslation("global")
    const contrast = useAppSelector((state)=>state.contrastSlice.contrast)
    
    let actualStyle : IStyles_Propertys

    contrast === false ? actualStyle = styles.regular : actualStyle = styles.higher_contrast

    return(
        <div id='projects' className='pt-2'>
            <div  className={actualStyle.subtitle}>{t("projects.title")}</div>
            <div className='h-[75vh] flex flex-col justify-center pt-5'>
                <HeroSlider className='w-full pl-[6%] pr-[6%]'
                        height='70vh'
                        autoplay
                        controller={{
                            initialSlide: 1,
                            slidingDuration:500,
                            slidingDelay:100,
                            onSliding: (nextSlide: number) =>
                            console.debug('onSliding(nextSlide): ', nextSlide),
                            onBeforeSliding: (previousSlide: number, nextSlide: number) =>
                                console.debug(
                                    'onBeforeSliding(previousSlide, nextSlide): ',
                                    previousSlide,
                                    nextSlide
                                ),
                            onAfterSliding: (nextSlide: number) =>
                            console.debug('onAfterSliding(nextSlide): ', nextSlide)
                            }}
                    >
                        {projects.map((el:any, index:number)=>(
                            <Slide

                            key={index}
                            background={{
                                backgroundImageSrc:`${projects[index].img}`,
                            
                        }}
                            >
                            <div className='w-full h-[60vh] flex flex-row'>
                                <div className='w-[50%] h-full p-4'>{/*caja izquierda*/}
                                </div>
                                <div className='w-[40%] ml-[10%] h-full bg-[#393E46] m-[2%] rounded-2xl opacity-95 p-[2%]'>{/*caja derecha*/}
                                    <h2 className={actualStyle.slide_title}>{projects[index].title}</h2>
                                    <p className='text-slate-200 text-2xl mt-4 h-[70%]'>{projects[index].description}</p>
                                    <div className='w-full flex flex-row h-[20%] items-center justify-center'>
                                        <a className={actualStyle.slide_buttons}
                                        target='_blank'
                                        href={projects[index].links.github}>
                                            <CodeBracketIcon/>
                                        </a>
                                        <a className={actualStyle.slide_buttons}
                                        target='_blank'
                                        href={projects[index].links.direct}>
                                            <LinkIcon/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        ))}
                    <Nav activeColor='#32E0C4'/>
                </HeroSlider>
        </div>
    </div>
    )
}