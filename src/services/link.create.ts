import { nanoid } from "nanoid";
import type { IFindDbInMemory } from "../interfaces/IFindShorten.js";

export class LinkCreate {
    constructor(private ReposiLink: IFindDbInMemory) { }

    createLink = async (UrlOrigin: string, NewUrl: string, Clicks: number, atDate: Date) => {
        if (!UrlOrigin) throw new Error("Adicione um link, campo obrigatório")
        const URL = this.ReposiLink.FindMemory(UrlOrigin)
        if (URL) throw new Error("O link ja foi incurtado antes, selecione um novo link")
        const newl = nanoid(6)
        const Experin = 60 * 60 * 1000
        const agora = new Date()
        atDate = new Date(agora)
        const future = atDate.setHours(atDate.getHours() + 1)
        Clicks = 0
        NewUrl = newl
        if (atDate.getTime() == future) throw new Error ("Link expirado")
            
            return this.ReposiLink.create(UrlOrigin, NewUrl, Clicks, atDate)
    }
}