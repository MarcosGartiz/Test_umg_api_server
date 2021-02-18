# Testing for API Server at UMG 
API server made for the cloud computing class at UMG<br>
Here's the documentation user should consult to use my API server.<br>
First, this block of code is used to import and required package
//Importing packages

<li>const express = require('express');   //Express </li>
<li>const morgan = require('morgan');     //Morgan</li>
<li>const axios = require('axios');       //Axios</li>
<li>const { response } = require('express');</li>
//Using packages
const app=express();

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

<ol>
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
</ol>
#Hearthstone Metadata<br>
To retrieve all information about Hearthstone that is not specific to cards, use the /hearthstone/metadata endpoint. To see just one category of information, include the category as part of the path as shown in the following examples:<br>
https://us.api.blizzard.com/hearthstone/metadata?locale=en_US<br>
https://us.api.blizzard.com/hearthstone/metadata/sets?locale=en_US<br>
https://us.api.blizzard.com/hearthstone/metadata/classes?locale=en_US<br>
https://us.api.blizzard.com/hearthstone/metadata/keywords?locale=en_US<br>

|Parameter|Type|Value|Description|
|---------|----|-----|-----------|
|:region|String|us,cn|The region of the data to retrieve|
|locale|String|     |The locale to reflect in localized data|
|:type|String|      |The type of the metadata to retrieve.|
<br>
For region the valid values are us,and cn this, because china have their own server, data and api.
For type, the valid values include sets, setGroups, types, rarities, classes, minionTypes, and keywords.



