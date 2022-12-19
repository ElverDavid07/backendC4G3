import {check} from 'express-validator'
import validationresult from './errorValidator.js'
//validar datos 
const validateBooks=[
    check("libro")
    .exists()
    .not()
    .isEmpty()
    .isString(),
    check("categoria")
    .exists()
    .not()
    .isEmpty()
    .isString(),
    check("autor")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .trim(),
    (res,req,next)=>{
        validationresult(res,req,next)
    }
    
]

export default validateBooks