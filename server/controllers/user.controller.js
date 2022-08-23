const {User} = require('../models/index')
const { uuid } = require('uuidv4');
const {success, internalServerError, unprocessableEntity} = require('../utils/respond')
module.exports = {
    register: async (req, res) => {
        try{
            if(!req.body.email){
                return unprocessableEntity(res, "email required in request body")
            }
            let user = await User.create({
                _id:uuid(),
                email:req.body.email
            }).save()
            return success(res, {data:user})
        }catch (e){
            return internalServerError(res, e.message)
        }
    }
}