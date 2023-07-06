const express = require("express")
const noteRouter = express.Router()
const {authentication} = require("../middleware/authentication")
const {getNotes} = require("../controller/note.controller")
// const{authorise} = require("../middleware/authorise")

// <--------------to create Notes-------------->
// noteRouter.post("/books",authentication,createNotes)

//<--------------to get Notes--------------->
noteRouter.get("/books",authentication,getNotes)


module.exports={noteRouter}


