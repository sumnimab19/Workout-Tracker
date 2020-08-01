const router = require("express").Router();

const Workout = require("../models/workout.js");
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'stats.html'));
});


router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .limit(1)
    .then (dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then (dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", ({body}, res) => {
    Workout.create({body})
    .then (dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.updateOne({_id: req.params.id}, {$push: {
        exercise: [
            type = req.body.type,
            name = req.body.name,
            duration = req.body.duration,
            weight = req.body.weight,
            sets = req.body.sets,
            reps = req.body.reps,
            distance = req.body.distance
        ]
    }
})
    .then (dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


module.exports = router;