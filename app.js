const express = require('express');
const api = require('./router/index')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.set('views',path.join(__dirname,'views'))
//app.set('ng',path.join(__dirname,'ng'))
//app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'ng')))

app.set('views',express.static(path.join(__dirname,"views")))
app.use('/api', api);

app.get('*', (req, res) => {
    
    //res.render('index.html');
    res.sendfile(path.join('views','index.html'))

});


app.listen(3000, function () {
    console.log('App listening on port 3000!');
});