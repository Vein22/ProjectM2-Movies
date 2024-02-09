// Selecciona el contenedor
 const movieContainer = document.getElementById('movie-container');

 let solicitud = $.get("https://students-api.2.us-1.fl0.io/movies").done((data) => {
  renderCards(data);
});
   
solicitud.fail(function(jqXHR, textStatus, errorThrown) {
  console.error(alert("Error al cargar datos:", textStatus, errorThrown));
});

   const renderCards = (data) => {
    
     // Mapea cada objeto en data a una tarjeta de película
     const movieCards = data.map(movie => {
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
  }
 
