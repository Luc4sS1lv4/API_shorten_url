import type { IFindDbInMemory } from "../interfaces/IFindShorten.js";


export class LinkFind{
    constructor(private repositLink: IFindDbInMemory){}

    findLink = async (NewUrl: string)=>{
        let Link = this.repositLink.FindMemory(NewUrl)
        if(!Link)throw new Error ("Link não encontrado")
        const umHora: any = 2 * 60 * 1000
        const agora = new Date().getTime()
        const umaHoraDepois = new Date(Link.atDate).getTime() + umHora
        
        if (agora > umaHoraDepois) throw new Error("Link expirado ou inválido")

            Link.Clicks++
        return Link
    }
}


