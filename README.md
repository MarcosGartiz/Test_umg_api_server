# Testing for API Server at UMG 
API server made for the cloud computing class at UMG<br>
Here's the documentation user should consult to use my API server.<br>
First, this block of code is used to import and required package
//Importing packages

<li>const express = require('express'); </li>
<li>const morgan = require('morgan'); </li>
<li>const axios = require('axios'); </li>
<li>const { response } = require('express');</li>


APIs from blizzard<br>

Important to know <strong>before</strong> use blizzard's api is that it request OAuth token generated by introducing client ID and secret token available for 24 hours <br>
Also important the different region host available<Br>
  |Region|Host|Available locale|
|---------|----|-----|
|North America|https://us.api.blizzard.com/|en_US<br>es_MX<br>pt_BR|
|Europe|https://eu.api.blizzard.com/|en_GB<br>es_ES<br>pt_PT<br>fr_FR<br>ru_RU<br>de_DE<br>it_IT<br>|
|Korea|https://kr.api.blizzard.com/| ko_KR |
|Taiwan|https://tw.api.blizzard.com/| zh_TW |
|China|https://gateway.battlenet.com.cn/| zh_CN|
  <br>
<strong>Hearthstone Card Backs</strong><br>
My Cardbacks API [http://localhost:3000/hearthstone/cardbacks/:textfilter]<br>
Consulted from the endpoint [https://us.blizzard.com/hearthstone/cards?locale=en_US&textFilter=${req.params.textfilter}&access_token=]<br>

|Parameter|Type|Value|Description|
|---------|----|-----|-----------|
|region|String|    |The region of the data to retrieve|
|locale|String|     |The locale to reflect in localized data|
|TextFilter|String|      |text Filter will parse the card name and the description in the locale you are searching.|
<br>
<strong>Hearthstone Metadata</strong><br>
My Hearthstone Metadata API [http://localhost:3000/Metadata/:type]<br>
Consulted from the endpoint [https://us.api.blizzard.com/hearthstone/metadata/${req.params.type}?locale=en_US&access_token=USfZNBuPjJt45vKlYyeq7uhzARUGJ2QnR6]<br>

|Parameter|Type|Value|Description|
|---------|----|-----|-----------|
|region|String|    |The region of the data to retrieve|
|locale|String|     |The locale to reflect in localized data|
|:type|String|      |The type of the metadata to retrieve.|
<br>
For region the valid values are us,eu,kr,tw,and cn. last one are independent because china have their own server, data and api.<br>
For type, the valid values include sets, setGroups, types, rarities, classes, minionTypes, and keywords.<Br>
For locale we are going to need this particular value in must of the get methods, and the valid values are<br>

<strong>Diablo 3 Act</strong><br>
My Diablo 3 Act API [http://localhost:3000/Diablo/:act/:locale] <br>
Consulted from the endpoint [https://us.api.blizzard.com/d3/data/act/${req.params.act}?locale=${req.params.locale}&access_token=USfZNBuPjJt45vKlYyeq7uhzARUGJ2QnR6]<br>
 Returns a single act by ID.

|Parameter|Type|Value|Description|
|---------|----|-----|-----------|
|region|String|      |The region of the data to retrieve|
|act|int|1,2,3,4,5  |The number of the act you want to extract|
<br>

<strong>Diablo 3 Leaderboard</strong><br>
My Diablo 3 Leaderboard API [http://localhost:3000/Diablo/seasonLB/:season] <br>
Consulted from the endpoint [https://us.api.blizzard.com/data/d3/season/${req.params.season}?access_token=USfZNBuPjJt45vKlYyeq7uhzARUGJ2QnR6]<br>
Returns a the specified leaderboard for the specified season.

|Parameter|Type|Value|Description|
|---------|----|-----|-----------|
|region|String|      |The region of the data to retrieve|
|season|int|1,2,3,4,5,6,7,8,9|The season which you want to extract the leaderboard|
<br>
<strong>Diablo 3 profile consult</strong><br>
My Diablo 3 profile consult API [http://localhost:3000/Diablo/Profile/:name/:number] <br>
Consulted from the endpoint [https://us.api.blizzard.com/d3/profile/${req.params.name}%23${req.params.number}/?locale=en_US&access_token=USfZNBuPjJt45vKlYyeq7uhzARUGJ2QnR6]<br>
Returns the specific account profile.

|Parameter|Type|Value|Description|
|---------|----|-----|-----------|
|region|String||The region of the data to retrieve|
|locale|String|     |The locale to reflect in localized data|
|:name|String|      |The name of the account to search|
|:number|int|      |The number of the account.|
<br>
<strong>Dice Roll</strong><br>
my post expect a JSON file with the following params<br>

 |Name|Type|Value|
 |---------|----|-----|
 |sides|integer|number of sides in the dice|
<br>
  <i>example<br>
 {
     "dice": "20"<br>

  }</i><br>

  <strong>expected output</strong><br>
  <br>
 {
    "dice": "d20",<br>
    "rolls": [<br>
        18<Br>
    ]<Br>
}
  <br>
<strong>Rock,Paper and Scissors</strong><br>

my post expect a JSON file with the following params<br>

 |name|Type|Value|
 |---------|----|-----|
 |player|String|send your move|
 |
  <br>
  <i>example<br>
 {
     "name": "Rock"<br>

  }</i><br>
    <strong>expected output</strong><br>
  {<br>
    "cpu": "rock",<br>
    "player": "rock",<Br>
    "winner": "draw",<Br>
    "move": ""<BR>
}
  <br>
<strong>Dial Code</strong><br>
my post expect a JSON file with the following params<br>

 |name|Type|Value|
 |---------|----|-----|
 |dialcode|String|iso object|
<br>
<i>Example<br>
 {
    "dialcode": "1"<br>
  }
</i><br>
<strong>expected output</strong><br>
{
    "dialcode": "1",<Br>
    "label": "United States"<Br>
}
<br>
<strong>Worms game names request</strong><br>
my post expect a JSON file with the following params<br>

 |name|Type|Value|
 |---------|----|-----|
 |num|integer|number of names u want to recive <100|

<i>Example<br>
   {
    "name":     "5"<br>

}</i><br>

<strong>expected output</strong><br>
{
    "results": [<br>
        "Amazing Sam",<Br>
        "Millie",<Br>
        "Colin!",<Br>
        "Ben",<Br>
        "Huxley"<Br>
    ]
}<br>

<strong>Solve sums</strong><br>
  My post expect a JSON file explaining an error

 |name|Type|Value|
 |---------|----|-----|
 |sum|String|The number must be positive and less than 1000|
 <br>
 <i>example<br>

{
    "num":    "500"</i>

}<br>
<strong>non-expected output</strong><br>
"error":  Your target is not a valid number. The number must be positive and less than 1000."<br>