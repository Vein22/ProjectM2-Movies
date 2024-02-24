const { Router } = require("express");
const  {movieController}   = require("../controllers/movieController")

const moviesRouter = Router();

moviesRouter.get("/", movieController);

module.exports = moviesRouter;