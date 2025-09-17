import { nanoid } from "nanoid";
import type { IFindDbInMemory } from "../interfaces/IFindShorten.js";

export class LinkCreate {
    constructor(private ReposiLink: IFindDbInMemory) { }

    createLink = async (UrlOrigin: string, NewUrl: string, Clicks: number) => {
        if (!UrlOrigin) throw new Error("Adicione um link, campo obrigatório")
        const URL = this.ReposiLink.FindMemory(UrlOrigin)
        if (URL) throw new Error("O link ja foi incurtado antes, selecione um novo link")
        const newl = nanoid(6)
        Clicks = 0
        NewUrl = newl
        const newLink = this.ReposiLink.create(UrlOrigin, NewUrl, Clicks)
        return newLink
    }
}