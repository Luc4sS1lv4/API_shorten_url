import fastify from "fastify";
import { RoutersShots } from "./routers/router.shorten.js";
import { AuthRouterPriva } from "./hooks/auth.js";
import formbody from "@fastify/formbody"

const app = fastify()

app.register(formbody)
RoutersShots(app)
AuthRouterPriva(app)



app.listen({port:8500}, ()=>{
    console.log("Server rodando na porta: 8500")
})

