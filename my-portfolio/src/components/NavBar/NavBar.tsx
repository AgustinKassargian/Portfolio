import React from 'react'
import { styles } from '../Styles'

function NavBar(){
    return(
        <div className='flex gap-32 text-2xl font-bold justify-center h-16 sticky top-0 z-50 w-full  bg-primary text-slate-200 items-center'>
            <a href="#hi!">
                <button className={styles.button}>Hi!</button>
            </a>
            <a href='#about'>
                <button className={styles.button}>About Me</button>
            </a>
            <a href="#skills&kwonledges">
                <button className={styles.button}>Skills & Knowledges</button>
            </a>
            <a href="#projects">
                <button className={styles.button}>Projects</button>
            </a>
            <a href="#contact">
                <button className={styles.button}>Contact Me</button>
            </a>
            <select>
                <option>Espanol</option>
                <option>English</option>
            </select>
            <button>Dark Mode</button>
        </div>
    )
}

export default NavBar