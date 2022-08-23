const dbLocal = require("db-local");
const { Schema } = new dbLocal({ path: "./database" });

const Configs = Schema("Configs", {
  _id: { type: String, required: true },
  intervalDuration: { type: Number , required :true},
  timeUnit:{type: String , required :true, default:'min'},
  workerStatus:{type:String, default:'none'}
})
module.exports = Configs;
