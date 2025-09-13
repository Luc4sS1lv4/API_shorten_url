import type { FastifyInstance } from "fastify";

export async function AuthRouterPriva(fastify: FastifyInstance){
        fastify.addHook("onRequest", (req, rep, done)=>{
           
            done()
        })
    }
