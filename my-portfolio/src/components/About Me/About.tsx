import React from 'react'

import {styles} from '../Styles'

function aboutMe(){
    return(
        <div id='about' className='ml-5 mr-5 flex-col justify-center items-center pt-10'>
            <h3 className={styles.subtitle}>About me</h3>
            <p className={styles.p}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
        </div>
    )
}

export default aboutMe