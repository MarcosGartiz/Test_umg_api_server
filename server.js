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

app.post('/dice/roll',function(req, res) {
	var aux = req.body.dice;
	var URL = 'https://api.toys/api/dice_roll/'+aux;
	
	axios.post(URL,	{
		dice: aux,
	}).then((response)=>{
		res.send(response.data)
	}).catch((error) =>{
		req.send(error);
		console.error(error);
	})
});

app.post('/rock/paper/scissors',function(req, res) {
	var aux = req.body.player;
	var URL = 'https://api.toys/api/rock_paper_scissors/'+aux;
	
	axios.post(URL,	{
		player: aux,
	}).then((response)=>{
		res.send(response.data)
	}).catch((error) =>{
		req.send(error);
		console.error(error);
	})
});

app.post('/worm-game/names',function(req, res) {
	var aux = req.body.name;
	var URL = 'https://api.toys/api/worm_name/'+aux;
	
	axios.post(URL,	{
		name: aux,
	}).then((response)=>{
		res.send(response.data)
	}).catch((error) =>{
		req.send(error);
		console.error(error);
	})
});

app.post('/solve-sum',function(req, res) {
	var aux = req.body.sum;
	var URL = 'https://api.toys/api/solve_sum/'+aux;
	
	axios.post(URL,	{
		sum: aux,
	}).then((response)=>{
		res.send(response.data)
	}).catch((error) =>{
		req.send(error);
		console.error(error);
	})
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
app.listen(port, () => {
	console.log('Running');
});
