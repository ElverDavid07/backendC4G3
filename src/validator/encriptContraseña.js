import bcrypt from 'bcryptjs'

export const encryptConstraseña= async (contraseña)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(contraseña,salt)
}

export const compareContraseña = async (contraseña,newContraseña)=>{ 
    return await bcrypt.compare(contraseña,newContraseña)
}

