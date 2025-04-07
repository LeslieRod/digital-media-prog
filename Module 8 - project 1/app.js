const haloFace = document.querySelector('.halo');
const hornsFace = document.querySelector('.horns');

// Add event listener
haloFace.addEventListener('click', () => {
  if (hornsFace.classList.contains('horns')) {
    hornsFace.classList.add('active');
    haloFace.classList.remove('active');
  }
});

hornsFace.addEventListener('click', () => {
  if (haloFace.classList.contains('halo')) {
    haloFace.classList.add('active');
    hornsFace.classList.remove('active');
  }
});
