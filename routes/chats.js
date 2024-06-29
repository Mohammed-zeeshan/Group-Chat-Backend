const express = require('express');

const router = express.Router();

const messageController = require('../controllers/chats');
const userauthentication = require('../middleware/auth');

router.post('/chat/sendmessage/:id', userauthentication.authenticate, messageController.postMessages);

router.get('/chat/messages/:id', userauthentication.authenticate, messageController.getMessages);

router.post('/chat/creategroup', userauthentication.authenticate, messageController.creategroup);

router.get('/chat/grouplist', userauthentication.authenticate, messageController.grouplist);

router.post('/chat/addmember', userauthentication.authenticate, messageController.addmember);

module.exports = router;