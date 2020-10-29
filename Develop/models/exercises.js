const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
    type: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        unique: true
    },
    distance: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    reps: {
        type: Number,
    },

});

const Exercises = mongoose.model("Exercise", ExercisesSchema);

module.exports = Exercises;