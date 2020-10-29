const { response } = require("express");
const db = require("../models");

module.exports = function (app) {

// GET LAST WORKOUT
    app.get("/api/workouts", function (request, response) {
        db.WorkoutPlan.find({})
            .then(function (dbWorkouts) {
                response.json(dbWorkouts);
            })
            .catch(function (error) {
                response.json(error);
            })
    });

// GET ALL WORKOUTS
    app.get("/api/workouts/range", function (request, response) {        db.WorkoutPlan.find({})
            .then(function (dbWorkouts) {
                response.json(dbWorkouts);
            })
            .catch(function (error) {
                response.json(error);
            })
    });

// CREATE WORKOUT PLAN
    app.post("/api/workouts", function (request, response) {
        db.WorkoutPlan.create({})
            .then(function (dbWorkout) {
                response.json(dbWorkout);
            })
            .catch(function (error) {
                console.log(error);
            });
    });

// UPDATE WORKOUT PLAN
    app.put("/api/workouts/:id", function (request, response) {
        db.WorkoutPlan.findByIdAndUpdate(
            request.params.id,
            { $push: { exercises: request.body } },
            { new: true, runValidators: true })
            .then(dbWorkout => {
                response.json(dbWorkout);
            })
            .catch(error => {
                console.log(error);
            });
    });

}
