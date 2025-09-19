import {validationResult} from "express-validator";

export function handleValidationErrors(req, res, next){
    const errors = validationResult(req);
    console.log("The e", errors);
        if(!errors.isEmpty()){
            return res.status(400).json({"errors": errors.array().map((err)=> err.msg)});
        }
    next();
}