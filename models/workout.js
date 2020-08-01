const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type:{
            type: String,
            trim: true,
            required: "Enter the type of workout." 
        },

        name: {
            type: String,
            trim: true,
            required: "Enter name of the workout." 
        },

        duration: {
            type: Number,
            required: "Enter the workout duration." 
        },

        weight: {
            type: Number,
            // required: "Enter the weight." 
        },

        sets: {
            type: Number,
            // required: "Enter the number of sets." 
        },

        reps: {
            type: Number,
            // required: "Enter the number of reps." 
        },

        distance: {
            type: Number,
            // required: "Enter the distance." 
        }

    }]
});

const Workout = mongoose.model("Workout",workoutSchema);

module.exports = Workout;