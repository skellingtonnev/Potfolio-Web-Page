// Grab the button and panel elements
const toggleBtn = document.getElementById('toggleBtn');
const infoPanel = document.getElementById('infoPanel');

// When the button is clicked, toggle the 'visible' class on the panel
toggleBtn.addEventListener('click', () => {
  infoPanel.classList.toggle('visible');
});
