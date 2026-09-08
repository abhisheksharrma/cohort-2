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





module.exports = app