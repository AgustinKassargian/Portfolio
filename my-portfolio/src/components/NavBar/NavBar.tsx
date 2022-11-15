import React from 'react'
import { styles } from '../Styles'

function NavBar(){
    return(
        <div className='flex gap-[11.75rem] text-2xl font-bold justify-center h-16 sticky top-0 z-50 w-full  bg-primary text-slate-200 items-center'>
            <a href='#about'>
                <button className={styles.button}>About Me</button>
            </a>
            <a href="#studies">
                <button className={styles.button}>Studies</button>
            </a>
            <a href="#knowledges" >
                <button className={styles.button}>Knowledges</button>
            </a>
            <a href="#tools">
                <button className={styles.button}>Tools</button>
            </a>
            <a href="#projects">
                <button className={styles.button}>Projects</button>
            </a>
            <a href="#contact">
                <button className={styles.button}>Contact Me</button>
            </a>
        </div>
    )
}

export default NavBar