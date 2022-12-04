import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../Redux/hooks";
import { sendEmail } from "../Redux/slices";

import {useEffect} from 'react'

import {useTranslation} from 'react-i18next'

import swal from 'sweetalert'
import { styles } from "../Styles";


export type Inputs = {
      email : string,
      subject: string,
      body: string
  }

export default function Contact(){

    const[t] = useTranslation("global")

    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        formState,
        formState:{ errors },
        reset
        } = useForm<Inputs>()

    const onSubmit : SubmitHandler<Inputs> = data =>{
        dispatch(sendEmail(data))
        swal({
            title: "Fantastic!",
            text: "Mail sended successfully!",
            icon: "success",
            closeOnEsc:true,
        })
        } 

    useEffect(()=>{
        if(formState.isSubmitSuccessful){
            reset({
                email:'',
                subject:'',
                body:''})
        }
    },[formState, reset])

    return(
        <div id="contact" className="h-[18%] pt-2">
            <h3 className={styles.subtitle}>{t('contact.title')}</h3>
            <div className="flex justify-center mt-10 w-full h-5/6">{/* Contenedor*/}
                <div className="w-[50%] ">
                    <p className={styles.p}>
                       {t('contact.text')}
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
                    <div className="flex-col bg-primary rounded-2xl h-full w-[86.6%]">
                        <form className="p-[3%]" onSubmit={handleSubmit(onSubmit)}>
                            <div className="text-orange-400 font-bold">
                            {errors?.email && errors.email.type === "required" ?
                                <p >*This field is required</p>
                                :
                                errors?.email?.type === 'pattern'?
                                    <p>*Invalid Email</p>
                                    :
                                    errors.email?.type === 'minLength' ?
                                        <p>* field require at least 5 characters</p>
                                        :
                                        errors.email?.type === 'maxLength' ? <p>*Maximun 25 characters</p>
                                            :
                                            <br/>}
                                        </div>
                            <input className={styles.inputs} type='text' placeholder='Email'
                                {...register('email',{
                                        pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                        required:true,
                                        minLength:5,
                                        maxLength:40
                                    })}
                                    />    
                            <br/>
                            <div className="text-orange-400 font-bold">
                            {errors?.subject && errors?.subject.type === 'required' ?
                                <>*This field is required</>
                                :
                                errors?.subject?.type === 'minLength' ?
                                    <>*This field require at least 3 characters</>
                                    :
                                    errors?.subject?.type === 'maxLength' ?
                                        <>*Maximun 15 characters</>
                                        :
                                        <br/>
                            }
                            </div>
                            <input className={styles.inputs} type='text' placeholder='Subject'
                                {...register('subject',{
                                    required:true,
                                    minLength:3,
                                    maxLength:15
                                })}
                            />
                            <br/>
                            <div className="text-orange-400 font-bold">
                            {errors?.body && errors?.body?.type === "required" ?
                                <p><span className="mb-2">⚠️</span> This field is required</p>
                                :
                                errors?.body?.type === "minLength" ?
                                    <p>*This field require at least 20 characters</p>
                                    :
                                    errors?.body?.type === "maxLength" ?
                                        <p>*Maximun 200 characters</p>
                                        :
                                        <br/>
                            }
                            </div>
                            <textarea className={styles.textarea} placeholder='Leave your message here'
                                {...register('body',{
                                    required:true,
                                    minLength: 20,
                                    maxLength:200
                                })}
                            />
                            <br/>
                            <button className={styles.buttonForm}>{t('contact.send')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}