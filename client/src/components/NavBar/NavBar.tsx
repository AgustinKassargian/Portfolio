import { styles, IStyles_Propertys } from '../Styles'


import {useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../Redux/hooks'
import { changeContrast } from '../Redux/contrastSlice'
import state from 'sweetalert/typings/modules/state'

function NavBar(){

    const [t, i18n] = useTranslation("global")

    const dispatch = useAppDispatch()
    const contrast = useAppSelector((state)=>state.contrastSlice.contrast)
    
    let actualStyle : IStyles_Propertys

    contrast === false ? actualStyle = styles.regular : actualStyle = styles.higher_contrast

    useEffect(()=>{},[dispatch])


    return(
        <div className='flex gap-32 text-2xl font-bold justify-center h-16 sticky top-0 z-50 w-full  bg-[#393E46] text-slate-200 items-center'>
            <a href="#hi!">
                <button className={actualStyle.button}>
                    {t("navBar.button_1")}
                </button>
            </a>
            <a href='#about'>
                <button className={actualStyle.button}>
                {t("navBar.button_2")}
                </button>
            </a>
            <a href="#skills&kwonledges">
                <button className={actualStyle.button}>
                {t("navBar.button_3")}
                </button>
            </a>
            <a href="#projects">
                <button className={actualStyle.button}>
                    {t("navBar.button_4")}
                </button>
            </a>
            <a href="#contact">
                <button className={actualStyle.button}>
                {t("navBar.button_5")}
                </button>
            </a>
            <select className={actualStyle.selects} onChange={e=>i18n.changeLanguage(e.target.value)}>
                <option className={actualStyle.options} value='en'>English</option>
                <option className={actualStyle.options} value='es'>Español</option>
            </select>
            <select className={actualStyle.selects} onChange={e=>dispatch(changeContrast(e.target.value))}>
                <option  className={actualStyle.options} value="off">{t("navBar.button_contrast_off")}</option>
                <option  className={actualStyle.options} value="on">{t('navBar.button_contrast_on')}</option>
            </select>
        </div>
    )
}
/* */
export default NavBar