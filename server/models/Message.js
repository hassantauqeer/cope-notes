const dbLocal = require("db-local");
const { Schema } = new dbLocal({ path: "./database" });

const Message = Schema("Message", {
  _id: { type: String, required: true },
  text: { type: String , required :true},
})
module.exports = Message;
