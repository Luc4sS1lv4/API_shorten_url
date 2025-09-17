import type { SessionService } from "../services/session.service.js"

export class SessionController {
    constructor(private serviceSession: SessionService){}
    session= async (req: any, rep: any)=>{
        try {
            const {email, senha } = req.body
            return rep.status(201).send(await this.serviceSession.Session(email, senha))

        } catch (e: any) {
            return rep.status(400).send({ erro: e.message })
        }

    }
}