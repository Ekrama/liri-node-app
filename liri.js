require("dotenv").config();

var keys = require("./keys.js");
var axios = require('axios');
var fs = require('fs');
var moment = require('moment');
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var parameter= process.argv[3];

switch(command)
{
    case "concert-this":
    sessionStorage();
    //console.log("concert-this");
     break;
    case "spotify-this-song":
        music()
        break;
    case "movie-this":
    movieFinder()
        break;
    case "do-what-it-says":
    hello();
        break;
    default:
    console.log("that's not a valid command");

}

function hello()
{
    fs.readFile('random.txt', "utf8", function (err,data){
        var splitFile = data.split(',');

        var song = splitFile[1];
        parameter = song;
        music();

    }
    )
}

function movieFinder()
{
    if (!parameter)
    {
        parameter = "Mr.Nobody";

    }
    var movie = parameter;
    //console.log(movie);

    var omdbURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy&tomatoes=true";
    axios.get(omdbURL) .then(function (res,err){
        if(res)
        {
            console.log("Title:" +res.data.Title);
            //console.log(res.data);
            console.log("Year:" +res.data.Year);
            console.log("imdbRating:" +res.data.imdbRating);
            console.log("Rotten Tomatoes Rating of the movie:" +res.data.tomatoRating);
            console.log("Country where the movie was produced:" +res.data.Country);
            console.log("Language of the movie:" +res.data.Language);
            console.log("Plot of the movie:" +res.data.Plot);
            console.log("Actors in the movie:" +res.data.Actors);
        }
        else
        {
            console.log(err);
        }
    });
    
}
 function music()
 {
    if (!parameter)
    {
        parameter = "The sign Ace of Base";

    }
    var song =parameter;
    spotify.search({type: "track", query: song, limit: 1}, function(err,data){
        if (!err)
        {
            console.log("artist (s):" +data.tracks.items[0].artists[0].name);
            console.log("song:" +data.tracks.items[0].name);
            console.log("preview URL: " +data.tracks.items[0].preview_url);


            //console.log(dat.tracks.items[0].album.name);
            console.log("Album:" +data.tracks.items[0].album.name);
        }
        
            else
        {
            console.log("Error occored.");
        }
        
    });

 }
function song() 

{
    
    
    console.log(parameter);
    var artist = parameter;
    var bandsInTown = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(bandsInTown).then 
    (
        function (res,err)
        {
            if(res.data)   
            {
            var bandsInTown= res.data[0];
        
            console.log("venue Name:" +bandsInTowninfo.venue.name);
            console.log ("venue location:" +bandsInTowninfo.venue.city);
            console.log("venue Date:" + date);

            var datetime = bandsInTowninfo.datetime;
            var datetimeSplit = bandsInTowninfo.datetime.split
            var date = moment (datetimeSplit[0]) .format ("MM/DD/YYYY")
            console.log(bandsInTowninfo.datetime.split('T'));
            }
            else 
            {
                console.log(err);
            }
        }
       


    );
    }


