import type { IReposUser } from "../interfaces/IFindUsera.js";
import bcrypt from "bcrypt"

export class SignUp {
    constructor(private repositoryUser: IReposUser) { }

    Create = async (nome: string, email: string, senha: string) => {
        if (!nome || !email || !senha) throw new Error("Todos os campos são obrigatórios")

        const UserExist = this.repositoryUser.find(email)
        if (UserExist) throw new Error("EMmail em uso! Por favor digite um novo email")
        const senhaHasheada = await bcrypt.hash(senha, 12)
        const newUser = this.repositoryUser.create(nome, email, senhaHasheada)

        return newUser
    }
}