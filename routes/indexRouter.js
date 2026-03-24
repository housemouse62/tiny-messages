import { Router } from "express";
import { createMessageGet } from "../controllers/messageController.js";
const indexRouter = Router();

indexRouter.get("/", createMessageGet);

// indexRouter.get("/new", (req, res) => {
//   res.render("form", { title: "A Form!" });
// });

// indexRouter.post("/new", (req, res) => {
//   const data = req.body;
//   messages.push({
//     text: data.messageText,
//     user: data.messageName,
//     added: new Date(),
//   });
//   res.redirect("/");
// });

// indexRouter.get("/messagePage/:index", (req, res) => {
//   const index = Number(req.params.index);
//   const message = messages[index];
//   res.render("messagePage", { message: message });
// });

export default indexRouter;
