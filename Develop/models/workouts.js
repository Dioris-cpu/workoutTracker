
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [{
    type: {
      type: String,
      trim: true
    },
    name: {
      type: String,
      trim: true,
      required: 'exercise must have a name'
    },
    duration: {
      type: Number,
      min: 1,
      max: 200,
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    }
  }]
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
