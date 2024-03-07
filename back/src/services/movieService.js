const MovieModel = require("../models/Movie")

class Movies {
    constructor(id, title, year, director, duration, genre, rate, poster, description) {

      if (!title || !poster || !director) {
        throw new Error('Se deben proporcionar las propiedades: "title", "poster" y "director".');
      }

      this.id = id;
      this.title = title;
      this.year = year;
      this.director = director;
      this.duration = duration;
      this.genre = genre;
      this.rate = rate;
      this.poster = poster;
      this.description = description;

    }
  }
  
  const obtenerPeliculas = async () => {
    const peliculasData = await MovieModel.find();
  
    const peliculas = peliculasData.map(peliculaData => {
      return new Movies(
        peliculaData.id,
        peliculaData.title,
        peliculaData.year,
        peliculaData.director,
        peliculaData.duration,
        peliculaData.genre,
        peliculaData.rate,
        peliculaData.poster,
        peliculaData.description
      );
    });
  
    return peliculas;
  }

  
    


module.exports = {
    obtenerPeliculas,
};