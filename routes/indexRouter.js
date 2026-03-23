import { Router } from "express";
import { createMessageGet } from "../controllers/messageController.js";
const indexRouter = Router();

const messages = [
  {
    message: "Hello dear friend. I hope this message finds you excellent.",
    name: "Josephine",
    // added: new Date(),
  },
  {
    message: "Hello World!",
    name: "Good Old Average AI (single and interested)",
    // added: new Date(),
  },
  {
    message: "Goodnight World",
    name: "AI hunter",
    // added: new Date()
  },
];

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
