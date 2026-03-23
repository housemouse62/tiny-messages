import db from "../db/queries.js";

async function createMessageGet(req, res) {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", { title: "Tiny Messageboard", messages: messages });
}

export { createMessageGet };
