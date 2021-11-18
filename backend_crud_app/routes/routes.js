const express = require('express');
const router =express.Router();
const controllers= require("../controllers/functions");
const {validation}=require("../midleware/validator");


router.post("/",validation,controllers.get_data);
router.post("/add",validation,controllers.add_data);
router.post("/edit",validation,controllers.edit_data);
router.post("/delete/:id",validation,controllers.delete_data);


module.exports=router;