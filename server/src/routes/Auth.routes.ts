import  express from 'express'
import {RegisterUsers, LoginUsers, getUser } from '../controller/user.controller'
import {ValidateSchema} from '../middlewares/validator.squema'
import { loginSchema, registerSchema} from '../squemas/auth.schema'
const router = express.Router()

router.post('/register' ,ValidateSchema(registerSchema), RegisterUsers) 
router.get('/user', getUser) 

router.post('/login', ValidateSchema(loginSchema), LoginUsers) 


export default router