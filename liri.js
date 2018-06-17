

//Requirements
require("dotenv").config();

var keys = require("./keys.js");
var request = require("request");
var Spotify = require('node-spotify-api');
var Twitter = require("twitter");



debugger;
//Global Variables
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var condition = process.argv[2];
var input = process.argv[3];




switch (condition) {
    case "my-tweets":
        tweets();
        break;

    case "spotify-this-song":
        spot();
        break;

    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        what();
        break;

    default: 
        check();
        break;
}


function tweets(){
    client.get('statuses/user_timeline', function(error, tweets, response) {
        if(error) throw error;
        
        
        for (let index = 0; index < tweets.length; index++) {
            console.log(tweets[index].text); 
            
        }
        // The favorites.
        //console.log(response);  // Raw response object.
      });
}

function spot() {
    console.log(spotify);
    console.log(Spotify);
    
}



function movie() {
    //Omdi or movies request
    // We then run the request module on a URL with a JSON
    request("http://www.omdbapi.com/?t="+input+"&y=&plot=short&apikey=trilogy", function (error, response, body) {

        var rating = JSON.parse(body).Ratings[1];
        // If there were no errors and the response code was 200 (i.e. the request was successful)...
        if (!error && response.statusCode === 200) {

            // Then we print out the imdbRating
            console.log(JSON.parse(body).Title);
            console.log(JSON.parse(body).Year);
            console.log(Object.values(rating).join(": "));
            console.log(JSON.parse(body).Country);
            console.log(JSON.parse(body).Language);
            console.log(JSON.parse(body).Plot);
            console.log(JSON.parse(body).Actors);

        }
    });
}

function check() {
    
    console.log("Check your spelling dude!");
}