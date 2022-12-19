import {check} from 'express-validator'
import validationresult from './errorValidator.js'
//validar datos 
const validateUser=[
    check("nombre")
    .exists()
    .not()
    .isEmpty()
    .isString(),
    check("correo")
    .exists()
    .not()
    .isEmpty()
    .isEmail()
    .normalizeEmail(),
    check("contraseña")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 4 })
    .trim(),
    (res,req,next)=>{
        validationresult(res,req,next)
    }
    
]

export default validateUser