const {Notemodel}=require("../model/noteModel")


// noteRouter.get("/allnotes",authentication,authorise(["user","seller"]),async(req,res)=>{
//     try {
//         const result=await Notemodel.find()
//         res.status(200).json(result)
//     } catch (err) {
//         res.status(500).json({"err":err.message})
//     }
// })

// noteRouter.post("/create",authentication,authorise(["seller"]),async(req,res)=>{
//     const body=req.body;
//     try {
//         const new_note=new Notemodel(body)
//         await new_note.save()
//         res.status(200).json("Created Note")
//     } catch (err) {
//         res.status(500).json({"err":err.message})
//     }
// })

const getNotes = (req,res)=>{
    res.json("you are welcome")
}



module.exports = {getNotes}