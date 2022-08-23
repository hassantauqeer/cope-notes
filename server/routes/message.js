var express = require('express');
var router = express.Router();
const controller = require('../controllers/message.controller')


/*
* Create a message
*  */
router.post('/', controller.createMessage);

/*
 * Set interval for messages
 *  */
router.get('/interval', controller.getInterval);

/*
 * To Update message's interval for message workers
 *  */
router.put('/updateMessageInterval', controller.updateMessageInterval);

/*
 * To start the message worker to send messages
 *  */
router.post('/start', controller.start);

/*
 * To stop the message worker to send messages
 *  */
router.post('/stop', controller.stop);

module.exports = router;
