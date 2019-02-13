require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var userCommand = process.argv[2];
var userInput = process.argv.slice(3).join(" ");


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
  if(!userInput) {
    userInput = "Mr.Nobody";
  }
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
      console.log("========================================");
    }
  })
}

function spotify() {
  if (!userInput) {
    userInput = 'The Sign';
  }
  var spotify = new Spotify(keys.spotify);

  spotify.search({ type: 'track', query: userInput, limit:2 }, function(err, data){
    if(err) {
      console.log(err);
    }
    console.log(data);
    console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
    console.log("Song Name: " + data.tracks.items[0].name);
    console.log("Preview Link: " + data.tracks.items[0].preview_url);
    console.log("Album Name: " + data.tracks.items[0].album.name);
  })
}

function doWhatItSays() {
fs.readFile("./random.txt", "utf8", function(err, data){
  if(err) {
    return console.log(err) 
  }
    var arr = data.split(",");
    userCommand = arr[0];
    userInput = arr[1];
    spotify();
})
}



