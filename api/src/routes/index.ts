import { Router } from "express";
import sendEmailRoute from './send.email.routes'

const router : Router = Router();

router.use('/email',sendEmailRoute)

module.exports = router;