// Selecciona el contenedor
const movieContainer = document.getElementById('movie-container');

    document.addEventListener('DOMContentLoaded', function () {

  const tempData = window.tempData;
    
    // Mapea cada objeto en data a una tarjeta de película
    const movieCards = tempData.map(movie => {
      const card = document.createElement('div');
      card.classList.add('movie-card');
      
      const title = document.createElement('h2');
      title.textContent = movie.title;
      
      const poster = document.createElement('img');
      poster.classList.add('movie-poster');
      poster.src = movie.poster;
      poster.alt = movie.title;
      
      const year = document.createElement('p');
      year.textContent = `Year: ${movie.year}`;
       
      const director = document.createElement('p');
      director.textContent = `Director: ${movie.director}`;
      
      const duration = document.createElement('p');
      duration.textContent = `Duration: ${movie.duration}`;
      
      const genre = document.createElement('p');
      genre.textContent = `Genre: ${movie.genre.join(", ")}`;
      
      const rate = document.createElement('p');
      rate.textContent = `Rate: ${movie.rate}`;
      
      // Agrega los elementos al contenedor de la tarjeta
      card.appendChild(title);
      card.appendChild(poster);
      card.appendChild(year);
      card.appendChild(director);
      card.appendChild(duration);
      card.appendChild(genre);
      card.appendChild(rate);
      
      return card;
    });
    
     // Agrega las tarjetas al contenedor principal
     movieCards.forEach(card => movieContainer.appendChild(card));    
    })
     
     module.export = renderCardsBackup;