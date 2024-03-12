const { getMovie, createMovie }  = require("../services/movieService")
const catchAsync = require("../utils/catchAsync")


const movieController = async (req, res) => {
   const movies = await getMovie();
   res.status(200).json(movies);
}  

const addMovie = catchAsync(async (req, res) => {
   const { title, year, director, duration, genre, rate, poster, description } = req.body; 
   const result = await createMovie({title, year, director, duration, genre, rate, poster, description});
   res.status(201).json({ message: "Movie created successfully." });
}); 


module.exports = {
   movieController: catchAsync(movieController),
   addMovie,
};