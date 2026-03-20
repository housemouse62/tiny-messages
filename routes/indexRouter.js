import { Router } from "express";
const indexRouter = Router();

const messages = [
  {
    text: "Hello dear friend. I hope this message finds you excellent.",
    user: "Josephine",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Good Old Average AI (single and interested)",
    added: new Date(),
  },
  { text: "Goodnight World", user: "AI hunter", added: new Date() },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Tiny Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "A Form!" });
});

indexRouter.post("/new", (req, res) => {
  const data = req.body;
  messages.push({
    text: data.messageText,
    user: data.messageName,
    added: new Date(),
  });
  res.redirect("/");
});

export default indexRouter;
