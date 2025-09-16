import type { SessionService } from "../services/session.service.js"

export class SessionController {
    constructor(private serviceSession: SessionService){}
    session= async (req: any, rep: any)=>{
        try {
            const { nome, email, senha } = req.body
            return rep.status(200).send(this.serviceSession.Session(email, senha))

        } catch (e: any) {
            return req.status(400).send({ erro: e.message })
        }

    }
}