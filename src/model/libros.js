import {model,Schema} from 'mongoose'

const modelSchema = Schema({
    
    libro:{
        type:String,
        requiered:true,
        trim:true,
        lowercase:true
    },
    categoria:{
        type:String,
        requiered:true,
        trim:true,
        lowercase:true
    },
    autor:{
        type:String,
        requiered:true,
        trim:true,
        lowercase:true
    }
},{versionKey:false})

export default model("books",modelSchema);