import type { IUser } from "./IUser.js";

export interface IReposUser {
    create(nome: string, email: string, senha: string): IUser;
    find(email: string): IUser | undefined;
}
