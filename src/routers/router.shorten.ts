import type { FastifyInstance } from "fastify";
import {controllerLinkAcess, controllerLinkCre, controlSession, controlSignup } from "../Factory/injects.js";
import { addHook } from "../hooks/auth.js";


export function RoutersShots(fastify: FastifyInstance) {

    fastify.post("/signup", controlSignup.session)

    fastify.post("/session", controlSession.session)

    fastify.post("/shorten",{preHandler:addHook}, controllerLinkCre.Create)

    fastify.get("/:newURL", { preHandler: addHook } , controllerLinkAcess.AcessLink)
}


