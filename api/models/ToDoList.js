const mongoose = require('mongoose');

const ToDoShema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:5,
        maxlength:200
    },
    description:{
        type:String,
        required:false,
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