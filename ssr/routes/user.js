const express = require('express');
const userControler = require('../controler/user');
const router = express.Router();

router
.post('/', userControler.createUser)
.get('/', userControler.getAllUser)
.get('/:id', userControler.getUser)
.put('/:id', userControler.replaceUser)
.patch('/:id', userControler.updateUser)
.delete('/:id',userControler.deleteUser);

exports.router = router