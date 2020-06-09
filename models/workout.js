const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {type: Date, default: Date.now},
    exercises: [
        {
            type: {type: String, required: true},
            name: {type: String, required: true},
            duration: {type: Number, required: true},
            weight: {type: Number, required: false},
            reps: {type: Number, required: false},
            sets: {type: Number, required: false},
            distance: {type: Number, required: false}
        }
    ]
});

// WorkoutSchema.methods.getTotalDuration = function(data) {
    
//     let durationArr = data[data.length - 1].exercises.map(exercise => exercise.duration);
//     return this.totalDuration = durationArr.reduce(function(a, b) {
//         return a + b;
//     }, 0);
// };

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;