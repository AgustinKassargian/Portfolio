export interface IStyles_Propertys{
    p : string
    subtitle : string
    icons: string
    scroll_container:string
    button: string
    cardTitle:string
    cardText:string
    home_scroll_container: string
    home_title: string
    iconsBox: string
    iconsContainer: string
    inputs: string
    textarea:string
    buttonForm: string
    button_contrast:string
    link_recommendations:string
    card_box_1:string
    card_box_2:string
    card_box_3:string
    alerts: string
    selects:string
    options:string
    icons_links_containter: string
    donwload_button:string
}

interface IStyles{
    regular: IStyles_Propertys
    higher_contrast: IStyles_Propertys
}

export const styles : IStyles = {
    regular:{
        alerts: "text-orange-400 font-bold",
        button:'w-[120%] hover:bg-[#222831] hover:text-primary transition ease-in-out delay-50 hover:scale-125 duration-300  hover:border-2 hover:boder-slate-200 rounded-lg h-1/2',
        buttonForm:'border-4 w-[20%]  border-slate-200 font-semibold rounded-xl text-slate-200 text-xl hover:bg-[#222831] hover:text-primary duration-300 mb-[5%] hover:border-slate-200',
        button_contrast:"w-[120%] hover:bg-red-500 hover:text-primary transition ease-in-out delay-50 hover:scale-125 duration-300  hover:border-2 hover:boder-slate-200 rounded-lg h-1/2",
        card_box_1:"mt-10 w-[25%] rounded-3xl bg-[#44cfca] h-[90%] p-7",
        card_box_2:"mt-10 w-[25%] rounded-3xl bg-[#494fc1] h-[90%] p-7",
        card_box_3:"mt-10 w-[25%] rounded-3xl bg-[#ea68e7] h-[90%] p-7",
        cardText:'h-[40%] w-full text-white text-2xl text-center pt-[20%]',
        cardTitle:' text-white text-center font-bold text-3xl',
        donwload_button:'flex text-[#393E46] font-semibold text-2xl text-center h-[6vh] flex-row w-[30%] ml-[35%] rounded-full mt-[4%] items-center justify-center bg-primary hover:bg-[#393E46] hover:text-primary hover:border-2 hover:border-primary hover:cursor-pointer',
        home_scroll_container:'h-full border-2 border-[#222831]',
        home_title:'text-6xl font-bold text-primary pt-[30vh] flex justify-center mb-[1.5%]',
        icons: 'h-[45%] w-[60%] flex grayscale-0',
        iconsBox: 'h-full w-[50%] flex flex-col items-center justify-between pt-[2.50%] pb-[2.50%] ',
        iconsContainer:'h-[40%] w-full mt-[5%] text-slate-200 text-2xl text-center flex flex-row  justify-between items-center',
        icons_links_containter:'flex gap-14 justify-center items-center content-center w-[60%] ml-[20%] mt-[5%]',
        inputs:'p-2 w-full h-10 text-white placeholder-slate-200 text-xl bg-[#393E46] border-solid border-4 rounded-xl border-slate-300 placeholder:italic mb-2',
        options:'text-primary bg-[#393E46]',
        p:'text-left mt-10 ml-[15%] w-[70%] text-2xl text-slate-200 justify-center text-center',
        link_recommendations:'text-primary hover:underline',
        scroll_container:'h-full border-2 border-blue-700 scroll-smooth',
        selects:'text-slate-200 bg-[#393E46] hover:bg-[#222831] hover:text-primary hover:border-2 hover:rounded-lg transition ease-in-out delay-50 hover:scale-125 duration-300  hover:boder-slate-200',
        subtitle:'text-primary justify-center text-5xl font-bold flex ml-10 mt-24 mb-5',
        textarea:'p-2 w-full h-80 justify-start text-white placeholder-slate-200 text-xl bg-[#393E46] border-solid border-4 rounded-xl border-slate-200 placeholder:italic mb-2',
    },
    higher_contrast:{
        alerts:"text-slate-200 font-bold",
        button:'w-[120%] hover:bg-[#222831] hover:text-slate-200 transition ease-in-out delay-50 hover:scale-125 duration-300  hover:border-2 hover:boder-slate-200 rounded-lg h-1/2',
        buttonForm:'border-4 w-[20%] font-semibold border-slate-200 rounded-xl text-slate-200 text-xl hover:bg-[#222831] hover:text-slate-200 duration-300 mb-[5%]',
        button_contrast:"w-[120%] hover:bg-red-500 hover:text-primary transition ease-in-out delay-50 hover:scale-125 duration-300  hover:border-2 hover:boder-slate-200 rounded-lg h-1/2",
        card_box_1:"mt-10 w-[25%] rounded-3xl bg-[#4c525e] h-[90%] p-7",
        card_box_2:"mt-10 w-[25%] rounded-3xl bg-[#4c525e] h-[90%] p-7",
        card_box_3:"mt-10 w-[25%] rounded-3xl bg-[#4c525e] h-[90%] p-7",
        cardText:'h-[40%] w-full text-white text-2xl text-center pt-[20%]',
        cardTitle:' text-white text-center font-bold text-3xl',
        donwload_button:'flex text-[#393E46] font-semibold text-2xl text-center h-[6vh] flex-row w-[30%] ml-[35%] rounded-full mt-[4%] items-center justify-center bg-slate-200 hover:bg-[#393E46] hover:text-slate-200 hover:border-2 hover:border-slate-200 hover:cursor-pointer',
        home_scroll_container:'h-full border-2 border-[#222831]',
        home_title:'text-6xl font-bold text-slate-200 pt-[30vh] flex justify-center mb-[1.5%]',
        icons: 'h-[45%] w-[60%] flex grayscale contrast-200',
        iconsBox: 'h-full w-[50%] flex flex-col items-center justify-between pt-[2.50%] pb-[2.50%] ',
        iconsContainer:'h-[40%] w-full mt-[5%] text-slate-200 text-2xl text-center flex flex-row  justify-between items-center',
        icons_links_containter:'flex gap-14 justify-center items-center content-center w-[60%] ml-[20%] mt-[5%] brightness-200 grayscale contrast-200',
        inputs:'p-2 w-full h-10 text-white placeholder-slate-200 text-xl bg-[#393E46] border-solid border-4 rounded-xl border-slate-300 placeholder:italic mb-2',
        options:'text-slate-200 bg-[#393E46]',
        p:'text-left mt-10 ml-[15%] w-[70%] text-2xl text-slate-200 justify-center text-center',
        link_recommendations:'text-slate-200 hover:underline',
        selects:'text-slate-200 bg-[#393E46] hover:bg-[#222831] hover:text-slate-200 hover:border-2 hover:rounded-lg transition ease-in-out delay-50 hover:scale-125 duration-300  hover:boder-slate-200',
        scroll_container:'h-full border-2 border-blue-700 scroll-smooth',
        subtitle:'text-slate-200 justify-center text-5xl font-bold flex ml-10 mt-24 mb-5',
        textarea:'p-2 w-full h-80 justify-start text-white placeholder-slate-200 text-xl bg-[#393E46] border-solid border-4 rounded-xl border-slate-200 placeholder:italic mb-2',
    }

}
