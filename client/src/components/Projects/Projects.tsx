import {styles, IStyles_Propertys} from '../Styles'
import Carousel from '../Carousel'
import { useAppSelector } from '../Redux/hooks'


export default function Projects(){

    const contrast = useAppSelector((state)=>state.contrastSlice.contrast)
    
    let actualStyle : IStyles_Propertys

    contrast === false ? actualStyle = styles.regular : actualStyle = styles.higher_contrast

    return(
        <div id='projects' className='pt-2'>
            <div  className={actualStyle.subtitle}>Some Projects</div>
                <div className='h-[75vh] flex justify-center pt-12'>
                    <div className='h-[90%] w-[86.7%] flex bg-[#393E46] rounded-3xl'>
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