import { RepositoryUser } from "../repository/Users.js";
import { SessionService } from "../services/session.service.js";
import { SignUp } from "../services/signup.service.js";
import { SessionController } from "../controllers/session.controller.js";
import { SigunpController } from "../controllers/singup.controller.js";
import { RepositoLink } from "../repository/Links.js";
import { LinkCreate } from "../services/link.create.js";
import { LinkFind } from "../services/link.find.js";
import { LinkCre } from "../controllers/LinkCreate.controller.js";
import { LinAces } from "../controllers/LinkAcess.controller.js";


//Keep User
const reposUSer = new RepositoryUser()
const servUser = new SessionService(reposUSer)
const servSignup = new SignUp(reposUSer)
const controlSession = new SessionController(servUser)
const controlSignup = new SigunpController(servSignup)

//Keep Link

const repoLink = new RepositoLink()
const serviceLinkCreate = new LinkCreate(repoLink)
const serviceLinkFind = new LinkFind(repoLink)
const controllerLinkCre = new LinkCre(serviceLinkCreate)
const controllerLinkAcess = new LinAces(serviceLinkFind)


export {controlSession, controlSignup, controllerLinkAcess, controllerLinkCre}