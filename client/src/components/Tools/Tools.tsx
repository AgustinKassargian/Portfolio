
import { useAppSelector } from '../Redux/hooks'
import { styles, IStyles_Propertys } from '../Styles'

export default function Tools(){

    const contrast  = useAppSelector((state)=>state.contrastSlice.contrast)

    let actualStyles : IStyles_Propertys

    contrast === false ? actualStyles = styles.regular : actualStyles = styles.higher_contrast

    return(
        <div id='tools'className='flex-col justify-center pt-2'>
            <h3 className={actualStyles.subtitle}>Tools</h3>
            <div className='flex w-[90%] ml-[5%]'>
                <div className='w-[30%]'>{/*RECUADRO 1 */}
                    <div className={actualStyles.icons}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="100" height="100"/>
                    </div>
                    <div className={actualStyles.icons}>
                        <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="80" height="80"/>
                    </div>
                    <div className={actualStyles.icons}>
                        <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="80" height="80"/>
                    </div>
                    <div className={actualStyles.icons}>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="80" height="80"/>
                    </div>
                </div>
                <div className='w-[30%]'>{/* RECUADRO 2*/}
                    <div className={actualStyles.icons}>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="80" height="80"/>
                    </div>
                    <div className={actualStyles.icons}>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="80"/>
                    </div>
                    <div className={actualStyles.icons}>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="80" height="80"/>
                    </div>
                    <div className={actualStyles.icons}>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80" height="80"/>
                    </div>
                </div>
                <div className='w-[30%]'>{/* RECUADRO 3 */}
                    <div className={actualStyles.icons}>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="80" height="80"/>
                    </div>
                    <div className={actualStyles.icons}>
                    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="80" height="80"/>

                    </div>
                        <div className={actualStyles.icons}>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="80" height="80"/>
                        </div>
                </div>
            </div>
                </div>
    )
}