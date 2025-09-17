import jwt, { type JwtPayload } from "jsonwebtoken";

export const addHook = (req:any, rep:any, done:any) => {
        const Token: string | undefined = req.headers.authorization?.split(" ")[1]
        if (Token == undefined) throw new Error("Token inválido")
        const decoded = jwt.verify(Token, "senhaSecretaMockada")
        const payload = decoded as JwtPayload
        req.userEmail = payload.email
        done()
    
}
