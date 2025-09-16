export interface IReposUser{
    create(nome: string, email: string, senha: string): Array<string>[]
    find(email: string): Array<string>[]
}