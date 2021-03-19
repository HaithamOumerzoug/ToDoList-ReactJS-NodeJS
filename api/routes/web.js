const express = require('express')
const router=express.Router();

const todolistController=require('../Controllers/ToDoListController');

router.get('/',todolistController.home);
router.get('/alllists',todolistController.getAll)
router.get('/:id',todolistController.getList)
//router.get('/addlist')
router.post('/addlist',todolistController.addList)
router.delete('/:id',todolistController.deleteList)
router.put('/changecheck/:id',todolistController.changecheck)
router.put('/:id',todolistController.updateList)

module.exports=router;