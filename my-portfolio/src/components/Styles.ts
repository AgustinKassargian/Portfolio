interface IStyles{
    p : string
    subtitle : string
    icons: string
    a:string
    scroll_container:string
    button: string
}



export const styles : IStyles = {
    p : 'text-center mt-10 ml-[15%] w-[70%] text-2xl',
    subtitle:'text-primary text-5xl font-bold flex justify-center mt-24',
    icons: 'w-[40%] justify-center flex border-2 m-10 ml-[30%]',
    a:'',
    button:'w-[120%] hover:bg-slate-200 hover:text-primary transition ease-in-out delay-50 hover:scale-125 duration-300  hover:border-2 hover:boder-slate-200 rounded-lg h-1/2',
    scroll_container:'h-full border-2 border-blue-700 scroll-smooth',

}
