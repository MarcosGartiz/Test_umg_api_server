# Testing for API Server at UMG 
##API server made for the cloud computing class at UMG
### Here's the documentation user should consult to use my API server.
First, this block of code is used to import and required package
`//Importing packages
const express = require('express');   //Express 
const morgan = require('morgan');     //Morgan
const axios = require('axios');       //Axios
const { response } = require('express');
//Using packages
const app=express();`

I initialize a var named PORT to get the port obtained by Heroku 
//Set PORT heroku
let port =process.env.PORT|| 8080

then set the middleware to read JSON objs by using
`app.use(express.json());
app.use(morgan('dev'));`
#DOCUMENTATION
#POST


