const express = require('express');
const api = require('./router/index')
const app = express();



app.use('/api', api);

app.get("/",(req,res)=>{
    console.log("strona głowna")
    res.send("strona głowna")

});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});

