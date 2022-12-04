import React from 'react'
import { styles } from '../Styles'



import {useTranslation} from 'react-i18next'
function NavBar(){
    const [t, i18n] = useTranslation("global")

    return(
        <div className='flex gap-32 text-2xl font-bold justify-center h-16 sticky top-0 z-50 w-full  bg-primary text-slate-200 items-center'>
            <a href="#hi!">
                <button className={styles.button}>
                    {t("navBar.button_1")}
                </button>
            </a>
            <a href='#about'>
                <button className={styles.button}>
                {t("navBar.button_2")}
                </button>
            </a>
            <a href="#skills&kwonledges">
                <button className={styles.button}>
                {t("navBar.button_3")}
                </button>
            </a>
            <a href="#projects">
                <button className={styles.button}>
                    {t("navBar.button_4")}
                </button>
            </a>
            <a href="#contact">
                <button className={styles.button}>
                {t("navBar.button_5")}
                </button>
            </a>
            <select className='text-slate-200 bg-primary' onChange={e=>i18n.changeLanguage(e.target.value)}>
                <option className='text-primary bg-slate-200' value='en'>English</option>
                <option className='text-primary bg-slate-200' value='es'>Español</option>
            </select>
            <button>Dark Mode</button>
        </div>
    )
}

export default NavBar