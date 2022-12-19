import mongoose from 'mongoose'
import {config} from 'dotenv'
import {cyan} from 'console-log-colors'
config();

//conexion a mongoDB atlas
mongoose.connect(process.env.mongodb_url)
.then(()=>console.log(cyan.bold("successful connection to the database mongodb Atlas")))
.catch((error)=>console.log(error))
