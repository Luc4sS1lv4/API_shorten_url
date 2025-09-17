import fastify from "fastify";
import { RoutersShots } from "./routers/router.shorten.js";
import formbody from "@fastify/formbody"


const app = fastify()
app.register(formbody)
RoutersShots(app)

async function start() {
    try {
        await app.listen({ port: 8500 })
        console.log("Server rodando na porta: 8500")
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

start()

