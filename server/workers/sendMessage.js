const {Message, User, UserMessage, Configs} = require('../models/index')
const {uuid} = require("uuidv4");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let msgcount = 0;
const sendMessage = async (messageId, userId)=>{
    msgcount += 1;
    let userMessage = await UserMessage.create({
        _id:uuid(),
        messageId,
        userId,
    }).save()
    console.log(msgcount,' userMessage ==> ', userMessage)
}
const startSendingMessage = async ()=>{
    try{
        let config = await Configs.find();
        config[0].workerStatus = "running"
        Configs.remove(config[0])
        config = Configs.create(config[0]).save();
        let {intervalDuration, timeUnit} = await Configs.find()[0]
        if(timeUnit === 'sec'){
            intervalDuration = intervalDuration * 1000
        }else if (timeUnit === 'min'){
            intervalDuration = intervalDuration * 1000 * 60
        }else if (timeUnit === 'hour'){
            intervalDuration = intervalDuration * 1000 * 60 * 60
        }

        let messages = await Message.find()
        let users = await User.find()
        // console.log(messages)
        // console.log(users)
        for (let i=0;i<messages.length;i++){
            let alreadySent;
            for (let j=0;j<users.length;j++){
                console.log('searching Message ==>' +  messages[i]._id, 'of user ==> ',users[j]._id)
                alreadySent = UserMessage.find({messageId:messages[i]._id,userId:users[j]._id})
                // console.log(alreadySent)
                // console.log(!alreadySent.length)
                if(!alreadySent.length){
                    await sendMessage(messages[i]._id,users[j]._id);
                }
            }
            if(!alreadySent.length){
                console.log("intervalDuration=>", intervalDuration)
                await sleep(intervalDuration)
            }
        }
        config = await Configs.find();
        config[0].workerStatus = "completed"
        Configs.remove(config[0])
        config = Configs.create(config[0]).save();
    }catch (e) {
        console.log(e)
    }
}

module.exports = startSendingMessage