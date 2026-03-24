import { Router } from "express";
import {
  createMessageGet,
  createMessageFormGet,
  createMessageFormPost,
  showMessageGet,
} from "../controllers/messageController.js";
const indexRouter = Router();

indexRouter.get("/", createMessageGet);

indexRouter.get("/new", createMessageFormGet);

indexRouter.post("/new", createMessageFormPost);

indexRouter.get("/messagePage/:id", showMessageGet);

export default indexRouter;
