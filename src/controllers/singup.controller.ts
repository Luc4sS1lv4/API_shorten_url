import {SignUp} from "../services/signup.service.js"


export class SigunpController {
    constructor(private serviceSession: SignUp){}
    session =  async (req: any, rep: any)=>{
        try {
            const { nome, email, senha } = req.body
            const user = await this.serviceSession.Create(nome, email, senha)
            return rep.status(200).send(user)

        } catch (e: any) {
            return rep.status(400).send({ erro: e.message })
        }

    }
}