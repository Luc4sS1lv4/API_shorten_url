import { RepositoryUser } from "../repository/Users.js";
import { SessionService } from "../services/session.service.js";
import { SignUp } from "../services/signup.service.js";
import { SessionController } from "../controllers/session.controller.js";
import { SigunpController } from "../controllers/singup.controller.js";

//Keep User
const reposUSer = new RepositoryUser()
const servUser = new SessionService(reposUSer)
const servSignup = new SignUp(reposUSer)
const controlSession = new SessionController(servUser)
const controlSignup = new SigunpController(servSignup)

export {controlSession, controlSignup}