	//Importing packages
	const express = require('express');
	const morgan = require('morgan');
	const axios = require('axios');
	const { response } = require('express');

//Using packages
const app = express();

// Set PORT heroku

let port= process.env.PORT || 8080

//Middleware to read json objs
app.use(express.json());
app.use(morgan('dev'));

//Routes to access the root directory of the API
app.get('/', (req, res) => {
	res.send('<h1>Hello Marcos</h1>');
});

app.get('/test', (req, res) => {
	res.json({
		prop1: 'Hello',
		prop2: 'World',
	});
});


//POST Routes

app.post('/post', (req, res) => {
	console.log(req.body);
	aux = req.body.id;
	aux2 =  req.body.coleccion;
	//Answer to client
	res.send(` id: ${aux} \n coleccion:${aux2}`);
});

app.post('/new/card', (req, res) => {			
	console.log(req.body);
	aux= req.body.name;
	aux1 =  req.body.set;
	aux2= req.body.class;
	aux3 =  req.body.mana;
	aux4= req.body.dmg;
	aux5 =  req.body.hp;
	//Answer to client
	res.send(`Name: ${aux}\n Set: ${aux1} \n Class:${aux2}\n Mana Cost:${aux3} \n Attack: ${aux4} \n Health: ${aux5}`);
});

app.post('/new/item', (req, res) => {
	console.log(req.body);
	aux= req.body.name;
	aux1 =  req.body.type;
	aux2= req.body.class;
	aux3 =  req.body.dmg;
	aux4 =  req.body.level;
	//Answer to client
	res.send(`Name: ${aux}\n Type: ${aux1} \n Class:${aux2}\n Damage:${aux3} \n Level: ${aux4}`);
});

app.post('/new/account', (req, res) => {
	console.log(req.body);
	aux= req.body.name;
	aux1 =  req.body.email;
	aux2= req.body.password;
	aux3 =  req.body.confirm;
	
	//Answer to client
	res.send(`Name: ${aux}\n email: ${aux1} \n Password: \n `);
});

app.post('/assist', (req, res) => {
	console.log(req.body);
	aux= req.body.account;
	aux1 =  req.body.password;
	aux2= req.body.question;
	//Answer to client
	res.send(`Account: ${aux}\n Password:  \n Question:${aux2} \n `);
});

app.post('/error', (req, res) => {
	console.log(req.body);
	aux= req.body.difficult;
	//Answer to client
	res.send(`Difficult: ${aux}\n `);
});

//Testing for Axios APIs
//Get method to request the cardbacks with a text filter integrated to optimize the search 
app.get('/hearthstone/cardbacks/:textfilter', (req, res) => {
	const endpoint = `https://us.api.blizzard.com/hearthstone/cardbacks?locale=en_US&textFilter=${req.params.textfilter}&access_token=USfZNBuPjJt45vKlYyeq7uhzARUGJ2QnR6`;
	axios
		.get(endpoint)
		.then(function (response) {
			console.log(response.data);
			res.send(response.data);
		})
		.catch(function (error) {
			console.log(error);
			res.send(error);
		});
});

app.get('/Diablo/SeasonLB/:season',(req, res) => {
	const endpoint = `https://us.api.blizzard.com/data/d3/season/${req.params.season}?access_token=USfZNBuPjJt45vKlYyeq7uhzARUGJ2QnR6 `;

	axios
		.get(endpoint)
		.then(function (response) {
			console.log(response.data);
			res.send(response.data);
		})
		.catch(function (error) {
			console.log(error);
			res.send(error);
		});
});

app.get('/Metadata/:type', (req, res) => {
	const endpoint = `https://us.api.blizzard.com/hearthstone/metadata/${req.params.type}?locale=en_US&access_token=USfZNBuPjJt45vKlYyeq7uhzARUGJ2QnR6 `;

	axios
		.get(endpoint)
		.then(function (response) {
			console.log(response.data);
			res.send(response.data);
		})
		.catch(function (error) {
			console.log(error);
			res.send(error);
		});
});
app.get('/Diablo/:act/:locale', (req, res) => {
	const endpoint = `https://us.api.blizzard.com/d3/data/act/${req.params.act}?locale=${req.params.locale}&access_token=USfZNBuPjJt45vKlYyeq7uhzARUGJ2QnR6`;

	axios
		.get(endpoint)
		.then(function (response) {
			console.log(response.data);
			res.send(response.data);
		})
		.catch(function (error) {
			console.log(error);
			res.send(error);
		});
});

app.get('/Diablo/Profile/:name/:number', (req, res) => {
	const endpoint = `https://us.api.blizzard.com/d3/profile/${req.params.name}%23${req.params.number}/?locale=en_US&access_token=USfZNBuPjJt45vKlYyeq7uhzARUGJ2QnR6`;
	axios
		.get(endpoint)
		.then(function (response) {
			console.log(response.data);
			res.send(response.data);
		})
		.catch(function (error) {
			console.log(error);
			res.send(error);
		});
});
//Listen Server
app.listen(3000, () => {
	console.log('Running');
});