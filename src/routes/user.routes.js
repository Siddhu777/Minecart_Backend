const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller');

router.get('/:usertype',userController.AllUserTypes)

router.get('/:userid',userController.AllUsers)

router.post('/', userController.createUser);
router.post('/login', userController.userLogin)

router.get('/permission/:userid',userController.getUserPermission);
module.exports = router