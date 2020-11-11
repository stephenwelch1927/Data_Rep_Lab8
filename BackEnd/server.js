const express = require('express')
const app = express()
const port = 4000
//constant declared for body-parser
const bodyParser = require("body-parser");

//Add cors library to enable us to proceeed without a cors error
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

//parse application
app.use(bodyParser.urlencoded({ extend: false}))

//Parse application JSON
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Get request to display the JSON movies objects
app.get('/api/movies', (req, res)=>{
    const mymovies = [
        {
            "Title":"Avengers: Infinity War",
            "Year":"2018",
            "imdbID":"tt4154756",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title":"Captain America: Civil War",
            "Year":"2016",
            "imdbID":"tt3498820",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            }

            
    ];

    res.status(200).json({
        
        movies:mymovies});
})
app.get('/api/movies', (req, res)=>{

})
//Post that updates the movies typed in from localHost:3000
app.post('/api/movies', (req, res)=>{
    console.log('Movie Received!');
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})