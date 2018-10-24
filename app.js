var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

var db;

if (process.env.ENV == 'Test')
	db = mongoose.connect('mongodb://localhost/bookAPI_test');
else
	db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes.js')(Book);

app.use('/api/Books', bookRouter);
// app.use('/api/Author', authorRouter);

app.get('/', (req, res) => {
	res.send('Welcome to my Book-Author API !');
});

app.listen(port, () => {
	console.log('Listening on port: ' + port);
});

module.exports = app;