const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    console.log("strona new list");
    res.send("strona new list");
})

router.post("/",(req,res)=>{
    console.log("strona new list");
    res.send("NEW_LIST POST");
})

module.exports = router;


