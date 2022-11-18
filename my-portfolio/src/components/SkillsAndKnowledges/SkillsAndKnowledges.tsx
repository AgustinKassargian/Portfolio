import React, { useState } from 'react'
import { styles } from '../Styles'


function SkillsAndKnowledges(){
    const [techs, setTechs] = useState(0)
    
    const languages : any = {
        title : 'languages',
        technologies: ['Javascript', 'TypeScript'],
        description: 'lalala',
    }

    const databases: any = {
        title : 'databases',
        technologies: ['PostgreSQL', 'MongoDB'],
        description: 'lololo',
    }
    
    const backend : any = {
        title : 'backend',
        technologies: ['Node.js', 'Redux', 'Express'],
        description: 'lelele',

        
    }
    
    const frontend : any = {
        title : 'frontend',
        technologies: ['React', 'CSS', 'Tailwind'],
        description: 'lululu',

    }
    const technologies : any = [languages, databases, backend, frontend]
                         

    return(
        <div id='skills&kwonledges' className='pt-2'>
            <h3 className={styles.subtitle}>Skills & Knowledges</h3>
            <div className='ml-[2.5%] w-[95%] border-2 border-purple-800 h-[80vh] flex justify-around'>{/* Contenedor*/}
                <div className='mt-10 mx-0 w-[25%] border-2 rounded-3xl bg-[#4813d0] h-[90%] p-5'>{/* Caja databases  #009efd*/}
                    <h4 className=' text-slate-200 text-center font-bold text-3xl'>Database Skills</h4>
                    <p className='border-2 border-green-500 h-[40%] w-full mt-[20%] text-slate-200 text-2xl text-center pt-[20%]'>
                        Experience with Sequelize an Non-Sequelize databases like PostgreSQL and MongoDb
                    </p>
                    <div className='border-2 border-green-500 h-[40%] w-full mt-[5%] text-slate-200 text-2xl text-center flex flex-row  justify-between items-center'>
                        <div className='h-full w-[50%] flex flex-col border-2 border-y-yellow-300 items-center justify-between pt-[2.50%] pb-[2.50%] '>{/* Caja izquierda */}
                            <img  className='border-2 border-green-500 h-[45%] bg-white w-[60%] flex'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"/>
                            <img  className='border-2 border-green-500 h-[45%] w-[60%] flex'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"/>
                        </div>
                        <div className='h-full w-[50%] flex flex-col border-2 border-y-yellow-300 items-center justify-between pt-[2.50%] pb-[2.50%] '>
                            <img  className='border-2 border-green-500 h-[45%] w-[60%] flex'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"/>
                            <img  className='border-2 border-green-500 h-[45%] w-[60%] flex'src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"/>
                        </div>
                    </div>
                </div>
                <div className='mt-10 w-[25%] border-2 rounded-3xl bg-[#009efd]  h-[90%]'>{/* Caja backend #0097c5 */}
                </div>
                <div className='mt-10 w-[25%] border-2 rounded-3xl bg-[#0097c5]  h-[90%]'>{/* Caja frontend  #4813d0*/}
                </div>

            </div>
            

            
        </div>
    )
}

export default SkillsAndKnowledges