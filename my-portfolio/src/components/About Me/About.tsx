import React from 'react'

import {styles} from '../Styles'

function aboutMe(){
    return(
        <div id='about' className='flex-col justify-center items-center pt-10'>
            <h3 className={styles.subtitle}>About me</h3>
            <p className={styles.p}>
                I'm from Buenos Aires, Argentina. I dream with travel around the world and improve people's lives through technology.
                <br/>
                I enjoy teamwork, searching best solutions and hearing all ideas, learn and teach others what I can.
                <br/>
                <br/>
                Recently I led a application similar to an Ecommerce. Like Fullstack Developer I take part working at Backend and Frontend, but too organizing and focusing the team to reach our goals using the agile methodology Scrum.
                <br/>
                <br/>
                If you want to know me more, 
                <a href='https://www.linkedin.com/in/agustin-kassargian/details/recommendations/?detailScreenTabIndex=0' target='blank' className='hover:text-blue-600 ml-1'>
                can click here to see what my partners think about me.
                </a>
            </p>
        </div>
    )
}

export default aboutMe