// require our modules and declare our settings variables 
const express = require('express');
const port = 3000;

const skillsRouter = require('./routes/skills');

// Create our express app
const app = express();

// configure server settings with app.set()
app.set('view engine', 'ejs');

// mount our middleware with app.use()



// mount our routes
app.get('/', function(req, res) {
    res.render('index');
});

// all routes pertaining to /skills
app.use('/skills', skillsRouter);

// tell the app to listen
app.listen(port, function () {
    console.log(`Express is listening on port:${port}`);
});