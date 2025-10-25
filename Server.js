const { error } = require('console')
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const { type } = require('os')
const { title } = require('process')
const { isTaggedTemplateExpression } = require('typescript')





mongoose.connect("mongodb://localhost:27017/DevBoard")
.then(()=>console.log("Connected"))
.catch((error)=>console.log(error))

TaskSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    status:{
        type:String
    },
    userid:{
        type:String
    }
})



BookmarkScema = new mongoose.Schema({
    title:{
        type:String
    },
    url:{
        type:String
    },
    Tag:{
        type:String
    },
    userid:{
        type:String
    }
})



NoteSchema = new mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    userid:{
        type:String
    }
})


TaskModel = mongoose.model("Task",TaskSchema)


BookmarkModel = mongoose.model("Bookmarks",BookmarkScema)


NoteSchema = mongoose.model("Notes",NoteSchema)







app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})