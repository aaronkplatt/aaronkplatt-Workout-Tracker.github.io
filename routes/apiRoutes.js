const { response } = require("express");
const db = require("../models");

module.exports = function (app) {

// GET LAST WORKOUT FROM THE DATABASE
    app.get("/api/workouts", function (request, response) {
        db.WorkoutPlan.find({})
            .then(function (dbWorkouts) {
                response.json(dbWorkouts);
            })
            .catch(function (error) {
                response.json(error);
            })
    });

// GET ALL WORKOUTS FROM THE DATABASE
    app.get("/api/workouts/range", function (request, response) {
        db.WorkoutPlan.find({})
            .then(function (dbWorkouts) {
                response.json(dbWorkouts);
            })
            .catch(function (error) {
                response.json(error);
            })
    });

// CREATE WORKOUT PLAN WHICH WILL CREATE A BRAND NEW OBJECT IN OUR DATABASE, THIS HAPPENS IF YOU CLICK NEW WORKOUT.
    app.post("/api/workouts", function (request, response) {
        db.WorkoutPlan.create({})
            .then(function (dbWorkouts) {
                response.json(dbWorkouts);
            })
            .catch(function (error) {
                console.log(error);
            });
    });

// UPDATE WORKOUT PLAN WHICH WILL ALLOW YOU TO ADD TO AN EXCISTING WORKOUT. 
    app.put("/api/workouts/:id", function (request, response) {
        db.WorkoutPlan.findByIdAndUpdate(request.params.id, { $push: { exercises: request.body } }, { new: true, runValidators: true })
            .then(dbWorkouts => {
                response.json(dbWorkouts);
            })
            .catch(error => {
                console.log(error);
            });
    });
}
