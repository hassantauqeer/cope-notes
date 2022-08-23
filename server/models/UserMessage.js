const dbLocal = require("db-local");
const { Schema } = new dbLocal({ path: "./database" });

const UserMessage = Schema("UserMessage", {
  _id: { type: String, required: true },
  messageId: { type: String , required :true},
  userId: { type: String , required :true},
})
module.exports = UserMessage;
