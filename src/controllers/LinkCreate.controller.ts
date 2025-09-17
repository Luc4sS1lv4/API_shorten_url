import type { LinkCreate } from "../services/link.create.js";

export class LinkCre{
    constructor(private LinkSerice: LinkCreate){}
    
    Create = async (req: any, rep:any)=>{
    try {
        const {UrlOrigin, NewUrl, Clicks} = req.body
        const newLinks = await this.LinkSerice.createLink(UrlOrigin, NewUrl, Clicks)

        return rep.status(201).send(newLinks)
    } catch (error:any) {
        rep.status(401).send({erro: error.messege})
    }

    }
}