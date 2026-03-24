import db from "../db/queries.js";

async function createMessageGet(req, res) {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", { title: "Tiny Messageboard", messages: messages });
}

async function createMessageFormGet(req, res) {
  res.render("form", { title: "A Form!" });
}

async function createMessageFormPost(req, res) {
  const { name, message } = req.body;
  await db.addMessage(name, message);
  res.redirect("/");
}

async function showMessageGet(req, res) {
  const id = req.params.id;
  const results = await db.showMessage(id);
  console.log(results);
  res.render("messagePage", { message: results });
}

export {
  createMessageGet,
  createMessageFormGet,
  createMessageFormPost,
  showMessageGet,
};
