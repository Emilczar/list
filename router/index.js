const express = require('express');
const router = express.Router();
const new_list = require("./new/new_list.js");
const history = require("./history/history.js")
const lists = require("./lists/lists.js")

router.use("/new",new_list);
router.use("/history",history)
router.use("/lists",lists)

router.get("/",(req,res)=>{
    console.log("api głowny");
    res.send("api głowny")
})

router.get("/:id",(req,res)=>{
    console.log("id list")
    res.send("id list")
})

router.delete("/:id",(req,res)=>{
    console.log("delete list id")
    res.send("delete list id")
})



module.exports = router;




