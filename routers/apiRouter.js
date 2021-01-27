import express from "express";
import routes from "../routes";
import { 
    postRegisterView
} from "../controllers/videoController";
import { getLoggedUser } from "../controllers/userController";


const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);



apiRouter.get(routes.loggedUser, getLoggedUser)

export default apiRouter;