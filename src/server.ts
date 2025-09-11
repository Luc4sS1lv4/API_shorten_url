import fastify from "fastify";
import { RoutersShots } from "./routers/router.shorten.js";
import formbody from "@fastify/formbody"

const app = fastify()

app.register(formbody)
RoutersShots(app)

app.listen({port:8080}, ()=>{
    console.log("Server rodando na porta: 8080")
})