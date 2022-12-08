import {useTranslation} from 'react-i18next'
import { useAppSelector } from '../Redux/hooks'

import {ArrowDownTrayIcon} from '@heroicons/react/24/solid'
import {styles, IStyles_Propertys} from '../Styles'

function AboutMe(){

    const [t] = useTranslation("global")
    const contrast = useAppSelector((state)=>state.contrastSlice.contrast)
    
    let actualStyles : IStyles_Propertys

    contrast === false ? actualStyles = styles.regular : actualStyles = styles.higher_contrast

    return(
        <div id='about' className='flex-col justify-center items-center pt-10'>
            <h3 className={actualStyles.subtitle}>{t('about.title')}</h3>
            <p className={actualStyles.p}>
                {t('about.line_1')}
                <br/>
                {t('about.line_2')}
                <br/>
                <br/>
                {t('about.line_3')}
                <br/>
                <br/>
                {t('about.line_4')}
                <span> </span> 
                <a href='https://www.linkedin.com/in/agustin-kassargian/details/recommendations/?detailScreenTabIndex=0'
                    target='blank'
                    className={actualStyles.link_recommendations}>
                    {t('about.line_5')}
                </a>
            </p>

        </div>
    )
}

export default AboutMe