const panels = document.querySelectorAll('.panel');

// Click Event
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActive();
    panel.classList.add('active');
  });
});

// Remove active class from all
function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
