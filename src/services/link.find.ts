import { link } from "fs";
import type { IFindDbInMemory } from "../interfaces/IFindShorten.js";


export class LinkFind{
    constructor(private repositLink: IFindDbInMemory){}

    findLink = async (NewUrl: string)=>{
        const Link = this.repositLink.FindMemory(NewUrl)
        if(!Link)throw new Error ("Link não encontrado")
            Link.Clicks++
        return Link
    }
}


