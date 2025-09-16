import fastify from "fastify";
import { RoutersShots } from "./routers/router.shorten.js";
import { AuthRouterPriva } from "./hooks/auth.js";
import formbody from "@fastify/formbody"
import { RepositoryUser } from "./repository/Users.js";
import { SessionService } from "./services/session.service.js";
import { SignUp } from "./services/signup.service.js";
import { SessionController } from "./controllers/session.controller.js";
import { SigunpController } from "./controllers/singup.controller.js";

const app = fastify()


//Keep User
const reposUSer = new RepositoryUser()
const servUser = new SessionService(reposUSer)
const servSignup = new SignUp(reposUSer)
const controlSession = new SessionController(servUser)
const controlSignup = new SigunpController(servSignup)

// Middleware de autorização
AuthRouterPriva(app)



app.register(formbody)
RoutersShots(app)
AuthRouterPriva(app)



app.listen({port:8500}, ()=>{
    console.log("Server rodando na porta: 8500")
})

export {controlSession, controlSignup, AuthRouterPriva}