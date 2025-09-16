import type { FastifyInstance } from "fastify";
import jwt, { type JwtPayload } from "jsonwebtoken";

export async function AuthRouterPriva(fastify: FastifyInstance) {
    fastify.addHook("preHandler", (req, rep, done) => {
        const Token: string | undefined = req.headers.authorization?.split(" ")[1]
        if (Token == undefined) throw new Error("Token inválido")
        const decoded = jwt.verify(Token, "senhaSecretaMockada")
        const payload = decoded as JwtPayload
        req.userEmail = payload.email
        done()
    })
}
