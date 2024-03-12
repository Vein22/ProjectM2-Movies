const MovieModel = require("../models/Movie")
const catchAsync = require("../utils/catchAsync")
  
  const getMovie = async () => {
    const movie = await MovieModel.find();
    return movie;
  }

  const createMovie = async(formData) => {
    const movieCreated = await MovieModel.create(formData)
    return movieCreated;
  };


module.exports = {
    getMovie,
    createMovie: catchAsync(createMovie),
};