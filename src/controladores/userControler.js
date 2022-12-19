import {Router} from 'express'
import * as userCtl from '../servicios/userServices.js'
import validatoruser from '../validator/validatorUser.js'
const router=Router()
//get
router.get("/users",userCtl.getUser)

//getById
router.get("/users/:id",userCtl.getUserById)

//post
router.post("/users",validatoruser,userCtl.postUser)

//put
router.put("/users/:id",userCtl.putUser)

//delate
router.delete("/users/:id",userCtl.delateUser)

export default router;