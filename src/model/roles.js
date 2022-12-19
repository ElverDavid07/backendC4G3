import {model,Schema} from 'mongoose'

const rolesModel=Schema({
    nombre:String
},{versionKey:false})

export default model("role",rolesModel)