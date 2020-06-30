const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { 
      type: Date, default: Date.now 
    },
  exercises: [
    {
      type: { 
          type: String, required: true 
        },
      name: { 
          type: String, required: true 
        },
      duration: { 
          type: Number, required: true 
        },
      weight: { 
          type: Number, required: false 
        },
      reps: { 
          type: Number, required: false 
        },
      sets: { 
          type: Number, required: false 
        },
      distance: { 
          type: Number, required: false 
        },
    },
  ],

    totalDuration: {
      type: Number,
      default: 0
    }
});

workoutSchema.methods.setTotalDuration = function() {
  let total = 0;
  for (i = 0; i < this.exercises.length; i++) {
    total += this.exercises[i].duration;
  }
  this.totalDuration = total;
  return this.totalDuration;
}

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
