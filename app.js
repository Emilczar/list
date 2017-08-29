const express = require('express');
const api = require('./router/index')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use("/node_modules", express.static('node_modules'));     

app.use('/api', api);

app.get('*', (req, res)=> {
    console.log(`path: ${path.join(__dirname,'ng','index.html')}`)
    res.redirect(path.join(__dirname,'ng','index.html'));
});


app.listen(3000, function() {
    console.log('App listening on port 3000!');
});



