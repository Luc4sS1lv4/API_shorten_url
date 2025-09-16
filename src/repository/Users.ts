import type { IUser } from "../interfaces/IUser.js";
import type { IReposUser } from "../interfaces/IFindUsera.js";

const db: Array<IUser> = []

export class RepositoryUser implements IReposUser{
    
    create(nome: string, email: string, senha: string): IUser{
        const User = {nome, email, senha}
       db.push(User)
        return User
    }
    
    find(email: string): IUser | undefined{
        const user = db.find(e => e.email == email)
        return user
    }

}
