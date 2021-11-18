const {validationResult}=require("express-validator");



exports.validation=(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors:errors.array().map((el)=>({
            msg:el.msg,
        })),
        });
        
        }
    next();
};