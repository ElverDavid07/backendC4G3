import {model, Schema} from 'mongoose'
import bcrypt from 'bcryptjs'
const usermodel = Schema({
nombre:{
    type:String,
    required:true,
    trim:true,
    lowercase:true
},
correo:{
    
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true
},
contraseña:{
    type:String,
    required:true,
    trim:true,
    lowercase:true
},
roles:[{
    ref:"role",
    type:Schema.Types.ObjectId
}]
},{versionKey:false})



export default model("user",usermodel);
