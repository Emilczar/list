const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    console.log("lista all")
    res.send("lista all")
})


router.put("/:id",(req,res)=>{
    console.log("edit list ")
    res.send("edit list ")
})

router.delete("/all",(req,res)=>{
    console.log("delete all list")
    res.send("delete all list")
})

router.delete("/:id",(req,res)=>{
    console.log("delete id from list")
    res.send("delete id from list")
})

router.post("/:id",(req,res)=>{
    console.log("close list")
    res.send("close list")
})

module.exports = router