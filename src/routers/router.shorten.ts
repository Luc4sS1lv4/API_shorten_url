import type { FastifyInstance } from "fastify";
import { nanoid } from "nanoid";
import { AuthRouterPriva, controlSession, controlSignup } from "../server.js";





export function RoutersShots(fastify: FastifyInstance) {

    fastify.post("/signup", controlSignup.session)

    fastify.post("/session", controlSession.session)

    //fastify.post("/shorten",{preHandler:{AuthRouterPriva}})

    //fastify.get("/:newURL")
}


