// Efecto de la pestaña about
const movingBox = document.getElementById('moving-box');

const sensitivity = 0.02;

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX * sensitivity;
  const mouseY = event.clientY * sensitivity;

  // Actualiza la posición del cuadro al lugar del ratón
  movingBox.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});
