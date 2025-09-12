import type { FastifyInstance } from "fastify";
import { nanoid } from "nanoid";
import type { IShorten } from "../interfaces/IShorten.js";


const db: Array<IShorten>[] = []

export function RoutersShots(fastify: FastifyInstance){
   
   
    fastify.get<{Body:{url: any}}>("/shorten",(req, rep)=>{
        const {url} = req.body
        const newURL = nanoid(6)
        url.new = newURL 
        db.push(url)
        rep.send(db[url])
    })

    /*fastify.get<{Params: {newURL:string}}>("/:newURL", (req, rep)=>{
        const {newURL} = req.params
        const obj = db.find(a => a.new = newURL)
        return rep.redirect(obj)
    })
} 
*/
}
