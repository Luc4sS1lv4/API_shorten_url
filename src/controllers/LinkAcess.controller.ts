import type { LinkFind } from "../services/link.find.js";

export class LinAces{
    constructor(private LinkAceServ: LinkFind){}

    AcessLink = async (req:any, rep:any)=>{
        try{
            const { newURL } = req.params
            const newL = await this.LinkAceServ.findLink(newURL)
            console.log(newL)
            return rep.redirect(newL?.UrlOrigin);

        }catch(e:any){
            return rep.status(400).send({mensagem: e.message})
        }
    }

}