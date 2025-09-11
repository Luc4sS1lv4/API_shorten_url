import type { FastifyInstance } from "fastify";
import { nanoid } from "nanoid";

const db: any = []

export function RoutersShots(fastify: FastifyInstance){
   
   
    fastify.post<{Body: any}>("/shorten", (req, rep)=>{
        const url:any = req.body
        const newURL = nanoid(6)
        url.new = newURL 
        db.push(url)
        rep.send(db)
    })

    fastify.get<{Params: any | []}>("/:newURL", (req, rep)=>{
        const newURL:any = req.params
        const obj = db.find((a:any) => a.new = newURL)
        console.log(obj)
        return rep.redirect(obj.url)
    })
} 


