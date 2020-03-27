
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercises: {
    type: String,
    trim: true,
    duration: String,
    weight: String,
    reps: String,
    sets: String,
    required: "Name of Exercise is Required"
  }
  // difficulty: {
  //   type: String,
  //   trim: true,
  //   default: "easy",
  // },
  // description: {
  //   type: String,
  //   trim: true,
  // }
  });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
