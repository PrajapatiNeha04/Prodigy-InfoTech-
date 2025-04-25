// Open the fullscreen modal
function openFullscreen(url) {
  const modal = document.getElementById('fullscreen-modal');
  const iframe = document.getElementById('fullscreen-iframe');
  iframe.src = `https://www.figma.com/embed?embed_host=share&url=${url}`;
  modal.style.display = 'flex';
}

// Close the fullscreen modal
function closeFullscreen() {
  const modal = document.getElementById('fullscreen-modal');
  const iframe = document.getElementById('fullscreen-iframe');
  iframe.src = ''; // Stop the Figma file when closing
  modal.style.display = 'none';
}
