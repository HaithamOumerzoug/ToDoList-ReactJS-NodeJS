const mongoose = require('mongoose');

/**
 * ToDo list Schema
 */
const ToDoShema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:5,
        maxlength:20
    },
    description:{
        type:String,
        required:true,
        minlength:3,
        maxlength:500
    },
    done:{
        type:Boolean,
        default:false
    },
},{timestamps:true});

ToDoShema.methods={

}

module.exports=mongoose.model('ToDoList',ToDoShema);