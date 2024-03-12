const { Router } = require("express");
const  {movieController, addMovie} = require("../controllers/movieController")
const validateData = require("../middleware/middleware");


const moviesRouter = Router();

moviesRouter.get("/", movieController);
moviesRouter.post("/", validateData, addMovie);

module.exports = moviesRouter;