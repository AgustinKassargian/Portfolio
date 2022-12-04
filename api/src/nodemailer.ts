import nodemailer from 'nodemailer'


require('dotenv').config()

const {USER_MAIL, PASSWORD_MAIL} = process.env

export const transporter = async()=>{
    const newTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: USER_MAIL,
            pass: PASSWORD_MAIL
        }
    })
    return newTransport
} 


export const message = async(email:string, subject: string, body:string)=>{
    const transport = await transporter()
    const sending = transport.sendMail({
        from:USER_MAIL,
        to: USER_MAIL,
        subject: `Mensaje de < ${email} >. Asunto: ${subject}`,
        text: body
    })
    return
    }

