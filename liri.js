require("dotenv").config();
var apiKey = require("./keys.js");
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var userCommand = process.argv[2];
var userInput = process.argv.slice(3).join(" ");
var spotify = new Spotify(keys.spotify);

switch (userCommand) {
  case "concert-this":
    concert();
    break;
  case "spotify-this-song":
    spotify();
    break;
  case "movie-this":
    movie();
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
}

function movie() {
  var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

  axios.get(queryUrl).then(function (response) {
    // console.log(response);
    console.log("Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log("Movie Rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
    console.log("Country: " + response.data.Country);
    console.log("Languages: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
  })
}

function concert() {
  var bandsQueryUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"

  axios.get(bandsQueryUrl).then(function(res){
    for (var i = 0; i < res.data.length; i++) {
      console.log("Venue Name: " + res.data[i].venue.name);
      console.log("Venue Location: " + res.data[i].venue.city + ", " + res.data[i].venue.country);
      console.log("Date: " + moment(res.data[i].datetime).format("L"));
    }
  })
}

function spotify() {
  spotify.search({type: "track", query: userInput}, function(err, data){
    if(err) {
      console.log(err);
    }
    console.log(data);
  })
}

function doWhatItSays() {
fs.readFile("./random.txt", "utf8", function(err, data){
  if(err) {
    console.log(err) 
  }
  
})
}



