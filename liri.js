

//Requirements
require("dotenv").config();
var keys = require("keys.js");
var request = require("request");

//Global Variables
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var condition = process.argv[2];

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
        break;
}
//Omdi or movies request
// We then run the request module on a URL with a JSON
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function (error, response, body) {

    // If there were no errors and the response code was 200 (i.e. the request was successful)...
    if (!error && response.statusCode === 200) {

        // Then we print out the imdbRating
        console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    }
});