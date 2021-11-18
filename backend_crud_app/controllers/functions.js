const  data =require("../models/data")


exports.get_data=async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).send("error happen while reading data")
        console.log(error)
    }

}

exports.add_data=async(req,res)=>{
    const { username,dateNaissance,email }=req.body;
    let id = req.params.id;

    try {
        await data.addOne( {_id: id});
        res.status(200).send("created successfuly");
    } catch (error) {
        res.status(500).send("error happen while creating your data")
        console.log(error)
    }

}

exports.edit_data=async(req,res)=>{
    const { username,dateNaissance,email }=req.body;
    let id = req.params.id;

    try {
        await data.updateOne( {_id: id});
        res.status(200).send("updated successfuly");
    } catch (error) {
        res.status(500).send("error happen while updating")
        console.log(error)
    }

}

exports.delete_data=async(req,res)=>{
    let id = req.params.id;
    try {
        await data.deleteOne( {_id: id});
        res.status(200).send("deleted successfuly");
    } catch (error) {
        res.status(500).send("error happen while deleting")
        console.log(error)
    }

}