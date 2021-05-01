const ToDoList=require('../models/ToDoList');

exports.home=(req,res)=>{
    res.send("Hello!");
}
/**
 * Get all lists 
 */
exports.getAll=async (req,res)=>{
    try {
        const lists = await ToDoList.find({}).sort({createdAt:-1})//Get lists order by Creation date
        res.send(lists);
    } catch (err) {
        res.send("Erreur").status(400);
    }    
}
/**
 * Get list by Id
 */
exports.getList=async (req,res)=>{
    try {
        const list = await ToDoList.findById(req.params.id);
        res.json(list)
    } catch (err) {
        res.send("Not Found!").status(404);
    }
}
/**
 * Add list
 */
exports.addList=async (req,res)=>{
    const todolist = new ToDoList(req.body);
    try {
        const list =await todolist.save();
        res.json(list);
    } catch (err) {
        res.send('Les informations sont invalide').status(400);
    }
}

/**
 * Update list
 */
exports.updateList=async (req,res)=>{
    try {
        const uplist = await ToDoList.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.send(uplist)
    } catch (err) {
        res.send('Les informations sont invalide').status(400);
    }
}
/**
 * Delete list
 */
exports.deleteList=async (req,res)=>{
    try {
        const oldlist =await ToDoList.findByIdAndDelete(req.params.id)
        res.json(oldlist);
    } catch (err) {
        res.send('Not Found').status(404);
    }
}

/**
 * Make the list Done
 */
exports.changecheck=async (req,res)=>{
    try {
        const newlist =await ToDoList.findById(req.params.id)
        const done=newlist.done;
        newlist.done=!done;
        const resultat=await newlist.save();
        res.send(resultat)
    } catch (err) {
        res.status(400).send('Bad request');
    }
}