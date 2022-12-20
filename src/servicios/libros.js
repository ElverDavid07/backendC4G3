import books from '../model/libros.js'

//?(get) obtener todos los libros
export const getBooks = async (req,res)=>{
    await books.find()
    .then((data)=>res.json(data))
    .catch((error) => { res.json({ message: error }) })
}
//?(get) obtener libros por id
export const getBooksById = async(req,res)=>{
    const {id} = req.params;
    await books.findById(id)
    .then((data)=>res.json(data))
    .catch((error) => { res.json({ message: error }) })
}

//?(post) agregar libros
export const postBooks = async(req,res)=>{
    const guardarBooks = books(req.body);
    await guardarBooks.save()
    .then((data)=>res.json(data))
        .catch((error) => { res.json({ message: error }) })
}

//?(put) actualizar libros

export const putBooks = async(req,res)=>{
    const {id} = req.params;
    const { libro,categoria,autor} = req.body;
    await books.updateOne({_id:id},{$set:{libro,categoria,autor}})
    .then((data)=>res.json(data))
        .catch((error) => { res.json({ message: error }) })
}

//?(delate) eliminar libros
export const delateBooks = async(req,res)=>{
    const {id} = req.params;
   await books.deleteOne({_id:id})
    .then((data)=>res.json(data))
        .catch((error) => { res.json({ message: error }) })
        
}