

import { styles } from "../Styles";

export default function Contact(){
    return(
        <div id="contact" className="h-1/6 pt-2 ">
            <h3 className={styles.subtitle}>How to Contact Me?</h3>
            <div className="flex justify-center mt-10 w-full h-5/6">{/* Contenedor*/}
                <div className="w-[50%] ">
                    <p className={styles.p}>
                        If you want to put in contact with me, you can send me an email filling the next form. Also, you can write by the following social medias. Have a nice day!
                    </p>
                    <div className="flex gap-14 justify-center items-center content-center w-[60%] ml-[20%] mt-[5%]"> {/* Caja de Links */}
                        <a className="justify-center" href="https://www.linkedin.com/in/agustin-kassargian/" target="blank">
                            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="agustin kassargian" height="30" width="40" />
                        </a>
                        <a className="items-center justify-center" href="https://github.com/AgustinKassargian" target="blank">
                            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="agustin.kassargian" height="30" width="40" />
                        </a>
                        <a className="items-center justify-center" href="https://instagram.com/agus_kassargian" target="blank">
                            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="agus_kassargian" height="30" width="40" />
                        </a>
                        <a className="items-center justify-center" href="https://twitter.com/aguskdeveloper" target="blank">
                            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="aguskdeveloper" height="30" width="40" />
                        </a>
                    </div>
                </div>
                <div className="flex-col w-[50%] ">{/*MailBox */}
                    <div className="flex-col bg-primary rounded-2xl h-full w-[87.4%]">
                        <form className="p-[5%]">
                        <input className='p-2 w-full h-10 text-white placeholder-slate-200 text-xl bg-primary border-solid border-4 rounded-xl border-slate-200 placeholder:italic mb-2' type='text' placeholder='Name'/>
                        <br/>
                        <input className='p-2 w-full h-10 text-white placeholder-slate-200 text-xl bg-primary border-solid border-4 rounded-xl border-slate-200 placeholder:italic mb-2' type='text' placeholder='Affair'/>
                        <br/>
                        <textarea className='p-2 w-full h-80 justify-start text-white placeholder-slate-200 text-xl bg-primary border-solid border-4 rounded-xl border-slate-200 placeholder:italic mb-2' placeholder='Body'/>
                        <br/>
                        <button className='border-4 w-[20%]  border-slate-200 rounded-xl text-slate-200 text-xl hover:bg-slate-200 hover:text-primary duration-300'>Send</button>
                        </form>
                    </div>
                    
                
                </div>
            </div>
        </div>
    )
}