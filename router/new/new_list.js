const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const db = require("../../db/index.js")

router.get("/",(req,res)=>{
    console.log("strona new list");
    console.log("test new list  " +__dirname)
    res.send("strona new list");
})

router.post("/",(req,res)=>{
    db.createList(req.body)
    .then( console.log("strona new list"))
    console.log("strona new list");
    res.send("NEW_LIST POST");
})

module.exports = router;


