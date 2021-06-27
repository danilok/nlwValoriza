import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';
import { GetUserController } from './controllers/GetUserController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();
const getUserController = new GetUserController();

router.post("/login", authenticateUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get("/tags", listTagsController.handle)

router.post("/users", createUserController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);
router.get("/users/:id", getUserController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle)
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle)
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

export { router };