import { Request, Response } from "express";
import { message } from "../nodemailer";

export const postEmail = async(req:Request, res:Response)=>{
    const email = req.body
    try {
        message(email.name, email.subject, email.body)
        return res.status(200).json('Submitted successfully')
    } catch (error) {
        res.status(500).json(error)
    }
}