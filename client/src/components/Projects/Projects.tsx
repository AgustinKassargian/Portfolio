import {styles} from '../Styles'
import Carousel from '../Carousel'


export default function Projects(){
    return(
        <div id='projects' className='pt-2'>
            <div  className={styles.subtitle}>Some Projects</div>
                <div className='h-[75vh] flex justify-center pt-12'>
                    <div className='border-2 border-primary h-[90%] w-[86.7%] flex bg-primary rounded-3xl'>
                        <div className='w-[40%] h-[80%] mt-14 mr-[1%] ml-[9%]'>
                            <h4 className='text-3xl font-bold text-slate-200 m-2'>Titulo del proyecto</h4>
                            <p className='text-2xl text-slate-200 m-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className='border-2 border-slate-200 w-[40%] h-[80%] mt-14 ml-[1%] mr-[9%]'>
                            <Carousel/>
                            </div>    
                    </div>
                </div>
        </div>
    )
}