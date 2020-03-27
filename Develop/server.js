// require node modules

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const mongoose = require("mongoose")
//  const seed = require('./seeders/seed');
// fix workout.js file to match seeder file.
// update get api/workouts route. 
// have a post api/workouts route.  






app.use(morgan("dev"));
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
 //

app.get('/api/workouts', function (req, res) {
  mongoose.Workout
  res.send(res.params)
})

app.get('/api/workouts/range', function (req, res) {
  res.send(req.params)
})

app.put('/api/workouts/:id', function (req, res) {
  res.send(req.body)
})




// file path for html docs.
app.get('/exercise', function (req, res) {
  res.sendFile(__dirname + '/public/exercise.html')
})

app.get('/stats', function (req, res) {
  res.sendFile(__dirname + '/public/stats.html')
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  

