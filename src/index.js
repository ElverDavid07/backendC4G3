import express from 'express'
import {green,blue} from 'console-log-colors'
import cors from 'cors'
import user from './controladores/userControler.js'
import books from './controladores/libros.js'
import "./dataBase.js"
const app = express()
app.use("*",cors());
//? middleware
app.use(express.json())
app.use("/api",user)
app.use("/api",books)






//?iniciar el servidor
const port = process.env.PORT || 3001
app.listen(port,()=>console.log(green(`server running in port ${blue.bold(port)}`)))