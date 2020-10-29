const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutPlanSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
        unique: true
    },
    exercises: [
        {
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

        }
    ]
});

const WorkoutPlan = mongoose.model("WorkoutPlan", WorkoutPlanSchema);

module.exports = WorkoutPlan;