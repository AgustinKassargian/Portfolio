import React, { useState } from 'react'
import { styles } from '../Styles'


function SkillsAndKnowledges(){
    return(
        <div id='skills&kwonledges' className='pt-2'>
            <h3 className={styles.subtitle}>Skills & Knowledges</h3>
            <div className='ml-[2.5%] w-[95%] h-[80vh] flex justify-around'>{/* Contenedor*/}
                <div className='mt-10 w-[25%] border-2 rounded-3xl bg-[#44cfca] h-[90%] p-7'>{/* Caja databases  #009efd // #009cfd84 */}
                    <h4 className={styles.cardTitle}>Database Skills</h4>
                    <p className={styles.cardText}>
                        Experience with Sequelize an Non-Sequelize databases like PostgreSQL and MongoDb
                    </p>
                    <div className={styles.iconsContainer}>{/*ICons Container */}
                        <div className={styles.iconsBox}>{/* Icons left Box */}
                            <img  className={styles.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql"/>
                            <img className={styles.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"/>
                        </div>
                        <div className={styles.iconsBox}>
                            <img  className={styles.icons2} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"/>
                            <img  className={styles.icons}src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript"/>
                        </div>
                    </div>
                </div>
                <div className='mt-10 w-[25%] border-2 rounded-3xl bg-[#494fc1] h-[90%] p-7'>{/* Caja backend #0097c5 // ##0097c587  */}
                    <h4 className={styles.cardTitle}>Backend Skills</h4>
                    <p className={styles.cardText}> Knowledges and practices with Node.js and Express, working with tools like Nodemailer and Cloudinary</p>
                    <div className={styles.iconsContainer}>
                        <div className={styles.iconsBox}>
                            <img  className={styles.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs"/>
                            <img  className={styles.icons} src="https://res.cloudinary.com/foodify-henry/image/upload/v1668902980/porfolio/cloudi_logo_yxeovr.png" alt="mongodb"/>
                        </div>
                        <div className={styles.iconsBox}>
                            <img className={styles.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express"/>
                            <img  className={styles.icons2} src="https://res.cloudinary.com/foodify-henry/image/upload/v1668903395/porfolio/Nodelogo_cjpbvi.png" alt="mongodb"/>
                        </div>
                    </div>
                </div>
                <div className='mt-10 w-[25%] border-2 rounded-3xl bg-[#fd084a]  h-[90%] p-7'>{/* Caja frontend  #4813d0 // #4913d082 */}
                    <h4 className={styles.cardTitle}>Frontend Skills</h4>
                    <p className={styles.cardText}>Proficiency developing frontend using React, connecting with Redux, and providing styles with                                                                                    CSS and Tailwind</p>
                    <div className={styles.iconsContainer}>
                        <div className={styles.iconsBox}>
                            <img className={styles.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react"/>
                            <img className={styles.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux"/>
                        </div>
                        <div className={styles.iconsBox}>
                            <img className={styles.icons} src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind"/>
                            <img className={styles.icons} src='https://res.cloudinary.com/foodify-henry/image/upload/v1668797625/porfolio/file_type_css_icon_130661_d5uzck.svg' alt='css'/>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}
export default SkillsAndKnowledges