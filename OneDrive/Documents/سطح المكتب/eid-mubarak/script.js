document.addEventListener('DOMContentLoaded', () => {
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');
  const sectionAnass = document.getElementById('anass');
  const sectionEssadikine = document.getElementById('essadikine');

  left.addEventListener('click', () => {
      sectionSatu.classList.remove('hidden');
      sectionAnass.classList.add('hidden');
      left.classList.add('active');
      right.classList.remove('active');
  });

  right.addEventListener('click', () => {
      sectionAnass.classList.add('hidden');
      sectionEssadikine.classList.remove('hidden');
      left.classList.remove('active');
      right.classList.add('active');
  });

  const footer = document.getElementById("credit");
  footer.innerHTML = "Anass Essadikine";
  footer.href = "https://www.linkedin.com/in/anass-essadikine/";
});
