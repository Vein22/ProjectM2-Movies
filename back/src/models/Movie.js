const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    director: String,
    duration: String,
    genre: Array,
    Action: String,
    Adventure: String,
    Comedy: String,
    rate: String,
    poster: String,
    description: String,
})

const MovieModel = mongoose.model("MovieColl#1", movieSchema);

module.exports = MovieModel;