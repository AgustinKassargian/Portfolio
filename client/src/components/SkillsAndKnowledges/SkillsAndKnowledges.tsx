import { styles, IStyles_Propertys} from '../Styles'
import {useTranslation} from 'react-i18next' 
import { useAppSelector } from '../Redux/hooks'


import { CodeBracketIcon,CircleStackIcon, TvIcon } from "@heroicons/react/24/solid"

function SkillsAndKnowledges(){
    const [t] = useTranslation("global")
    const contrast = useAppSelector((state)=>state.contrastSlice.contrast)
    
    let actualStyle : IStyles_Propertys 
    
    contrast === false ? actualStyle = styles.regular : actualStyle = styles.higher_contrast
   
    return(
        <div id='skills&kwonledges' className='pt-2'>
            <h3 className={actualStyle.subtitle}>{t('s&k.title')}</h3>
            <div className='ml-[2.5%] w-[95%] h-[80vh] flex justify-around'>{/* Contenedor*/}
                <div className={actualStyle.card_box}>{/* Caja databases  #009efd // #009cfd84 */}
                    <h4 className={actualStyle.cardTitle}>{t('s&k.cardTitle_1')}</h4>
                    <CircleStackIcon className={actualStyle.icons}/>
                    <p className={actualStyle.cardText}>
                        {t('s&k.cardText_1')}
                    </p>
                </div>
                <div className={actualStyle.card_box}>{/* Caja backend #0097c5 // ##0097c587  */}
                    <h4 className={actualStyle.cardTitle}>{t('s&k.cardTitle_2')}</h4>
                    <CodeBracketIcon className={actualStyle.icons}/>
                    <p className={actualStyle.cardText}> {t('s&k.cardText_2')}</p>
                </div>
                <div className={actualStyle.card_box}>{/* Caja frontend  #4813d0 // #4913d082 */}
                    <h4 className={actualStyle.cardTitle}>{t('s&k.cardTitle_3')}</h4>
                    <TvIcon className={actualStyle.icons}/>
                    <p className={actualStyle.cardText}>{t('s&k.cardText_3')}</p>
                </div>
            </div>   
        </div>
    )
}
export default SkillsAndKnowledges