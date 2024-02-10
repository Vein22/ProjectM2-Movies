let solicitud = $.get("https://students-api.2.us-1.fl0.io/movies").done((data) => {
   renderCards(data);
  });
  

  solicitud.fail(function(jqXHR, textStatus, errorThrown) {
    console.error(alert("Error al cargar datos, cargando datos de respaldo", textStatus, errorThrown));
    renderCardsBackup()
  });
  
  const renderCards = require("./renderCards")
  const renderCardsBackup = require("./renderCardsBackup.js")
 
