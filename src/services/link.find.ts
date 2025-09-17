import type { IFindDbInMemory } from "../interfaces/IFindShorten.js";


export class LinkFind{
    constructor(private repositLink: IFindDbInMemory){}

    findLink = async (NewUrl: string)=>{
        const Link = this.repositLink.FindMemory(NewUrl)

    }
}

//Preciso incluir mais um método na interdace user e mais um campo na tabela de links guardada em memória
