import type { FastifyInstance } from "fastify";
import { nanoid } from "nanoid";


export function RoutersShots(fastify: FastifyInstance){
    const db: any = []
   
   
    fastify.post<{Body: any}>("/shorten", (req, rep)=>{
        const url:any = req.body
        const newURL = nanoid(6)
        url.new = newURL 
        db.push(url)
        rep.send(db)
    })

    fastify.get<{Params: any | []}>("/localhost:8080/:{{db.newURL}}", (req, rep)=>{
        const urloriginal = db.newURL
        rep.redirect(urloriginal)
    })
}