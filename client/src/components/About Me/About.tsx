import {useTranslation} from 'react-i18next'

import {styles} from '../Styles'

function AboutMe(){
  const [t] = useTranslation("global")
    return(
        <div id='about' className='flex-col justify-center items-center pt-10'>
            <h3 className={styles.subtitle}>{t('about.title')}</h3>
            <p className={styles.p}>
                {t('about.line_1')}
                <br/>
                {t('about.line_2')}
                <br/>
                <br/>
                {t('about.line_3')}
                <br/>
                <br/>
                {t('about.line_4')} 
                <a href='https://www.linkedin.com/in/agustin-kassargian/details/recommendations/?detailScreenTabIndex=0'
                    target='blank'
                    className='hover:text-blue-600 ml-1'>
                    {t('about.line_5')}
                </a>
            </p>
        </div>
    )
}

export default AboutMe