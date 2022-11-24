import { useForm, SubmitHandler } from "react-hook-form";
import { toast,ToastContainer} from "react-toastify";

import { styles } from "../Styles";
import 'react-toastify/dist/ReactToastify.css';
export default function Contact(){
    type Inputs = {
        name : string,
        subject: string,
        body: string
    }

    const {register, handleSubmit, formState:{ errors }} = useForm<Inputs>()

    const onSubmit : SubmitHandler<Inputs> = data => console.log(data)


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
                        <form className="p-[5%]" onSubmit={handleSubmit(onSubmit)}>
                            <input className={styles.inputs} type='text' placeholder='Name'
                                {...register('name',{
                                        required:true,
                                        minLength:3,
                                        maxLength:12
                                    })}
                            />
                            <br/>
                            <input className={styles.inputs} type='text' placeholder='Subject'
                                {...register('subject',{
                                    required:true,
                                    minLength:3,
                                    maxLength:12
                                })}
                            />
                            <br/>
                            <textarea className={styles.textarea} placeholder='Body'
                                {...register('body',{
                                    required:true,
                                    minLength: 20,
                                    maxLength:200
                                })}
                            />
                            <br/>
                            <button className={styles.buttonForm}>
                                Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}