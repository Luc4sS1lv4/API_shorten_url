import type { FastifyInstance } from "fastify";
import { nanoid } from "nanoid";
import db from "../repository/Links.js";
import type { IShorten } from "../interfaces/IShorten.js";



export function RoutersShots(fastify: FastifyInstance) {


    fastify.post<{ Body: { url: string } }>("/shorten", (req, rep) => {
        const { url } = req.body
        const newURL = nanoid(6)
        const linkManager: IShorten = {
            UrlOrigin: url,
            NewUrl: newURL,
            Clicks: 0
        }

        db.push(linkManager)
        rep.send(db)
    })

    fastify.get<{ Params: { newURL: string } }>("/:newURL", (req, rep) => {
        const { newURL } = req.params
        const obj = db.find(a => a.NewUrl == newURL)
        if (!obj) throw new Error("Link não encontrado")
        obj.Clicks++
        console.log(`clicou no link: ${obj.Clicks} vezes`)
        return rep.redirect(obj.UrlOrigin)
    })
}


