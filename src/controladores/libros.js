import {Router} from 'express'
import validateData from '../validator/validatorBooks.js'
import * as booksCtl from '../servicios/libros.js'
const router = Router();
//get
router.get("/books",booksCtl.getBooks)
//getById
router.get("/books/:id",booksCtl.getBooksById)
//post
router.post("/books",validateData,booksCtl.postBooks)
//put
router.put("/books/:id",booksCtl.putBooks)
//delate
router.delete("/books/:id",booksCtl.delateBooks)

export default router;