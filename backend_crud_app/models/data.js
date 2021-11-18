const mongoose =require("mongoose");
const schema =mongoose.Schema

const data=new schema({
    username:{
        type:String,
        required:true,
     
    },
    DateNaissance:{
        type:Date,
       
    },
    email:{
        type:String,
        required:true,
       
    },
    
}); 


module.exports=mongoose.model("data",data);