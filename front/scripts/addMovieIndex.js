const solicitud2 = require("./sendMovie");
document.getElementById("btnSubmit").addEventListener("click", sendMovies)

function limpiarFormulario() {
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
      input.value = '';
  });
}


 async function sendMovies() {

  const getData = {
      title: document.getElementById('title').value,
      year: document.getElementById('year').value,
      director: document.getElementById('director').value,
      duration: document.getElementById('duration').value,
      genre: document.getElementById('genre').value,
      rate: document.getElementById('rate').value,
      poster: document.getElementById('poster').value,
      description: document.getElementById('description').value
  };

  await solicitud2(getData);

};

document.getElementById('limpiarBtn').addEventListener('click', function() {
  limpiarFormulario();
});

module.exports = sendMovies;
