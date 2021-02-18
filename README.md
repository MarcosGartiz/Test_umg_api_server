# Testing for API Server at UMG 
API server made for the cloud computing class at UMG
Here's the documentation user should consult to use my API server.
First, this block of code is used to import and required package
//Importing packages
`const express = require('express');   //Express` 
`const morgan = require('morgan');     //Morgan`
`const axios = require('axios');       //Axios`

const { response } = require('express');
//Using packages
const app=express();`

I initialize a var named PORT to get the port obtained by Heroku 
//Set PORT heroku
`let port =process.env.PORT|| 8080`

then I set middleware to read JSON objs by using
`app.use(express.json());
app.use(morgan('dev'));`


APIs from blizzard/n
to use the blizzard api it may request OAuth to generate a client ID and secret token available for 24 hours 
GET
Hearthstone Card Backs
My Cardbacks API [http://localhost:3000/hearthstone/cardbacks/:textfilter] consulted from the endpoint
[https://us.blizzard.com/hearthstone/cards?locale=en_US&textFilter=${req.params.textfilter}&access_token=]

The following information applies to search parameters used with the /hearthstone/cardbacks endpoint.

1.Sort and Order functionality function the same as /hearthstone/cards.
2.Card backs are updated as they are released.
3.textFilter will parse the card name and the description in the locale you are searching.
4.cardBackCategory refers to the category of the card back. Categories include:
5.base - Basic card backs
6.achieve - Card backs obtainable through achievements
7.fireside - Card backs related to Fireside Gatherings
8.heroes - Hero card backs
9.season - Seasonal card backs
10.legend - Legend (via ranked play) card backs
11.esports - Esport card backs
12.game_license - Card backs connected to other Blizzard games
13.promotion - Promotional card backs
14.pre_purchase - Pre-purchase card backs
15.blizzard - Blizzard / Blizzcon card backs
16.golden - Golden card backs
17.events - Event card backs






