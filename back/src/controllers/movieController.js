const { obtenerPeliculas }  = require("../services/movieService")

const movieController = async (req, res) => {
   const movies = await obtenerPeliculas();

   res.status(200).json(movies);
}


module.exports = {
   movieController,
};