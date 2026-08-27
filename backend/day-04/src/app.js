

const express = require("express")


const app = express()

app.use(express.json())

const notes = [

    // {
    //     title: "sample title 1",
    //     description: "sample description 1"
    // }

]


app.get("/", (req,res) => {
    res.send("Hello World")
})

// notes created

app.post("/notes", (req,res) => {
    console.log(req.body)
    notes.push(req.body)
    res.send("note created")
})

// notes check

app.get("/notes", (req,res) => {
    res.send(notes)
})

//  note deleted

app.delete("/notes/:index", (req,res) => {
    delete notes [(req.params.index)]
        res.send("note deleted successfully")
})

// modified notes

app.patch("/notes/:index", (req,res) => {
    notes[ req.params.index ].description = req.body.description

    res.send("note modified successfully")
})


// modified notes

app.put("/notes/:index", (req,res) => {
    notes[ req.params.index ] = {title: req.body.title,description: req.body.description}

    res.send("note updated successfully")
})


module.exports = app