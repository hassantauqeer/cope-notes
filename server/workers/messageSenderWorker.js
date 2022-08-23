const {parentPort} = require('worker_threads');
const startSendingMessage = require("./sendMessage");


(async ()=>{
    await startSendingMessage();
    parentPort.postMessage("completed")
})()

