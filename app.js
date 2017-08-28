const express = require('express');
const api = require('./router/index')
const app = express();


const bodyParser = require('body-parser')
app.use(bodyParser.json())
const baza = require("./db/index.js")

app.use('/api', api);

app.get("/",(req,res)=>{
    baza.findAll()
    .then((data)=>{
        res.send(data);
        console.log(`wynik zapytania: ${data}`)
    })
    .catch((err)=>{
        console.log(`error: ${err}`)
    })
    
 

});

const id = "599cadfc734d1d647d03db5f"
const obj = {
    stan: 1
}

let stan = 1;

app.post('/test', (req, res)=> {
    console.log(req.body);
   

  baza.createList(req.body)
    .then((data)=> {res.json(data);
        console.log("wynik zapytania "+ req.body)
    })
    .catch((err)=>{console.log(`error app.js: ${err}`)})
     
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});



