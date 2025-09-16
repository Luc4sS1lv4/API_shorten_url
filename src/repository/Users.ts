import type { IUser } from "../interfaces/IUser.js";
import type { IReposUser } from "../interfaces/IFindUsera.js";

const db: Array<IUser>[] = []

export class RepositoryUser{
    constructor(private repositorUser: IReposUser){}
}