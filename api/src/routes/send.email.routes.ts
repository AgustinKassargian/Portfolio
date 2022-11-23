import { Router } from "express";
import { postEmail } from "../controllers/send.Email";

const router : Router  = Router()

router.post('/', postEmail)

export default router


