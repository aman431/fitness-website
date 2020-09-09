require('./models/db');

const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const app = express();
const authControllers = require('./controllers/authRouter');

//var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(urlencodedParser);
app.use(bodyParser.json());


app.use(express.static('public'));
app.set('view engine','ejs');
//app.use(express.json());


app.get('/',(req,res) =>{
	res.render('home');
});

app.use(authControllers);

const port = process.env.PORT || 3000;
app.listen(port,() =>{
	console.log('Port Running on 3000');
});
