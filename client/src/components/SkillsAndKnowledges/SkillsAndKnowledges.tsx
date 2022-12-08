import { styles, IStyles_Propertys} from '../Styles'
import {useTranslation} from 'react-i18next' 
import { useAppSelector } from '../Redux/hooks'

function SkillsAndKnowledges(){
    const [t] = useTranslation("global")
    const contrast = useAppSelector((state)=>state.contrastSlice.contrast)
    
    let actualStyle : IStyles_Propertys 
    
    contrast === false ? actualStyle = styles.regular : actualStyle = styles.higher_contrast
   
    return(
        <div id='skills&kwonledges' className='pt-2'>
            <h3 className={actualStyle.subtitle}>{t('s&k.title')}</h3>
            <div className='ml-[2.5%] w-[95%] h-[80vh] flex justify-around'>{/* Contenedor*/}
                <div className={actualStyle.card_box_1}>{/* Caja databases  #009efd // #009cfd84 */}
                    <h4 className={actualStyle.cardTitle}>{t('s&k.cardTitle_1')}</h4>
                    <p className={actualStyle.cardText}>
                        {t('s&k.cardText_1')}
                    </p>
                    <div className={actualStyle.iconsContainer}>{/*ICons Container */}
                        <div className={actualStyle.iconsBox}>{/* Icons left Box */}
                            <img  className={actualStyle.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql"/>
                            <img className={actualStyle.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"/>
                        </div>
                        <div className={actualStyle.iconsBox}>
                            <img  className={actualStyle.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"/>
                            <img  className={actualStyle.icons}src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript"/>
                        </div>
                    </div>
                </div>
                <div className={actualStyle.card_box_2}>{/* Caja backend #0097c5 // ##0097c587  */}
                    <h4 className={actualStyle.cardTitle}>{t('s&k.cardTitle_2')}</h4>
                    <p className={actualStyle.cardText}> {t('s&k.cardText_2')}</p>
                    <div className={actualStyle.iconsContainer}>
                        <div className={actualStyle.iconsBox}>
                            <img  className={actualStyle.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs"/>
                            <img  className={actualStyle.icons} src="https://res.cloudinary.com/foodify-henry/image/upload/v1668902980/porfolio/cloudi_logo_yxeovr.png" alt="mongodb"/>
                        </div>
                        <div className={actualStyle.iconsBox}>
                            <img className={actualStyle.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express"/>
                            <img  className={actualStyle.icons} src="https://res.cloudinary.com/foodify-henry/image/upload/v1668903395/porfolio/Nodelogo_cjpbvi.png" alt="mongodb"/>
                        </div>
                    </div>
                </div>
                <div className={actualStyle.card_box_3}>{/* Caja frontend  #4813d0 // #4913d082 */}
                    <h4 className={actualStyle.cardTitle}>{t('s&k.cardTitle_3')}</h4>
                    <p className={actualStyle.cardText}>{t('s&k.cardText_3')}</p>
                    <div className={actualStyle.iconsContainer}>
                        <div className={actualStyle.iconsBox}>
                            <img className={actualStyle.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react"/>
                            <img className={actualStyle.icons} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux"/>
                        </div>
                        <div className={actualStyle.iconsBox}>
                            <img className={actualStyle.icons} src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind"/>
                            <img className={actualStyle.icons} src='https://res.cloudinary.com/foodify-henry/image/upload/v1668797625/porfolio/file_type_css_icon_130661_d5uzck.svg' alt='css'/>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}
export default SkillsAndKnowledges