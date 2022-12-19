import user from '../model/userModel.js'

//(get) obtener todos los usuarios
export  const getUser=async(req,res)=>{
    await user.find()
    .then((data)=>res.json(data))
        .catch((error) => { res.json({ message: error }) })
}

//(get) obtener usuario por id
export const getUserById = async(req,res)=>{
    const {id} = req.params;
   await user.findById(id)
    .then((data)=>res.json(data))
        .catch((error) => { res.json({ message: error }) })
}

//(post) agregar usuario
export const postUser = async(req,res)=>{
    const usuario = user(req.body);
    await usuario.save()
    .then((data)=>res.json(data))
        .catch((error) => { res.json({ message: error }) })
}

//(put) actualizar usuario
export const putUser = async(req,res)=>{
    const {id} = req.params;
    const {nombre,correo,contraseña} =req.body;
   await user.updateOne({_id:id},{$set:{nombre,correo,contraseña}})
    .then((data)=>res.json(data))
        .catch((error) => { res.json({ message: error }) })
}

//(delate) eliminar usuario

export const delateUser = async(req,res)=>{
    const {id} = req.params;
   await user.remove({_id:id})
    .then((data)=>res.json(data))
        .catch((error) => { res.json({ message: error }) })
}