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

<ul>
<li>Sort and Order functionality function the same as /hearthstone/cards.</li>
<li>Card backs are updated as they are released.</li>
<li>textFilter will parse the card name and the description in the locale you are searching.</li>
<li>cardBackCategory refers to the category of the card back. Categories include:</li>
<li>base - Basic card backs</li>
<li>achieve - Card backs obtainable through achievements</li>
<li>fireside - Card backs related to Fireside Gatherings</li>
<li>heroes - Hero card backs</li>
<li>season - Seasonal card backs</li>
<li>legend - Legend (via ranked play) card backs</li>
<li>esports - Esport card backs</li>
<li>game_license - Card backs connected to other Blizzard games</li>
<li>promotion - Promotional card backs</li>
<li>pre_purchase - Pre-purchase card backs</li>
<li>blizzard - Blizzard / Blizzcon card backs</li>
<li>golden - Golden card backs</li>
<li>events - Event card backs</li>






