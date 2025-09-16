import type { IReposUser } from "../interfaces/IFindUsera.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
export class SessionService{
    constructor(private RepositoryU: IReposUser){}

    Session = async (email: string, senha: string)=>{
        const user = this.RepositoryU.find(email)
        if(!user) throw new Error ("Email inválido, por favor digite o email corretamente")

            const validSenha = await bcrypt.compare(user.senha, senha)

            if(!validSenha) throw new Error(" Senha inválida, por favor digite a senha correta")

                const token = jwt.sign(user.email, "senhaSecretaMockada", {expiresIn:"1h"})

                return token 
    }
}