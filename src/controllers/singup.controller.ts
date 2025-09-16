import type { SignUp } from "../services/signup.service.js"


export class SigunpController {
    constructor(private serviceSession: SignUp){}
    session= async (req: any, rep: any)=>{
        try {
            const { nome, email, senha } = req.body
            return rep.status(200).send(this.serviceSession.Create(nome, email, senha))

        } catch (e: any) {
            return req.status(400).send({ erro: e.message })
        }

    }
}