const mongoose = require("mongoose")
const db = require("./config_db/db_conect.json")
const fs = require("fs");
const path = require("path")
var Schema = mongoose.Schema;
var obj = JSON.parse(fs.readFileSync(path.join(__dirname, "config_db", "db_conect.json"), "utf8"));

mongoose.Promise = global.Promise


mongoose.connect(`mongodb://${obj.dbuser}:${obj.dbpassword}@ds163060.mlab.com:63060/ec_node1`);



const List = mongoose.model("Lista", new Schema({
    name: String,
    stan: Number,
    list: []
}, {
    collection: 'lista'
}))

/* function findAll(cb) {

    List.find({}, (err, data) => {
        if (err) {
            cb(err);
        } else {
            cb(null, data)
        }
    });
} */

function findAll(){
  return List.find({})
  .then((data)=>data)
  .catch((err)=>{console.log("errro")})

}
module.exports = {
    findAll
   
}