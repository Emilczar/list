const express = require('express');
const api = require('./router/index')
const app = express();

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


app.get('/test', (req, res)=> {
    baza.findAll()
    .then((data)=> {res.send(data);
        console.log("wynik zapytania "+ data)
    })
    .catch((err)=>{console.log(`error: ${err}`)})
    
    
  
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});

