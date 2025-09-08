import express from 'express';
import * as uc from '../controllers/auth.controller.js'

const authRouter = express.Router();

authRouter.post('/login', uc.login)
authRouter.post('/sighn-up', uc.sighnUp)
authRouter.get('/logout', uc.logout)

export default authRouter