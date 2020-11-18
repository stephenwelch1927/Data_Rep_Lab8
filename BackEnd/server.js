const express = require('express')
const app = express()
const port = 4000

//constant declared for body-parser
const bodyParser = require("body-parser");

//constant declared for mongoose
const mongoose = require("mongoose");

//Add cors library to enable us to proceeed without a cors error
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//parse application
app.use(bodyParser.urlencoded({ extend: false }))

//Parse application JSON
app.use(bodyParser.json())

//Connection string that connects to mongod database
const strConnection = 'mongodb+srv://admin:bluebirds1927@cluster0.m46dm.mongodb.net/mongoDBLAB?retryWrites=true&w=majority'

//Connects to database in MongoDB
mongoose.connect(strConnection, { useNewUrlParser: true });

//Create a constant for mongoose
const Schema = mongoose.Schema;

//Create a simple movieSchema
const movieSchema = new Schema({
  Title: String,
  Year: String,
  Poster: String
});

//Create a constant to store all movieSchema into a film collection
const movieModel = mongoose.model('film', movieSchema);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Get request to display the JSON movies objects
app.get('/api/movies', (req, res) => {

  //  "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"

  //"Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"

  movieModel.find((err, data) => {
    res.json(data);
  })
})
//App Post that creates all the data 
app.post('/api/movies', (req, res) => {
  movieModel.create({
    Title: req.body.Title,
    Year: req.body.Year,
    Poster: req.body.Poster
  })

  res.send('Item Added');
})
//Post that updates the movies typed in from localHost:3000

//App get that searches for movies
app.get('/api/movies/:id', (req, res) => {
  console.log(req.params.id);

  movieModel.findById(req.params.id, (err, data) => {
    res.json(data);
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
