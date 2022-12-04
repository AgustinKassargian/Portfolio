import { Request, Response } from "express";
import { message } from "../nodemailer";

export const postEmail = async(req:Request, res:Response)=>{
    const data = req.body
    try {
        message(data.email, data.subject, data.body)
        return res.status(200).json('Submitted successfully')
    } catch (error) {
        res.status(500).json(error)
    }
}