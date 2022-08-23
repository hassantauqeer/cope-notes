const {Message, Configs} = require('../models/index')
const { uuid } = require('uuidv4');
const { Worker }= require('worker_threads')
const {success, internalServerError, unprocessableEntity} = require('../utils/respond')

let worker = null;
module.exports = {
    createMessage: async (req, res) => {
        try{
            if(!req.body.message){
                return unprocessableEntity(res, "message required in request body")
            }
            let message = await Message.create({
                _id:uuid(),
                text:req.body.message
            }).save()
            return success(res, {data:message})
        }catch (e){
            return internalServerError(res, e.message)
        }
    },
    getInterval: async (req, res) => {
        try{
            let config = await Configs.find()[0];
            return success(res, {data:config})
        }catch (e){
            return internalServerError(res, e.message)
        }
    },
    updateMessageInterval: async (req, res) => {
        try{
            if(!req.body.intervalDuration || !req.body.timeUnit){
                if(!req.body.intervalDuration)
                    return unprocessableEntity(res, "intervalDuration required in request body")
                return unprocessableEntity(res, "timeUnit required in request body")
            }
            let config = await Configs.find();
            config[0].intervalDuration = req.body.intervalDuration
            config[0].timeUnit = req.body.timeUnit
            Configs.remove(config[0])
            config = Configs.create(config[0]).save();
            return success(res, {data:config})

        }catch (e){
            console.log(e)
            return internalServerError(res, e.message)
        }
    },
    start: async (req, res) => {
        try{
            if(worker){
                return success(res, {status:"already running"})
            } else {
                worker = new Worker('./workers/messageSenderWorker.js');
                worker.on('message',(data)=>{
                    console.log(data)
                    worker = null;
                })
                return success(res, {status:"started"})
            }

        }catch (e){
            console.log(e)
            return internalServerError(res, e.message)
        }
    },
    stop: async (req, res) => {
        try{
            if(worker){
                worker.terminate()
                worker = null;
                let config = await Configs.find();
                config[0].workerStatus = "terminated"
                Configs.remove(config[0])
                config = Configs.create(config[0]).save();
                return success(res, {status:"stopped"})
            }else{
                return success(res, {status:"not running"})
            }
        }catch (e){
            console.log(e)
            return internalServerError(res, e.message)
        }
    }
}
