

import { styles } from "../Styles";

export default function Contact(){
    return(
        <div id="contact" className="border-2 border-green-500 h-1/6 pt-2">
            <h3 className={styles.subtitle}>Contact Me</h3>
            <div className="flex justify-center mt-10 w-full h-3/4">{/* Contenedor*/}
                <div className="w-[50%] border-2 border-blue-900">
                    <p className={styles.p}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <div className="flex gap-14 justify-center items-center content-center w-[60%] ml-[20%] mt-20"> {/* Caja de Links */}
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
                <div className="flex-col w-[50%] border-2 border-green-600">{/*MailBox */}
                    <div className="flex-col">
                        <form>
                        <input type='text' placeholder='name'/>
                        <br/>
                        <input type='text' placeholder='affair'/>
                        <br/>
                        <input type='text' placeholder='body'/>
                        <br/>

                        </form>
                    </div>
                    
                
                </div>
            </div>
        </div>
    )
}