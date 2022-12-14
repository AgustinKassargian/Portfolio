interface IStyles{
    p : string
    subtitle : string
    icons: string
    icons2: string
    a:string
    scroll_container:string
    button: string
    cardTitle:string
    cardText:string
    iconsBox: string
    iconsContainer: string
    
}



export const styles : IStyles = {
    p : 'text-left mt-10 ml-[15%] w-[70%] text-2xl text-slate-700 justify-center text-center',
    subtitle:'text-primary justify-center text-5xl font-bold flex ml-10 mt-24 mb-5',
    icons: 'h-[45%] w-[60%] flex ',
    icons2:'h-[45%] w-[60%] flex ',
    cardTitle:' text-slate-200 text-center font-bold text-3xl',
    cardText:'h-[40%] w-full text-slate-200 text-2xl text-center pt-[20%]',
    iconsContainer:'h-[40%] w-full mt-[5%] text-slate-200 text-2xl text-center flex flex-row  justify-between items-center',
    iconsBox: 'h-full w-[50%] flex flex-col items-center justify-between pt-[2.50%] pb-[2.50%] ',
    button:'w-[120%] hover:bg-slate-200 hover:text-primary transition ease-in-out delay-50 hover:scale-125 duration-300  hover:border-2 hover:boder-slate-200 rounded-lg h-1/2',
    scroll_container:'h-full border-2 border-blue-700 scroll-smooth',
    a:''

}
