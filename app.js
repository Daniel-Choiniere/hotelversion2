var express = require('express');
var toDoController = require('./controller.js');

var app = express();

app.get('/profile/:name', function(req, res){
    var data = {age:29, job: 'ninja'};
    res.render('profile', {person: req.params.name, data: data});
});

// set up the template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
toDoController(app);

// listen to port
app.listen(process.env.PORT, process.env.IP, function() {
    console.log('now listening for requests');
});
