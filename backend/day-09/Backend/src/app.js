// 
//  server ko create karna
// 


const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())

// 
// http://localhost:3000/assets/index-DpJ4elOS.js
// http://localhost:3000/assets/index-Tg5WCKVe.css
// http://localhost:3000/assets/index-DpJ4elOS-2.js
// 

app.use(express.static("./public"))

// 
// POST  /api/notes 
// create new note and save data in mongodb
// 
app.post("/api/notes", async (req,res) => {
    const {title, description} = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "Note created successfully",
        note
    })
    
})

// 
// GET  /api/notes 
// fetch all the notes data from mongodb and send them in the response
// 
app.get("/api/notes", async (req,res) => {
    const notes = await noteModel.find();

   
    res.status(200).json({
        message: "Notes fetched successfully",
        notes
    })
})

// 
// DELETE  /api/notes/:id 
// delete note with the id from req.params
// 
app.delete("/api/notes/:id", async (req,res) => {
    const id = req.params.id

    console.log(id)
     await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Note deleted successfully.",
        
    })
})


// 
// PATCH  /api/notes/:id 
// update the description of the note by id
//  data will be in form of req.body = {description}
app.patch("/api/notes/:id", async (req,res) => {
    const id = req.params.id
    const {description} = req.body

    await noteModel.findByIdAndUpdate(id, { description })

    res.status(200).json({
        message: "Note updated successfully"
    })

} )

// console.log(__dirname)

app.use("*name", (req,res) => {
    // res.send("this is wild card")
    res.sendFile(path.join(__dirname, "..", "/public/index.html"))
})



module.exports = app