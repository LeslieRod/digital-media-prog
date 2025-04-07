const haloFace = document.querySelector('.halo');
const hornsFace = document.querySelector('.horns');

haloFace.addEventListener('click', () => {
  if (haloFace.classList.contains('active')) {
    hornsFace.classList.add('active');
    haloFace.classList.remove('active');
  }
});

hornsFace.addEventListener('click', () => {
  if (hornsFace.classList.contains('active')) {
    haloFace.classList.add('active');
    hornsFace.classList.remove('active');
  }
});
