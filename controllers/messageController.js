import { body, matchedData, validationResult } from "express-validator";
import db from "../db/queries.js";
const nameLengthErr = "must be between 1 and 10 characters.";
const messageLengthErr = "must be between 1 and 255 characters.";

const validateUser = [
  body("name")
    .trim()
    .isLength({ min: 1, max: 10 })
    .withMessage(`Name ${nameLengthErr}`),
  body("message")
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage(`Message ${messageLengthErr}`),
];

async function createMessageGet(req, res) {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", { title: "Tiny Messageboard", messages: messages });
}

async function createMessageFormGet(req, res) {
  res.render("form", { title: "A Form!" });
}

export const createMessageFormPost = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .render("form", { title: "A Form!", errors: errors.array() });
    }
    const { name, message } = matchedData(req);
    await db.addMessage(name, message);
    res.redirect("/");
  },
];

async function showMessageGet(req, res) {
  const id = req.params.id;
  const results = await db.showMessage(id);
  console.log(results);
  res.render("messagePage", { message: results });
}

export { createMessageGet, createMessageFormGet, showMessageGet };
