const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("get history list");
    console.log("get history list");
})

router.get("/:id",(req,res)=>{
    res.send("get history ID");
    console.log("get history ID");
})

router.delete("/all",(res,req)=>{
    res.send("delete all list")
    console.log("delete all list")
})

router.delete("/:id",(req,res)=>{
    res.send("delete ID list");
    console.log("delete ID list");
})

module.exports = router;