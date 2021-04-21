const express = require('express')
const router=express.Router();
const { body } = require('express-validator');
const todolistController=require('../Controllers/ToDoListController');
const listValidator = require('../middleware/listValidator');

router.get('/api',todolistController.home);
router.get('/api/alllists',todolistController.getAll)
router.get('/api/:id',todolistController.getList)
//router.get('/api/addlist')
router.post('/api/addlist',listValidator.ToDolistValidator,todolistController.addList)
router.delete('/api/:id',todolistController.deleteList)
router.put('/api/changecheck/:id',listValidator.ToDolistValidator,todolistController.changecheck)
router.put('/api/:id',todolistController.updateList)

module.exports=router;