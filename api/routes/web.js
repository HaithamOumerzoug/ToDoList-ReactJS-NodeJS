const express = require('express');
const router=express.Router();
const { body } = require('express-validator');
const todolistController=require('../Controllers/ToDoListController');
const listValidator = require('../middleware/listValidator');

router.get('',todolistController.home);

router.get('/alllists',todolistController.getAll);
router.get('/:id',todolistController.getList);
router.post('/addlist',listValidator.ToDolistValidator,todolistController.addList);
router.delete('/:id',todolistController.deleteList);
router.put('/changecheck/:id',listValidator.ToDolistValidator,todolistController.changecheck);
router.put('/:id',todolistController.updateList);

module.exports=router;