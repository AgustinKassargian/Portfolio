import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { sendEmail } from "../Redux/slices";

import {useEffect} from 'react'

import {useTranslation} from 'react-i18next'

import swal from 'sweetalert'
import { styles, IStyles_Propertys } from "../Styles";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";


export type Inputs = {
      email : string,
      subject: string,
      body: string
  }

export default function Contact(){

    const[t] = useTranslation("global")

    const dispatch = useAppDispatch()

    const contrast = useAppSelector((state)=>state.contrastSlice.contrast)

    let actualStyle : IStyles_Propertys

    contrast === false ? actualStyle = styles.regular : actualStyle = styles.higher_contrast


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
            <h3 className={actualStyle.subtitle}>{t('contact.title')}</h3>
            <div className="flex justify-center mt-10 w-full h-5/6">{/* Contenedor*/}
                <div className="w-[50%] ">
                    <p className={actualStyle.p}>
                       {t('contact.text')}
                    </p>
                    <br/>
                    <br/>
                    <p className={actualStyle.p}>
                       {t('contact.bye')}
                    </p>
                    <div className={actualStyle.icons_links_containter}> {/* Caja de Links */}
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
                        <a 
                        href="Agustin Kassargian - CV.pdf"
                        download="Agustin Kassargian - CV.pdf"
                        className={actualStyle.donwload_button}> {t('contact.donwload_button')}
                        <ArrowDownTrayIcon className='h-[3vh] w-auto ml-[2%]'/>
                        </a>
                </div>
                <div className="flex-col w-[50%] ">{/*MailBox */}
                    <div className="flex-col bg-[#393E46] rounded-2xl h-full w-[86.6%]">
                        <form className="p-[3%]" onSubmit={handleSubmit(onSubmit)}>
                            <div className={actualStyle.alerts}>
                            {errors?.email && errors.email.type === "required" ?
                                <p >{t('alerts.email.required')}</p>
                                :
                                errors?.email?.type === 'pattern'?
                                    <p>{t('alerts.email.required')}</p>
                                    :
                                    errors.email?.type === 'minLength' ?
                                        <p>{t('alerts.email.minLength')}</p>
                                        :
                                        errors.email?.type === 'maxLength' ? <p>{t('alerts.email.maxLength')}</p>
                                            :
                                            <br/>}
                                        </div>
                            <input className={contrast === false ? styles.regular.inputs : styles.higher_contrast.inputs} type='text' placeholder={t('contact.placeholder_email') || 'Email'}
                                {...register('email',{
                                        pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                        required:true,
                                        minLength:5,
                                        maxLength:40
                                    })}
                                    />    
                            <br/>
                            <div className={actualStyle.alerts}>
                            {errors?.subject && errors?.subject.type === 'required' ?
                                <>{t('alerts.subject.required')}</>
                                :
                                errors?.subject?.type === 'minLength' ?
                                    <>{t('alerts.subject.mingLength')}</>
                                    :
                                    errors?.subject?.type === 'maxLength' ?
                                        <>{t('alerts.subject.maxLength')}</>
                                        :
                                        <br/>
                            }
                            </div>
                            <input className={contrast === false ? styles.regular.inputs : styles.higher_contrast.inputs} type='text' placeholder={t('contact.placeholder_subject') || 'Subject'}
                                {...register('subject',{
                                    required:true,
                                    minLength:3,
                                    maxLength:15
                                })}
                            />
                            <br/>
                            <div className={actualStyle.alerts}>
                            {errors?.body && errors?.body?.type === "required" ?
                                <p>{t('alerts.body.required')}</p>
                                :
                                errors?.body?.type === "minLength" ?
                                    <p>{t('alerts.body.minLength')}</p>
                                    :
                                    errors?.body?.type === "maxLength" ?
                                        <p>{t('alerts.body.maxLength')}</p>
                                        :
                                        <br/>
                            }
                            </div>
                            <textarea className={actualStyle.textarea} placeholder={t('contact.placeholder_body') || 'Body'}
                                {...register('body',{
                                    required:true,
                                    minLength: 20,
                                    maxLength:200
                                })}
                            />
                            <br/>
                            <button className={actualStyle.buttonForm}>{t('contact.send')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}