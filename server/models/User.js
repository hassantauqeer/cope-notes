const dbLocal = require("db-local");
const { Schema } = new dbLocal({ path: "./database" });

const User = Schema("User", {
  _id: { type: String, required: true },
  email: { type: String , required :true},
})
module.exports = User;
