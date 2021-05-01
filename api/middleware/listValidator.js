exports.ToDolistValidator=(req,res,next)=>{

    req.check('title','Title is required !')
        .notEmpty().isLength({min:3,max:20})
        .withMessage('Title must be between 3 and 20 caracter !');

    req.check('description','Description is required !')
        .notEmpty().isLength({min:6})
        .withMessage('Description must more then 6 caracter !');

    const errors=req.validationErrors();

    if(errors){
        return res.status(400).send(errors);
    }
    next();
}