const db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({}).then(function(dbWorkouts) {
            res.json(dbWorkouts);
        });
    });

    app.get("/api/workouts/range", function(req, res) {
        db.Workout.find({}).then(function(dbWorkouts) {
            res.json(dbWorkouts);
        });
    });

    app.put("/api/workouts/:id", function(req, res) {
        console.log(req.body);
        db.Workout.updateOne({ _id: req.params.id }, { body: req.body }).then(function(dbWorkouts) {
            console.log(dbWorkouts);
            res.json(dbWorkouts);
        });
    });

    app.post("/api/workouts", function(req, res) {
        console.log(req.body);
        db.Workout.create(req.body, function(error, data) {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
            
        });
    });
}