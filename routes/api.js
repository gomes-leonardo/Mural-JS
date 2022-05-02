const express = require('express')
const router = express.Router()
const posts = require('../model/posts')
const cors = require('cors')
const options = { 
    origin: "http://localhost:3000"
}

router.use(cors(options))

router.get("/all", (req,res) =>{
    res.json(JSON.stringify(posts.getAll()))
})

// router.post("/new" , (req,res) =>{ res.json( (posts.getAll()))
// })
    





router.post("/new" ,(req,res) =>{ 
    
    let title = req.body.title
    let description = req.body.description
    posts.newPost(title, description)
    

    res.send("Post adicionado")
})



module.exports = router