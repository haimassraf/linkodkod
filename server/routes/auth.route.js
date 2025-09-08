import express from 'express';
import * as uc from '../controllers/auth.controller.js'

const authRouter = express.Router();

authRouter.post('/login', uc.login)
authRouter.post('/signup', uc.signup)
authRouter.get('/logout', uc.logout)

export default authRouter