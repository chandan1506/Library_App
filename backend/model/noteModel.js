const mongoose=require("mongoose");

const noteSchema=mongoose.Schema({
    title : { type: String, required: true },
    author : { type: String, required: true },
    userID : { type: String, required: true }
   
})

const Notemodel=mongoose.model("note",noteSchema)

module.exports={Notemodel}